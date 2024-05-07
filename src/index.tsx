export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export { default as SimboText } from './components/text/SimboText';
export { SimboColor, SimboDimension } from './style/index';
