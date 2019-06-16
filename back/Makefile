build-docker-dev:
	cp requirements/dev.txt docker/dev/dev.txt
	cp requirements/base.txt docker/dev/base.txt
	cd docker/dev/ && docker build -t "callisto/callisto-website" .
	rm -rf docker/dev/dev.txt
	rm -rf docker/dev/base.txt

start-dev:
	cd docker/dev/ && docker-compose up -d

stop-dev:
	cd docker/dev/ && docker-compose stop

ssh-dev:
	ssh -p 2000 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no root@$(DOCKER_IP)


build-docker-stg:
	cp requirements/base.txt docker/prod/base.txt
	cp requirements/production.txt docker/prod/production.txt
	cd docker/prod/ && docker build -t "callisto/callisto-website-stg" .
	rm -rf docker/prod/requirements/production.txt

start-stg:
	cd docker/stg/ && docker-compose up -d

stop-stg:
	cd docker/stg/ && docker-compose stop


build-docker-prod:
	cp requirements/base.txt docker/prod/base.txt
	cp requirements/production.txt docker/prod/production.txt
	cd docker/prod/ && docker build -t "callisto/callisto-website-prod" .
	rm -rf docker/prod/requirements/production.txt

start-prod:
	cd docker/prod/ && docker-compose up -d

stop-prod:
	cd docker/prod/ && docker-compose stop
