# README
Following Rails concerns convention, this package provides a set of
Concerns to be used in stimulus controllers.

# Usage

Import the concern you want to use in your controller and call it in the initialize method.

## CDN
You can use jsdelivr cdn to import the concern.
Url format is `https://cdn.jsdelivr.net/gh/dwaynemac/stimulus-concerns/src/<concern>.js`
See: https://www.jsdelivr.com/?docs=gh

## Example (Importmap)

```ruby
# config/importmap.rb
pin "@dwaynemac/loggable", to: "https://cdn.jsdelivr.net/gh/dwaynemac/stimulus-concerns@0.1/src/loggable.min.js"
pin "@dwaynemac/showHide", to: "https://cdn.jsdelivr.net/gh/dwaynemac/stimulus-concerns/src/showHide.min.js"
```

```js

import { Controller } from '@hotwire/stimulus'
import { Loggable } from "@dwaynemac/loggable"
import { ShowHide } from "@dwaynemac/showHide"

export default class extends Controller {
  initialize() {
    Loggable(this);
    ShowHide(this);
  }

  // ...
}

```

## Example (wout Importmap nor Webpacker)
```js

import { Controller } from '@hotwire/stimulus';
import { Loggable } from 'https://cdn.jsdelivr.net/gh/dwaynemac/stimulus-concerns@0.1/src/loggable.min.js';
import { ShowHide } from 'https://cdn.jsdelivr.net/gh/dwaynemac/stimulus-concerns@0.1/src/showHide.min.js';

export default class extends Controller {
  initialize() {
    Loggable(this);
    ShowHide(this);
  }

  // ...
}

```

## Example (using Webpacker)
- [ ] TODO: Add webpacker example. (import {} from "..." doesn't work) 
