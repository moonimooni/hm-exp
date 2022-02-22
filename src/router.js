import Vue from 'vue';
import VueRouter from 'vue-router';

const DefaultContainer = () => import('./views/default-container.vue');
const HomeView = () => import('./views/home');
const SampleIntroView = () => import('./views/samples/sample-intro.vue');
const SampleMessageView = () => import('./views/samples/sample-message.vue');

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: DefaultContainer,
      children: [
        {
          path: 'home',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'sample',
          name: 'sample',
          component: DefaultContainer,
          children: [
            {
              path: '',
              name: 'sample-intro',
              component: SampleIntroView,
            },
            {
              path: 'message',
              name: 'sample-message',
              component: SampleMessageView,
            },
          ],
        },
      ],
    },
  ],
});
