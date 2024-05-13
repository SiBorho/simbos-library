const moduleAlias = require('module-alias');

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

moduleAlias.addAliases('@simbos-style', __dirname + './src/style/index');
export { default as SimboText } from './components/text/SimboText';
