from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class EventRecommendation(BaseModel):
    event_id: str
    score: float
    reason: str

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.post("/recommendations/home", response_model=List[EventRecommendation])
def get_home_recommendations(city: str, interests: List[str]):
    # Phase 1: Mock Logic
    # In real life: Query DB or Vector DB here
    
    mock_recs = [
        {
            "event_id": "evt-123", 
            "score": 0.95, 
            "reason": f"Popular in {city}"
        },
        {
            "event_id": "evt-456", 
            "score": 0.88, 
            "reason": "Matches your interest in Music"
        }
    ]
    return mock_recs
