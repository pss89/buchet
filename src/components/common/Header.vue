<template>
	<nav class="nav" style="position:sticky;top:0;">
		<div class="nav-title">
            <!-- <font-awesome-icon icon="fa-solid fa-code" id="mainIcon"/> -->
            <!-- <font-awesome-icon icon="fa-solid fa-bars-progress" id="mainIcon"/> -->
            <a href="">Buchet Intro</a>
        </div>
		<ul class="nav-menus" v-bind:class="{active:isActive}">
            <li><a href="#intro" v-smooth-scroll>소개</a></li>
            <!-- v-smooth-scroll -->
            <li><a href="#profile" v-smooth-scroll>프로필</a></li>
            <li><a href="#career" v-smooth-scroll>경력</a></li>
            <li><a href="#tech" v-smooth-scroll>기술</a></li>
            <li><a href="#hobby" v-smooth-scroll>취미</a></li>
        </ul>
		<ul class="nav-icons" v-bind:class="{active:isActive}">
            <li @click="pageMove('github')"><font-awesome-icon icon="fa-brands fa-github" /></li>
            <!-- <li @click="pageMove('facebook')"><font-awesome-icon icon="fa-brands fa-facebook" /></li> -->
            <li @click="pageMove('blog')"><font-awesome-icon icon="fa-solid fa-blog" /></li>
            <li @click="pageMove('instagram')"><font-awesome-icon icon="fa-brands fa-instagram" /></li>
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
        pageMove: function(moveType){
            if (!moveType) {
                alert('페이지 이동에 대한 인자값이 없습니다');
                return false;
            }
            
            switch(moveType){
                case 'github': window.open('https://github.com/pss89'); break;
                // case 'facebook': window.open('https://www.facebook.com/reqpebd'); break;
                case 'blog': window.open('https://buchet.tistory.com/'); break;
                case 'instagram': window.open('https://www.instagram.com/buchet89/'); break;
                default :
                    alert('허용하지 않는 유형입니다.');
                    return false;
            }
        }
        // move_section: function(){
        //     this.$refs.tech_stack.scrollIntoView({behavior:"smooth"});
        // }
    },
    setup () {
        const myEl = ref("intro")
        const smoothScroll = inject('smoothScroll')
        const scrollToMyEl = () => {
            smoothScroll({
                scrollTo: myEl.value,
                duration: 1000,
                offset: 100,
                hash: '#sampleHash'
            })
        }
        console.log(scrollToMyEl);
    }
}
</script>

<style scoped>
</style>