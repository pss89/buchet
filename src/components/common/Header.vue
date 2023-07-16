<!-- <template> -->
    <!-- <div class="bg-blue-500 text-white p-4">
        Hello Tailwind CSS!
    </div> -->
	<!-- <nav class="nav" style="position:sticky;top:0;"> -->
		<!-- <div class="nav-title"> -->
            <!-- <font-awesome-icon icon="fa-solid fa-code" id="mainIcon"/> -->
            <!-- <font-awesome-icon icon="fa-solid fa-bars-progress" id="mainIcon"/> -->
            <!-- <a href="/buchet"><p>About Buchet</p></a> -->
        <!-- </div> -->
		<!-- <ul class="nav-menus" v-bind:class="{active:isActive}"> -->
            <!-- <li><a href="#intro" v-smooth-scroll>프로필</a></li> -->
            <!-- v-smooth-scroll -->
            <!-- <li><a href="#career" v-smooth-scroll>경력</a></li> -->
            <!-- <li><a href="#tech" v-smooth-scroll>기술</a></li> -->
            <!-- <li><a href="#about" v-smooth-scroll>소개</a></li> -->
        <!-- </ul> -->
		<!-- <ul class="nav-icons" v-bind:class="{active:isActive}"> -->
            <!-- <li @click="pageMove('github')"><font-awesome-icon icon="fa-brands fa-github" /></li> -->
            <!-- <li @click="pageMove('facebook')"><font-awesome-icon icon="fa-brands fa-facebook" /></li> -->
            <!-- <li @click="pageMove('blog')"><font-awesome-icon icon="fa-solid fa-blog" /></li> -->
            <!-- <li @click="pageMove('instagram')"><font-awesome-icon icon="fa-brands fa-instagram" /></li> -->
        <!-- </ul> -->

        <!-- <a href="#" class="nav-toggle-btn" v-on:click="toggle"> -->
            <!-- <font-awesome-icon icon="fa-solid fa-bars" /> -->
        <!-- </a> -->
	<!-- </nav> -->

    <!-- <nav class="flex">
        <div class="">
            <a href="/buchet">로고</a>
        </div>

        <ul>
            <li>메뉴1</li>
            <li>메뉴2</li>
            <li>메뉴3</li>
            <li>메뉴4</li>
        </ul>

        <ul>
            <li>social1</li>
            <li>social2</li>
            <li>social3</li>
        </ul>

        <a>
            <font-awesome-icon icon="fa-solid fa-bars" /> 
        </a>
    </nav> -->


<!-- </template> -->

<template>
    <header class="bg-white">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup class="hidden lg:flex lg:gap-x-12">
          <Popover class="relative">
            <PopoverButton class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Product
              <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </PopoverButton>
  
            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div class="p-4">
                  <div v-for="item in products" :key="item.name" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                    <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <div class="flex-auto">
                      <a :href="item.href" class="block font-semibold text-gray-900">
                        {{ item.name }}
                        <span class="absolute inset-0" />
                      </a>
                      <p class="mt-1 text-gray-600">{{ item.description }}</p>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  <a v-for="item in callsToAction" :key="item.name" :href="item.href" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                    <component :is="item.icon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    {{ item.name }}
                  </a>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
  
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Features</a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Company</a>
        </PopoverGroup>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-10" />
        <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                  <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                  </DisclosureButton>
                  <DisclosurePanel class="mt-2 space-y-2">
                    <DisclosureButton v-for="item in [...products, ...callsToAction]" :key="item.name" as="a" :href="item.href" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</DisclosureButton>
                  </DisclosurePanel>
                </Disclosure>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
              </div>
              <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
</template>
  
<script setup>
    import { ref } from 'vue'
    import {
        Dialog,
        DialogPanel,
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Popover,
        PopoverButton,
        PopoverGroup,
        PopoverPanel,
    } from '@headlessui/vue'
    import {
        ArrowPathIcon,
        Bars3Icon,
        ChartPieIcon,
        CursorArrowRaysIcon,
        FingerPrintIcon,
        SquaresPlusIcon,
        XMarkIcon,
    } from '@heroicons/vue/24/outline'
    import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'

    const products = [
        { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
        { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
        { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
        { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
        { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    ]
    const callsToAction = [
        { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
        { name: 'Contact sales', href: '#', icon: PhoneIcon },
    ]

    const mobileMenuOpen = ref(false)
</script>

<!--<script>-->
<!-- // import { inject, ref } from 'vue'
// export default {
    // name: 'Header',
    // props: {
    //     msg: String
    // },
    // // component 에서 사용 할 변수들 초기화
    // data:function(){
    //     return{
    //         isActive:false
    //     }
    // },
    // // component 에서 사용 할 함수 초기화
    // methods:{
    //     toggle: function(){ // 해당 함수를 클릭하면 isActive 변수를 변경
    //         this.isActive=!this.isActive;
    //     },
    //     pageMove: function(moveType){
    //         if (!moveType) {
    //             alert('페이지 이동에 대한 인자값이 없습니다');
    //             return false;
    //         }
            
    //         switch(moveType){
    //             case 'github': window.open('https://github.com/pss89'); break;
    //             // case 'facebook': window.open('https://www.facebook.com/reqpebd'); break;
    //             case 'blog': window.open('https://buchet.tistory.com/'); break;
    //             case 'instagram': window.open('https://www.instagram.com/buchet89/'); break;
    //             default :
    //                 alert('허용하지 않는 유형입니다.');
    //                 return false;
    //         }
    //     }
    //     // move_section: function(){
    //     //     this.$refs.tech_stack.scrollIntoView({behavior:"smooth"});
    //     // }
    // },
    // setup () {
    //     const myEl = ref("intro")
    //     const smoothScroll = inject('smoothScroll')
    //     const scrollToMyEl = () => {
    //         smoothScroll({
    //             scrollTo: myEl.value,
    //             duration: 1000,
    //             offset: 100,
    //             hash: '#sampleHash'
    //         })
    //     }
    //     console.log(scrollToMyEl);
    // }
// }
// </script>

// <style scoped>
// </style> -->