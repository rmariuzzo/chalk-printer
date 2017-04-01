<h6 align="center">
  <img src="https://github.com/rmariuzzo/chalk-printer/raw/master/banner.png" />
  <br>
  NodeJS library to print colored message in the console.
</h6>

## Installation

```shell
npm install chalk-printer --save
```

### Usage

```js
const print = require('chalk-printer')

print.ok('hello world')
print.warn('hello world')
print.error('hello world')
print.trace('hello world')
print.log('hello world')
```

### Why?

I created this library because I was using that same utility over and over, and of course I ended up with different version of the same file. Now, instead of copying the same file in new project, I can add as a dependency. That way, I get the benefit of sharing it with the community, get feedback and I can upgrade it keeping my projects in sync.

### Test

Not yet.
