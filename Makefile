brain-games:
	node din/brain-games.js

publish:
	npm publish --dry-run

container_build:
	docker build -t hexlet:brain-games . || true

container_bash:
	docker run -it --rm --name brain-games -v $CURDIR:/usr/src/app hexlet:brain-games /bin/bash
