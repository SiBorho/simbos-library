const moduleAlias = require('module-alias');

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

moduleAlias.addAliases('@simbos-style', '.lib/typescript/src/index.tsx');
export { default as SimboText } from './components/text/SimboText';
