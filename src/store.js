import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";

Vue.use(Vuex);

Vue.prototype.moment = moment

var ls = new SecureLS({ isCompression: false });

const state = {
    sidebarShow: 'responsive',
    sidebarMinimize: false,
    user: null,
    backdropLoader: false,
    settings: null
}

const mutations = {
    toggleSidebarDesktop(state) {
        const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow);
        state.sidebarShow = sidebarOpened ? false : 'responsive';
    },
    toggleSidebarMobile(state) {
        const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow);
        state.sidebarShow = sidebarClosed ? true : 'responsive';
    },
    closeSidebar(state) {
        state.sidebarShow = false;
    },
    openSidebar(state) {
        state.sidebarShow = 'responsive';
    },
    set(state, [variable, value]) {
        state[variable] = value;
    },
    user(state, data) {
        state.user = data;
    },
    backdropLoader(state, data) {
        state.backdropLoader = data;
    },
    settings(state, data) {
        state.settings = data;
    }
}

export const actions = {
}

const getters = {
    
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    plugins: [
        createPersistedState({
            storage: {
                getItem: key => ls.get(key),
                setItem: (key, value) => ls.set(key, value),
                removeItem: key => ls.remove(key)
            }
        })
    ]
})
