const size = {
  xs: '0px',
  sm: '600px',
  md: '960px',
  lg: '1200px',
  xl: '1920px',
}
const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
}

export {size, device}
