<template>
    <section id="intro">
        <h1>{{msg}}</h1>
    </section>
</template>

<script>
export default {
    name: 'Intro',
    props: {
        msg: String
    }
}
</script>

<style scoped>
header{width:100%; text-align:center; position:relative; height:120px; border-bottom:1px solid #35495e}
/* header h1{position:absolute; top:0; left:100px;} */
header ul.menu:after{display:block; clear:both; content:'';}
header ul.menu{position:absolute; top:20px; right:50px;}
header ul.menu li{float:left; padding:10px 20px; list-style:none;}

a{text-decoration:none; color:#333;}

#intro{
    width:100%;
    height:100%;
    margin:0 auto;
    background-image: url('../../assets/img/main/bg-masthead.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
}
</style>