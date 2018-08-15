#!/usr/bin/env bash
! docker network create -d bridge callisto > /dev/null 2>&1

export DOCKER_IP='localhost'
export CALLISTO_FOLDER=`pwd`
make start-prod
