<template>
    <footer class="bg-cyan-600 text-white py-8 w-full bottom-0 left-0 mt-20">
        <div class="container mx-auto flex flex-col items-center">
            <div class="text-center md:text-left mb-4 md:mb-0">
                <h3 class="text-2xl font-bold">Buchet Introduction WebSite</h3>
                <p class="text-sm">© 2023 All rights reserved.</p>
            </div>
        </div>
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
@media screen and (max-width: 768px) {
  footer {
    /* 풋터의 위치를 원래대로 설정합니다. */
    position: static;
    /* 기본값으로 설정합니다. */
    z-index: initial;
  }
}
</style>