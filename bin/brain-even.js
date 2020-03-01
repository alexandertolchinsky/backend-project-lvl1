#!/usr/bin/env node
import askName from '../src/index.js';
import parityCheck from '../src/parity-check.js';

console.log('Welcome to the Brain Games!');
const name = askName();
parityCheck(name);
