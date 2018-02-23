import fs from 'fs';
import path from 'path';

export default function(fullpath) {
  // fullpath can be either a single path or an array which will be attempted in order
  const paths = Array.isArray(fullpath) ? fullpath : [fullpath];

  for (let p of paths) {
    if (fs.existsSync(p) && fs.statSync(p).isFile()) return fs.readFileSync(p, 'UTF-8');
  }

  return null;
}