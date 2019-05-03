import { fg_color, bg_color } from '../styles.js';

const styles = {
  navbar: {
    'border-bottom': `3px solid${ fg_color }`,
    padding: 0,
  },
  home_icon_text: {
    'color': fg_color,
    'font-weight': 500,
    'padding': '10px',
    'font-size': 'xx-large',
  },
  home_icon: {
    'margin': '10px',
    'border': '2px solid '+fg_color
  }
};

export default styles;
