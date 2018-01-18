<template>
  <div>
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" v-model="model.name" v-validate="'required'" name="name">
        <p class="help is-danger" v-show="errors.has('name')">Name is required</p>
      </div>
    </div>
    <div class="field">
      <label class="label">Price</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" v-model="model.price" v-validate="'required'" name="price">
        <p class="help is-danger" v-show="errors.has('price')">Price is required</p>
      </div>
    </div>
    <div class="field">
      <label class="label">Subject</label>
      <div class="control">
        <div class="select">
          <select v-model="model.manufacturer" v-validate="'required'" name="manufacturer">
               <option v-for="manufacturer in model.manufacturer" :value="manufacturer._id" :key="manufacturer._id">
								 {{manufacturer.name}}
							 </option>
          </select>
        </div>
        <p class="help is-danger" v-show="errors.has('manufacturer')">Manufacturer is required</p>
      </div>
    </div>
    <div class="field">
      <label class="label">Image</label>
			<img :src="model.image" alt="">
      <div class="control">
        <input class="input" type="text" placeholder="Text input" v-model="model.image" v-validate="'required'" name="image">
        <p class="help is-danger" v-show="errors.has('image')">Image is required and must be a valid URL</p>
      </div>
    </div>
    <div class="field">
      <label class="label">Description</label>
      <div class="control">
        <textarea class="textarea" placeholder="Textarea" name="description" v-model="model.description" v-validate="'required'"></textarea>
        <p class="help is-danger" v-show="errors.has('description')">Description is required</p>
      </div>
    </div>
    <div class="control">
      <button class="button is-link" @click="sendForm">Add product</button>
			<button class="button is-link">Edit product</button>
    </div>
  </div>
</template>

<script>
  export default {
		 name : 'ProductForm',
		 props : ['model', 'isEditing'],
		 data : () => ({
       selected: '',
			 value : ''
		 }),
    methods : {
			sendForm(){
				this.$emit('save-product', this.model)
			}
		}
  }

</script>

<style>


</style>
