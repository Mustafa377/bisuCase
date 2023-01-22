<template>
    <CSidebar 
        fixed
        color-scheme="info"
        :minimize="minimize"
        dropdown-mode="closeInactive"
        :show="show"
        @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
    >
        <CSidebarBrand class="d-md-down-none" style="text-decoration:none">
            <img :src="VUE_APP_URL + ($store.state.sidebarShow === false ? 'img/bisigorta_logo_dark.png' : 'img/bisigorta_logo_white.png')" alt="" :style="'width: auto; height: 40px;' + ($store.state.sidebarShow === false ? 'margin-left: 540px':'')" :class="['all-transition-ease']" to="/"/>
        </CSidebarBrand>
        <CRenderFunction flat :content-to-render="navOptions"/>
    </CSidebar>
</template>

<script>
import nav from './_nav';
import navPartner from './_navPartner';
import CRenderFunction from '../components/CRenderFunction.vue';

const packageJson = require('../../package.json');

export default {
    name: 'TheSidebar',
    components: {
        CRenderFunction
    },
    nav,
    navPartner,
    computed: {
        show () {
            return this.$store.state.sidebarShow 
        },
        minimize () {
            return this.$store.state.sidebarMinimize 
        }
    },
    data() {
        return {
            VUE_APP_NAME: process.env.VUE_APP_NAME,
            VUE_APP_URL: process.env.VUE_APP_URL,
            version: packageJson.version || 0,
            navOptions: this.$store.state.user.accountType === 'admin' ? this.$options.nav : this.$options.navPartner
        }
    },
    created() {
        console.log();
    }
}
</script>
