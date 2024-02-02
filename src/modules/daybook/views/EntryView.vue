<template>
    <div class="entry-view-container px-4 py-5">

        <div class="d-flex justify-content-between align-items-center">
            <p class="mb-0">Jueves, 01 de febrero del 2024</p>
            
            <div class="d-flex gap-2">
                <button class="btn btn-danger">
                    Borrar
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="btn btn-primary">
                    Subir foto
                    <i class="fa fa-upload"></i>
                </button>
            </div>
        </div>
        
        <hr class="my-3">

        <h1 class="fs-2 fw-bold text-primary">Entry view</h1>

        <textarea
            class="w-100 p-4"
            placeholder="¿Qué sucedió hoy?"
        >
        </textarea>
        
        <figure>
            <img class="" src="https://images.unsplash.com/photo-1682686581484-a220483e6291?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="entry-picture">
        </figure>
        
    </div>
    
    <Fab
        icon="fa-save"
    />
</template>

<script>
import { defineAsyncComponent } from 'vue'
// import { mapGetters } from 'vuex'

export default {
    components: {
        Fab: defineAsyncComponent( () => import( '@/modules/daybook/components/Fab' ))
    },

    computed: {
        // ...mapGetters( 'journal', ['getEntryById', 'e6aa6711-536f-490e-9d29-5d4cce9e52d9'] )
    }
}
</script>

<style lang="scss" scoped>
    .entry-view-container {
        height: calc(100vh - 60px);
        overflow: auto;

    }

    figure {
        border-radius: 5px;
        bottom: 100px;
        box-shadow: 0 2px 20px 0 rgba($color: #000000, $alpha: 0.3);
        margin-top: 30px;
        margin: 0 auto;
        max-width: 140px;
        overflow: hidden;
        position: fixed;
        right: 20px;
        width: 100%;

        &::before {
            background-color: #ccc;
            content: '';
            display: block;
            padding-bottom: 100%;
            width: 100%;
        }

        img {
            height: 100%;
            inset: 0;
            object-fit: cover;
            position: absolute;
            width: 100%;
        }
    }
</style>