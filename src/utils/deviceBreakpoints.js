const breakpoints = {
  xs: '480px',   // Extra small devices (mobile phones)
  sm: '768px',   // Small devices (tablets)
  md: '1024px',  // Medium devices (small laptops)
  lg: '1200px',  // Large devices (desktops)
  xl: '1440px',  // Extra large devices (large desktops)
};

export function formatDeviceBreakpoints(strBreakpoints) {
  /* Formata valor de breakpoints para inteiro */
  return parseInt(strBreakpoints.slice(0,-2));
}

export default breakpoints;