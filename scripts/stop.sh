#!/bin/bash

# PM2 프로세스 이름 (또는 ID)
APP_NAME="freebe3000"

# 로그 파일 경로
LOG_FILE="delete.log"

cd /home/ubuntu/freebe-fronted

# 현재 PM2 프로세스를 찾고 삭제
if pm2 pid "$APP_NAME"; then
    echo "Stopping existing PM2 process for $APP_NAME..." | tee -a $LOG_FILE
    pm2 delete "$APP_NAME" >> $LOG_FILE 2>&1
else
    echo "No existing PM2 process found for $APP_NAME." | tee -a $LOG_FILE
fi
