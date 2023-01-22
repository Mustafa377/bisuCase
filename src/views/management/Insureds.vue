<template>
    <div class="custom-container">
        <cbc-searchsidebar ref="cbcsearchsidebar" :isOpen="true" :visibleSearchSideBarFooter="true">
            <template v-slot:searchSideBar>
                <CRow>
                    <CCol col="12">
                        <cbcinput-vue 
                            v-model="search.form.type"
                            :id="search.fields.type.id"
                            :name="search.fields.type.name"
                            :type="search.fields.type.type"
                            :ref="search.fields.type.ref"
                            :options="search.fields.type.options"
                            :disabled="search.disabled"/>
                    </CCol>
                    <CCol col="12">
                        <cbcinput-vue 
                            v-model="search.form.title"
                            :id="search.fields.title.id"
                            :name="search.fields.title.name"
                            :type="search.fields.title.type"
                            :ref="search.fields.title.ref"
                            :options="search.fields.title.options"
                            :disabled="search.disabled"/>
                    </CCol>
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
                            v-model="search.form.identityNumber"
                            :id="search.fields.identityNumber.id"
                            :name="search.fields.identityNumber.name"
                            :type="search.fields.identityNumber.type"
                            :ref="search.fields.identityNumber.ref"
                            :options="search.fields.identityNumber.options"
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
                            v-model="search.form.phone"
                            :id="search.fields.phone.id"
                            :name="search.fields.phone.name"
                            :type="search.fields.phone.type"
                            :ref="search.fields.phone.ref"
                            :options="search.fields.phone.options"
                            :disabled="search.disabled"/>
                    </CCol>
                </CRow>
            </template>
            <template v-slot:searchSideBarFooter>
                <CButton
                    block
                    color="primary"
                    :disabled="search.disabled"
                    @click="getInsureds(true)"
                ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="search.disabled" />Ara
                </CButton>
            </template>
            <template v-slot:main>
                <CCard class="rounded-0 border-0">
                    <CCardHeader class="d-flex flex-row justify-content-between align-items-center rounded-0 border-right">
                        <span class="font-weight-bold">Sigortalılar</span>
                        <div class="card-header-actions">
                            <CButton color="success" class="btn-coreui mr-2" :disabled="search.disabled" @click="openModal(modals.addUpdate, 'Sigortalı Ekle', 'post')">
                                <i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="search.disabled" />Sigortalı Ekle
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
                            :rowSelection="rowSelection"
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
                        v-model="modals.addUpdate.form.type"
                        :id="modals.addUpdate.fields.type.id"
                        :name="modals.addUpdate.fields.type.name"
                        :type="modals.addUpdate.fields.type.type"
                        :ref="modals.addUpdate.fields.type.ref"
                        :options="modals.addUpdate.fields.type.options"
                        :disabled="modals.addUpdate.disabled"/>
                </CCol>
                <CCol md="6" lg="4" v-if="modals.addUpdate.form.type.value.value === 'corporate'">
                    <cbcinput-vue 
                        v-model="modals.addUpdate.form.title"
                        :id="modals.addUpdate.fields.title.id"
                        :name="modals.addUpdate.fields.title.name"
                        :type="modals.addUpdate.fields.title.type"
                        :ref="modals.addUpdate.fields.title.ref"
                        :options="modals.addUpdate.fields.title.options"
                        :disabled="modals.addUpdate.disabled"/>
                </CCol>
                <CCol md="6" lg="4" v-if="modals.addUpdate.form.type.value.value === 'individual'">
                    <cbcinput-vue 
                        v-model="modals.addUpdate.form.name"
                        :id="modals.addUpdate.fields.name.id"
                        :name="modals.addUpdate.fields.name.name"
                        :type="modals.addUpdate.fields.name.type"
                        :ref="modals.addUpdate.fields.name.ref"
                        :options="modals.addUpdate.fields.name.options"
                        :disabled="modals.addUpdate.disabled"/>
                </CCol>
                <CCol md="6" lg="4" v-if="modals.addUpdate.form.type.value.value === 'individual'">
                    <cbcinput-vue 
                        v-model="modals.addUpdate.form.lastname"
                        :id="modals.addUpdate.fields.lastname.id"
                        :name="modals.addUpdate.fields.lastname.name"
                        :type="modals.addUpdate.fields.lastname.type"
                        :ref="modals.addUpdate.fields.lastname.ref"
                        :options="modals.addUpdate.fields.lastname.options"
                        :disabled="modals.addUpdate.disabled"/>
                </CCol>
                <CCol md="6" lg="4" v-show="modals.addUpdate.form.type.value.value === 'individual'">
                    <h6 class="font-weight-bold">Doğum Tarihi <span style="color: red">*</span></h6>
                    <div class="d-flex flex-row justify-content-between">
                        <cbcinput-vue 
                            v-model="modals.addUpdate.form.birthDateDay"
                            :id="modals.addUpdate.fields.birthDateDay.id"
                            :name="modals.addUpdate.fields.birthDateDay.name"
                            :type="modals.addUpdate.fields.birthDateDay.type"
                            :ref="modals.addUpdate.fields.birthDateDay.ref"
                            :options="modals.addUpdate.fields.birthDateDay.options"
                            :disabled="modals.addUpdate.disabled"/>
                        <cbcinput-vue 
                            v-model="modals.addUpdate.form.birthDateMonth"
                            :id="modals.addUpdate.fields.birthDateMonth.id"
                            :name="modals.addUpdate.fields.birthDateMonth.name"
                            :type="modals.addUpdate.fields.birthDateMonth.type"
                            :ref="modals.addUpdate.fields.birthDateMonth.ref"
                            :options="modals.addUpdate.fields.birthDateMonth.options"
                            :disabled="modals.addUpdate.disabled"/>
                        <cbcinput-vue 
                            v-model="modals.addUpdate.form.birthDateYear"
                            :id="modals.addUpdate.fields.birthDateYear.id"
                            :name="modals.addUpdate.fields.birthDateYear.name"
                            :type="modals.addUpdate.fields.birthDateYear.type"
                            :ref="modals.addUpdate.fields.birthDateYear.ref"
                            :options="modals.addUpdate.fields.birthDateYear.options"
                            :disabled="modals.addUpdate.disabled"/>
                    </div>
                </CCol>
                <CCol md="6" lg="4">
                    <cbcinput-vue 
                        v-model="modals.addUpdate.form.identityNumber"
                        :id="modals.addUpdate.fields.identityNumber.id"
                        :name="modals.addUpdate.fields.identityNumber.name"
                        :type="modals.addUpdate.fields.identityNumber.type"
                        :ref="modals.addUpdate.fields.identityNumber.ref"
                        :options="modals.addUpdate.fields.identityNumber.options"
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
                <CCol md="6" lg="4">
                    <cbcinput-vue 
                        v-model="modals.addUpdate.form.phone"
                        :id="modals.addUpdate.fields.phone.id"
                        :name="modals.addUpdate.fields.phone.name"
                        :type="modals.addUpdate.fields.phone.type"
                        :ref="modals.addUpdate.fields.phone.ref"
                        :options="modals.addUpdate.fields.phone.options"
                        :disabled="modals.addUpdate.disabled"/>
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
    </div>
</template>

<script>
import axios from 'axios';
import Func from '@/func';
import Swal from 'sweetalert2';
import moment from 'moment';
import { AgGridVue } from 'ag-grid-vue';
import { LargeTextCellEditor } from 'ag-grid-community';

export default {
    name: 'Insureds',
    components: {
        AgGridVue
    },
    data() {
        return {
            disableWatch: false,
            columnDefs: [
                {
                    field: 'identityNumber',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    cellRenderer: params => {
                        if(params.data.identityType === 'tckn' || params.data.identityType === 'ykn') return 'Bireysel';
                        else if(params.data.identityType === 'vkn') return 'Kurumsal';
                    },
                    headerName: 'Tip',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 120
                },
                {
                    field: 'name',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    cellRenderer: params => {
                        if(params.data.identityType === 'tckn' || params.data.identityType === 'ykn') return params.value;
                        else if(params.data.identityType === 'vkn') return '-';
                    },
                    headerName: 'Ad',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 120
                },
                {
                    field: 'lastname',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    headerName: 'Soyad',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    cellRenderer: params => {
                        if(params.data.identityType === 'tckn' || params.data.identityType === 'ykn') return params.value;
                        else if(params.data.identityType === 'vkn') return '-';
                    },
                    width: 120
                },
                {
                    field: 'title',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    cellRenderer: params => {
                        if(params.data.identityType === 'vkn') return params.value;
                        else if(params.data.identityType === 'tckn' || params.data.identityType === 'ykn') return '-';
                    },
                    headerName: 'Ünvan',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 200
                },
                {
                    field: 'partner.title',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    headerName: 'Partner Firma',
                    cellStyle: { display: 'flex', alignItems: 'center' },
                    width: 250
                },
                {
                    field: 'identityNumber',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    headerName: 'Kimlik Numarası',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 140
                },
                {
                    field: 'birthDate',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    cellRenderer: params => {
                        if(params.data.identityType === 'tckn' || params.data.identityType === 'ykn') return moment(new Date(params.value)).format("DD.MM.YYYY");
                        else if(params.data.identityType === 'vkn') return '-';
                    },
                    headerName: 'Doğum Tarihi',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 120
                },
                {
                    field: 'email',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    headerName: 'E-Posta',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 200
                },
                {
                    field: 'phone',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    cellRenderer: params => {
                        return Func.formatPhoneNumber(params.value);
                    },
                    headerName: 'Telefon',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 130
                },
                {
                    field: 'createdDate',
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
                        toolPanel: 'agColumnsToolPanel',
                    },
                    ,
                    {
                        id: 'filters',
                        labelDefault: 'Filtreler',
                        labelKey: 'filters',
                        iconKey: 'filter',
                        toolPanel: 'agFiltersToolPanel',
                    },
                ],
                defaultToolPanel: '',
            },
            rowSelection: 'multiple',
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
                    { statusPanel: 'agAggregationComponent' },
                ],
            },

            search: {
                disabled: false,
                fields: {
                    type: {
                        id: 'type',
                        name: 'type',
                        type: 'select',
                        ref: 'type',
                        options: {
                            /* label: 'Sigortalı Tipi',
                            labelBold: true, */
                            selectSettings: {
                                placeholder: 'Sigortalı Tipini seçin',
                                showLabels: true,
                                selectedLabel: 'Seçildi',
                                deselectLabel: 'Kaldır',
                                allowEmpty: true,
                            },
                            selectOptions: [
                                { value: 'individual', label: 'Bireysel' },
                                { value: 'corporate', label: 'Kurumsal' }
                            ]
                        }
                    },
                    title: {
                        id: 'title',
                        name: 'title',
                        type: 'text',
                        ref: 'title',
                        options: {
                            /* label: 'Ünvan',
                            labelBold: true, */
                            placeholder: 'Sigortalı ünvanını girin',
                            maxlength: 50,
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'fontawesome',
                                    src: ['far', 'user']
                                }
                            }
                        }
                    },
                    name: {
                        id: 'name',
                        name: 'name',
                        type: 'text',
                        ref: 'name',
                        options: {
                            /* label: 'Ad <span style=\'color: red\'>*</span>',
                            labelBold: true, */
                            placeholder: 'Ad girin',
                            maxlength: 50,
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'fontawesome',
                                    src: ['far', 'user']
                                }
                            }
                        }
                    },
                    lastname: {
                        id: 'lastname',
                        name: 'lastname',
                        type: 'text',
                        ref: 'lastname',
                        options: {
                            /* label: 'Soyad <span style=\'color: red\'>*</span>',
                            labelBold: true, */
                            placeholder: 'Soyad girin',
                            maxlength: 50,
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'fontawesome',
                                    src: ['far', 'user']
                                }
                            }
                        }
                    },
                    identityNumber: {
                        id: 'identityNumber',
                        name: 'identityNumber',
                        type: 'text',
                        ref: 'identityNumber',
                        options: {
                            /* label: 'T.C. Kimlik veya Vergi Numarası <span style=\'color: red\'>*</span>',
                            labelBold: true, */
                            placeholder: 'T.C. kimlik veya vergi numarası',
                            maxlength: 11,
                            onlyNumber: true,
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'fontawesome',
                                    src: ['far', 'id-card']
                                }
                            }
                        }
                    },
                    email: {
                        id: 'email',
                        name: 'email',
                        type: 'email',
                        ref: 'email',
                        options: {
                            /* label: 'E-Posta Adresi <span style=\'color: red\'>*</span>',
                            labelBold: true, */
                            placeholder: 'E-Posta adresi girin',
                            maxlength: 50,
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'fontawesome',
                                    src: ['far', 'envelope']
                                }
                            }
                        }
                    },
                    phone: {
                        id: 'phone',
                        name: 'phone',
                        type: 'tel',
                        ref: 'phone',
                        options: {
                            /* label: 'Cep Telefonu <span style=\'color: red\'>*</span>',
                            labelBold: true */
                        }
                    }
                },
                form: {
                    type: { value: '', valid: null },
                    title: { value: '', valid: null },
                    name: { value: '', valid: null },
                    lastname: { value: '', valid: null },
                    identityNumber: { value: '', valid: null },
                    email: { value: '', valid: null },
                    phone: { value: '', valid: null }
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
                        type: {
                            id: 'accountType',
                            name: 'accountType',
                            type: 'select',
                            ref: 'accountType',
                            options: {
                                label: 'Üye Tipi <span style=\'color: red\'>*</span>',
                                labelBold: true,
                                shaker: true,
                                selectSettings: {
                                    placeholder: 'Üye tipini seçin'
                                },
                                selectOptions: [
                                    { value: 'individual', label: 'Bireysel' },
                                    { value: 'corporate', label: 'Kurumsal' }
                                ],
                                validRequired: {
                                    status: true,
                                    errorMessage: 'Bu alanı boş bırakamazsınız!'
                                }
                            }
                        },
                        title: {
                            id: 'title',
                            name: 'title',
                            type: 'text',
                            ref: 'title',
                            options: {
                                label: 'Ünvan <span style=\'color: red\'>*</span>',
                                labelBold: true,
                                placeholder: 'Ünvan girin',
                                maxlength: 150,
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
                        birthDateDay: {
                            id: 'birthDateDay',
                            name: 'birthDateDay',
                            type: 'select',
                            ref: 'birthDateDay',
                            options: {
                                selectSettings: {
                                    placeholder: 'Gün',
                                    searchable: true
                                },
                                selectOptions: []
                            }
                        },
                        birthDateMonth: {
                            id: 'birthDateMonth',
                            name: 'birthDateMonth',
                            type: 'select',
                            ref: 'birthDateMonth',
                            options: {
                                selectSettings: {
                                    placeholder: 'Ay',
                                    searchable: true
                                },
                                selectOptions: []
                            }
                        },
                        birthDateYear: {
                            id: 'birthDateYear',
                            name: 'birthDateYear',
                            type: 'select',
                            ref: 'birthDateYear',
                            options: {
                                selectSettings: {
                                    placeholder: 'Yıl',
                                    searchable: true
                                },
                                selectOptions: []
                            }
                        },
                        identityNumber: {
                            id: 'identityNumber',
                            name: 'identityNumber',
                            type: 'text',
                            ref: 'identityNumber',
                            options: {
                                label: 'T.C. Kimlik Numarası <span style=\'color: red\'>*</span>',
                                labelBold: true,
                                placeholder: 'T.C. kimlik numarası girin',
                                maxlength: 11,
                                onlyNumber: true,
                                shaker: true,
                                inputIcon: {
                                    status: true,
                                    placement: 'left',
                                    icon: {
                                        library: 'fontawesome',
                                        src: ['far', 'id-card']
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
                                validTCIdentity: {
                                    status: true,
                                    errorMessage: 'Lütfen 11 haneli Türkiye Cumhuriyeti kimlik numaranızı girin.',
                                },
                                validTaxIdentity: {
                                    status: true,
                                    errorMessage: 'Lütfen 10 haneli vergi numaranızı girin.',
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
                                placeholder: 'E-Posta adresi girin',
                                maxlength: 50,
                                shaker: true,
                                inputIcon: {
                                    status: true,
                                    placement: 'left',
                                    icon: {
                                        library: 'fontawesome',
                                        src: ['far', 'envelope']
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
                        phone: {
                            id: 'phone',
                            name: 'phone',
                            type: 'tel',
                            ref: 'phone',
                            options: {
                                label: 'Cep Telefonu <span style=\'color: red\'>*</span>',
                                labelBold: true,
                                shaker: true,
                                validRequired: {
                                    status: true,
                                    errorMessage: 'Bu alanı boş bırakamazsınız!'
                                },
                                validLengthMin: {
                                    status: true,
                                    number: 17,
                                    errorMessage: 'Bu alana en az <strong>17</strong> karakter girebilirsiniz!'
                                },
                                validLengthMax: {
                                    status: true,
                                    number: 17,
                                    errorMessage: 'Bu alana en fazla <strong>17</strong> karakter girebilirsiniz!'
                                },
                                validRegExp: {
                                    status: true,
                                    regexp: /\+[0-9]{2}\s5[0,3,4,5,6][0-9]\s\d\d\d\s\d\d\s\d\d$/,
                                    regexp2: /\+[0-9]{2}5[0,3,4,5,6][0-9]\d\d\d\d\d\d\d$/,
                                    errorMessage: 'Hatalı cep telefonu formatı!',
                                }
                            }
                        },
                    },
                    form: null
                }
            }
        };
    },
    created() {

        var birthDates = Func.initSelectBoxDate(null, null, parseInt(process.env.VUE_APP_MIN_MEMBER_AGE), parseInt(process.env.VUE_APP_MAX_MEMBER_AGE));
        
        this.modals.addUpdate.fields.birthDateDay.options.selectOptions = birthDates.days;
        this.modals.addUpdate.fields.birthDateMonth.options.selectOptions = birthDates.months;
        this.modals.addUpdate.fields.birthDateYear.options.selectOptions = birthDates.years;
    },
    watch: {
        'modals.addUpdate.form.type': async function(val) {
            if(val.value.value === 'individual') {
                this.modals.addUpdate.fields.identityNumber.options.label = 'T.C. Kimlik Numarası <span style=\'color: red\'>*</span>';
                this.modals.addUpdate.fields.identityNumber.options.placeholder = 'T.C. kimlik numarası girin';
                this.modals.addUpdate.fields.identityNumber.options.maxlength = 11;
            } else if(val.value.value === 'corporate') {
                this.modals.addUpdate.fields.identityNumber.options.label = 'Vergi Numarası <span style=\'color: red\'>*</span>';
                this.modals.addUpdate.fields.identityNumber.options.placeholder = 'Vergi numarası girin';
                this.modals.addUpdate.fields.identityNumber.options.maxlength = 10;
            }

            /* this.modals.addUpdate.form.birthDateDay = { value: '', valid: null };
            this.modals.addUpdate.form.birthDateMonth = { value: '', valid: null };
            this.modals.addUpdate.form.birthDateYear = { value: '', valid: null };
            this.modals.addUpdate.form.identityNumber = { value: '', valid: null }; */
        },
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
                            title: 'Sigortalı Sil',
                            html: params.node.data.identityNumber.length === 11 ? `<strong>${params.node.data.name} ${params.node.data.lastname}</strong> isimli sigortalıyı silmek istiyor musunuz?` : `<strong>${params.node.data.title}</strong> ünvanlı sigortalıyı silmek istiyor musunuz?`,
                            showDenyButton: true,
                            confirmButtonText: 'Evet',
                            denyButtonText: 'Hayır',
                        }).then(result => {
                            if (result.isConfirmed) _this.delete(params.node.data._id);
                        });
                    }
                },
                {
                    name: 'Düzenle',
                    action: function() {
                        _this.openModal(_this.modals.addUpdate, `Sigortalı Düzenle`, 'put', params.node.data);
                    },
                },
                {
                    name: 'Teklif Talepleri',
                    action: function() {
                        if(params.node.data.identityNumber.length === 11) _this.$router.push(`../teklif-talepleri/tip/sigortali/ad/${params.node.data.name}/soyad/${params.node.data.lastname}/kimlikno/${params.node.data.identityNumber}`);
                        else if(params.node.data.identityNumber.length === 10) _this.$router.push(`../teklif-talepleri/tip/sigortali/unvan/${params.node.data.title}/kimlikno/${params.node.data.identityNumber}`);
                    }
                },
                {
                    name: 'Kopyala',
                    action: function() {
                        _this.gridApi.copySelectedRangeToClipboard();
                    },
                },
            ];
        },
        rowDoubleClicked(row) {
            this.openModal(this.modals.addUpdate, `Sigortalı Düzenle`, 'put', row.data);
        },
        async openModal(modal, title, _process = '', data = null) {
            modal.watchDisabled = true;

            switch (modal) {
                case this.modals.addUpdate:
                    modal.title = title;
                    modal.process = _process;

                    await new Promise(resolve => {
                        if(data !== null) {
                            modal.form = {
                                _id: data._id,
                                type: { value: data.identityType === 'tckn' ? 'individual' : 'corporate', valid: true },
                                identityType: { value: data.identityType, valid: true },
                                title: { value: data.title, valid: true },
                                name: { value: data.name, valid: true },
                                lastname: { value: data.lastname, valid: true },
                                birthDateDay: data.birthDate === null ? { value: '', valid: null }:{ value: moment(data.birthDate).format('DD'), valid: true },
                                birthDateMonth: data.birthDate === null ? { value: '', valid: null }:{ value: moment(data.birthDate).format('MM'), valid: true },
                                birthDateYear: data.birthDate === null ? { value: '', valid: null }:{ value: parseInt(moment(data.birthDate).format('YYYY')), valid: true },
                                identityNumber: { value: data.identityNumber, valid: true },
                                email: { value: data.email, valid: true },
                                phone: { value: data.phone, valid: true },
                            }
                        } else {
                            modal.form = {
                                _id: '',
                                type: { value: 'individual', valid: true },
                                title: { value: '', valid: null },
                                name: { value: '', valid: null },
                                lastname: { value: '', valid: null },
                                birthDateDay: { value: '', valid: null },
                                birthDateMonth: { value: '', valid: null },
                                birthDateYear: { value: '', valid: null },
                                identityNumber: { value: '', valid: null },
                                email: { value: '', valid: null },
                                phone: { value: '', valid: null }
                            };
                        }

                        resolve(true);
                    });
                    
                    break;
            }

            modal.watchDisabled = false;
            modal.show = true;
        },
        closeModal(modal) {
            modal.show = false;
        },
        async getInsureds(collapse = false) {
            var form = {
                name: this.search.form.name.value,
                title: this.search.form.title.value,
                lastname: this.search.form.lastname.value,
                identityNumber: this.search.form.identityNumber.value,
                email: this.search.form.email.value,
                phone: this.search.form.phone.value,
                type: this.search.form.type.value.value
            }

            this.$Progress.start();
            this.search.disabled = true;
            var insuredsResult = await axios.get(process.env.VUE_APP_API_URL + 'admin/insureds', { params: form });
            this.$Progress.finish();
            this.search.disabled = false;

            if(insuredsResult.data.result === 'success') this.rowData = insuredsResult.data.list;
            else this.rowData = [];

            if(collapse === true) this.$refs.cbcsearchsidebar.closeNav();
        },
        async addUpdate() {
            var inputErrors = [];

            if(this.modals.addUpdate.form.type.value.value === 'individual') {
                this.$refs.name.validControl(true);
                inputErrors.push(this.modals.addUpdate.form.name.valid);
                
                this.$refs.lastname.validControl(true);
                inputErrors.push(this.modals.addUpdate.form.lastname.valid);

                this.$refs.birthDateDay.validControl(true);
                inputErrors.push(this.modals.addUpdate.form.birthDateDay.valid);

                this.$refs.birthDateMonth.validControl(true);
                inputErrors.push(this.modals.addUpdate.form.birthDateMonth.valid);

                this.$refs.birthDateYear.validControl(true);
                inputErrors.push(this.modals.addUpdate.form.birthDateYear.valid);
            } else {
                this.$refs.title.validControl(true);
                inputErrors.push(this.modals.addUpdate.form.title.valid);
            } 

            this.$refs.identityNumber.validControl(true);
            inputErrors.push(this.modals.addUpdate.form.identityNumber.valid);

            this.$refs.email.validControl(true);
            inputErrors.push(this.modals.addUpdate.form.email.valid);

            this.$refs.phone.validControl(true);
            inputErrors.push(this.modals.addUpdate.form.phone.valid);

            // inputErrors array içinde false olan varsa
            if(inputErrors.includes(false) === true) return;

            this.$Progress.start();
            this.modals.addUpdate.disabled = true;

            var form = {
                type: this.modals.addUpdate.form.type.value.value,
                name: this.modals.addUpdate.form.name.value,
                title: this.modals.addUpdate.form.title.value,
                lastname: this.modals.addUpdate.form.lastname.value,
                birthDate: this.modals.addUpdate.form.type.value.value === 'individual' ? moment(this.modals.addUpdate.form.birthDateYear.value.value + '-' + this.modals.addUpdate.form.birthDateMonth.value.value + '-' + this.modals.addUpdate.form.birthDateDay.value.value).format() : null,
                identityNumber: this.modals.addUpdate.form.identityNumber.value,
                email: this.modals.addUpdate.form.email.value,
                phone: this.modals.addUpdate.form.phone.value.split(' ').join(''),
            }

            if(this.modals.addUpdate.process === 'put') form._id = this.modals.addUpdate.form._id;

            this.$Progress.start();
            this.modals.addUpdate.disabled = true;
            var addUpdateResult = await axios[this.modals.addUpdate.process](process.env.VUE_APP_API_URL + 'admin/insureds', form);
            this.$Progress.finish();
            this.modals.addUpdate.disabled = false;

            if(addUpdateResult.data.result === 'success') {
                this.closeModal(this.modals.addUpdate);
                this.getInsureds(true);
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
            var deleteResult = await axios.delete(process.env.VUE_APP_API_URL + 'admin/insureds/' + _id);
            this.$Progress.finish();
            this.search.disabled = false;

            if(deleteResult.data.result === 'success') this.getInsureds();

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
        }
    }
};
</script>

<style lang="scss">

</style>