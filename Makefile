start:
	npm ci

brain-games:
	./bin/brain-games.js

lint:
	npx eslint .

asciinema:
	asciinema rec

publish:
	npm publish --dry-run

link:
	npm link

container_build:
	docker-compose build

container_bash:
	docker-compose run --rm brain-games

