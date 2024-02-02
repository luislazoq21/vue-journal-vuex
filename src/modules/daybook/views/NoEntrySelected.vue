<template>
    <div class="h-100 container d-flex justify-content-center align-items-center">
        <p class="fs-1 fw-bold">No hay nada seleccionado</p>
    </div>

    <Fab
        icon="fa-plus"
    />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        Fab: defineAsyncComponent( () => import( '@/modules/daybook/components/Fab' ))
    }
}
</script>