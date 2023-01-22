<template>
    <CHeader fixed with-subheader light>
        <CToggler
            in-header
            class="ml-3 d-lg-none"
            @click="$store.commit('toggleSidebarMobile')"
        />
        <CToggler
            in-header
            class="ml-3 d-md-down-none"
            @click="$store.commit('toggleSidebarDesktop')"
        />
        <div class="d-flex">
            <!-- <img :src="VUE_APP_URL + 'img/bisigorta_logo_dark.png'" alt="" style="width: auto; height: 40px;" :class="['ml-2 my-2', { 'opacity-off':$store.state.sidebarShow === true}]"/> -->
            <!-- <small class="font-weight-bold ml-2 mt-2">Panel - v{{ version }}</small> -->
        </div>
        <CHeaderBrand class="mx-auto d-lg-none" to="/">
            <img :src="VUE_APP_URL + 'img/bisigorta_logo_dark.png'" alt="" :style="'width: auto; height: 40px;'" to="/"/>
        </CHeaderBrand>
        <CHeaderNav class="d-md-down-none mr-auto">
            <!-- <CHeaderNavItem class="px-3">
            <CHeaderNavLink to="/dashboard">
                Özet
            </CHeaderNavLink>
            </CHeaderNavItem>
            <CHeaderNavItem class="px-3">
            <CHeaderNavLink to="/users" exact>
                Kullanıcılar
            </CHeaderNavLink>
            </CHeaderNavItem>
            <CHeaderNavItem class="px-3">
            <CHeaderNavLink>
                Ayarlar
            </CHeaderNavLink>
            </CHeaderNavItem> -->
        </CHeaderNav>
        <CHeaderNav class="mr-1">
            <!-- <CHeaderNavItem class="d-md-down-none mx-2">
                <CHeaderNavLink>
                    <CIcon name="cil-bell"/>
                </CHeaderNavLink>
            </CHeaderNavItem>
            <CHeaderNavItem class="d-md-down-none mx-2">
                <CHeaderNavLink>
                    <CIcon name="cil-list"/>
                </CHeaderNavLink>
            </CHeaderNavItem>
            <CHeaderNavItem class="d-md-down-none mx-2">
                <CHeaderNavLink>
                    <CIcon name="cil-envelope-open"/>
                </CHeaderNavLink>
            </CHeaderNavItem> -->
            <DDProfilMenu/>
        </CHeaderNav>
        <!-- <CSubheader class="px-3">
            <CBreadcrumbRouter class="border-0 mb-0"/>
        </CSubheader> -->
    </CHeader>
</template>

<script>
import DDProfilMenu from './DDProfilMenu';
//import CBreadcrumbRouter from '../components/CBreadcrumbRouter';

const packageJson = require('../../package.json');

export default {
    name: 'TheHeader',
    components: {
        DDProfilMenu,
        //CBreadcrumbRouter
    },
    data() {
        return {
            VUE_APP_NAME: process.env.VUE_APP_NAME,
            VUE_APP_URL: process.env.VUE_APP_URL,
            version: packageJson.version || 0
        }
    },
    created() {
    }
}
</script>
