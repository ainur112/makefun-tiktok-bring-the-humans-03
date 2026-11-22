import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// The house reads the TikTok video itself; this program only hands over VIDEO.json.
const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, 'VIDEO.json'), join(outDir, 'VIDEO.json'));
