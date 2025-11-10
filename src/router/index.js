import { createRouter, createWebHistory } from 'vue-router'
import ListsView from '@/views/ListsView.vue'
import ListDetails from '@/views/ListDetails.vue'
import ShoppingList from '@/views/ShoppingList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/lists',
      name: 'ListsView',
      component: ListsView,
    },
    {
      path: '/lists/:id',
      name: 'ListDetails',
      component: ListDetails,
      props: true,
    },
    
    {
      path: '/shoppinglist', 
      name: 'ShoppingList',
      component: ShoppingList,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/lists',
    },
  ],
})

export default router
