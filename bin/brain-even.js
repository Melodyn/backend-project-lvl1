#!/usr/bin/env node

import { run } from '../src/index.js';
import { description, game } from '../games/brain-even.js';

run(description, game);