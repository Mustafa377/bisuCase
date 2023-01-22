import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';
import axios from 'axios';

axios.defaults.withCredentials = true;

Vue.use(Router);

const router = new Router({
    mode: 'history', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 }),
    routes: configRoutes()
});

function configRoutes() {
    return [
        {
            path: '/',
            redirect: '/anasayfa',
            name: 'Anasayfa',
            component: () => import('@/containers/TheContainer'),
            children: [
                {
                    path: 'anasayfa',
                    name: 'Özet',
                    component: () => import('@/views/Dashboard'),
                    meta: {
                        authRequired: true
                    }
                },
                {
                    path: 'hesabim',
                    name: 'Hesabım',
                    component: () => import('@/views/MyAccount'),
                    meta: {
                        authRequired: true
                    }
                },
                {
                    path: 'teklif-talepleri',
                    redirect: '/teklif-talepleri',
                    name: 'Teklif Talepleri',
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '',
                            name: '',
                            component: () => import('@/views/operation/ProposalRequests'),
                            meta: {
                                authRequired: true
                            }
                        },
                        // {
                        //     path: 'uyeid/:memberId',
                        //     name: '',
                        //     component: () => import('@/views/operation/ProposalRequests'),
                        //     meta: {
                        //         authRequired: true
                        //     }
                        // },
                        {
                            path: 'talepno/:requestNo',
                            name: '',
                            component: () => import('@/views/operation/ProposalRequests'),
                            meta: {
                                authRequired: true
                            }
                        },
                        {
                            path: 'tip/:tip/ad/:name/soyad/:lastname/kimlikno/:identityNumber',
                            name: '',
                            component: () => import('@/views/operation/ProposalRequests'),
                            meta: {
                                authRequired: true
                            }
                        },
                        {
                            path: 'tip/:tip/unvan/:title/kimlikno/:identityNumber',
                            name: '',
                            component: () => import('@/views/operation/ProposalRequests'),
                            meta: {
                                authRequired: true
                            }
                        }
                    ]
                },
                {
                    path: 'teklif',
                    redirect: '/teklif',
                    name: 'ProposalDetail',
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '',
                            name: '',
                            component: () => import('@/views/operation/ProposalDetail'),
                            meta: {
                                authRequired: true
                            }
                        },
                        {
                            path: 'acenteTeklifNo/:agentProposalNo',
                            name: '',
                            component: () => import('@/views/operation/ProposalDetail'),
                            meta: {
                                authRequired: true
                            }
                        },
                        {
                            path: 'firmaTeklifNo/:companyProposalNo',
                            name: '',
                            component: () => import('@/views/operation/ProposalDetail'),
                            meta: {
                                authRequired: true
                            }
                        }
                    ]
                },
                {
                    path: 'policeler',
                    name: 'Poliçeler',
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '',
                            name: '',
                            component: () => import('@/views/operation/Policies'),
                            meta: {
                                authRequired: true
                            }
                        },
                        {
                            path: 'acentePoliceNo/:agentPolicyNo',
                            name: '',
                            component: () => import('@/views/operation/Policies'),
                            meta: {
                                authRequired: true
                            }
                        },
                        {
                            path: 'firmaPoliceNo/:companyPolicyNo',
                            name: '',
                            component: () => import('@/views/operation/Policies'),
                            meta: {
                                authRequired: true
                            }
                        },
                        {
                            path: ':insuredName/:insuredLastname',
                            name: '',
                            component: () => import('@/views/operation/Policies'),
                            meta: {
                                authRequired: true
                            }
                        }
                    ]
                },
                {
                    path: 'police',
                    redirect: '/police',
                    name: 'PolicyDetail',
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '',
                            name: '',
                            component: () => import('@/views/operation/PolicyDetail'),
                            meta: {
                                authRequired: true
                            }
                        },
                        {
                            path: 'acentePoliceNo/:agentPolicyNo',
                            name: '',
                            component: () => import('@/views/operation/PolicyDetail'),
                            meta: {
                                authRequired: true
                            }
                        },
                        {
                            path: 'firmaPoliceNo/:companyPolicyNo',
                            name: '',
                            component: () => import('@/views/operation/PolicyDetail'),
                            meta: {
                                authRequired: true
                            }
                        }
                    ]
                },
                {
                    path: 'uyeler',
                    name: 'Üyeler',
                    component: () => import('@/views/management/Members'),
                    meta: {
                        authRequired: true
                    }
                },
                {
                    path: 'sigortalilar',
                    name: 'Sigortalılar',
                    component: () => import('@/views/management/Insureds'),
                    meta: {
                        authRequired: true
                    }
                },
                {
                    path: 'sigorta-firmalari',
                    name: 'Sigorta Firmaları',
                    component: () => import('@/views/management/InsuranceCompanies'),
                    meta: {
                        authRequired: true
                    }
                },
                {
                    path: 'kullanicilar',
                    name: 'Kullanıcılar',
                    component: () => import('@/views/management/Users'),
                    meta: {
                        authRequired: true
                    }
                },
                {
                    path: 'partnerler',
                    name: 'Partnerler',
                    component: () => import('@/views/management/PartnerCompanies'),
                    meta: {
                        authRequired: true
                    }
                },
                {
                    path: 'yetki-gruplari',
                    name: 'Yetki Grupları',
                    component: () => import('@/views/management/Roles'),
                    meta: {
                        authRequired: true
                    }
                },
                {
                    path: 'destek-talepleri',
                    name: 'Destek Talepleri',
                    component: () => import('@/views/management/SupportRequests'),
                    meta: {
                        authRequired: true
                    }
                },
                {
                    path: 'ayarlar',
                    name: 'Ayarlar',
                    component: () => import('@/views/management/Settings'),
                    meta: {
                        authRequired: true
                    }
                }
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/views/Login')
        },
        {
            path: '/404',
            name: 'Page404',
            component: () => import('@/views/Page404')
        },
        {
            path: '/500',
            name: 'Page500',
            component: () => import('@/views/Page500')
        },
        {
            path: '/data-bridge/:channel/:data',
            name: 'DataBridge',
            component: () => import('@/views/DataBridge')
        },
    ]
}

router.beforeEach((to, from, next) => {
    if(!to.matched.length) next('/404');
    else {
        if(to.meta.authRequired === true) {
            axios.get(process.env.VUE_APP_API_URL + 'admin/session').then(response => {
                if(response.data.user.status === true) {
                    store.commit('user', response.data.user);
                    next();
                } else next('/login');
            }).catch(err => {
                console.log(err);
                next('/login');
            });
            
            /* axios.get(process.env.VUE_APP_API_URL + 'admin/roles').then(response => {
                if(response.data.result === 'success') {
                    var auths = response.data.list;

                    axios.get(process.env.VUE_APP_API_URL + 'admin/session').then(response => {
                        if(response.data.status === true && auths.filter(e => e.name === response.data.auth.name).length > 0) {
                            var data = auths.filter(e => e.name === response.data.auth.name)[0];

                            if(Object.keys(data.auths).filter(e => e === to.meta.authName).length > 0 && data.auths[to.meta.authName].list) {
                                store.commit('user', response.data);
                                next();
                            } else next('/404');
                        } else next('/login');
                    });
                } else next('/login');
            }); */
        } else next();
    }
});

export default router;