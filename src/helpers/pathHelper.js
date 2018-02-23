import path from 'path';

export function getFilenames(articlePath, articleRoot = process.env.ARTICLEROOT) {
  if (!articleRoot) return console.error('getFilenameFromPath > error > ARTICLEROOT is not specified!');
  if (!articlePath) return console.error('getFilenameFromPath > error > articlePath not specified!');

  const pathParts = getPathParts(articlePath);
  if (!pathParts) return console.error('getFilenameFromPath > error > unable to parse path properly');

  return [
    path.join(articleRoot, pathParts[0], pathParts[1]),
    path.join(articleRoot, pathParts[0], pathParts[1] + '.txt'),
    path.join(articleRoot, pathParts[0], pathParts[1] + '.md'),
    path.join(articleRoot, pathParts[0], pathParts[1] + '.html'),
  ];
}

export function getPathParts(articlePath) {
  const matches = PATH_PART_RE.exec(articlePath);
  if (!matches) return null;
  return matches.slice(1,3).map(r => r || '_home');
}


const PATH_PART_RE = /\/?([^\/]+)(?:\/?(.*))/;
