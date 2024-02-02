<template>
    <div class="container">
        <img class="d-block mx-auto mb-3" src="@/assets/logo.png" alt="Vue logo">
        <h1 class="text-center">Home</h1>
        <div class="d-flex justify-content-center gap-2 mt-5">
            <button @click="goToDaybook" class="btn btn-danger">DayBook</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goToDaybook() {
            this.$router.push({ name: 'no-entry' })
        }
    }
}
</script>