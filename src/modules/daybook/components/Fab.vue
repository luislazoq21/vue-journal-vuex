<template>
    <button class="bg-primary">
        <i class="fa-solid" :class="icon"></i>
    </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: 'fa-plus',
        }
    }
}
</script>

<style lang="scss" scoped>
    button {
        border-radius: 50%;
        border: none;
        bottom: 20px;
        height: 60px;
        position: fixed;
        right: 20px;
        width: 60px;

        i { 
            font-size: 38px;

            &::before {
                color: #ffffff;
            }
        }
    }
</style>