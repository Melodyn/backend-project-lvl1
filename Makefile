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
	docker build -t hexlet:brain-games . || true

container_bash:
	docker run -it --rm --name brain-games -v $(CURDIR):/usr/src/app hexlet:brain-games /bin/bash

