<template>
    <div
        @click="$router.push({ name: 'entry', params: { id: entry.id } })"
        class="entry"
    >
        <h3>{{ entry.title }}</h3>
        <p>{{ shortContent }}</p>
    </div>
</template>

<script>
export default {
    props: {
        entry: {
            type: Object,
            required: true,
        }
    },

    computed: {
        shortContent() {
            return this.entry.content.substring(0, 100) + '...'
        }
    }
}
</script>

<style lang="scss" scoped>
    .entry {
        cursor: pointer;
        transition: all .3s ease-in-out;
        padding: 20px;
        border-bottom: 1px solid #434241;
        
        h3, p {
            color: #434241;
            transition: all .3s ease-in-out;
        }

        h3 {
            margin-bottom: 5px;
            font-size: 24px;
            line-height: 32px;
            font-weight: 700;
        }

        p {
            font-size: 14px;
            line-height: 20px;
            font-weight: 300;
            margin-bottom: 0;
        }

        &:hover {
            background-color: #434241;

            h3, p {
                color: #ffffff;
            }
        }
    }
</style>