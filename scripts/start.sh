#!/bin/bash

# 환경 변수 로드
set -o allexport
source /home/ubuntu/freebe-frontend/.env
set +o allexport

# 경로 및 파일 설정
ROOT_PATH="/home/ubuntu/freebe-frontend"
LOG_FILE="$ROOT_PATH/start.log"
NOW=$(date "+%Y %b %d %a %H:%M:%S")

echo "--------------------------------------------------" | tee -a $LOG_FILE

cd $ROOT_PATH

echo "[$NOW] npm install start" | tee -a $LOG_FILE
npm install

echo "[$NOW] npm run build start" | tee -a $LOG_FILE
npm run build

# 로그 기록 시작
{
    echo "[$NOW] start pm2 process"
    pm2 start ecosystem_3000.config.js

    echo "[$NOW] Deployment completed."
} >> "$LOG_FILE" 2>&1
