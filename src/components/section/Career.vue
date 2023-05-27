<!-- 경력 -->
<template>
    <section id="career">
        <!-- <h1>{{msg}}</h1> -->
        <!-- <p id="career_title">education - work experience</p> -->
        <p id="career_title">{{test}}</p>
        <div id="career_desc">
            <div>
                <p v-for="c in career" v-bind:key="c">{{ c.title }}</p>
            </div>
            <div>
                <span v-for="(desc,idx) in career" v-bind:key="idx">
                    <p v-for="dt in desc['desc']" v-bind:key="dt">{{ dt.title }}</p>
                </span>
            </div>
        </div>
    </section>
</template>

<script>
import constants from "/src/constants.js"

export default {
    name: 'Career',
    props: {
        msg: String
    },
    data(){
        return{
            test:constants.CAREER.subject,
            career:constants.CAREER.list
        }
    }
}
</script>

<style scoped>
header{width:100%; text-align:center; position:relative; height:120px; border-bottom:1px solid #35495e}
header h1{position:absolute; top:0; left:100px;}
header ul.menu:after{display:block; clear:both; content:'';}
header ul.menu{position:absolute; top:20px; right:50px;}
header ul.menu li{float:left; padding:10px 20px; list-style:none;}

a{text-decoration:none; color:#333;}

#career{
    /* width:100%;
    height:50%;
    margin:0 auto; */
    margin:0 auto;
    width:769px;
    height:500px;
}

#career_desc{
    display:flex;
    justify-content: space-between;
}

#career_title{
    margin:0 auto;
}

@media screen and (max-width: 768px){
    #career{
        width:80%;
        /* height:100%; */
    }
}
</style>