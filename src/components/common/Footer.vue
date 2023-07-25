<template>
    <footer class="bg-cyan-600 text-white py-8 w-full bottom-0 left-0 fixed">
        <div class="container mx-auto flex flex-col md:flex-row items-center">
            <div class="md:w-2/4 text-center md:text-left mb-4 md:mb-0">
                <h3 class="text-2xl font-bold">My Website</h3>
                <p class="text-sm">© 2023 All rights reserved.</p>
            </div>
            <nav class="md:w-1/2 text-center">
                <a href="#" class="block md:inline-block mr-4 py-2">Home</a>
                <a href="#" class="block md:inline-block mr-4 py-2">About</a>
                <a href="#" class="block md:inline-block mr-4 py-2">Services</a>
                <a href="#" class="block md:inline-block py-2">Contact</a>
            </nav>
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
</style>