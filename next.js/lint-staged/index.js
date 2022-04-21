const path = require('path');

const IGNORE_FILENAMES = ['.lintstagedrc.js'];

const buildEslintCommand = (filenames) => {
  const filenamesList = filenames
    .map((f) => path.relative(process.cwd(), f))
    .filter((f) => !IGNORE_FILENAMES.includes(f));

  if (filenamesList.length) {
    return `next lint --fix --file ${filenamesList.join(' --file ')}`;
  }

  return undefined;
};

module.exports = {
  '**.*{ts,tsx}': 'tsc-files --pretty --noEmit',
  '**/*.{js,jsx,ts,tsx}': [buildEslintCommand, 'prettier --write'].filter(Boolean),
  '**/*.{md,mdx,json}': ['prettier --write'],
};
