# jquery-smartbags

Smart Flashbags system with fading out dependent on message length

# Features

- Removes flashbags depending on how it they are
- Very lightweight (380 B minified)

# Usage

Add jQuery and Smartbags library

```html
<script type="text/javascript" src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="smartbags.js"></script>
```

```js
(function () {
  'use strict';

  $('[data-smartbag]').smartbags();
  // or 

  $('[data-smartbag]').smartbags({
    letterFactor: 100,
    delayBuffer: 1500,
    messageSelector: '.message',
    fadeOutClass: 'show'
  });

})();
```

Example HTML flashbag code:

```html
<div class="flashbags-wrapper">
  <div data-smartbag class="fade in">
    <span data-smartbag-message>Some text in here</span>
  </div>
  <div data-smartbag class="fade in">
    <span data-smartbag-message>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.</span>
  </div>
</div>
```

+ sample CSS

```css
.fade {
  opacity: 0;
  -webkit-transition: opacity 1s;
  transition: opacity 1s;
}

.fade.in {
  opacity: 1;
}
```

See `demo.html` for a full-working demo.


# License

This plugin is released under MIT license, see [License File](./LICENSE)


# Authors
- Mateusz Gachowski ([website](http://mgachowski.pl))