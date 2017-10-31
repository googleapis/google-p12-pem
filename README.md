# google-p12-pem

Convert Google `.p12` keys to `.pem` keys.

[![Build Status](https://travis-ci.org/ryanseys/google-p12-pem.svg?branch=travis)](https://travis-ci.org/ryanseys/google-p12-pem)

## Installation

``` sh
npm install google-p12-pem
```

## Usage

### async/await style
```js
const gp12 = require('google-p12-pem');
async function getPem() {
  const pem = await gp12.getPem('/path/to/key.p12');
  console.log(pem); // '-----BEGIN RSA PRIVATE KEY-----\nMIICXQIBAAK...'
}
```

### promise style
```js
const gp12 = require('google-p12-pem');
gp12.getPem('/path/to/key.p12')
  .then(pem => {
    console.log(pem); // '-----BEGIN RSA PRIVATE KEY-----\nMIICXQIBAAK...'
  })
  .catch(err => {
    console.error(err); // :(
  });

```

### callback style
```js
const gp12 = require('google-p12-pem');
gp12.getPem('/path/to/key.p12', function(err, pem) {
  console.log(pem); // '-----BEGIN RSA PRIVATE KEY-----\nMIICXQIBAAK...'
});
```

### CLI style

``` sh
gp12-pem myfile.p12 > output.pem
```

## License
[MIT](LICENSE)
