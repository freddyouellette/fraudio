# fraudio [![Donate](https://img.shields.io/badge/Donate-fec133)](https://www.paypal.com/donate/?hosted_button_id=3PJ9XD363CC5E) [![NPM version](https://img.shields.io/npm/v/fraudio.svg?style=flat)](https://www.npmjs.com/package/fraudio) [![NPM total downloads](https://img.shields.io/npm/dt/fraudio.svg?style=flat)](https://npmjs.org/package/fraudio)
jQuery Audio Player - simple styling and simple to use

![fraudio player](https://github.com/freddyouellette/fraudio/blob/master/fraudio.png?raw=true)

## Installation (npm)
* `npm i fraudio`

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

* You can also turn any audio element into a fraudio element with `$(element).fraudio();`

## Extending & Debugging
* Download the code with `git clone https://github.com/freddyouellette/fraudio`
* run `npm run build` in the base directory to compile `dist/` files. 
Run `npm run watch` to automatically compile as you're coding.

## Problems? 
I encourage all issues to be submitted through the [**Issues** tab on GitHub](https://github.com/freddyouellette/fraudio/issues).

## Links
* [github repository](https://github.com/freddyouellette/fraudio)
* [npm package](https://www.npmjs.com/package/fraudio)
* [MIT License](https://github.com/freddyouellette/fraudio/blob/master/LICENSE.md)

## Support Me
[![Donate](https://img.shields.io/badge/Donate-fec133)](https://www.paypal.com/donate/?hosted_button_id=3PJ9XD363CC5E)