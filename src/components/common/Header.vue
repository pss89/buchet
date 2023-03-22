<template>
	<nav class="navbar">
		<div class="navbar__logo">
            <font-awesome-icon icon="fa-brands fa-accusoft" id="main_icon"/>
            <a href="">Buchet Space</a>
        </div>
		<ul class="navbar__menu" v-bind:class="{active:isActive}">
            <li><a href="">Intro</a></li>
            <li><a href="">Tech Stack</a></li>
            <li><a href="">Reference</a></li>
            <li><a href="">Hobby</a></li>
        </ul>
		<ul class="navbar__icons" v-bind:class="{active:isActive}">
            <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
            <li><font-awesome-icon icon="fa-brands fa-facebook" /></li>
            <li><font-awesome-icon icon="fa-brands fa-instagram" /></li>
        </ul>

        <a href="#" class="navbar__toggleBtn" v-on:click="toggle">
            <font-awesome-icon icon="fa-solid fa-bars" />
        </a>
	</nav>
</template>

<script>
export default {
    name: 'Header',
    props: {
        msg: String
    },
    // component 에서 사용 할 변수들 초기화
    data:function(){
        return{
            isActive:false
        }
    },
    // component 에서 사용 할 함수 초기화
    methods:{
        toggle: function(){ // 해당 함수를 클릭하면 isActive 변수를 변경
            this.isActive=!this.isActive;
        }
    }
}
</script>

<style scoped>
</style>