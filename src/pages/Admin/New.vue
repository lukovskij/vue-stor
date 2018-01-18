<template>
  <div>
   <product-form @save-product="addProduct" :model="model"></product-form>
  </div>
</template>

<script>
import ProductForm from '@/components/ProductForm'

  export default {
		name: 'NewProduct',
		data : () => ({
        model : {
					name : '',
					price : '',
					manufacturer : [ {
            _id: 'sam',
            name: 'Samsung',
          },
          {
            _id: 'apple',
            name: 'Apple',
          }],
					image : '',
					description : ''
				}
		 }),
		 methods : {
        addProduct(model){
           console.log('model', model)
				}
		 },
		components : {
			ProductForm
		}
	}

</script>
