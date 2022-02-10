export const getParamId = () => {
  const path = location.pathname.split('/');
  return path[path.length - 1];
};

export const getRequestedPage = () => {
  const path = location.pathname.split('/');
  return path[path.length - 2];
};
