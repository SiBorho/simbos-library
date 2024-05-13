export { SimboColor, SimboDimension } from './style/index';

export default {
  get SimboText() {
    return require('./components/text/SimboText').default;
  },
  get simboStyle() {
    return require('./style/index').default;
  },
};
