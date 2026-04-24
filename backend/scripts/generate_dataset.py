import pandas as pd
import numpy as np
import random

rows = 4000
data = []

# ---------- FACTORS ----------

def age_factor(age):
    if age <= 25:
        return 1.3
    elif age <= 35:
        return 1.1
    elif age <= 50:
        return 0.9
    else:
        return 0.7

def city_multiplier(city):
    return {1: 0.8, 2: 1.0, 3: 1.5}[city]

def profession_weight(p):
    return {
        0: 0.2,   # unemployed
        1: 0.3,   # student
        2: 1.0,   # private
        3: 1.6,   # govt (higher)
        4: 1.4    # business
    }[p]

# ---------- GENERATION ----------

for _ in range(rows):

    age = random.randint(21, 55)
    gender = random.randint(0, 2)
    marital_status = random.randint(0, 2)
    education = random.randint(0, 4)
    profession = random.randint(0, 4)

    # income logic
    if profession in [0, 1]:
        income = random.randint(5000, 20000)
    elif profession == 2:
        income = random.randint(20000, 120000)
    elif profession == 3:
        income = random.randint(30000, 150000)
    else:
        income = random.randint(30000, 200000)

    experience = max(0, age - random.randint(20, 25))

    # properties
    residential = random.randint(0, 3)
    commercial = random.randint(0, 2)
    industrial = random.randint(0, 1)

    total_properties = residential + commercial + industrial

    property_score = (
        residential * 1 +
        commercial * 2.5 +
        industrial * 4
    )

    # land
    land_sqft = random.randint(0, 5000)
    if random.random() < 0.3:
        acres = random.uniform(0, 5)
        land_sqft += acres * 43560

    # vehicle
    vehicle_score = random.randint(0, 3)

    # city
    city = random.randint(1, 3)

    # marriage type
    marriage_type = random.randint(0, 2)

    # ---------- CALCULATION ----------

    base = income * profession_weight(profession)

    dowry = (
        base * age_factor(age)
        + property_score * 250000
        + land_sqft * 12
        + vehicle_score * 120000
    )

    dowry *= city_multiplier(city)

    # marriage adjustment
    if marriage_type == 1:
        dowry *= 0.9
    elif marriage_type == 2:
        dowry *= 0.8

    # jewellery (25–40%)
    jewellery = dowry * random.uniform(0.25, 0.4)

    # vehicle demand
    if dowry > 2500000:
        vehicle_demand = 2
    elif dowry > 1000000:
        vehicle_demand = 1
    else:
        vehicle_demand = 0

    # demand score
    demand_score = min(100, int(dowry / 50000))

    data.append([
        age, gender, marital_status, education,
        profession, income, experience,
        total_properties, residential, commercial, industrial,
        int(land_sqft),
        vehicle_score,
        city,
        marriage_type,
        int(dowry),
        int(jewellery),
        vehicle_demand,
        demand_score
    ])

columns = [
    "age","gender","marital_status","education_level",
    "profession_type","income","experience",
    "total_properties","residential_properties",
    "commercial_properties","industrial_properties",
    "land_area_sqft",
    "vehicle_score",
    "city_tier",
    "marriage_type",
    "dowry_amount","jewellery_amount",
    "vehicle_demand","demand_score"
]

df = pd.DataFrame(data, columns=columns)

df.to_csv("../data/dowry_dataset.csv", index=False)

print("✅ Dataset generated successfully!")