const moduleAlias = require('module-alias');

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

moduleAlias.addAliases('@simbos-style', '.lib/typescript/src/index.tsx');

export default {
  get SimboText() {
    return require('./components/text/SimboText').default;
  },
  get SimboStyle() {
    return require('./style/index').default;
  },
};
