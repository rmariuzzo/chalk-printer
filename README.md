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

#### LicenseRef-LICENSE

```
MIT License

Copyright (c) 2017 Rubens Mariuzzo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
