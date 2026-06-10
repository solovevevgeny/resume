from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_read_main():
    # Send a GET request
    response = client.get("/")
    # Standard pytest assertions
    assert response.status_code == 200
    assert response.json() == {"message": "Hello World"}