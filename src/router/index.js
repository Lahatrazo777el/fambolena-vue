import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Signin from '@/views/Signin.vue'
import Signup from '@/views/Signup.vue'
import CalendarView from '@/views/CalendarView.vue'
import PostView from "@/views/PostView.vue";
import ProfitView from "@/views/ProfitView.vue";
import TutorialView from "@/views/TutorialView.vue";
import ProfileView from '../views/ProfileView.vue'
import MainLayout from '../layouts/MainLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      { path: '/', component: Home },
      { path: '/calendar',  component: CalendarView },
       { path: "/posts",  component: PostView },
        { path: "/profits", component: ProfitView },
        { path: "/tutorials", component: TutorialView },
        { path: "/profiles", component: ProfileView },
    ],
  },
  {
    path: "/",
    component: AuthLayout,
    children: [
      { path: "signin", component: Signin },
      { path: "signup", component: Signup },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
