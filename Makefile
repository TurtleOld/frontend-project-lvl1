install:
	npm install
start:
	npx babel-node src/bin/brain-games.js
publ:
	npm publish --dry-run
lint:
	npx eslint
