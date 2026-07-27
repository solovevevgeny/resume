#!/bin/bash


LIMIT=80


USAGE=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')


if [ $USAGE -gt $LIMIT ]
then

echo "WARNING: disk usage ${USAGE}%"

else

echo "Disk OK ${USAGE}%"

fi