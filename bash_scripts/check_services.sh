#!/bin/bash

SERVICE="nginx"


if systemctl is-active --quiet $SERVICE
then
    echo "$SERVICE running"
else
    echo "$SERVICE stopped"

    systemctl restart $SERVICE

    echo "$SERVICE restarted"
fi