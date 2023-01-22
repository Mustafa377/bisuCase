<template>
	<div class="p-4">
        <CRow>
            <!-- Profil Düzenle -->
			<CCol md="8">
                <CCard>
                    <CCardHeader class="d-flex align-items-center justify-content-between card-header-radius">
                        <span class="font-weight-bold">Profil Düzenle</span>
                        <div class="card-header-actions"></div>
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol md="6">
                                <cbcinput-vue 
                                    v-model="profile.form.name"
                                    :id="profile.fields.name.id"
                                    :name="profile.fields.name.name"
                                    :type="profile.fields.name.type"
                                    :ref="profile.fields.name.ref"
                                    :options="profile.fields.name.options"
                                    :disabled="profile.disabled"/>
                            </CCol>
                            <CCol md="6">
                                <cbcinput-vue 
                                    v-model="profile.form.lastname"
                                    :id="profile.fields.lastname.id"
                                    :name="profile.fields.lastname.name"
                                    :type="profile.fields.lastname.type"
                                    :ref="profile.fields.lastname.ref"
                                    :options="profile.fields.lastname.options"
                                    :disabled="profile.disabled"/>
                            </CCol>
                            <CCol md="6">
                                <cbcinput-vue 
                                    v-model="profile.form.email"
                                    :id="profile.fields.email.id"
                                    :name="profile.fields.email.name"
                                    :type="profile.fields.email.type"
                                    :ref="profile.fields.email.ref"
                                    :options="profile.fields.email.options"
                                    :disabled="profile.disabled"/>
                            </CCol>
                            <CCol md="6">
                                <p class="m-0 font-weight-bold">Yetki</p>
                                <p class="m-0 mt-2 font-weight-bold">{{ accountTypes[profile.form.accountType] }}</p>
                            </CCol>
                            <CCol md="12 mt-2">
                                <CButton 
                                    color="primary" 
                                    block
                                    :disabled="profile.disabled" 
                                    @click="updateProfile()"
                                ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="profile.disabled"></i>Değiştir
                                </CButton>
                            </CCol>
                        </CRow>
                    </CCardBody>
                </CCard>
            </CCol>
            
            <!-- Şifre Değiştir -->
            <CCol md="4">
                <CCard>
                    <CCardHeader class="d-flex align-items-center justify-content-between card-header-radius">
                        <span class="font-weight-bold">Şifre Değiştir</span>
                        <div class="card-header-actions"></div>
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol md="12">
                                <cbcinput-vue 
                                    v-model="password.form.oldPassword"
                                    :id="password.fields.oldPassword.id"
                                    :name="password.fields.oldPassword.name"
                                    :type="password.fields.oldPassword.type"
                                    :ref="password.fields.oldPassword.ref"
                                    :options="password.fields.oldPassword.options"
                                    :disabled="password.disabled"/>
                            </CCol>
                            <CCol md="12">
                                <cbcinput-vue 
                                    v-model="password.form.newPassword"
                                    :id="password.fields.newPassword.id"
                                    :name="password.fields.newPassword.name"
                                    :type="password.fields.newPassword.type"
                                    :ref="password.fields.newPassword.ref"
                                    :options="password.fields.newPassword.options"
                                    :disabled="password.disabled"/>
                            </CCol>
                            <CCol md="12">
                                <cbcinput-vue 
                                    v-model="password.form.newPasswordAgain"
                                    :id="password.fields.newPasswordAgain.id"
                                    :name="password.fields.newPasswordAgain.name"
                                    :type="password.fields.newPasswordAgain.type"
                                    :ref="password.fields.newPasswordAgain.ref"
                                    :options="password.fields.newPasswordAgain.options"
                                    :disabled="password.disabled"/>
                            </CCol>
                            <CCol md="12 mt-2">
                                <CButton 
                                    color="primary" 
                                    block
                                    :disabled="password.disabled" 
                                    @click="updatePassword()"
                                ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="password.disabled"></i>Değiştir
                                </CButton>
                            </CCol>
                        </CRow>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

const md5 = require('md5');

export default {
    name: 'MyAccount',
    components: {
    },
    data() {
        return {
            accountTypes: {
                admin: 'Yönetici',
                partner: 'Partner'
            },
            profile: {
                disabled: false,
                fields: {
                    name: {
                        id: 'name',
                        name: 'name',
                        type: 'text',
                        ref: 'name',
                        options: {
                            label: 'Ad <span style=\'color: red\'>*</span>',
                            labelBold: true,
                            placeholder: 'Adınız',
                            maxlength: 50,
                            shaker: true,
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'fontawesome',
                                    src: ['far', 'user']
                                }
                            },
                            validRequired: {
                                status: true,
                                errorMessage: 'Bu alanı boş bırakamazsınız!'
                            },
                            validLengthMin: {
                                status: true,
                                number: 2,
                                errorMessage: 'Bu alana en az <strong>2</strong> karakter girebilirsiniz!'
                            }
                        }
                    },
                    lastname: {
                        id: 'lastname',
                        name: 'lastname',
                        type: 'text',
                        ref: 'lastname',
                        options: {
                            label: 'Soyad <span style=\'color: red\'>*</span>',
                            labelBold: true,
                            placeholder: 'Soyadınız',
                            maxlength: 50,
                            shaker: true,
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'fontawesome',
                                    src: ['far', 'user']
                                }
                            },
                            validRequired: {
                                status: true,
                                errorMessage: 'Bu alanı boş bırakamazsınız!'
                            },
                            validLengthMin: {
                                status: true,
                                number: 2,
                                errorMessage: 'Bu alana en az <strong>2</strong> karakter girebilirsiniz!'
                            }
                        }
                    },
                    email: {
                        id: 'email',
                        name: 'email',
                        type: 'email',
                        ref: 'email',
                        options: {
                            label: 'E-Posta Adresi <span style=\'color: red\'>*</span>',
                            labelBold: true,
                            placeholder: 'E-Posta',
                            shaker: true,
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'fontawesome',
                                    src: ['fal', 'envelope'],
                                }
                            },
                            validRequired: {
                                status: true,
                                errorMessage: 'Bu alanı boş bırakamazsınız!'
                            },
                            validLengthMin: {
                                status: true,
                                number: 10,
                                errorMessage: 'Bu alana en az <strong>10</strong> karakter girebilirsiniz!'
                            },
                            validLengthMax: {
                                status: true,
                                number: 50,
                                errorMessage: 'Bu alana en fazla <strong>50</strong> karakter girebilirsiniz!'
                            },
                            validRegExp: {
                                status: true,
                                regexp: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                errorMessage: 'Hatalı e-posta formatı!',
                            }
                        }
                    }
                },
                form: {
                    name: {
                        value: '',
                        valid: null
                    },
                    lastname: {
                        value: '',
                        valid: null
                    },
                    email: {
                        value: '',
                        valid: null
                    },
                    accountType: ''
                }
            },
            password: {
                disabled: false,
                fields: {
                    oldPassword: {
                        id: 'oldPassword',
                        name: 'oldPassword',
                        type: 'password',
                        ref: 'oldPassword',
                        options: {
                            label: 'Eski Şifre <span style=\'color: red\'>*</span>',
                            labelBold: true,
                            placeholder: 'Eski Şifre',
                            shaker: true,
                            passwordEyeButton: {
                                status: true
                            },
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'fontawesome',
                                    src: ['far', 'key']
                                }
                            },
                            validRequired: {
                                status: true,
                                errorMessage: 'Bu alanı boş bırakamazsınız!'
                            },
                            validLengthMin: {
                                status: true,
                                number: 6,
                                errorMessage: 'Bu alana en az <strong>6</strong> karakter girebilirsiniz!'
                            },
                            validLengthMax: {
                                status: true,
                                number: 25,
                                errorMessage: 'Bu alana en fazla <strong>25</strong> karakter girebilirsiniz!'
                            }
                        }
                    },
                    newPassword: {
                        id: 'newPassword',
                        name: 'newPassword',
                        type: 'password',
                        ref: 'newPassword',
                        options: {
                            label: 'Yeni Şifre <span style=\'color: red\'>*</span>',
                            labelBold: true,
                            placeholder: 'Yeni Şifre',
                            shaker: true,
                            passwordEyeButton: {
                                status: true
                            },
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'fontawesome',
                                    src: ['far', 'key']
                                }
                            },
                            validRequired: {
                                status: true,
                                errorMessage: 'Bu alanı boş bırakamazsınız!'
                            },
                            validLengthMin: {
                                status: true,
                                number: 6,
                                errorMessage: 'Bu alana en az <strong>6</strong> karakter girebilirsiniz!'
                            },
                            validLengthMax: {
                                status: true,
                                number: 25,
                                errorMessage: 'Bu alana en fazla <strong>25</strong> karakter girebilirsiniz!'
                            }
                        }
                    },
                    newPasswordAgain: {
                        id: 'newPasswordAgain',
                        name: 'newPasswordAgain',
                        type: 'password',
                        ref: 'newPasswordAgain',
                        options: {
                            label: 'Yeni Şifre (Tekrar) <span style=\'color: red\'>*</span>',
                            labelBold: true,
                            placeholder: 'Yeni Şifre (Tekrar)',
                            shaker: true,
                            passwordEyeButton: {
                                status: true
                            },
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'fontawesome',
                                    src: ['far', 'key']
                                }
                            },
                            validRequired: {
                                status: true,
                                errorMessage: 'Bu alanı boş bırakamazsınız!'
                            },
                            validLengthMin: {
                                status: true,
                                number: 6,
                                errorMessage: 'Bu alana en az <strong>6</strong> karakter girebilirsiniz!'
                            },
                            validLengthMax: {
                                status: true,
                                number: 25,
                                errorMessage: 'Bu alana en fazla <strong>25</strong> karakter girebilirsiniz!'
                            }
                        }
                    },
                },
                form: {
                    oldPassword: {
                        value: '',
                        valid: null
                    },
                    newPassword: {
                        value: '',
                        valid: null
                    },
                    newPasswordAgain: {
                        value: '',
                        valid: null
                    }
                }
            }
        }
    },
    created() {
        this.getProfile();
    },
    methods: {
        async getProfile() {
            this.$Progress.start();
            this.profile.disabled = true;
            this.password.disabled = true;
            var profileResult = await axios.get(process.env.VUE_APP_API_URL + 'admin/profile');
            this.$Progress.finish();
            this.profile.disabled = false;
            this.password.disabled = false;

            if(profileResult.data.result === 'success') {
                this.profile.form = {
                    name: { value: profileResult.data.user.name, valid: true },
                    lastname: { value: profileResult.data.user.lastname, valid: true },
                    email: { value: profileResult.data.user.email, valid: true },
                    accountType: profileResult.data.user.accountType
                }
            } else {
                Swal.fire({
                    icon: profileResult.data.result,
                    title: profileResult.data.message,
                    width: 500,
                    toast: true,
                    position: 'bottom-start',
                    showConfirmButton: false,
                    timer: 5000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                });
            }
        },
        async updateProfile() {
            var inputErrors = [];

            this.$refs.name.validControl(true);
            inputErrors.push(this.profile.form.name.valid);

            this.$refs.lastname.validControl(true);
            inputErrors.push(this.profile.form.lastname.valid);

            this.$refs.email.validControl(true);
            inputErrors.push(this.profile.form.email.valid);

            // inputErrors array içinde false olan varsa
            if(inputErrors.includes(false) === true) return;

            var form = {
                name: this.profile.form.name.value, 
                lastname: this.profile.form.lastname.value,
                email: this.profile.form.email.value
            }

            this.$Progress.start();
            this.profile.disabled = true;
            var updateProfileResult = await axios.put(process.env.VUE_APP_API_URL + 'admin/profile', form);
            this.$Progress.finish();
            this.profile.disabled = false;

            if(updateProfileResult.data.result === 'success') this.$store.commit('user', updateProfileResult.data.user);

            Swal.fire({
                icon: updateProfileResult.data.result,
                title: updateProfileResult.data.message,
                width: 500,
                toast: true,
                position: 'bottom-start',
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            });
        },
        async updatePassword() {
            var inputErrors = [];

            this.$refs.oldPassword.validControl(true);
            inputErrors.push(this.password.form.oldPassword.valid);

            this.$refs.newPassword.validControl(true);
            inputErrors.push(this.password.form.newPassword.valid);

            this.$refs.newPasswordAgain.validControl(true);
            inputErrors.push(this.password.form.newPasswordAgain.valid);

            // inputErrors array içinde false olan varsa
            if(inputErrors.includes(false) === true) return;

            var form = {
                oldPassword: md5(this.password.form.oldPassword.value),
                newPassword: md5(this.password.form.newPassword.value)
            }

            this.$Progress.start();
            this.password.disabled = true;
            var updatePasswordResult = await axios.put(process.env.VUE_APP_API_URL + 'admin/password', form);
            this.$Progress.finish();
            this.password.disabled = false;

            if(updatePasswordResult.data.result === 'success') {
                this.password.form.oldPassword.value = '';
                this.password.form.oldPassword.valid = null;
                this.password.form.newPassword.value = '';
                this.password.form.newPassword.valid = null;
                this.password.form.newPasswordAgain.value = '';
                this.password.form.newPasswordAgain.valid = null;
            }

            Swal.fire({
                icon: updatePasswordResult.data.result,
                title: updatePasswordResult.data.message,
                width: 500,
                toast: true,
                position: 'bottom-start',
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            });
        }
    }
}
</script>

<style lang="scss">

</style>