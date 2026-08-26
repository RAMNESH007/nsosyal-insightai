from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="NSosyal InsightAI - AI Service")

# Allow CORS for local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ExplainRequest(BaseModel):
    user_id: str
    content_id: str

@app.get("/")
def read_root():
    return {"status": "ok", "service": "nsosyal-insightai-ai-service"}

@app.post("/api/explain")
def generate_explanation(req: ExplainRequest):
    # Mock explanation generation based on architecture diagram
    return {
        "factors": {
            "topic_match": 0.42,
            "freshness": 0.28,
            "social_proximity": 0.15,
            "quality_safety": 0.15
        },
        "reason": "You are seeing this because you interact with similar content, it is recent, from creators you follow and has high quality."
    }

@app.post("/api/creator-score")
def calculate_creator_score():
    return {
        "score": 81,
        "breakdown": {
            "audience_quality": 86,
            "engagement_quality": 78,
            "content_quality": 91,
            "brand_fit": 75
        }
    }

@app.post("/api/pacing")
def get_pacing_status():
    return {
        "current_mode": "balanced",
        "breakdown": {
            "calm": 30,
            "balanced": 50,
            "intense": 20
        },
        "feedback": "Your feed is currently well-balanced."
    }

@app.post("/api/crisis")
def check_crisis_mode():
    return {
        "is_active": True,
        "current_topic": "Forest Fires",
        "verified_sources": ["AFAD", "TRT Haber"],
        "filtered_content_count": 142
    }

