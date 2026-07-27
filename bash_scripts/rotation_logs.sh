#!/bin/bash

set -euo pipefail


# Настройки
LOG_FILE="/opt/app/log/app.log"
LOG_DIR="/opt/app/log"
ARCHIVE_DIR="/opt/app/log/archive"

DATE=$(date +"%Y-%m-%d_%H-%M-%S")

RETENTION_DAYS=7


# Проверка существования лога
if [ ! -f "$LOG_FILE" ]; then
    echo "Log file not found: $LOG_FILE"
    exit 1
fi


# Создаем каталог архива
mkdir -p "$ARCHIVE_DIR"


echo "Starting log rotation..."


# Размер файла
SIZE=$(du -h "$LOG_FILE" | awk '{print $1}')

echo "Current log size: $SIZE"


# Архивируем лог
BACKUP_FILE="$ARCHIVE_DIR/app-$DATE.log"


mv "$LOG_FILE" "$BACKUP_FILE"


# Создаем новый пустой лог
touch "$LOG_FILE"


# Права файла
chmod 640 "$LOG_FILE"


# Сжимаем архив

gzip "$BACKUP_FILE"


echo "Created: ${BACKUP_FILE}.gz"


# Удаляем старые архивы

find "$ARCHIVE_DIR" \
-name "*.gz" \
-type f \
-mtime +$RETENTION_DAYS \
-delete


echo "Old logs removed"


echo "Rotation completed"