/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */

import * as assert from 'assert';
import {describe, it} from 'mocha';
import * as fs from 'fs';
import * as path from 'path';
import {promisify} from 'util';

import {getPem} from '../src';

const fixturePath = path.join(__dirname, '../../test/assets');
const p12Path = path.join(fixturePath, 'key.p12');
const pemPath = path.join(fixturePath, 'key.pem');
const readFile = promisify(fs.readFile);

describe('system', () => {
  it('should convert a p12 into a pem', async () => {
    const pem = await getPem(p12Path);
    const expected = await readFile(pemPath, 'utf8');
    assert.strictEqual(pem, expected);
  });
});
