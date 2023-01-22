<template>
    <div class="custom-container">
        <cbc-searchsidebar ref="cbcsearchsidebar" :isOpen="true" :visibleSearchSideBarFooter="true">
            <template v-slot:searchSideBar>
                <CRow>
                    <CCol col="12">
                        <cbcinput-vue 
                            v-model="search.form.name"
                            :id="search.fields.name.id"
                            :name="search.fields.name.name"
                            :type="search.fields.name.type"
                            :ref="search.fields.name.ref"
                            :options="search.fields.name.options"
                            :disabled="search.disabled"/>
                    </CCol>
                    <CCol col="12">
                        <cbcinput-vue 
                            v-model="search.form.lastname"
                            :id="search.fields.lastname.id"
                            :name="search.fields.lastname.name"
                            :type="search.fields.lastname.type"
                            :ref="search.fields.lastname.ref"
                            :options="search.fields.lastname.options"
                            :disabled="search.disabled"/>
                    </CCol>
                    <CCol col="12">
                        <cbcinput-vue 
                            v-model="search.form.email"
                            :id="search.fields.email.id"
                            :name="search.fields.email.name"
                            :type="search.fields.email.type"
                            :ref="search.fields.email.ref"
                            :options="search.fields.email.options"
                            :disabled="search.disabled"/>
                    </CCol>
                    <CCol col="12">
                        <cbcinput-vue 
                            v-model="search.form.accountType"
                            :id="search.fields.accountType.id"
                            :name="search.fields.accountType.name"
                            :type="search.fields.accountType.type"
                            :ref="search.fields.accountType.ref"
                            :options="search.fields.accountType.options"
                            :disabled="search.disabled"
                        />
                    </CCol>
                    <CCol col="12">
                        <cbcinput-vue 
                            v-model="search.form.partnerCompanies"
                            :id="search.fields.partnerCompanies.id"
                            :name="search.fields.partnerCompanies.name"
                            :type="search.fields.partnerCompanies.type"
                            :ref="search.fields.partnerCompanies.ref"
                            :options="search.fields.partnerCompanies.options"
                            :disabled="search.disabled"
                        />
                    </CCol>
                    <CCol col="12">
                        <cbcinput-vue 
                            v-model="search.form.roles"
                            :id="search.fields.roles.id"
                            :name="search.fields.roles.name"
                            :type="search.fields.roles.type"
                            :ref="search.fields.roles.ref"
                            :options="search.fields.roles.options"
                            :disabled="search.disabled"
                        />
                    </CCol>
                    <CCol col="12">
                        <cbcinput-vue 
                            v-model="search.form.status"
                            :id="search.fields.status.id"
                            :name="search.fields.status.name"
                            :type="search.fields.status.type"
                            :ref="search.fields.status.ref"
                            :options="search.fields.status.options"
                            :disabled="search.disabled"/>
                    </CCol>
                </CRow>
            </template>
            <template v-slot:searchSideBarFooter>
                <CButton
                    block
                    color="primary"
                    :disabled="search.disabled"
                    @click="getUsers(true)"
                ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="search.disabled" />Ara
                </CButton>
            </template>
            <template v-slot:main>
                <CCard class="rounded-0 border-0">
                    <CCardHeader class="d-flex flex-row justify-content-between align-items-center rounded-0 border-right">
                        <span class="font-weight-bold">Kullanıcılar</span>
                        <div class="card-header-actions">
                            <CButton color="success" class="btn-coreui mr-2" :disabled="search.disabled" @click="openModal(modals.addUpdate, 'Kullanıcı Ekle', 'post')">
                                <i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="search.disabled" />Kullanıcı Ekle
                            </CButton>
                            <CButton
                                class="btn-coreui" 
                                :disabled="search.disabled"
                                @click="$refs.cbcsearchsidebar.openNav()"
                            ><i class="far fa-search fa-lg text-white" />
                            </CButton>
                        </div>
                    </CCardHeader>
                    <CCardBody class="p-0">
                        <!-- :sendToClipboard="sendToClipboard" -->
                        <ag-grid-vue
                            style="width: 100%; height: 500px"
                            class="ag-theme-balham"
                            :columnDefs="columnDefs"
                            :defaultColDef="defaultColDef"
                            :rowData="rowData"
                            :sideBar="sideBar"
                            :getContextMenuItems="getContextMenuItems"
                            :rowSelection="'multiple'"
                            :enableRangeSelection="true"
                            :statusBar="statusBar"
                            :overlayLoadingTemplate="'Yükleniyor..'"
                            :overlayNoRowsTemplate="'Kayıt bulunamadı'"
                            @grid-ready="onGridReady">
                        </ag-grid-vue>
                    </CCardBody>
                </CCard>
            </template>
        </cbc-searchsidebar>

        <CModal
            size="lg"
            :title="modals.addUpdate.title"
            :show.sync="modals.addUpdate.show"
            :closeOnBackdrop="false"
        >
            <CRow v-if="modals.addUpdate.form !== null">
                <CCol md="6" lg="4">
                    <cbcinput-vue 
                        v-model="modals.addUpdate.form.accountType"
                        :id="modals.addUpdate.fields.accountType.id"
                        :name="modals.addUpdate.fields.accountType.name"
                        :type="modals.addUpdate.fields.accountType.type"
                        :ref="modals.addUpdate.fields.accountType.ref"
                        :options="modals.addUpdate.fields.accountType.options"
                        :disabled="modals.addUpdate.disabled"
                    />
                </CCol>
                <CCol md="6" lg="4">
                    <cbcinput-vue 
                        v-model="modals.addUpdate.form.name"
                        :id="modals.addUpdate.fields.name.id"
                        :name="modals.addUpdate.fields.name.name"
                        :type="modals.addUpdate.fields.name.type"
                        :ref="modals.addUpdate.fields.name.ref"
                        :options="modals.addUpdate.fields.name.options"
                        :disabled="modals.addUpdate.disabled"/>
                </CCol>
                <CCol md="6" lg="4">
                    <cbcinput-vue 
                        v-model="modals.addUpdate.form.lastname"
                        :id="modals.addUpdate.fields.lastname.id"
                        :name="modals.addUpdate.fields.lastname.name"
                        :type="modals.addUpdate.fields.lastname.type"
                        :ref="modals.addUpdate.fields.lastname.ref"
                        :options="modals.addUpdate.fields.lastname.options"
                        :disabled="modals.addUpdate.disabled"/>
                </CCol>
                <CCol md="6" lg="4">
                    <cbcinput-vue 
                        v-model="modals.addUpdate.form.email"
                        :id="modals.addUpdate.fields.email.id"
                        :name="modals.addUpdate.fields.email.name"
                        :type="modals.addUpdate.fields.email.type"
                        :ref="modals.addUpdate.fields.email.ref"
                        :options="modals.addUpdate.fields.email.options"
                        :disabled="modals.addUpdate.disabled"/>
                </CCol>
                <CCol md="6" lg="4" v-if="modals.addUpdate.process == 'post'">
                    <cbcinput-vue 
                        v-model="modals.addUpdate.form.password"
                        :id="modals.addUpdate.fields.password.id"
                        :name="modals.addUpdate.fields.password.name"
                        :type="modals.addUpdate.fields.password.type"
                        :ref="modals.addUpdate.fields.password.ref"
                        :options="modals.addUpdate.fields.password.options"
                        :disabled="modals.addUpdate.disabled"/>
                </CCol>
                <CCol md="6" lg="4">
                    <cbcinput-vue 
                        v-model="modals.addUpdate.form.roles"
                        :id="modals.addUpdate.fields.id"
                        :name="modals.addUpdate.fields.roles.name"
                        :type="modals.addUpdate.fields.roles.type"
                        :ref="modals.addUpdate.fields.roles.ref"
                        :options="modals.addUpdate.fields.roles.options"
                        :disabled="modals.addUpdate.disabled"
                    />
                </CCol>
                <CCol md="12" lg="8" v-if="modals.addUpdate.form.accountType.value.value === 'partner'">
                    <cbcinput-vue 
                        v-model="modals.addUpdate.form.partnerCompanies"
                        :id="modals.addUpdate.fields.partnerCompanies.id"
                        :name="modals.addUpdate.fields.partnerCompanies.name"
                        :type="modals.addUpdate.fields.partnerCompanies.type"
                        :ref="modals.addUpdate.fields.partnerCompanies.ref"
                        :options="modals.addUpdate.fields.partnerCompanies.options"
                        :disabled="modals.addUpdate.disabled"/>
                </CCol>
                <CCol md="6" lg="4">
                    <cbcinput-vue 
                        v-model="modals.addUpdate.form.status"
                        :id="modals.addUpdate.fields.id"
                        :name="modals.addUpdate.fields.status.name"
                        :type="modals.addUpdate.fields.status.type"
                        :ref="modals.addUpdate.fields.status.ref"
                        :options="modals.addUpdate.fields.status.options"
                        :disabled="modals.addUpdate.disabled"
                    />
                </CCol>
            </CRow>
            <template #footer>
                <CButton
                    color="primary"
                    :disabled="modals.addUpdate.disabled"
                    @click="addUpdate()"
                ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="modals.addUpdate.disabled" />{{ modals.addUpdate.process === 'post' ? 'Ekle':'Düzenle' }}
                </CButton>
            </template>
        </CModal>

        <CModal
            size="lg"
            :title="modals.updatePassword.title"
            :show.sync="modals.updatePassword.show"
            :closeOnBackdrop="false">
            <CRow v-if="modals.updatePassword.form !== null">
                <CCol md="6">
                    <cbcinput-vue 
                        v-model="modals.updatePassword.form.newPassword"
                        :id="modals.updatePassword.fields.newPassword.id"
                        :name="modals.updatePassword.fields.newPassword.name"
                        :type="modals.updatePassword.fields.newPassword.type"
                        :ref="modals.updatePassword.fields.newPassword.ref"
                        :options="modals.updatePassword.fields.newPassword.options"
                        :disabled="modals.updatePassword.disabled"/>
                </CCol>
                <CCol md="6">
                    <cbcinput-vue 
                        v-model="modals.updatePassword.form.newPasswordAgain"
                        :id="modals.updatePassword.fields.newPasswordAgain.id"
                        :name="modals.updatePassword.fields.newPasswordAgain.name"
                        :type="modals.updatePassword.fields.newPasswordAgain.type"
                        :ref="modals.updatePassword.fields.newPasswordAgain.ref"
                        :options="modals.updatePassword.fields.newPasswordAgain.options"
                        :disabled="modals.updatePassword.disabled"/>
                </CCol>
            </CRow>
            <template #footer>
                <CButton
                    color="primary"
                    :disabled="modals.updatePassword.disabled"
                    @click="updatePassword()"
                ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="modals.updatePassword.disabled" />Değiştir
                </CButton>
            </template>
        </CModal>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import moment from 'moment';
import { AgGridVue } from 'ag-grid-vue';

const md5 = require('md5');

export default {
    name: 'Users',
    components: {
        AgGridVue,
        AgGridCellSwitcher: {
            template: `
                <label class="switch">
                    <input type="checkbox" @change="chkChangedHandler($event)" v-bind="[params.data.status === true && {'checked':true}]">
                    <span class="slider round"></span>
                </label>
            `,
            methods: {
                chkChangedHandler(event) {
                    this.params.changed(this.params.data._id, this.params.data.sid, this.params.data.name, this.params.data.lastname, event.target.checked);
                }
            }
        }
    },
    data() {
        var _this = this;

        return {
            columnDefs: [
                {
                    field: 'status',
                    cellRenderer: 'AgGridCellSwitcher',
                    cellRendererParams: {
                        changed: function(_id, sid, name, lastname, checked) {
                            _this.changeStatus(_id, sid, name, lastname, checked);
                        }
                    },
                    cellStyle: () => { return { display: 'flex', alignItems: 'center', justifyContent: 'center' } },
                    headerName: 'Durum',
                    width: 80
                },
                {
                    field: 'name',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    headerName: 'Ad',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 120
                },
                {
                    field: 'lastname',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    headerName: 'Soyad',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 120
                },
                {
                    field: 'email',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    headerName: 'E-Posta',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 180
                },
                {
                    field: 'accountType',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    cellRenderer: params => {
                        if(params.data.accountType === 'admin') return 'Yönetici';
                        else if(params.data.accountType === 'partner') return 'Partner';
                    },
                    headerName: 'Hesap Tipi',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 120
                },
                {
                    field: 'role',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    cellRenderer: params => {
                        return params.data.role.name
                    },
                    headerName: 'Rol',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 130
                },
                {
                    field: 'partnerCompanies',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    cellRenderer: params => {
                        return params.data.partnerCompanies && params.data.partnerCompanies.title
                    },
                    headerName: 'Partner Kurum',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 160
                },
                {
                    field: 'registered',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    cellRenderer: params => {
                        return moment(new Date(params.value)).format("DD.MM.YYYY - HH:mm");
                    },
                    headerName: 'Kayıt Tarihi',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 140
                }
            ],
            defaultColDef: {
                sortable: true,
                resizable: true,
                filter: true,
            },
            rowData: [],
            sideBar: {
                toolPanels: [
                    {
                        id: 'columns',
                        labelDefault: 'Sütunlar',
                        labelKey: 'columns',
                        iconKey: 'columns',
                        toolPanel: 'agColumnsToolPanel'
                    },
                    {
                        id: 'filters',
                        labelDefault: 'Filtreler',
                        labelKey: 'filters',
                        iconKey: 'filter',
                        toolPanel: 'agFiltersToolPanel'
                    }
                ],
                defaultToolPanel: ''
            },
            statusBar: {
                statusPanels: [
                    {
                        statusPanel: 'agTotalAndFilteredRowCountComponent',
                        align: 'left'
                    },
                    {
                        statusPanel: 'agTotalRowCountComponent',
                        align: 'center',
                    },
                    { statusPanel: 'agFilteredRowCountComponent' },
                    { statusPanel: 'agSelectedRowCountComponent' },
                    { statusPanel: 'agAggregationComponent' }
                ]
            },
            search: {
                disabled: false,
                fields: {
                    name: {
                        id: 'name',
                        name: 'name',
                        type: 'text',
                        ref: 'name',
                        options: {
                            /* label: 'Ad',
                            labelBold: true, */
                            placeholder: 'Ad',
                            shaker: true,
                            onlyLetter: true,
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'fontawesome',
                                    src: ['far', 'user']
                                }
                            },
                        }
                    },
                    lastname: {
                        id: 'lastname',
                        name: 'lastname',
                        type: 'text',
                        ref: 'lastname',
                        options: {
                            /* label: 'Soyad',
                            labelBold: true, */
                            placeholder: 'Soyad',
                            shaker: true,
                            onlyLetter: true,
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'fontawesome',
                                    src: ['far', 'user']
                                }
                            },
                        }
                    },
                    email: {
                        id: 'email',
                        name: 'email',
                        type: 'email',
                        ref: 'email',
                        options: {
                            /* label: 'E-Posta Adresi',
                            labelBold: true, */
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
                        }
                    },
                    partnerCompanies: {
                        id: 'partnerCompanies',
                        name: 'partnerCompanies',
                        type: 'select',
                        ref: 'partnerCompanies',
                        label: 'Partner Kurum',
                        options: {
                            selectSettings: {
                                placeholder: 'Partner Kurum seçin',
                                showLabels: true,
                                selectedLabel: 'Seçildi',
                                deselectLabel: 'Kaldır',
                                allowEmpty: true
                            },
                            shaker: true,
                            selectOptions: [],
                        },
                    },
                    accountType: {
                        id: 'accountType',
                        name: 'accountType',
                        type: 'select',
                        ref: 'accountType',
                        label: 'Hesap Tipi',
                        options: {
                            /* label: 'Hesap Tipi <span style=\'color: red\'>*</span>',
                            labelBold: true, */
                            selectSettings: {
                                placeholder: 'Hesap Tipi seçin',
                                showLabels: true,
                                selectedLabel: 'Seçildi',
                                deselectLabel: 'Kaldır',
                                allowEmpty: true
                            },
                            selectOptions: [
                                { value: 'admin', label: 'Yönetici' },
                                { value: 'partner', label: 'Partner' }
                            ],
                            shaker: true
                        },
                    },
                    roles: {
                        id: 'roles',
                        name: 'roles',
                        type: 'select',
                        ref: 'roles',
                        label: 'Rol',
                        options: {
                            /* label: 'Rol <span style=\'color: red\'>*</span>',
                            labelBold: true, */
                            selectSettings: {
                                placeholder: 'Rol seçin',
                                showLabels: true,
                                selectedLabel: 'Seçildi',
                                deselectLabel: 'Kaldır',
                                allowEmpty: true,
                            },
                            selectOptions: [],
                            shaker: true
                        },
                    },
                    status: {
                        id: 'status',
                        name: 'status',
                        type: 'select',
                        ref: 'status',
                        label: 'Durum',
                        options: {
                            /* label: 'Durum <span style=\'color: red\'>*</span>',
                            labelBold: true, */
                            selectSettings: {
                                placeholder: 'Durum seçin',
                                showLabels: true,
                                selectedLabel: 'Seçildi',
                                deselectLabel: 'Kaldır',
                                allowEmpty: true,
                            },
                            selectOptions: [
                                { value: true, label: 'Aktif' },
                                { value: false, label: 'Pasif' }
                            ],
                            shaker: true
                        }
                    }
                },
                form: {
                    name: { value: '', valid: null },
                    lastname: { value: '', valid: null },
                    email: { value: '', valid: null },
                    partnerCompanies: { value: '', valid: null },
                    accountType: { value: '', valid: null },
                    roles: { value: '', valid: null },
                    status: { value: '', valid: null }
                }
            },
            modals: {
                addUpdate: {
                    show: false,
                    title: '',
                    process: '',
                    disabled: false,
                    watchDisabled: false,
                    fields: {
                        name: {
                            id: 'name',
                            name: 'name',
                            type: 'text',
                            ref: 'name',
                            options: {
                                label: 'Ad <span style=\'color: red\'>*</span>',
                                labelBold: true,
                                placeholder: 'Ad girin',
                                maxlength: 50,
                                shaker: true,
                                onlyLetter: true,
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
                                placeholder: 'Soyad girin',
                                maxlength: 50,
                                shaker: true,
                                onlyLetter: true,
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
                                placeholder: 'E-Posta girin',
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
                                    regexp: new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
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
                                label: 'Şifre <span style=\'color: red\'>*</span>',
                                labelBold: true,
                                placeholder: 'Şifre girin',
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
                        accountType: {
                            id: 'accountType',
                            name: 'accountType',
                            type: 'select',
                            ref: 'accountType',
                            label: 'Hesap Tipi',
                            options: {
                                label: 'Hesap Tipi <span style=\'color: red\'>*</span>',
                                labelBold: true,
                                shaker: true,
                                selectOptions: [
                                    { value: 'admin', label: 'Yönetici' },
                                    { value: 'partner', label: 'Partner' }
                                ],
                                validRequired: {
                                    status: true,
                                    errorMessage: 'Bu alanı boş geçemezsiniz!'
                                }
                            },
                        },
                        partnerCompanies: {
                            id: 'partnerCompanies',
                            name: 'partnerCompanies',
                            type: 'select',
                            ref: 'partnerCompanies',
                            label: 'Partner Kurum',
                            options: {
                                selectSettings: {
                                    selectedLabel: 'Seçildi',
                                    deselectLabel: 'Kaldır',
                                    showLabels: true,
                                    allowEmpty: true
                                },
                                label: 'Partner Kurum <span style=\'color: red\'>*</span>',
                                labelBold: true,
                                shaker: true,
                                selectOptions: [],
                                validRequired: {
                                    status: true,
                                    errorMessage: 'Bu alanı boş geçemezsiniz!'
                                }
                            },
                        },
                        roles: {
                            id: 'roles',
                            name: 'roles',
                            type: 'select',
                            ref: 'roles',
                            label: 'Rol',
                            options: {
                                label: 'Rol <span style=\'color: red\'>*</span>',
                                labelBold: true,
                                shaker: true,
                                selectOptions: [],
                                validRequired: {
                                    status: true,
                                    errorMessage: 'Bu alanı boş geçemezsiniz!'
                                }
                            },
                        },
                        status: {
                            id: 'status',
                            name: 'status',
                            type: 'select',
                            ref: 'status',
                            label: 'Durum',
                            options: {
                                label: 'Durum <span style=\'color: red\'>*</span>',
                                labelBold: true,
                                shaker: true,
                                selectOptions: [
                                    { value: true, label: 'Aktif' },
                                    { value: false, label: 'Pasif' }
                                ],
                                validRequired: {
                                    status: true,
                                    errorMessage: 'Bu alanı boş geçemezsiniz!'
                                }
                            }
                        }
                    },
                    form: null
                },
                updatePassword: {
                    show: false,
                    title: '',
                    process: '',
                    disabled: false,
                    watchDisabled: false,
                    fields: {
                        newPassword: {
                            id: 'newPassword',
                            name: 'newPassword',
                            type: 'password',
                            ref: 'newPassword',
                            options: {
                                label: 'Yeni Şifre <span style=\'color: red\'>*</span>',
                                labelBold: true,
                                placeholder: 'Yeni şifre girin',
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
                                label: 'Yeni Şifre Tekrar <span style=\'color: red\'>*</span>',
                                labelBold: true,
                                placeholder: 'Yeni şifreyi tekrar girin',
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
                                },
                                validEqualValue: {
                                    status: true,
                                    value: '',
                                    errorMessage: 'Şifreler eşleşmiyor!'
                                }
                            }
                        }
                    },
                    form: null
                }
            }
        };
    },
    created() {
        this.getRoles();
        this.getUsers();
        this.getPartnerCompanies();
    },
    watch: {
        'modals.updatePassword.form.newPassword.value': function(val) { // Password input'a giriş yapıldığında, Password Again Input'un value'da kontrol ediliyor.
            if(this.modals.updatePassword.watchDisabled === true) return;

            this.modals.updatePassword.fields.newPasswordAgain.options.validEqualValue.value = val;
            this.$refs.newPasswordAgain.validControl();
        },
        'modals.addUpdate.form.accountType.value.value': function(val) { // 
            if (this.modals.addUpdate.form.accountType.value.value === 'admin' && this.modals.addUpdate.form.partnerCompanies.value !== '') {
                this.modals.addUpdate.form.partnerCompanies = { value: '', valid: null };
            }
        }
    },
    methods: {
        onGridReady(params) {
            this.gridApi = params.api;
            this.gridColumnApi = params.columnApi;
        },
        getContextMenuItems(params) {
            const _this = this;

            return [
                {
                    name: 'Sil',
                    action: function() {
                        Swal.fire({
                            icon: 'error',
                            title: 'Kullanıcı Sil',
                            html: `<strong>${params.node.data.name} ${params.node.data.lastname}</strong> isimli kullanıcıyı silmek istiyor musunuz?`,
                            showCancelButton: true,
                            confirmButtonText: 'Evet',
                            confirmButtonColor: '#ce1414',
                            cancelButtonText: 'Hayır',
                            cancelButtonColor: '#1565C0'
                        }).then(result => {
                            if(result.isConfirmed) _this.delete(params.node.data._id);
                        });
                    }
                },
                {
                    name: 'Düzenle',
                    action: async function() {
                        _this.openModal(_this.modals.addUpdate, 'Kullanıcı Düzenle', 'put', params.node.data);
                    }
                },
                {
                    name: 'Şifre Değiştir',
                    action: function() {
                        _this.openModal(_this.modals.updatePassword, 'Şifre Değiştir - ' + params.node.data.name + ' ' + params.node.data.lastname, 'put', params.node.data);
                    }
                },
                {
                    name: 'Kopyala',
                    action: function() {
                        _this.gridApi.copySelectedRangeToClipboard();
                    }
                }
            ];
        },
        async openModal(modal, title, _process = '', data = null) {
            modal.watchDisabled = true;

            switch (modal) {
                case this.modals.addUpdate:
                    modal.title = title;
                    modal.process = _process;
                    if(data !== null) {
                        modal.form = {
                            _id: data._id,
                            name: { value: data.name, valid: true },
                            lastname: { value: data.lastname, valid: true },
                            email: { value: data.email, valid: true },
                            accountType: { value: data.accountType, valid: true },
                            partnerCompanies: { value: data.partnerId, valid: true },
                            roles: { value: data.roleId, valid: true },
                            status: { value: data.status, valid: true },
                            password: { value: data.password, valid: true },
                        }
                    } 
                    else {
                        await new Promise(resolve => {
                            modal.form = {
                                _id: '',
                                name: { value: '', valid: null },
                                lastname: { value: '', valid: null },
                                email: { value: '', valid: null },
                                password: { value: '', valid: null },
                                accountType: { value: 'admin', valid: true },
                                partnerCompanies: { value: '', valid: null },
                                roles: { value: '', valid: null },
                                status: { value: true, valid: true }
                            };

                            resolve();
                        });
                    }
                    
                    break;
                case this.modals.updatePassword:
                    modal.title = title;
                    modal.process = _process;

                    await new Promise(resolve => {
                        modal.form = {
                            _id: data._id,
                            newPassword: { value: '', valid: null },
                            newPasswordAgain: { value: '', valid: null }
                        }

                        resolve(true);
                    });
                    
                    break;
            }
            
            modal.show = true; 
            modal.watchDisabled = false;
        },
        closeModal(modal) {
            modal.show = false;
        },
        rowDoubleClicked(row) {
            this.openModal(this.modals.addUpdate, 'Kullanıcı Düzenle', 'put', row.data);
        },
        async getRoles() {
            this.$Progress.start();
            var rolesResult = await axios.get(process.env.VUE_APP_API_URL + 'admin/roles');
            this.$Progress.finish();

            if(rolesResult.data.result === 'success') {
                this.search.fields.roles.options.selectOptions = [];
                this.modals.addUpdate.fields.roles.options.selectOptions = [];

                rolesResult.data.list.forEach(role => {
                    this.search.fields.roles.options.selectOptions.push({ value: role._id, label: role.name });
                    this.modals.addUpdate.fields.roles.options.selectOptions.push({ value: role._id, label: role.name });
                });
            }
        },
        async getPartnerCompanies() {
            this.$Progress.start();
            var partnerCompaniesResult = await axios.get(process.env.VUE_APP_API_URL + 'admin/partnerCompanies');
            this.$Progress.finish();

            if(partnerCompaniesResult.data.result === 'success') {
                this.search.fields.partnerCompanies.options.selectOptions = [];
                this.modals.addUpdate.fields.partnerCompanies.options.selectOptions = [];

                partnerCompaniesResult.data.list.forEach(partnerCompanies => {
                    this.search.fields.partnerCompanies.options.selectOptions.push({ value: partnerCompanies._id, label: partnerCompanies.title });
                    this.modals.addUpdate.fields.partnerCompanies.options.selectOptions.push({ value: partnerCompanies._id, label: partnerCompanies.title });
                });
            }
        },
        async getUsers(collapse = false) {
            var params = {
                name: this.search.form.name.value,
                lastname: this.search.form.lastname.value,
                email: this.search.form.email.value,
                status: this.search.form.status.value.value,
                accountType: this.search.form.accountType.value.value,
                roleId: this.search.form.roles.value.value,
                partnerId: this.search.form.partnerCompanies.value.value,
            }

            this.$Progress.start();
            this.search.disabled = true;
            var usersResult = await axios.get(process.env.VUE_APP_API_URL + 'admin/users', { params: params });
            this.$Progress.finish();
            this.search.disabled = false;

            if(usersResult.data.result === 'success') this.rowData = usersResult.data.list;
            else this.rowData = [];

            if(collapse === true) this.$refs.cbcsearchsidebar.closeNav();
        },
        async addUpdate() {
            var inputErrors = [];

            this.$refs.name.validControl(true);
            inputErrors.push(this.modals.addUpdate.form.name.valid);

            this.$refs.lastname.validControl(true);
            inputErrors.push(this.modals.addUpdate.form.lastname.valid);

            this.$refs.email.validControl(true);
            inputErrors.push(this.modals.addUpdate.form.email.valid);

            if(this.modals.addUpdate.process === 'post') {
                this.$refs.password.validControl(true);
                inputErrors.push(this.modals.addUpdate.form.password.valid);
            }

            if(this.modals.addUpdate.form.accountType.value.value === 'partner') {
                this.$refs.partnerCompanies.validControl(true);
                inputErrors.push(this.modals.addUpdate.form.partnerCompanies.valid);
            }

            this.$refs.roles.validControl(true);
            inputErrors.push(this.modals.addUpdate.form.roles.valid);

            // inputErrors array içinde false olan varsa
            if(inputErrors.includes(false) === true) return;

            var form = {
                accountType: this.modals.addUpdate.form.accountType.value.value,
                name: this.modals.addUpdate.form.name.value,
                lastname: this.modals.addUpdate.form.lastname.value,
                email: this.modals.addUpdate.form.email.value,
                roleId: this.modals.addUpdate.form.roles.value.value,
                status: this.modals.addUpdate.form.status.value.value,
                partnerId: this.modals.addUpdate.form.accountType.value.value === 'partner' ? this.modals.addUpdate.form.partnerCompanies.value.value : null
            };

            if(this.modals.addUpdate.process === 'put') form._id = this.modals.addUpdate.form._id;
            if(this.modals.addUpdate.process === 'post') form.password = md5(this.modals.addUpdate.form.password.value);

            this.$Progress.start();
            this.modals.addUpdate.disabled = true;
            var addUpdateResult = await axios[this.modals.addUpdate.process](process.env.VUE_APP_API_URL + 'admin/users', form);
            this.$Progress.finish();
            this.modals.addUpdate.disabled = false;

            if(addUpdateResult.data.result === 'success') {
                this.closeModal(this.modals.addUpdate);
                this.getUsers(true);
            }

            Swal.fire({
                icon: addUpdateResult.data.result,
                title: addUpdateResult.data.message,
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
        async delete(_id) {
            this.$Progress.start();
            this.search.disabled = true;
            var deleteResult = await axios.delete(process.env.VUE_APP_API_URL + 'admin/users/' + _id);
            this.$Progress.finish();
            this.search.disabled = false;

            if(deleteResult.data.result === 'success') this.getUsers();

            Swal.fire({
                icon: deleteResult.data.result,
                title: deleteResult.data.message,
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

            this.$refs.newPassword.validControl(true);
            inputErrors.push(this.modals.updatePassword.form.newPassword.valid);

            this.$refs.newPasswordAgain.validControl(true);
            inputErrors.push(this.modals.updatePassword.form.newPasswordAgain.valid);

            // inputErrors array içinde false olan varsa
            if(inputErrors.includes(false) === true) return;

            var form = {
                _id: this.modals.updatePassword.form._id,
                password: md5(this.modals.updatePassword.form.newPassword.value)
            };
            
            this.$Progress.start();
            this.modals.updatePassword.disabled = true;
            var updatePasswordResult = await axios.put(process.env.VUE_APP_API_URL + 'admin/users', form);
            this.$Progress.finish();
            this.modals.updatePassword.disabled = false;

            if(updatePasswordResult.data.result === 'success') {
                this.getUsers();
                this.closeModal(this.modals.updatePassword);
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
        },
        async changeStatus(_id, sid, name, lastname, status) {
            var form = {
                _id: _id,
                sid: sid,
                name: name,
                lastname: lastname,
                status: status
            };
            
            this.$Progress.start();
            this.search.disabled = true;
            var changeStatusResult = await axios.put(process.env.VUE_APP_API_URL + 'admin/users', form);
            this.$Progress.finish();
            this.search.disabled = false;

            if(changeStatusResult.data.result === 'error') this.getUsers({ params: this.search.form });

            Swal.fire({
                icon: changeStatusResult.data.result,
                title: changeStatusResult.data.message,
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
};
</script>

<style lang="scss">

</style>