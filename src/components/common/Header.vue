<template>
	<nav class="navbar">
		<div class="navbar__logo">
            <font-awesome-icon icon="fa-brands fa-accusoft" />
            <a href="">Buchet Intro</a>
        </div>
		<ul class="navbar__menu">
            <li><a href="">Intro</a></li>
            <li><a href="">Tech Stack</a></li>
            <li><a href="">Reference</a></li>
            <li><a href="">Hobby</a></li>
        </ul>
		<ul class="navbar__links">
            <font-awesome-icon icon="fa-brands fa-twitter" />
            <font-awesome-icon icon="fa-brands fa-facebook" />
            <font-awesome-icon icon="fa-brands fa-instagram" />
        </ul>
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

<style scoped>
</style>