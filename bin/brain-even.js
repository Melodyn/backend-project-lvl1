#!/usr/bin/env node

import { run } from '../src/index.js';
import { description, game } from '../src/games/brain-even.js';

run(description, game);
