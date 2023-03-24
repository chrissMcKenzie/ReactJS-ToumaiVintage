#!/bin/bash
docker-compose stop
docker-compose build
sleep 25
docker-compose up -d