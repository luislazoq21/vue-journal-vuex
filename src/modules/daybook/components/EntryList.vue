<template>
    <div class="entry-list-container">
        <div class="entry-list-container__top">
            <input type="text" class="form-control" placeholder="Buscar entrada">
        </div>

        <div class="entry-list-container__scrollarea">
            <Entry
                v-for="entry in entries"
                :key="entry.id"
                :entry="entry"
            />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapState } from 'vuex'

export default {
    components: {
        Entry: defineAsyncComponent( () => import( '@/modules/daybook/components/Entry' ))
    },

    computed: {
        ...mapState( 'journal', ['entries'] )
    }
}
</script>

<style lang="scss" scoped>
    $top-height: 100px;
    .entry-list-container {
        border-right: 1px solid #434241;
        height: calc( 100vh - 60px );
        overflow: hidden;

        .entry-list-container__top {
            padding: 10px;
            height: $top-height;
            display: flex;
            flex-direction: column;
            justify-content: center;
            overflow: hidden;
        }

        .entry-list-container__scrollarea {
            overflow-y: auto;
            height: calc( 100% - $top-height );
        }
    }
</style>