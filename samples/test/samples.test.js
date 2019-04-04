/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */

<<<<<<< HEAD
const cp = require('child_process');
=======
const cp = require('child_process');
>>>>>>> master
const {assert} = require('chai');
const path = require('path');

const execSync = (cmd) => cp.execSync(cmd, {encoding: 'utf-8'});

const execSync = (cmd) => cp.execSync(cmd, {encoding: 'utf-8'});

const certPath = path.join(__dirname, '../assets/key.p12');

describe('sample tests', () => {
  it('should run the quickstart', async () => {
    const stdout = execSync(`node quickstart '${certPath}'`);
    assert.match(stdout, /The converted PEM:/);
  });
});
