#!/usr/bin/env bash

REPOSITORY=/home/ubuntu/deploy

cd $REPOSITORY

yarn install --frozen-lockfile

yarn deploy
