import media from '../media';
export const fullForm = {
  my: ['margin-top', 'margin-bottom'],
  mx: ['margin-left', 'margin-right'],
  ml: 'margin-left',
  mr: 'margin-right',
  mt: 'margin-top',
  mb: 'margin-bottom',
  py: ['padding-top', 'padding-bottom'],
  px: ['padding-left', 'padding-right'],
  pl: 'padding-left',
  pr: 'padding-right',
  pt: 'padding-top',
  pb: 'padding-bottom',
  fz: 'font-size',
  fw: 'font-weight',
  w: 'width',
  h: 'height',
  c: 'color',
  bg: 'background',
  bl: 'border-left',
  br: 'border-right',
  bt: 'border-top',
  bb: 'border-bottom',
  b: 'border',
  bd: 'border-radius',
  bc: 'border-color',
  m: 'margin',
  p: 'padding',
  pos: 'position',
  l: 'left',
  r: 'right',
  bot: 'bottom',
  top: 'top',
  alignItems: 'align-items',
  justifyContent: 'justify-content',
  left: 'text-align:left;',
  right: 'text-align:right;',
  center: 'text-align:center;',
  bold: 'font-weight:bold;',
  italic: 'font-style:italic;',
  underline: 'text-decoration:underline;',
  block: 'display:block;',
  inline: 'display:inline-block;',
  flex: 'display:flex;flex-wrap:wrap;',
  nowrap: 'flex-wrap:nowrap;',
  css: '',
};

const responsive = ['', 'large', 'desktop', 'tablet', 'phone'];

function pxSet(val) {
  return ~~val ? val + 'px' : val;
}

function setValue(key, value) {
  const val = key === 'fw' ? value : pxSet(value);
  if (Array.isArray(fullForm[key])) {
    return fullForm[key].join(`:${val};`) + `:${val};`;
  } else {
    return `${fullForm[key]}:${val};`;
  }
}
export default function cssEmbed(cssProp) {
  return Object.keys(cssProp).reduce((prev, next) => {
    let value = cssProp[next];
    if (value && next in fullForm) {
      let css = '';
      if (typeof value === 'boolean') {
        //add boolean css
        css += fullForm[next];
      } else if (typeof value === 'string') {
        if (next === 'css') {
          // add css attribute css
          css += cssProp[next] + ';';
        } else {
          // add other fullform css attribute css
          css += setValue(next, cssProp[next]);
        }
      } else if (Array.isArray(value)) {
        // add media css when value is array
        if (next === 'css') {
          // add css attribute css
          css += value.map((val, i) => {
            if (i === 0) {
              return val + ';';
            } else {
              if (val) {
                return media[responsive[i]]`
                  ${val};
              `.join('');
              }
            }
            return '';
          });
        } else {
          // add other fullform css attribute css
          css += value.map((val, i) => {
            if (i === 0) {
              return setValue(next, val);
            } else {
              if (val) {
                return media[responsive[i]]`
                  ${setValue(next, val)}
              `.join('');
              }
            }
            return '';
          });
        }
      }
      return prev + css;
    }
    return prev;
  }, '');
}
