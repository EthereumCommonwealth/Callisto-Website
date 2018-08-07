# Callisto Network WebSite Admin

## Instalation instructions:

### Docker
#### First build docker image

run `make build-docker-dev`

### Start containers

`source start.sh`

### Enter to the container

`make ssh-dev`

### Start Django server

Go to back folder

`cd back`

Run

`./manage.py runserver 0.0.0.0:8000 --settings=callisto.settings.dev`
