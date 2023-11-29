# README
Concerns to be used in stimulus controllers.

# Usage
```js

import { Controller } from '@hotwire/stimulus';
import { ShowHide } from 'https://cdn.jsdelivr.net/gh/dwaynemac/stimulus-concerns/srs/showHide.js';

export default class extends Controller {
  initialize() {
    ShowHide(this);
  }

  // ...
}

```
