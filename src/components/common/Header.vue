<template>
	<nav class="navbar">
		<div class="navbar__logo"></div>
		<div class="navbar__menu"></div>
		<div class="navbar__links"></div>
	</nav>
</template>

<script>
export default {
    name: 'Header',
    props: {
        msg: String
    }
}
</script>

<style src="@/assets/css/main.css" scoped>
</style>