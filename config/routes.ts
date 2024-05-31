export default [
  {
    path: '/user',
    component: '@/layouts/UserLayout',
    routes: [
      {
        path: '/user',
        redirect: '/user/login',
      },
      { name: 'login', path: '/user/login', component: './404' },
      // { name: 'login', path: '/user/login', component: './Login' },
    ],
  },
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      {
        path: '/childWeb',
        component: './Configure',
      },
      {
        path: '/transition',
        component: './Transition',
      },
    ],
  },
];
