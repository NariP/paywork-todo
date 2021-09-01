import { Dashboard, Main, Statistics, Todos } from '../pages';
import { PATH_DASHBOARD, ROOTS, ROOTS_DASHBOARD } from './paths';
import { AuthGuard } from '../guards';
import { ComponentType } from 'react';
import { DashboardLayout } from '../components/Layout/DashboardLayout';

interface I_pageRoutes {
  path: string;
  exact: boolean;
  component: ComponentType;
  guard?: ComponentType;
  layout?: ComponentType;
}
const PageRoutes: I_pageRoutes[] = [
  {
    path: ROOTS,
    exact: true,
    component: Main,
  },
  {
    path: ROOTS_DASHBOARD,
    exact: true,
    component: Dashboard,
    guard: AuthGuard,
    layout: DashboardLayout,
  },
  {
    path: PATH_DASHBOARD.statistics,
    exact: true,
    component: Statistics,
    guard: AuthGuard,
    layout: DashboardLayout,
  },
  {
    path: PATH_DASHBOARD.todos,
    exact: true,
    component: Todos,
    guard: AuthGuard,
    layout: DashboardLayout,
  },
];
export default PageRoutes;
