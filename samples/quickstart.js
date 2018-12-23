/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */

const {getPem} = require('google-p12-pem');

/**
 * Given a p12 file, convert it to the PEM format.
 * @param {string} pathToCert The relative path to a p12 file.
 */
async function quickstart(pathToCert) {
  const pem = await getPem(pathToCert);
  console.log('The converted PEM:');
  console.log(pem);
}

const args = process.argv.slice(2);
quickstart(...args).catch(console.error);
