> Checks if the given API is an sync function or not.

# Example Usage:

```js

var anAsync = require('an-async');
var fs = require('fs');

console.log(anAsync(fs.stat)) // Logs true.

console.log(anAsync(fs.statSync)) // Logs false.
```

__TODO:__

* Find a better way rather than the nasty R.E. (maybe `sync` ro `async` attributes?)
