from fastapi import APIRouter
from app.services.dashboard_service import (
    load_dashboard,
    clear_dashboard,
)
from app.services.dashboard_service import load_dashboard

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/")
def dashboard():

    return load_dashboard()

@router.delete("/clear")
def clear():

    return clear_dashboard()