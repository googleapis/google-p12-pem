/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */

async function main(pathToCert) {
  // [START p12_pem_quickstart]
  const {getPem} = require('google-p12-pem');

  /**
   * Given a p12 file, convert it to the PEM format.
   * @param {string} pathToCert The relative path to a p12 file.
   */
  async function quickstart() {
    // TODO(developer): provide the path to your cert
    // const pathToCert = 'path/to/cert.p12';

    const pem = await getPem(pathToCert);
    console.log('The converted PEM:');
    console.log(pem);
  }

  quickstart();
  // [END p12_pem_quickstart]
}
main(...process.argv.slice(2));
