import { createRouter, createWebHistory } from 'vue-router'
import LayoutPage from "@/views/LayOut/LayoutPage.vue";
import HomePage from "@/views/HomePage/HomePage.vue";
import LoginPage from "@/views/LoginPage/LoginPage.vue";
import UniversityPage from "@/views/UniversityFamily/UniversityPage.vue";
import FamilyPage from "@/views/FamilyLife/FamilyPage.vue";
import OfficePage from "@/views/AIOffice/OfficePage.vue";
import AcademyPage from "@/views/Academy/AcademyPage.vue";
import CreativePage from "@/views/CreativeSquare/CreativePage.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: LayoutPage,
      children: [
        {
          path: '',
          name: 'home',
          component: HomePage
        },
        {
          path: '/university',
          name: 'university',
          component: UniversityPage
        },
        {
          path: '/family',
          name: 'family',
          component: FamilyPage
        },
        {
          path: '/office',
          name: 'office',
          component: OfficePage
        },
        {
          path: '/academy',
          name: 'academy',
          component: AcademyPage
        },
        {
          path: '/creative',
          name: 'creative',
          component: CreativePage
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    }
  ]
})

export default router
