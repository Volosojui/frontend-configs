const path = require('path');

const buildEslintCommand = (filenames) => {
  const filenamesList = filenames.map((f) => path.relative(process.cwd(), f));

  return `next lint --fix --file ${filenamesList.join(' --file ')}`;
};

module.exports = {
  '**/*.{ts,tsx}': () => 'tsc --project tsconfig.json --pretty --noEmit',
  '**/*.{js,jsx,ts,tsx}': [buildEslintCommand, 'prettier --write'],
  '**/*.{md,mdx,json}': ['prettier --write'],
};
