<template>
  <div class="admin-container">
    <div class="aside-menu">
      <aside class="menu">
        <p class="menu-label">
          General
        </p>
        <ul class="menu-list">
          <li>
            <router-link active-class="is-active" to='/admin' exact>
						View Products
						</router-link>
          </li>
          <li>
            <router-link active-class="is-active" to='/admin/new'>
						   New Product
						</router-link>
          </li>
        </ul>
      </aside>
    </div>
    <div class="content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Admin',
    data: () => ({
      msg: 'admin'
    })
  }

</script>
<style>
.admin-container{
	width: 100%;
	display: flex;
}
  .aside-menu {
    width: 300px;
  }
	.content{
		width: calc(100% - 300px);
		padding:  30px;
	}

</style>
