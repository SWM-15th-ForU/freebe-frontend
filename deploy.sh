#!/usr/bin/env bash

REPOSITORY=/home/ubuntu/freebe-frontend

cd $REPOSITORY

sudo yarn install # 의존성 파일 설치.

sudo pm2 start ecosystem.config.js # 프로젝트에서 변경된 내용을 반영하기 위해 pm2를 reload.
