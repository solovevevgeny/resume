#!/bin/bash

echo "Remove stopped containers"

docker container prune -f


echo "Remove unused images"

docker image prune -a -f


echo "Remove volumes"

docker volume prune -f


echo "Cleanup completed"