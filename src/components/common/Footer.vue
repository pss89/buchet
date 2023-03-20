<template>
	<footer class="footer">
        <font-awesome-icon icon="fa-solid fa-rotate-right" />
		<p>{{msg}}</p>
	</footer>
</template>

<script>
export default {
    name: 'Footer',
    props: {
        msg: String
    }
}
</script>

<style scoped>
footer{border-top:1px solid #35495e; text-align:center; font-size:16px; color:#41b883; margin:100px 0 0 0;}
</style>