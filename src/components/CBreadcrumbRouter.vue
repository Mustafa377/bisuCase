<template>
    <CBreadcrumb v-bind="props">
        <slot></slot>
    </CBreadcrumb>
</template>

<script>


export default {
    name: 'CBreadcrumbRouter',
    components: {
    },
    props: {
        addClasses: [String, Array, Object],
        addLinkClasses: [String, Array, Object],
        addLastItemClasses: [String, Array, Object]
    },
    computed: {
        items () {
            const routes = this.$route.matched.filter(route => {
                return route.name || (route.meta && route.meta.label)
            });
            return routes.map(route => {
                const meta = route.meta || {}

                return {
                    to: route,
                    text: meta.label || route.name
                }

                // return {
                //     to: route,
                //     text: meta.label || this.$i18n.t(route.props.default.i18n)
                // }
            });
        },
        props () {
            return {
                items: this.items,
                addClasses: this.addClasses,
                addLinkClasses: this.addLinkClasses,
                addLastItemClasses: this.addLastItemClasses
            }
        }
    }
}
</script>