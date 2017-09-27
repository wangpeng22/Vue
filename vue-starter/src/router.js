import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from '@/pages/index'
import parentprops from '@/pages/props/parent.vue'

export default new Router({
  routes: [
    {
    	path: '/', 
    	name: 'index', 
    	component: index
    },
    {
    	path: '/props', 
    	name: 'parentprops', 
    	component: parentprops
    }
  ]
})
