from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
import pickle
import numpy as np
import smtplib
from email.mime.text import MIMEText
import os

app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------- MODEL LOADING (FIXED) --------------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

model_path = os.path.join(BASE_DIR, "..", "models", "dowry_model.pkl")

try:
    model = pickle.load(open(model_path, "rb"))
    print("✅ Model loaded successfully")
except Exception as e:
    print(f"❌ Error loading model: {e}")
    model = None

# -------------------- ROUTES --------------------

@app.get("/")
def home():
    return {"message": "Dowry Labs API is running 🚀"}


@app.post("/predict")
def predict(data: dict):
    try:
        if model is None:
            return {"error": "Model not loaded"}

        features = np.array([[
            data["age"],
            data["gender"],
            data["marital_status"],
            data["education_level"],
            data["profession_type"],
            data["income"],
            data["experience"],
            data["total_properties"],
            data["residential_properties"],
            data["commercial_properties"],
            data["industrial_properties"],
            data["land_area_sqft"],
            data["vehicle_score"],
            data["city_tier"],
            data["marriage_type"]
        ]])

        prediction = model.predict(features)[0]

        # Derived outputs
        jewellery = prediction * 0.3

        if prediction > 2500000:
            vehicle = 2
        elif prediction > 1000000:
            vehicle = 1
        else:
            vehicle = 0

        demand_score = min(100, int(prediction / 50000))

        return {
            "dowry_amount": int(prediction),
            "jewellery_amount": int(jewellery),
            "vehicle_demand": vehicle,
            "demand_score": demand_score
        }

    except Exception as e:
        return {"error": str(e)}


@app.post("/feedback")
def submit_feedback(data: dict):
    try:
        sender_email = "anshulbhaisare50@gmail.com"
        receiver_email = "shettu2.0dyp@gmail.com"

        # ✅ SAFE: use environment variable
        app_password = os.getenv("EMAIL_PASSWORD")

        feedback_type = data.get("type", "General")
        comment = data.get("comment", "No comment")
        mode = data.get("mode", "unknown")

        body = f"""
New Feedback Received from Dowry Labs

Mode: {mode}
Type: {feedback_type}
Comment: {comment}
"""

        msg = MIMEText(body)
        msg['Subject'] = f"Dowry Labs Feedback - {feedback_type}"
        msg['From'] = sender_email
        msg['To'] = receiver_email

        # If no password set → log only
        if not app_password:
            print("--- FEEDBACK (NO EMAIL CONFIGURED) ---")
            print(body)
            return {
                "status": "success",
                "message": "Feedback logged (email not configured)"
            }

        # Send email
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(sender_email, app_password)
            server.send_message(msg)

        return {
            "status": "success",
            "message": "Email sent successfully!"
        }

    except Exception as e:
        print(f"SMTP Error: {str(e)}")
        return {"error": str(e)}