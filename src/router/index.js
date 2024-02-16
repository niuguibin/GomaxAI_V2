import { createRouter, createWebHistory } from 'vue-router'
import LayoutPage from "@/views/LayOut/LayoutPage.vue";
import HomePage from "@/views/HomePage/HomePage.vue";
import LoginPage from "@/views/LoginPage/LoginPage.vue";
import UniversityPage from "@/views/UniversityFamily/UniversityPage.vue";
import FamilyPage from "@/views/FamilyLife/FamilyPage.vue";
import OfficePage from "@/views/AIOffice/OfficePage.vue";
import AcademyPage from "@/views/Academy/AcademyPage.vue";
import CreativePage from "@/views/CreativeSquare/CreativePage.vue";
import AcademyChild from "@/views/Academy/AcademyChild.vue";
import UserInfo from "@/views/UserInfo/UserInfo.vue";
import Academypay from "@/views/Academy/Academypay.vue";
import Academypay2 from "@/views/Academy/Academypay2.vue";
import Academytable from "@/views/Academy/Academytable.vue";
import Academyvideo from "@/views/Academy/Academyvideo.vue";


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
        },
        {
          path: '/academyChild',
          name: 'academyChild',
          component: AcademyChild
        },
        {
          path: '/user',
          name: 'user',
          component: UserInfo
        },
        {
          path: '/academypay',
          name: 'academypay',
          component: Academypay
        },
        {
          path: '/academypay2',
          name: 'academypay2',
          component: Academypay2
        },
        {
          path: '/academytable',
          name: 'academytable',
          component: Academytable
        },
        {
          path: '/academyvideo',
          name: 'academyvideo',
          component: Academyvideo
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },

  ]
})

export default router
