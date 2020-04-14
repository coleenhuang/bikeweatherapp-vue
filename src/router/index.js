import Vue from 'vue'
import VueRouter from  'vue-router'
import StartPage from '../components/startpage/StartPage.vue';
import TimePage from '../components/timepage/TimePage.vue';
import ResultPage from '../components/resultpage/ResultPage.vue';
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
  routes
})

export default router