<template>
    <div class="c-app">
        <div class="container d-flex flex-column justify-content-center align-items-center">
            <img src="img/bisigorta_logo_white.png" alt="" style="width: 200px; height: auto"/>
            <div class="mt-5 d-grid gap-2">
                <cbcinput-vue 
                    v-model="login.form.email"
                    :id="login.fields.email.id"
                    :name="login.fields.email.name"
                    :type="login.fields.email.type"
                    :ref="login.fields.email.ref"
                    :options="login.fields.email.options"
                    :disabled="login.disabled"
                />
                <cbcinput-vue 
                    v-model="login.form.password"
                    :id="login.fields.password.id"
                    :name="login.fields.password.name"
                    :type="login.fields.password.type"
                    :ref="login.fields.password.ref"
                    :options="login.fields.password.options"
                    :disabled="login.disabled"
                />
                <CButton 
                    id="btnLogin"
                    color="light"
                    class="mt-2 font-weight-bold"
                    size="lg"
                    :disabled="login.disabled" 
                    @click="methodLogin()"
                >Giriş Yap
                </CButton>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

const md5 = require('md5');

export default {
    name: 'Login',
    components: {
    },
    data() {
        return {
            login: {
                disabled: false,
                fields: {
                    email: {
                        id: 'email',
                        name: 'email',
                        type: 'email',
                        ref: 'email',
                        options: {
                            placeholder: 'E-Posta',
                            width: '350px',
                            height: '50px',
                            color: 'white',
                            backgroundColor: 'transparent',
                            placeholderColor: 'white',
                            focusColor: 'white',
                            fontSize: '16px',
                            maxlength: 50,
                            shaker: true,
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'fontawesome',
                                    src: ['fal', 'envelope'],
                                    size: 'lg',
                                    color: 'white'
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
                            validRegExp: {
                                status: true,
                                regexp: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                errorMessage: 'Hatalı e-posta formatı!',
                            }
                        }
                    },
                    password: {
                        id: 'password',
                        name: 'password',
                        type: 'password',
                        ref: 'password',
                        options: {
                            placeholder: 'Şifre',
                            width: '350px',
                            height: '50px',
                            color: 'white',
                            backgroundColor: 'transparent',
                            placeholderColor: 'white',
                            focusColor: 'white',
                            fontSize: '16px',
                            shaker: true,
                            passwordEyeButton: {
                                status: true,
                                color: 'white'
                            },
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'fontawesome',
                                    src: ['far', 'key'],
                                    size: 'lg',
                                    color: 'white'
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
                    email: {
                        value: '',
                        valid: null
                    },
                    password: {
                        value: '',
                        valid: null
                    }
                }
            }
        };
    },
    mounted() {
        document.getElementById('email').focus(); // Sayfa açıldığında e-posta alanına focus yaptık
        document.getElementById('email').addEventListener('keyup', function(event) {
            if (event.keyCode === 13) { // Basılan tuş'un keyCode değeri 13 (Yani enter) ise
                event.preventDefault();
                document.getElementById('password').focus(); // password input'a focus oluyoruz.
            }
        });
        
        document.getElementById('password').addEventListener('keyup', function(event) {
            if (event.keyCode === 13) { // Basılan tuş'un keyCode değeri 13 (Yani enter) ise
                event.preventDefault();
                document.getElementById('btnLogin').click(); // Login button'un click özelliğini tetikliyoruz.
            }
        });
    },
    methods: {
        async methodLogin() {
            var inputErrors = [];

            this.$refs.email.validControl(true);
            inputErrors.push(this.login.form.email.valid);

            this.$refs.password.validControl(true);
            inputErrors.push(this.login.form.password.valid);

            // inputErrors array içinde false olan varsa
            if(inputErrors.includes(false) === true) return;

            var form = {
                email: this.login.form.email.value,
                password: md5(this.login.form.password.value)
            }

            this.$Progress.start();
            this.login.disabled = true;
            var loginResult = await axios.post(process.env.VUE_APP_API_URL + 'admin/login', form);
            this.$Progress.finish();
            this.login.disabled = false;

            if(loginResult.data.result === 'success') {
                this.$store.commit('user', loginResult.data.user);
                this.$router.push('/anasayfa')

                /* Swal.fire({
                    icon: loginResult.data.result,
                    title: 'Giriş',
                    html: loginResult.data.message,
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    didClose: () => this.$router.push('/anasayfa')
                }); */
            } else {
                Swal.fire({
                    icon: loginResult.data.result,
                    title: loginResult.data.message,
                    toast: true,
                    position: 'bottom-start',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                });
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.c-app {
    background-image: url('../../public/img/bg.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
}
</style>