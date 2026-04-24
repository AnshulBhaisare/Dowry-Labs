from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
import pickle
import numpy as np

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model
model = pickle.load(open("../models/dowry_model.pkl", "rb"))

@app.get("/")
def home():
    return {"message": "Dowry Labs API is running 🚀"}

@app.post("/predict")
def predict(data: dict):
    try:
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