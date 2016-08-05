# Brunch with Elm, Jade, and Stylus

This is an HTML5 application, built with [Brunch](http://brunch.io). This recipe uses Elm for components, Jade for templating, and Stylus for styling.

## Getting started
* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Brunch plugins and app dependencies: `npm install`
* Run:
    * `brunch watch --server` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `brunch build --production` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in the `app/` dir.
		* Place Elm code in the `app/elm` dir.
		* Place Jade templates in the `app/templates` dir.
		* Place Styles templates in the `app/styl` dir.
		* Place custom javascript in the `app/javascripts` dir.
	* Place 3rd party javascript libraries in the `vendor` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)
