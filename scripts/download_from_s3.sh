#!/bin/bash

# 필요한 경우 AWS CLI가 설치되어 있는지 확인
if ! [ -x "$(command -v aws)" ]; then
  echo 'Error: aws-cli is not installed.' >&2
  exit 1
fi

# S3에서 zip 파일 다운로드
aws s3 cp s3://$AWS_S3_BUCKET/deploy.zip /home/ubuntu/myapp/deploy.zip
