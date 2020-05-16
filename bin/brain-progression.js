#!/usr/bin/env node

import { run } from '../src/index.js';
import { description, game } from '../src/games/brain-progression.js';

run(description, game);
