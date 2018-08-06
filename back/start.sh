#!/usr/bin/env bash
! docker network create -d bridge callisto > /dev/null 2>&1
case "$(uname -s)" in

   Darwin)
     export DOCKER_IP=`docker-machine ip dinghy`
     ;;

   Linux)
     export DOCKER_IP='localhost'
     ;;
   *)
     export DOCKER_IP='localhost'
     ;;
esac
export CALLISTO_FOLDER=`pwd`
make start-dev
