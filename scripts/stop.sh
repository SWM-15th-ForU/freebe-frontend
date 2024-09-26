#!/bin/bash

# PM2 프로세스 이름 (또는 ID)
APP_NAME="freebe3000"
NOW=$(date "+%Y %b %d %a %H:%M:%S")
# 로그 파일 경로
LOG_FILE="/home/ubuntu/freebe-frontend/delete.log"

cd /home/ubuntu/freebe-frontend

echo "--------------------------------------------------" >> $LOG_FILE

SERVICE_PID=$(pm2 pid $APP_NAME)
# 현재 PM2 프로세스를 찾고 삭제
if [ -z "$SERVICE_PID" ]; then
    echo "[$NOW] No existing PM2 process found for $APP_NAME." | tee -a $LOG_FILE
else
    echo "[$NOW] 기존에 존재하는 pm2 프로세스 중단 시도" >> $LOG_FILE
    echo "[$NOW] Stopping existing PM2 process for $APP_NAME..." | tee -a $LOG_FILE
    pm2 delete "$APP_NAME" >> $LOG_FILE 2>&1
    echo "[$NOW] 기존에 존재하는 pm2 프로세스 중단 성공" >> $LOG_FILE
fi

