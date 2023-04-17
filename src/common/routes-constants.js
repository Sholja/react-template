import Dashboard from 'app/dashboard/components/dashboard';

const prefixes = {
  dashboard: 'DASHBOARD',
};

// possible routes inside the app
const routes = {
  home: {
    path: '/',
    prefix: prefixes.dashboard,
    component: Dashboard,
  },
};

export default {
  routes,
  prefixes,
};
