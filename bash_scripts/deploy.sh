#!/bin/bash

set -e

APP_DIR="/opt/app"

cd $APP_DIR


echo "Pull code"

git pull


echo "Build image"

docker build \
-t app:latest .


echo "Restart container"

docker stop app || true
docker rm app || true


docker run -d \
--name app \
-p 8080:8080 \
app:latest


echo "Deploy finished"