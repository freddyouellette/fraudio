# fraudio
jQuery Audio Player - simple styling and simple to use

![fraudio player](https://raw.githubusercontent.com/freddyouellette/fraudio/master/fraudio.png)

## Installation (npm)
* `npm i fraudio`

## Installation (git)
* `git clone https://github.com/freddyouellette/fraudio`

## Usage
1. Include `jquery`, `fraudio.js` and `fraudio.css` on your page
2. Use the `fraudio` class and the `data-title` & `data-artist` attributes on an `audio` element:
```
<audio class="fraudio" 
	src="/audio/Mozart_Divertimento.mp3" 
	data-title="Divertimento in D major K. 136 (III. Presto)" 
	data-artist="Wolfgang Amadeus Mozart"
	></audio>
```

## Build procedure
`npm run build`

## Auto-rebuild 
`npm run watch`

## Problems? 
I encourage all issues to be submitted through the [**Issues** tab on GitHub](https://github.com/freddyouellette/fraudio/issues).

## Links
* [github repository](https://github.com/freddyouellette/fraudio)
* [npm package](https://www.npmjs.com/package/fraudio)