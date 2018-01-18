import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Cart from '@/pages/Cart'

import Index from '@/pages/Admin/Index'
import Edit from '@/pages/Admin/Edit'
import New from '@/pages/Admin/New'
import Product from '@/pages/Admin/Products'

Vue.use(Router)

export default new Router({
	mode : 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
		},
		{
			path : '/admin',
			name : 'admin',
			component : Index,
			children : [{
				path : 'new',
				name : 'new',
				component : New
			},
			{
				 path : '',
				 name : 'products',
				 component : Product
			},
			{
				path : 'edit/:id',
				name : 'edit',
				component : Edit
			}]
		},
		{
			path : '/cart',
			name : 'cart',
			component: Cart
		},
  ]
})
