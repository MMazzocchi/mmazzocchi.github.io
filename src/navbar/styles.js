import { fg_color, bg_color } from '../styles.js';

const styles = {
  navbar: {
    'border-bottom': `3px solid${ fg_color }`,
    padding: 0,
  },
  slant: {
    'position': 'absolute',
    'left': '-60%',
    'top': 0,
    'height': '150%',
    'width': '120%',
    'background-color': fg_color,
    'color': bg_color,
    'z-index': -1,
    'transform': 'skewY(160deg)'
  },
  home_icon: {
    'color': bg_color,
    'font-weight': 500,
    'padding': '10px',
  }
};

export default styles;
