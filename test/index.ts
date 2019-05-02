/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */

import * as assert from 'assert';
import * as fs from 'fs';
import {getPem} from '../src/index';

const _stripCarriageReturns = (str: string): string => {
  return str.replace(/\r/g, '');
};

describe('GoogleP12Pem', () => {
  const GOODP12FILE = './test/assets/key.p12';
  const BADP12FILE = './test/assets/badkey.p12';
  const PEMFILENAME = './test/assets/key.pem';
  const expectedPem = _stripCarriageReturns(
    fs.readFileSync(PEMFILENAME, {encoding: 'utf8'})
  );

  it('should exist', () => {
    assert.strictEqual(typeof getPem, 'function');
  });

  it('should provide error on bad filename and callback', done => {
    getPem('./badfilename.p12', (err, pem) => {
      assert(err);
      assert.strictEqual(pem, null);
      if (err) {
        assert.ok(err.message.startsWith('ENOENT'));
        done();
      }
    });
  });

  it('should throw ENOENT on bad filename with no callback', done => {
    getPem('./badfilename.p12')
      .then(pem => {
        assert.fail('Returned pem when it should have been rejected');
      })
      .catch(e => {
        done();
      });
  });

  it('should throw error on bad .p12 with no callback', done => {
    getPem(BADP12FILE)
      .then(pem => {
        assert.fail('Returned pem when it should have been rejected');
      })
      .catch(e => {
        done();
      });
  });

  it('should return error on bad .p12 in callback', done => {
    assert.doesNotThrow(() => {
      getPem(BADP12FILE, (err, pem) => {
        assert(err);
        if (err) {
          assert(err.message.indexOf('Too few bytes to read') > -1);
          done();
        }
      });
    });
  });

  it('should work async when provided a callback', done => {
    getPem(GOODP12FILE, (err, pem) => {
      assert.ifError(err);
      assert.strictEqual(expectedPem, pem);
      done();
    });
  });

  it('should return a promise that resolves with the pem', () => {
    getPem(GOODP12FILE)
      .then(result => {
        assert.strictEqual(expectedPem, result);
      })
      .catch(e => {
        assert.fail('Error getting pem from promise.');
      });
  });
});
