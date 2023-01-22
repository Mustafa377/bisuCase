<template>
    <div>
        <div id="searchSideBar" class="search-sidebar">
            <CCard class="rounded-0 border-0">
                <CCardHeader class="d-flex flex-row justify-content-between align-items-center sticky-top rounded-0">
                    <span class="font-weight-bold">Arama</span>
                    <!-- :disabled="searchDisabled" -->
                    <CButton
                        id="btnOpenCloseSearchSideBar"
                        color="link"
                        variant="ghost"
                        size="sm"
                        class="no-shadow"
                        style="margin: 4px 0 3px 0"
                        @click="toggleNav()"
                    ><i class="far fa-chevron-double-right fa-lg text-white" />
                    </CButton>
                </CCardHeader>
                <CCardBody class="p-0">
                    <div class="pt-3 px-3">
                        <slot name="searchSideBar" />
                    </div>
                    <div class="sticky-bottom p-3" style="background-color: white; border-top: 1px solid #bdc3c7" v-if="visibleSearchSideBarFooter === true">
                        <slot name="searchSideBarFooter" />
                    </div>
                </CCardBody> 
                <!-- <CCardFooter class="sticky-bottom">
                    
                </CCardFooter> -->
            </CCard>
        </div>

        <div id="main">
            <slot name="main" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'CBCSearchSideBar',
    props: {
        isOpen: {
            type: Boolean,
            default: false
        },
        visibleSearchSideBarFooter: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
        }
    },
    created() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        });
    },
    mounted() {
        if(this.isOpen === true) this.openNav();
    },
    beforeDestroy() { 
        window.removeEventListener('resize', this.onResize); 
    },
    methods: {
        onResize() {
            var opened = document.getElementById("searchSideBar").classList.contains('opened');
            
            if(window.innerWidth < 992) { // isMobile
                document.getElementById("main").classList.remove('opened');
                document.querySelector('#btnOpenCloseSearchSideBar i').classList.remove('fa-chevron-double-left');
                document.querySelector('#btnOpenCloseSearchSideBar i').classList.remove('fa-chevron-double-right');

                if(opened === true) { // searchSideBar açık
                    document.querySelector('#btnOpenCloseSearchSideBar i').classList.add('fa-chevron-double-down');
                } else { // searchSideBar kapalı
                    document.querySelector('#btnOpenCloseSearchSideBar i').classList.add('fa-chevron-double-up');
                }
            } else { // isDesktop
                if(opened === true) { // searchSideBar açık
                    document.getElementById("main").classList.add('opened');
                    document.querySelector('#btnOpenCloseSearchSideBar i').classList.remove('fa-chevron-double-up');
                    document.querySelector('#btnOpenCloseSearchSideBar i').classList.remove('fa-chevron-double-down');
                    document.querySelector('#btnOpenCloseSearchSideBar i').classList.add('fa-chevron-double-right');
                } else { // searchSideBar kapalı
                    document.getElementById("main").classList.remove('opened');
                    document.querySelector('#btnOpenCloseSearchSideBar i').classList.remove('fa-chevron-double-up');
                    document.querySelector('#btnOpenCloseSearchSideBar i').classList.remove('fa-chevron-double-down');
                    document.querySelector('#btnOpenCloseSearchSideBar i').classList.add('fa-chevron-double-left');
                }
            }
        },
        openNav() {
            document.getElementById("searchSideBar").classList.add('opened');

            if(window.innerWidth < 992) { // isMobile
                document.querySelector('#btnOpenCloseSearchSideBar i').classList.remove('fa-chevron-double-up');
                document.querySelector('#btnOpenCloseSearchSideBar i').classList.add('fa-chevron-double-down');
            } else { // isDesktop
                document.getElementById("main").classList.add('opened');
                document.querySelector('#btnOpenCloseSearchSideBar i').classList.remove('fa-chevron-double-left');
                document.querySelector('#btnOpenCloseSearchSideBar i').classList.add('fa-chevron-double-right');
            }
        },
        closeNav() {
            document.getElementById("searchSideBar").classList.remove('opened');

            if(window.innerWidth < 992) { // isMobile
                document.querySelector('#btnOpenCloseSearchSideBar i').classList.remove('fa-chevron-double-down');
                document.querySelector('#btnOpenCloseSearchSideBar i').classList.add('fa-chevron-double-up');
            } else { // isDesktop
                document.getElementById("main").classList.remove('opened');
                document.querySelector('#btnOpenCloseSearchSideBar i').classList.remove('fa-chevron-double-right');
                document.querySelector('#btnOpenCloseSearchSideBar i').classList.add('fa-chevron-double-left');
            }
        },
        toggleNav() {
            var opened = document.getElementById("searchSideBar").classList.contains('opened');

            if(opened === true) { // searchSideBar açık
                this.closeNav();
            } else { // searchSideBar kapalı
                this.openNav();
            }
        }
    }
};
</script>

<style lang="scss">
.search-sidebar {
    height: 100%;
    width: 400px;
    position: fixed;
    z-index: 1;
    top: 0;
    right: -400px;
    background-color: #fff;
    overflow-x: hidden;
    padding-top: 57px;
    transition: 0.5s;

    &.opened {
        right: 0;
    }
    
    .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }
}

@media (max-width: 991px) {
    .search-sidebar {
        bottom: calc(-100% + 60px)!important;
        width: 100%!important;
        right: 0!important;
        top: unset!important;
        padding-top: unset!important;

        &.opened {
            bottom: calc((-100% + 100%) - 57px)!important;
        }
    }
}

#main {
    transition: margin-right .5s;

    &.opened {
        margin-right: 400px;
    }
}

@media (max-width: 991px) {
    #main {
        margin-right: 0!important;
    }
}
</style>
