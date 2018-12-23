/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */

const execa = require('execa');
const {assert} = require('chai');
const path = require('path');

const certPath = path.join(__dirname, '../assets/key.p12');

describe('sample tests', () => {
  it('should run the quickstart', async() => {
    const {stdout} = await execa.shell(`node quickstart '${certPath}'`);
    assert.match(stdout, /The converted PEM:/);
  });
});
