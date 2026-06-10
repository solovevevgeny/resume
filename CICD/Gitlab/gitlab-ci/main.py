from fastapi import FastAPI, Request
import os

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Hello World"}

@app.get('/hostname')
def return_hostname(request: Request):
    return {
        "hostname": request.url.hostname,
        "server_hostname": os.uname().nodename
        }
