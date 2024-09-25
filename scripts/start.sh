#!/bin/bash

# 환경 변수 로드
set -o allexport
source /home/ubuntu/freebe-frontend/.env
set +o allexport

# 경로 및 파일 설정
ROOT_PATH="/home/ubuntu/freebe-frontend"

LOG_FILE="$ROOT_PATH/start.log"

cd $ROOT_PATH

npm install
npm run build

# 로그 기록 시작
{
    echo "Starting deployment..."
    echo "Loading environment variables..."
    
    # 애플리케이션 실행
    echo "Starting PM2 process..."
    pm2 start ecosystem_3000.config.js

    echo "Deployment completed."
} >> "$LOG_FILE" 2>&1
