#!/usr/bin/env bash
! docker network create -d bridge callisto > /dev/null 2>&1
case "$(uname -s)" in

   Darwin)
    if [[ $DOCKER_WITHOUT_DINGHY ]]; then
      export DOCKER_IP="localhost"
    else
      export DOCKER_IP="$(dinghy ip)"
    fi
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
