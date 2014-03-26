
build: components index.js switch.css
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

gh-pages: components
	@component build
	@rm -fr gh-pages
	@mkdir gh-pages
	@mv build gh-pages/
	@cp example.html gh-pages/index.html
	@ghp-import gh-pages -n
	@rm -fr gh-pages

test: build
	@mocha-browser test/index.html

.PHONY: clean test build
