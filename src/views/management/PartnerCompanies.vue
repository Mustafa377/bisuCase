<template>
    <div class="custom-container">
        <cbc-searchsidebar ref="cbcsearchsidebar" :isOpen="true" :visibleSearchSideBarFooter="true">
            <template v-slot:searchSideBar>
                <CRow>
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
                            v-model="search.form.phone"
                            :id="search.fields.phone.id"
                            :name="search.fields.phone.name"
                            :type="search.fields.phone.type"
                            :ref="search.fields.phone.ref"
                            :options="search.fields.phone.options"
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
                            v-model="search.form.taxOffice"
                            :id="search.fields.taxOffice.id"
                            :name="search.fields.taxOffice.name"
                            :type="search.fields.taxOffice.type"
                            :ref="search.fields.taxOffice.ref"
                            :options="search.fields.taxOffice.options"
                            :disabled="search.disabled"/>
                    </CCol>
                    <CCol col="12">
                        <cbcinput-vue 
                            v-model="search.form.taxIdentityNumber"
                            :id="search.fields.taxIdentityNumber.id"
                            :name="search.fields.taxIdentityNumber.name"
                            :type="search.fields.taxIdentityNumber.type"
                            :ref="search.fields.taxIdentityNumber.ref"
                            :options="search.fields.taxIdentityNumber.options"
                            :disabled="search.disabled"/>
                    </CCol>
                    <CCol col="12">
                        <cbcinput-vue 
                            v-model="search.form.mersisNumber"
                            :id="search.fields.mersisNumber.id"
                            :name="search.fields.mersisNumber.name"
                            :type="search.fields.mersisNumber.type"
                            :ref="search.fields.mersisNumber.ref"
                            :options="search.fields.mersisNumber.options"
                            :disabled="search.disabled"
                        />
                    </CCol>
                    <CCol col="12">
                        <cbcinput-vue 
                            v-model="search.form.commissionRate"
                            :id="search.fields.commissionRate.id"
                            :name="search.fields.commissionRate.name"
                            :type="search.fields.commissionRate.type"
                            :ref="search.fields.commissionRate.ref"
                            :options="search.fields.commissionRate.options"
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
                    @click="getPartnerCompanies(true)"
                ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="search.disabled" />Ara
                </CButton>
            </template>
            <template v-slot:main>
                <CCard class="rounded-0 border-0">
                    <CCardHeader class="d-flex flex-row justify-content-between align-items-center rounded-0 border-right">
                        <span class="font-weight-bold">Partnerler</span>
                        <div class="card-header-actions">
                            <CButton color="success" class="btn-coreui mr-2" :disabled="search.disabled" @click="openModal(modals.addUpdate, 'Partner Ekle', 'post')">
                                <i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="search.disabled" />Partner Ekle
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
            size="xl"
            :title="modals.addUpdate.title"
            :show.sync="modals.addUpdate.show"
            :closeOnBackdrop="false"
        >
            <CRow v-if="modals.addUpdate.form !== null">
                <CCol md="6" lg="4">
                    <cbcinput-vue 
                        v-model="modals.addUpdate.form.title"
                        :id="modals.addUpdate.fields.title.id"
                        :name="modals.addUpdate.fields.title.name"
                        :type="modals.addUpdate.fields.title.type"
                        :ref="modals.addUpdate.fields.title.ref"
                        :options="modals.addUpdate.fields.title.options"
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
                        v-model="modals.addUpdate.form.taxOffice"
                        :id="modals.addUpdate.fields.taxOffice.id"
                        :name="modals.addUpdate.fields.taxOffice.name"
                        :type="modals.addUpdate.fields.taxOffice.type"
                        :ref="modals.addUpdate.fields.taxOffice.ref"
                        :options="modals.addUpdate.fields.taxOffice.options"
                        :disabled="modals.addUpdate.disabled"/>
                </CCol>
                <CCol md="6" lg="4">
                    <cbcinput-vue 
                        v-model="modals.addUpdate.form.taxIdentityNumber"
                        :id="modals.addUpdate.fields.taxIdentityNumber.id"
                        :name="modals.addUpdate.fields.taxIdentityNumber.name"
                        :type="modals.addUpdate.fields.taxIdentityNumber.type"
                        :ref="modals.addUpdate.fields.taxIdentityNumber.ref"
                        :options="modals.addUpdate.fields.taxIdentityNumber.options"
                        :disabled="modals.addUpdate.disabled"/>
                </CCol>
                <CCol md="6" lg="4">
                    <cbcinput-vue 
                        v-model="modals.addUpdate.form.mersisNumber"
                        :id="modals.addUpdate.fields.mersisNumber.id"
                        :name="modals.addUpdate.fields.mersisNumber.name"
                        :type="modals.addUpdate.fields.mersisNumber.type"
                        :ref="modals.addUpdate.fields.mersisNumber.ref"
                        :options="modals.addUpdate.fields.mersisNumber.options"
                        :disabled="modals.addUpdate.disabled"/>
                </CCol>
                <CCol md="6" lg="4">
                    <cbcinput-vue 
                        v-model="modals.addUpdate.form.commissionRate"
                        :id="modals.addUpdate.fields.commissionRate.id"
                        :name="modals.addUpdate.fields.commissionRate.name"
                        :type="modals.addUpdate.fields.commissionRate.type"
                        :ref="modals.addUpdate.fields.commissionRate.ref"
                        :options="modals.addUpdate.fields.commissionRate.options"
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
                <CCol col="12">
                    <cbcinput-vue 
                        v-model="modals.addUpdate.form.address"
                        :id="modals.addUpdate.fields.address.id"
                        :name="modals.addUpdate.fields.address.name"
                        :type="modals.addUpdate.fields.address.type"
                        :ref="modals.addUpdate.fields.address.ref"
                        :options="modals.addUpdate.fields.address.options"
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

export default {
    name: 'PartnerCompanies',
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
                    this.params.changed(this.params.data._id, event.target.checked);
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
                        changed: function(_id, checked) {
                            _this.changeStatus(_id, checked);
                        }
                    },
                    cellStyle: () => { return { display: 'flex', alignItems: 'center', justifyContent: 'center' } },
                    headerName: 'Durum',
                    width: 80
                },
                {
                    field: 'title',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    headerName: 'Ünvan',
                    cellStyle: { display: 'flex', alignItems: 'center' },
                    width: 200
                },
                {
                    field: 'email',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    headerName: 'E-Posta',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 180
                },
                {
                    field: 'phone',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    cellRenderer: params => {
                        return Func.formatPhoneNumber(params.value);
                    },
                    headerName: 'Telefon',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 150
                },
                {
                    field: 'commissionRate',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    cellRenderer: params => {
                        return '%' + params.value;
                    },
                    headerName: 'Komisyon Oranı',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 140
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
                    title: {
                        id: 'title',
                        name: 'title',
                        type: 'text',
                        ref: 'title',
                        options: {
                            /* label: 'Ünvan',
                            labelBold: true, */
                            placeholder: 'Ünvan',
                            shaker: true,
                            onlyLetters: true,
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
                    phone: {
                        id: 'phone',
                        name: 'phone',
                        type: 'tel',
                        ref: 'phone',
                        options: {
                            /* label: 'Cep Telefonu <span style=\'color: red\'>*</span>',
                            labelBold: true */
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
                    taxOffice: {
                        id: 'taxOffice',
                        name: 'taxOffice',
                        type: 'text',
                        ref: 'taxOffice',
                        options: {
                            /* label: 'Vergi Dairesi',
                            labelBold: true, */
                            placeholder: 'Vergi Dairesi',
                            shaker: true,
                            onlyLetters: true,
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'fontawesome',
                                    src: ['fal', 'building']
                                }
                            }
                        }
                    },
                    taxIdentityNumber: {
                        id: 'taxIdentityNumber',
                        name: 'taxIdentityNumber',
                        type: 'text',
                        ref: 'taxIdentityNumber',
                        options: {
                            /* label: 'Vergi No',
                            labelBold: true, */
                            placeholder: 'Vergi No',
                            shaker: true,
                            onlyNumbers: true,
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'fontawesome',
                                    src: ['fal', 'file-invoice-dollar']
                                }
                            }
                        }
                    },
                    mersisNumber: {
                        id: 'mersisNumber',
                        name: 'mersisNumber',
                        type: 'text',
                        ref: 'mersisNumber',
                        options: {
                            /* label: 'Mersis No',
                            labelBold: true, */
                            placeholder: 'Mersis No',
                            shaker: true,
                            onlyNumbers: true,
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'fontawesome',
                                    src: ['fal', 'file-invoice-dollar']
                                }
                            }
                        }
                    },
                    commissionRate: {
                        id: 'commissionRate',
                        name: 'commissionRate',
                        type: 'number',
                        ref: 'commissionRate',
                        options: {
                            /* label: 'Komisyon Oranı',
                            labelBold: true, */
                            placeholder: 'Komisyon Oranı',
                            shaker: true,
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'fontawesome',
                                    src: ['fal', 'percent'],
                                }
                            },
                        }
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
                    title: { value: '', valid: null },
                    phone: { value: '', valid: null },
                    email: { value: '', valid: null },
                    taxOffice: { value: '', valid: null },
                    taxIdentityNumber: { value: '', valid: null },
                    mersisNumber: { value: '', valid: null },
                    commissionRate: { value: '', valid: null },
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
                        title: {
                            id: 'title',
                            name: 'title',
                            type: 'text',
                            ref: 'title',
                            options: {
                                label: 'Ünvan <span style=\'color: red\'>*</span>',
                                labelBold: true,
                                placeholder: 'Ünvan girin',
                                maxlength: 100,
                                shaker: true,
                                onlyLetters: true,
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
                        phone: {
                            id: 'phone',
                            name: 'phone',
                            type: 'tel',
                            ref: 'phone',
                            options: {
                                label: 'Telefon <span style=\'color: red\'>*</span>',
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
                                    regexp: /\+[0-9]{2}\s[0-9]{3}\s\d\d\d\s\d\d\s\d\d$/,
                                    errorMessage: 'Hatalı telefonu formatı!',
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
                        taxOffice: {
                            id: 'taxOffice',
                            name: 'taxOffice',
                            type: 'text',
                            ref: 'taxOffice',
                            options: {
                                label: 'Vergi Dairesi <span style=\'color: red\'>*</span>',
                                labelBold: true,
                                placeholder: 'Vergi Dairesi',
                                shaker: true,
                                onlyLetters: true,
                                inputIcon: {
                                    status: true,
                                    placement: 'left',
                                    icon: {
                                        library: 'fontawesome',
                                        src: ['fal', 'building']
                                    }
                                }
                            }
                        },
                        taxIdentityNumber: {
                            id: 'taxIdentityNumber',
                            name: 'taxIdentityNumber',
                            type: 'text',
                            ref: 'taxIdentityNumber',
                            options: {
                                label: 'Vergi Kimlik Numarası <span style=\'color: red\'>*</span>',
                                labelBold: true,
                                placeholder: 'Vergi kimlik numarası girin',
                                maxlength: 10,
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
                                validTaxIdentity: {
                                    status: true,
                                    errorMessage: 'Lütfen 10 haneli vergi numaranızı girin.',
                                }
                            }
                        },
                        mersisNumber: {
                            id: 'mersisNumber',
                            name: 'mersisNumber',
                            type: 'text',
                            ref: 'mersisNumber',
                            options: {
                                label: 'Mersis No <span style=\'color: red\'>*</span>',
                                labelBold: true,
                                placeholder: 'Mersis no girin',
                                maxlength: 16,
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
                                    number: 16,
                                    errorMessage: 'Bu alana en az <strong>16</strong> karakter girebilirsiniz!'
                                }
                            }
                        },
                        commissionRate: {
                            id: 'commissionRate',
                            name: 'commissionRate',
                            type: 'text',
                            ref: 'commissionRate',
                            options: {
                                labelBold: true,
                                label: 'Komisyon <span style=\'color: red\'>*</span>',
                                placeholder: 'Komisyon girin',
                                shaker: true,
                                maxlength: 3,
                                onlyNumber: true,
                                inputIcon: {
                                    status: true,
                                    placement: 'left',
                                    icon: {
                                        library: 'fontawesome',
                                        src: ['fal', 'percent']
                                    }
                                },
                                validRequired: {
                                    status: true,
                                    errorMessage: 'Bu alanı boş bırakamazsınız!'
                                },
                                validRegExp: {
                                    status: true,
                                    regexp: /^\b((?:[0-9][0-9]?|100))\b/g, // /^\b(0*(?:[1-9][0-9]?|100))\b/g
                                    errorMessage: 'Komisyon oranı en az %0 en fazla %100 olabilir!',
                                }
                            }
                        },
                        address: {
                            id: 'address',
                            name: 'address',
                            type: 'textarea',
                            ref: 'address',
                            options: {
                                label: 'Adres <span style=\'color: red\'>*</span>',
                                labelBold: true,
                                placeholder: 'Adres girin',
                                maxlength: 300,
                                height: '100px',
                                shaker: true,
                                textCounter: true,
                                validRequired: {
                                    status: true,
                                    errorMessage: 'Bu alanı boş bırakamazsınız!'
                                },
                                validLengthMin: {
                                    status: true,
                                    number: 5,
                                    errorMessage: 'Bu alana en az <strong>5</strong> karakter girebilirsiniz!'
                                },
                                validLengthMax: {
                                    status: true,
                                    number: 300,
                                    errorMessage: 'Bu alana en az <strong>500</strong> karakter girebilirsiniz!'
                                }
                            }
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
                                ]
                            }
                        }
                    },
                    form: null
                }
            }
        };
    },
    created() {
        this.getPartnerCompanies();
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
                            title: 'Yönetici Sil',
                            html: `<strong>${params.node.data.title}</strong> isimli yöneticiyi silmek istiyor musunuz?`,
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
                        _this.openModal(_this.modals.addUpdate, 'Yönetici Düzenle', 'put', params.node.data);
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
        rowDoubleClicked(row) {
            this.openModal(this.modals.addUpdate, 'Partner Düzenle', 'put', row.data);
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
                            title: { value: data.title, valid: true },
                            phone: { value: data.phone, valid: true },
                            email: { value: data.email, valid: true },
                            taxOffice: { value: data.taxOffice, valid: true },
                            taxIdentityNumber: { value: data.taxIdentityNumber, valid: true },
                            mersisNumber: { value: data.mersisNumber, valid: true },
                            commissionRate: { value: data.commissionRate.toString(), valid: true },
                            address: { value: data.address, valid: true },
                            status: { value: data.status, valid: true }
                        }
                    } 
                    else {
                        await new Promise(resolve => {
                            modal.form = {
                                _id: '',
                                title: { value: '', valid: null },
                                phone: { value: '', valid: null },
                                email: { value: '', valid: null },
                                taxOffice: { value: '', valid: null },
                                taxIdentityNumber: { value: '', valid: null },
                                mersisNumber: { value: '', valid: null },
                                commissionRate: { value: '', valid: null },
                                address: { value: '', valid: null },
                                status: { value: true, valid: true }
                            };

                            resolve();
                        });
                    }
                    
                    break;
            }
            
            modal.show = true; 
            modal.watchDisabled = false;
        },
        closeModal(modal) {
            modal.show = false;
        },
        async getPartnerCompanies(collapse = false) {
            var params = {
                title: this.search.form.title.value,
                phone: this.search.form.phone.value,
                email: this.search.form.email.value,
                taxOffice: this.search.form.taxOffice.value,
                taxIdentityNumber: this.search.form.taxIdentityNumber.value,
                mersisNumber: this.search.form.mersisNumber.value,
                commissionRate: this.search.form.commissionRate.value,
                status: this.search.form.status.value.value
            }
            
            this.$Progress.start();
            this.search.disabled = true;
            var PartnerCompaniesResult = await axios.get(process.env.VUE_APP_API_URL + 'admin/partnerCompanies', { params: params });
            this.$Progress.finish();
            this.search.disabled = false;

            if(PartnerCompaniesResult.data.result === 'success') this.rowData = PartnerCompaniesResult.data.list;
            else this.rowData = [];

            if(collapse === true) this.$refs.cbcsearchsidebar.closeNav();
        },
        async addUpdate() {
            var inputErrors = [];

            this.$refs.title.validControl(true);
            inputErrors.push(this.modals.addUpdate.form.title.valid);

            this.$refs.phone.validControl(true);
            inputErrors.push(this.modals.addUpdate.form.phone.valid);

            this.$refs.email.validControl(true);
            inputErrors.push(this.modals.addUpdate.form.email.valid);

            this.$refs.taxOffice.validControl(true);
            inputErrors.push(this.modals.addUpdate.form.taxOffice.valid);

            this.$refs.taxIdentityNumber.validControl(true);
            inputErrors.push(this.modals.addUpdate.form.taxIdentityNumber.valid);

            this.$refs.mersisNumber.validControl(true);
            inputErrors.push(this.modals.addUpdate.form.mersisNumber.valid);

            this.$refs.commissionRate.validControl(true);
            inputErrors.push(this.modals.addUpdate.form.commissionRate.valid);

            this.$refs.address.validControl(true);
            inputErrors.push(this.modals.addUpdate.form.address.valid);

            // inputErrors array içinde false olan varsa
            if(inputErrors.includes(false) === true) return;

            var form = {
                title: this.modals.addUpdate.form.title.value,
                phone: this.modals.addUpdate.form.phone.value,
                email: this.modals.addUpdate.form.email.value,
                taxOffice: this.modals.addUpdate.form.taxOffice.value,
                taxIdentityNumber: this.modals.addUpdate.form.taxIdentityNumber.value,
                mersisNumber: this.modals.addUpdate.form.mersisNumber.value,
                commissionRate: this.modals.addUpdate.form.commissionRate.value,
                address: this.modals.addUpdate.form.address.value,
                status: this.modals.addUpdate.form.status.value.value
            };

            if(this.modals.addUpdate.process === 'put') form._id = this.modals.addUpdate.form._id;
            
            this.$Progress.start();
            this.modals.addUpdate.disabled = true;
            var addUpdateResult = await axios[this.modals.addUpdate.process](process.env.VUE_APP_API_URL + 'admin/partnerCompanies', form);
            this.$Progress.finish();
            this.modals.addUpdate.disabled = false;

            if(addUpdateResult.data.result === 'success') {
                this.closeModal(this.modals.addUpdate);
                this.getPartnerCompanies();
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
            var deleteResult = await axios.delete(process.env.VUE_APP_API_URL + 'admin/partnerCompanies/' + _id);
            this.$Progress.finish();
            this.search.disabled = false;

            if(deleteResult.data.result === 'success') this.getPartnerCompanies();

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
        async changeStatus(_id, status) {
            var form = {
                _id: _id,
                status: status
            };
            
            this.$Progress.start();
            this.search.disabled = true;
            //this.$store.commit('backdropLoader', true);
            var changeStatusResult = await axios.put(process.env.VUE_APP_API_URL + 'admin/partnerCompanies', form);
            this.$Progress.finish();
            this.search.disabled = false;
            //this.$store.commit('backdropLoader', false);

            if(changeStatusResult.data.result === 'error') this.getPartnerCompanies();

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