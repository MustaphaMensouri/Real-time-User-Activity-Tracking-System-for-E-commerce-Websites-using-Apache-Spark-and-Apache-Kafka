#!/bin/bash

# Define the name for your Docker image
IMAGE_NAME="spark_mest_souf"

# Check if the Docker image already exists
if docker images "$IMAGE_NAME" | grep -q "$IMAGE_NAME"; then
    echo "Docker image $IMAGE_NAME already exists, skipping build"
else
    # Change to the directory containing the infrastructure setup
    cd ../infrastruction/

    # Build Docker image
    docker build -t "$IMAGE_NAME" .

    # Check if the build was successful
    if [ $? -ne 0 ]; then
        echo "Error: Docker build failed"
        exit 1
    fi
fi

# Change to the directory containing the infrastructure setup
cd ../infrastruction/

# Start Docker containers
docker-compose up -d
# Change to the directory containing the frontend code
cd ../frontend/

# Run npm start in the foreground and log output to a file
npm start > npm_start.log 2>&1

# Check the exit status of npm start
if [ $? -ne 0 ]; then
    echo "Error: npm start failed"
    exit 1
fi

# Change to the directory containing the backend code
cd ../backend/
pwd
# Activate the virtual environment
source venv/bin/activate

# Run Python tests
python test.py

# Run Python socket server
python socket123.py

