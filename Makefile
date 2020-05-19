start: dependency link

dependency:
	npm ci

lint:
	npx eslint .

asciinema:
	asciinema rec

publish:
	npm publish --dry-run

link:
	npm link

container_start: container_build container_bash

container_build:
	docker-compose build

container_bash:
	docker-compose run --rm brain-games

