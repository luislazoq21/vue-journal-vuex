<template>
    <router-view></router-view>
</template>

<script>
export default {
    name: 'App',
    components: {

    }
}
</script>

<style>
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #434241; /* Color del fondo del "pulgón" de la barra de desplazamiento */
        border-radius: 5px; /* Bordes redondeados */
    }

    ::-webkit-scrollbar-track {
        background-color: #f1f1f1; /* Color del fondo de la barra de desplazamiento */
    }
</style>