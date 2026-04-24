import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
import pickle

# Load dataset
df = pd.read_csv("../data/dowry_dataset.csv")

# -------- FEATURES --------
X = df[[
    "age",
    "gender",
    "marital_status",
    "education_level",
    "profession_type",
    "income",
    "experience",
    "total_properties",
    "residential_properties",
    "commercial_properties",
    "industrial_properties",
    "land_area_sqft",
    "vehicle_score",
    "city_tier",
    "marriage_type"
]]

# -------- TARGETS --------
y_dowry = df["dowry_amount"]
y_jewellery = df["jewellery_amount"]
y_vehicle = df["vehicle_demand"]
y_score = df["demand_score"]

# -------- SPLIT --------
X_train, X_test, y_train, y_test = train_test_split(
    X, y_dowry, test_size=0.2, random_state=42
)

# -------- MODEL --------
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# -------- SAVE MODEL --------
with open("../models/dowry_model.pkl", "wb") as f:
    pickle.dump(model, f)

print("✅ Model trained and saved!")


sample = X.iloc[0].values.reshape(1, -1)
pred = model.predict(sample)
print("Sample Prediction:", pred)