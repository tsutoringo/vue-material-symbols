import fetch from 'node-fetch';
import fs from 'fs';

const load = async () => {
  const textData = await (await fetch('https://fonts.google.com/metadata/icons?key=material_symbols&incomplete=true')).text();
  const data = JSON.parse(textData.replace(')]}\'', ''))

  const icons = {};

  for (const icon of data.icons) {
    if (icons[icon.name]) {
      if (icon.version > icons[icon.name].version) {
        icons[icon.name] = icon;
      }
    } else {
      icons[icon.name] = icon;
    }
  }

  fs.writeFile('./src/Icon.ts',
    `export type Icon = \n  ${ Object.keys(icons).map(a => `'${a}'`).join(' |\n  ') } | (string & Record<unknown, unknown>);\n` +
    'export type IconType = \'outlined\' | \'rounded\' | \'sharp\';\n' +
    'export type IconWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700;\n' +
    'export type IconGrade = -25 | 0 | 200;\n' +
    'export type IconSize = 20 | 24 | 40 | 48;\n'
    , (e) => {
    console.log(e);
  });
}

load();
