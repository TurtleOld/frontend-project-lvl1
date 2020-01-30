install:
	npm install
start:
	npx babel-node src/bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
build:
	rm -Rfv dist/
	npm run build