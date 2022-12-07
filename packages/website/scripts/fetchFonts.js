import fetch from 'node-fetch';
import fs from 'fs';

const load = async () => {
  const textData = await (await fetch('https://fonts.google.com/metadata/icons?key=material_symbols&incomplete=true')).text();
  const data = JSON.parse(textData.replace(')]}\'', ''))

  const icons = {};

  for (const icon of data.icons.filter(icon => !icon.unsupported_families.includes(''))) {
    if (icons[icon.name]) {
      if (icon.version > icons[icon.name].version) {
        icons[icon.name] = icon;
      }
    } else {
      icons[icon.name] = icon;
    }
  }

  fs.writeFile('./src/Icon.ts',
    `export default ${ JSON.stringify(Object.keys(icons)) }`
    , (e) => {
    console.log(e);
  });
}

load();
