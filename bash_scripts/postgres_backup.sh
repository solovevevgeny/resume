#!/bin/bash

DATE=$(date +%F)
BACKUP_DIR="/backup/postgres"

DB_NAME="app"
DB_USER="postgres"

mkdir -p $BACKUP_DIR


pg_dump \
    -U $DB_USER \
    $DB_NAME \
    > $BACKUP_DIR/${DB_NAME}_${DATE}.sql


# удаление старых бэкапов
find $BACKUP_DIR \
-name "*.sql" \
-mtime +7 \
-delete


echo "Backup completed"