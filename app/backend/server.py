from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId
from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from pydantic import BaseModel

# Load env
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# App
app = FastAPI()
api_router = APIRouter(prefix="/api")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

import os
MONGO_URL = os.getenv("MONGO_URL")

client = AsyncIOMotorClient(MONGO_URL)
db = client["microexplore"]
faq_collection = db["faqs"]

# ---------- HOME ----------
@app.get("/")
async def home():
    return {"message": "Backend is working"}

# ---------- FAQ FEATURE ----------



# MODEL
class FAQ(BaseModel):
    question: str
    answer: str = ""
    userId: str

# ADD QUESTION
@api_router.post("/faq")
async def add_faq(faq: FAQ):
    await faq_collection.insert_one({
        "question": faq.question,
        "answer": faq.answer,
        "userId": faq.userId
    })
    return {"message": "Question added successfully"}

# GET QUESTIONS
@api_router.get("/faq")
async def get_faqs():
    faqs = []
    async for faq in faq_collection.find():
        faq["_id"] = str(faq["_id"])
        faqs.append(faq)
    return faqs

# Include router

from bson import ObjectId

@api_router.put("/faq/{id}")
async def update_faq(id: str, data: dict):
    await faq_collection.update_one(
        {"_id": ObjectId(id)},
        {"$set": {"answer": data["answer"]}}
    )
    return {"message": "updated"}


# DELETE API (OUTSIDE, SAME LEVEL)
@api_router.delete("/faq/{id}")
async def delete_faq(id: str):
    await faq_collection.delete_one({"_id": ObjectId(id)})
    return {"message": "deleted"}

app.include_router(api_router)



