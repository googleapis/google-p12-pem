#!/usr/bin/env node

/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */

import * as gp12 from '../index';

const argv = process.argv;
const p12Path = argv[2];

if (!p12Path) {
  console.error('Please specify a *.p12 file to convert.');
  process.exit(1);
}

gp12.getPem(p12Path, (err, pem) => {
  if (err) {
    console.log(err);
    process.exit(1);
  } else {
    console.log(pem);
  }
});
