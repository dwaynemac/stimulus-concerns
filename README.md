# README
Following Rails concerns convention, this package provides a set of
Concerns to be used in stimulus controllers.

# Usage

Import the concern you want to use in your controller and call it in the initialize method.

## CDN
You can use jsdelivr cdn to import the concern.
Url format is `https://cdn.jsdelivr.net/gh/dwaynemac/stimulus-concerns/src/<concern>.js`
See: https://www.jsdelivr.com/?docs=gh

## Example
```js

import { Controller } from '@hotwire/stimulus';
import { ShowHide } from 'https://cdn.jsdelivr.net/gh/dwaynemac/stimulus-concerns@0.1/src/showHide.min.js';

export default class extends Controller {
  initialize() {
    ShowHide(this);
  }

  // ...
}

```

# Known Issues
- [ ] wont work with webpacker.
