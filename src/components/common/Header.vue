<template>
	<nav class="nav" style="position:sticky;top:0;">
		<div class="nav-title">
            <font-awesome-icon icon="fa-brands fa-accusoft" id="mainIcon"/>
            <a href="">Buchet Space</a>
        </div>
		<ul class="nav-menus" v-bind:class="{active:isActive}">
            <li><a href="#">Intro</a></li>
            <!-- v-smooth-scroll -->
            <li><a href="#profile" v-smooth-scroll>Profile</a></li>
            <li><a href="#">커리어</a></li>
            <li><a href="#">프로젝트</a></li>
            <li><a href="#">스킬</a></li>
            <li><a href="#">취미</a></li>
        </ul>
		<ul class="nav-icons" v-bind:class="{active:isActive}">
            <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
            <li><font-awesome-icon icon="fa-brands fa-facebook" /></li>
            <li><font-awesome-icon icon="fa-brands fa-instagram" /></li>
        </ul>

        <a href="#" class="nav-toggle-btn" v-on:click="toggle">
            <font-awesome-icon icon="fa-solid fa-bars" />
        </a>
	</nav>
</template>

<script>
import { inject, ref } from 'vue'
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
        },
        // move_section: function(){
        //     this.$refs.tech_stack.scrollIntoView({behavior:"smooth"});
        // }
    },
    setup () {
        const myEl = ref(null)
        const smoothScroll = inject('smoothScroll')
        const scrollToMyEl = () => {
            smoothScroll({
                scrollTo: myEl.value,
                hash: '#sampleHash'
            })
        }
    }
}
</script>

<style scoped>
</style>