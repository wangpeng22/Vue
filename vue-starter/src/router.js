import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from '@/pages/index'
import parentprops from '@/pages/props/parent.vue'
import parentemit from '@/pages/emit/parent.vue'
import busdemo      from '@/pages/bus/demo.vue'

export default new Router ({
  routes : [
    {
    	path : '/', 
    	name : 'index', 
    	component : index
    },
    {
    	path : '/props', 
    	name : 'parentprops', 
    	component : parentprops
    },
    {
    	path : '/emit',
    	name : 'parentemit',
    	component : parentemit
    },
    {
    	path : '/bus',
    	name : 'busdemo',
    	component : busdemo
    }
  ]
})
