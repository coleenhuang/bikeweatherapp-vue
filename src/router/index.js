import Vue from 'vue'
import VueRouter from  'vue-router'
import StartPage from '../components/page/StartPage.vue';
import TimePage from '../components/page/TimePage.vue';
import ResultPage from '../components/page/ResultPage.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "StartPage",
    component: StartPage
  },
  {
    path: "/time",
    name: "TimePage",
    component: TimePage
  },
  {
      path:"/result",
      name:"ResultPage",
      component: ResultPage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router