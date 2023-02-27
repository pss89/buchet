<template>
  <div>
    <!-- <h1>{{$route.params.name}} / {{$route.params.age}}</h1> -->
    <h1>{{$route.query.name}} / {{$route.query.age}}</h1>
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'

export default {
    name: 'Info',
    setup () {
        useMeta({ title: 'Some Page' })
    },
    props: {
        name: {
            type: String,
            default : ''
        },
        age: {
            type: Number,
            default: 0
        }
    }
}
</script>
