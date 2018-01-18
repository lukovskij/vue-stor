<template>
	<div>
		{{msg}} with route params {{$route.params.id || 'none'}}
	</div>
</template>

<script>
export default {
	 name : 'Edit',
	 data : () => ({
		 msg : 'Edit page'
	 })
}
</script>