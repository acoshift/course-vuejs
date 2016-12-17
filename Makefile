dev:
	node build/dev-server.js

build-production: clean
	node build/build.js

build-staging: clean
	node build/build-staging.js

clean:
	rm -rf dist

use-production:
	firebase use default

use-staging:
	firebase use staging

deploy:
	firebase deploy

production: build-production use-production deploy

staging: build-staging use-staging deploy

docker: build-production
	docker build -t twitty .
