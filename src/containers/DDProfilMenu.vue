<template>
    <div>
        <CDropdown inNav class="c-header-nav-items" placement="bottom-end" add-menu-classes="mt-2 pt-0">
            <template #toggler>
                <CHeaderNavLink>
                    <i class="fas fa-user-circle fa-3x"></i>
                </CHeaderNavLink>
            </template>
            <p class="mt-1 mb-0 text-center">Hoşgeldin</p>
            <h6 class="my-1 text-center">{{ user.name + ' ' + user.lastname }}</h6>
            <CDropdownDivider />
            <CDropdownItem @click="$router.push('/hesabim')">
                <i class="far fa-id-card fa-lg mr-2"></i>Hesabım
            </CDropdownItem>
            <CDropdownItem @click.native="onClickLogout">
                <i class="fas fa-sign-out-alt fa-lg mr-2"></i>Çıkış
            </CDropdownItem>

            <!-- <CDropdownHeader tag="div" class="text-center" color="light">
                <h6 class="m-0"><strong>Hesap</strong></h6>
            </CDropdownHeader>
            <CDropdownItem>
                <CIcon name="cil-bell" /> Güncellemeler
                <CBadge color="info" class="mfs-auto">{{ itemsCount }}</CBadge>
            </CDropdownItem>
            <CDropdownItem>
                <CIcon name="cil-envelope-open" /> Mesajlar
                <CBadge color="success" class="mfs-auto">{{ itemsCount }}</CBadge>
            </CDropdownItem>
            <CDropdownItem>
                <CIcon name="cil-task" /> Görevler
                <CBadge color="danger" class="mfs-auto">{{ itemsCount }}</CBadge>
            </CDropdownItem>
            <CDropdownItem>
                <CIcon name="cil-comment-square" /> Yorumlar
                <CBadge color="warning" class="mfs-auto">{{ itemsCount }}</CBadge>
            </CDropdownItem>
            <CDropdownHeader tag="div" class="text-center" color="light">
                <h6 class="m-0"><strong>Hesap</strong></h6>
            </CDropdownHeader>
            <CDropdownItem> <CIcon name="cil-settings" /> Ayarlar </CDropdownItem>
            <CDropdownItem>
                <CIcon name="cil-dollar" /> Ödemeler
                <CBadge color="secondary" class="mfs-auto">{{ itemsCount }}</CBadge>
            </CDropdownItem>
            <CDropdownItem>
                <CIcon name="cil-file" /> Projeler
                <CBadge color="primary" class="mfs-auto">{{ itemsCount }}</CBadge>
            </CDropdownItem>
            <CDropdownItem>
                <CIcon name="cil-shield-alt" /> Güvenlik
            </CDropdownItem> -->
        </CDropdown>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'DDProfilMenu',
    data() {
        return {
            user: this.$store.state.user 
        };
    },
    watch: {
        '$store.state.user': function(val) {
            this.user = val;
        }
    },
    methods: {
        onClickLogout() {
            Swal.fire({
                icon: 'question',
                title: 'Çıkış',
                html: 'Çıkış yapmak istiyor musunuz?',
                confirmButtonText: 'Evet',
                showCancelButton: true,
                cancelButtonText: 'Hayır',
                cancelButtonColor: '#1565C0',
                confirmButtonColor: '#ce1414'
            }).then(result => {
                if(result.isConfirmed) axios.get(process.env.VUE_APP_API_URL + 'admin/logout').then(response => this.$router.push('/login'));
            });
        }
    }
};
</script>

<style lang="scss">

</style>