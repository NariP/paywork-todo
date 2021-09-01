const getPath = (root: string, subLink: string): string => {
  return `${root}/${subLink}`;
};

export const ROOTS = '/';
export const ROOTS_DASHBOARD = '/dashboard';

// -----------------------------------------------------------------

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  todos: getPath(ROOTS_DASHBOARD, 'todos'),
  statistics: getPath(ROOTS_DASHBOARD, 'statistics'),
};
