#!/bin/bash

# 환경 변수 로드
set -o allexport
source /home/ubuntu/freebe-frontend/.env
set +o allexport

# 경로 및 파일 설정
ROOT_PATH="/home/ubuntu/freebe-frontend"

# 애플리케이션 실행
sudo pm2 start ecosystem.3000.config.js
