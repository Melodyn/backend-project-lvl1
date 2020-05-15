#!/usr/bin/env node

import { run } from '../src/index.js';
import { description, game } from '../games/brain-calc.js';

run(description, game);
