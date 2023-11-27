<template>
    <button :class="className" :style="{backgroundColor: color}" @click="onClick()">
        {{ label }}
    </button>
</template>

<script>
export default {
    name: "Button",
    props: {
        label: {
            type: String,
            default: "Button",
        },
        className: {
            type: String,
        },
        color:{
            type: String
        }
    },
    methods:{
        onClick(){
            console.log('clicked')
        }
    }
}
</script>