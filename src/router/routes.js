const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '', component: () => import('layouts/lotteryvn.vue') },
      { path: '', component: () => import('layouts/lotterymvn.vue') },
      { path: '', component: () => import('layouts/lotterykh.vue') },

      {
        path: '/lotterythai',
        component: () => import('layouts/lotterythai.vue'),
      },
    ],
  },
  // path: '/page',
  // component: () => import('layouts/lotterythai.vue'),
  // children:[
  //   {
  //     path: '',
  //   },
  // ],

  {
    path: '/page/live/stream',
    component: () => import('src/pages/live/index.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
