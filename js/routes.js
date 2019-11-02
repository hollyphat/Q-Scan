var routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'home',
  },

  {
    path: '/login/',
    url: 'login.html',
  },
  {

    path : '/dashboard/',
    url : 'dashboard.html',
  },
  {
    path : '/category/',
    url : 'category.html',
  },
  {
    path : '/event/',
    url : 'event.html',
  },
  {
    path : '/vote/',
    url : 'vote.html',
  },
  {
    path : '/result/',
    url :  'result.html',
  },
  // Page Loaders
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages/page-loader-template7.html',
    // additional context
    options: {
      context: {
        foo: 'bar',
      },
    },
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
    // additional context
    options: {
      context: {
        foo: 'bar',
      },
    },
  },
  {
    path: '/master-detail/',
    url: './pages/master-detail-master.html',
    master: true,
    detailRoutes: [
      {
        path: '/master-detail/:id/',
        templateUrl: './pages/master-detail-detail.html',
      },
    ]
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './index.html',
  },
];
