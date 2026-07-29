import requests

TOKEN="12092861"
CHAT_ID="98182"

message="Server DOWN"

requests.post(
    f"https://api.telegram.org/bot{TOKEN}/sendMessage",
    json={
        "chat_id":CHAT_ID,
        "text":message
    }
)