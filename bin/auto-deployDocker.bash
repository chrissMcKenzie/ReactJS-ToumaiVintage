#!/bin/bash
docker-compose stop
docker-compose build
sleep 30
docker-compose up -d