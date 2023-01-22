<template>
    <div class="custom-container">
        <cbc-searchsidebar ref="cbcsearchsidebar" :isOpen="true" :visibleSearchSideBarFooter="true">
            <template v-slot:searchSideBar>
                <CRow>
                    <CCol col="12">
                        <cbcinput-vue 
                            v-model="search.form.agentPolicyNo"
                            :id="search.fields.agentPolicyNo.id"
                            :name="search.fields.agentPolicyNo.name"
                            :type="search.fields.agentPolicyNo.type"
                            :ref="search.fields.agentPolicyNo.ref"
                            :options="search.fields.agentPolicyNo.options"
                            :disabled="search.disabled"/>
                    </CCol>
                    <CCol col="12">
                        <cbcinput-vue 
                            v-model="search.form.companyPolicyNo"
                            :id="search.fields.companyPolicyNo.id"
                            :name="search.fields.companyPolicyNo.name"
                            :type="search.fields.companyPolicyNo.type"
                            :ref="search.fields.companyPolicyNo.ref"
                            :options="search.fields.companyPolicyNo.options"
                            :disabled="search.disabled"/>
                    </CCol>
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
                            v-model="search.form.insuredName"
                            :id="search.fields.insuredName.id"
                            :name="search.fields.insuredName.name"
                            :type="search.fields.insuredName.type"
                            :ref="search.fields.insuredName.ref"
                            :options="search.fields.insuredName.options"
                            :disabled="search.disabled"/>
                    </CCol>
                    <CCol col="12">
                        <cbcinput-vue 
                            v-model="search.form.insuredLastname"
                            :id="search.fields.insuredLastname.id"
                            :name="search.fields.insuredLastname.name"
                            :type="search.fields.insuredLastname.type"
                            :ref="search.fields.insuredLastname.ref"
                            :options="search.fields.insuredLastname.options"
                            :disabled="search.disabled"/>
                    </CCol>
                    <CCol col="12">
                        <cbcinput-vue 
                            v-model="search.form.insuredIdentityNumber"
                            :id="search.fields.insuredIdentityNumber.id"
                            :name="search.fields.insuredIdentityNumber.name"
                            :type="search.fields.insuredIdentityNumber.type"
                            :ref="search.fields.insuredIdentityNumber.ref"
                            :options="search.fields.insuredIdentityNumber.options"
                            :disabled="search.disabled"/>
                    </CCol>
                    <CCol col="12">
                        <cbcinput-vue 
                            v-model="search.form.insuredEmail"
                            :id="search.fields.insuredEmail.id"
                            :name="search.fields.insuredEmail.name"
                            :type="search.fields.insuredEmail.type"
                            :ref="search.fields.insuredEmail.ref"
                            :options="search.fields.insuredEmail.options"
                            :disabled="search.disabled"/>
                    </CCol>
                    <CCol col="12">
                        
                    </CCol>
                </CRow>
            </template>
            <template v-slot:searchSideBarFooter>
                <CButton
                    color="primary"
                    block
                    :disabled="search.btnDisable"
                    @click="getPolicy(true)"
                ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="search.btnDisable" />Ara
                </CButton>
            </template>
            <template v-slot:main>
                <CCard class="rounded-0 border-0">
                    <CCardHeader class="d-flex flex-row justify-content-between align-items-center rounded-0 border-right">
                        <span class="font-weight-bold">Poliçeler</span>
                        <div class="card-header-actions">
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
                            :rowSelection="rowSelection"
                            :enableRangeSelection="true"
                            :statusBar="statusBar"
                            @grid-ready="onGridReady">
                        </ag-grid-vue>
                    </CCardBody>
                </CCard>
            </template>
        </cbc-searchsidebar>
    </div>
</template>

<script> 
import axios from 'axios';
import moment from 'moment';
import { AgGridVue } from 'ag-grid-vue';

const moneyFormat = require('currency-formatter');

export default {
    name: 'Policies',
    components: {
        AgGridVue
    },
    data() {
        return {
            moneyFormat: moneyFormat,
            columnDefs: [
                {
                    field: 'errors',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    cellRenderer: params => {
                        if(params.value.length > 0) return 'Poliçe Hatalı';
                        else return 'Poliçe Başarılı';
                    },
                    cellStyle: params => {
                        if(params.value.length > 0) return { color: '#e55353', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' };
                        else return { color: '#2eb85c', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' };
                    },
                    headerName: 'Poliçe Durumu',
                    width: 140
                },
                {
                    field: 'agentPolicyNo',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    headerName: 'Acente Poliçe No',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 150
                },
                {
                    field: 'companyPolicyNo',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    headerName: 'Firma Poliçe No',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 150
                },
                {
                    // User veya Partner mi?
                    field: 'user',
                    cellRenderer: params => {
                        if (params.data.user) {
                            if (params.data.user.accountType === 'admin') {
                                return 'Yönetici'  + ' - ' + params.data.user.name + ' ' + params.data.user.lastname;
                            } else if (params.data.user.accountType === 'partner') {
                                return 'Partner'  + ' - ' + params.data.user.name + ' ' + params.data.user.lastname;
                            }
                        } else if (params.data.member) {
                            return 'Üye'  + ' - ' + params.data.member.name + ' ' + params.data.member.lastname;
                        } else {
                            return 'Misafir';
                        }
                    },
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    headerName: 'Poliçeleştiren Kişi',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 200
                },
                {
                    field: 'partner.title',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    headerName: 'Partner Firma',
                    cellStyle: { display: 'flex', alignItems: 'center' },
                    width: 150
                },
                {
                    field: 'companyDetail.name',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    headerName: 'Firma Adı',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 150
                },
                {
                    field: 'type',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    cellRenderer: params => {
                        if(params.value === 'casco') return 'Kasko Sigortası';
                        else if(params.value === 'traffic') return 'Trafik Sigortası';
                        else if(params.value === 'dask') return 'DASK';
                        else if(params.value === 'housing') return 'Konut Sigortası';
                        else if(params.value === 'compHealth') return 'Tamamlayıcı Sağlık Sigortası';
                        else if(params.value === 'privHealth') return 'Özel Sağlık Sigortası';
                        else return '---';
                    },
                    headerName: 'Sigorta Tipi',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 150
                },
                {
                    field: 'priceDetail.priceTotal',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    cellRenderer: params => {
                        return moneyFormat.format(params.value, { code: 'TRY', symbol: 'TRY', format: '%v %s' });
                    },
                    headerName: 'Toplam Fiyat',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 120
                },
                {
                    field: 'insured.name',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    headerName: 'Ad',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 120
                },
                {
                    field: 'insured.lastname',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    headerName: 'Soyad',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 120
                },
                {
                    field: 'insured.identityNumber',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    headerName: 'Kimlik Numarası',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 140
                },
                {
                    field: 'insured.email',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    headerName: 'E-Posta',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 230
                },
                {
                    field: 'createdDate',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    cellRenderer: params => {
                        return moment(new Date(params.value)).format("DD.MM.YYYY - HH:mm");
                    },
                    headerName: 'Oluşturulma Tarihi',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 160
                }
            ],
            defaultColDef: {
                sortable: true,
                resizable: true,
                filter: true
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
                    agentPolicyNo: {
                        id: 'agentPolicyNo',
                        name: 'agentPolicyNo',
                        type: 'number',
                        ref: 'agentPolicyNo',
                        options: {
                            /* label: 'Acente Poliçe No',
                            labelBold: true, */
                            placeholder: 'Acente Poliçe No girin',
                            maxlength: 10,
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'fontawesome',
                                    src: ['far', 'building']
                                }
                            }
                        }
                    },
                    companyPolicyNo: {
                        id: 'companyPolicyNo',
                        name: 'companyPolicyNo',
                        type: 'number',
                        ref: 'companyPolicyNo',
                        options: {
                            /* label: 'Firma Poliçe No',
                            labelBold: true, */
                            placeholder: 'Firma Poliçe No girin',
                            maxlength: 20,
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'fontawesome',
                                    src: ['far', 'building']
                                }
                            }
                        }
                    },
                    type: {
                        id: 'type',
                        name: 'type',
                        type: 'select',
                        ref: 'type',
                        options: {
                            /* label: 'Sigorta Tipi',
                            labelBold: true, */
                            selectSettings: {
                                placeholder: 'Sigorta tipini seçin',
                                showLabels: true,
                                selectedLabel: 'Seçildi',
                                deselectLabel: 'Kaldır',
                                allowEmpty: true,
                            },
                            selectOptions: [
                                { value: 'casco', label: 'Kasko Sigortası' },
                                { value: 'traffic', label: 'Trafik Sigortası' },
                                { value: 'dask', label: 'DASK' },
                                { value: 'housing', label: 'Konut Sigortası' },
                                { value: 'compHealth', label: 'Tamamlayıcı Sağlık Sigortası' },
                                { value: 'privHealth', label: 'Özel Sağlık Sigortası' }
                            ]
                        }
                    },
                    insuredName: {
                        id: 'insuredName',
                        name: 'insuredName',
                        type: 'text',
                        ref: 'insuredName',
                        options: {
                            /* label: 'Sigortalı Adı',
                            labelBold: true, */
                            placeholder: 'Sigortalı Adı girin',
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
                    insuredLastname: {
                        id: 'insuredLastname',
                        name: 'insuredLastname',
                        type: 'text',
                        ref: 'insuredLastname',
                        options: {
                            /* label: 'Sigortalı Soyadı',
                            labelBold: true, */
                            placeholder: 'Sigortalı Soyadı girin',
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
                    insuredIdentityNumber: {
                        id: 'insuredIdentityNumber',
                        name: 'insuredIdentityNumber',
                        type: 'text',
                        ref: 'insuredIdentityNumber',
                        options: {
                            /* label: 'Sigortalı T.C. Kimlik veya Vergi No',
                            labelBold: true, */
                            placeholder: 'Sigortalı T.C. Kimlik veya Vergi No',
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
                    insuredEmail: {
                        id: 'insuredEmail',
                        name: 'insuredEmail',
                        type: 'email',
                        ref: 'insuredEmail',
                        options: {
                            /* label: 'Sigortalı E-Posta Adresi',
                            labelBold: true, */
                            placeholder: 'Sigortalı E-Posta adresi girin',
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
                    }
                },
                form: {
                    agentPolicyNo: { value: '', valid: null },
                    companyPolicyNo: { value: '', valid: null },
                    type: { value: '', valid: null },
                    insuredName: { value: '', valid: null },
                    insuredLastname: { value: '', valid: null },
                    insuredIdentityNumber: { value: '', valid: null },
                    insuredEmail: { value: '', valid: null }
                },
            }
        };
    },
    created() {
        this.$store.commit('closeSidebar'); // Sidebar kapatılır
    },
    methods: {
        onGridReady(params) {
            this.gridApi = params.api;
            this.gridColumnApi = params.columnApi;
        },
        rowDoubleClicked(row) {
            window.open(`../../police/firmaPoliceNo/${row.data.companyPolicyNo}`, '_blank');
        },
        async getPolicy(collapse = false) {
            var params = {
                agentPolicyNo: this.search.form.agentPolicyNo.value,
                companyPolicyNo: this.search.form.companyPolicyNo.value,
                insuredName: this.search.form.insuredName.value,
                insuredLastname: this.search.form.insuredLastname.value,
                insuredIdentityNumber: this.search.form.insuredIdentityNumber.value,
                insuredEmail: this.search.form.insuredEmail.value,
                type: this.search.form.type.value.value,
                addResults: true
            }

            if(this.$store.state.user.accountType === 'partner')  params.partnerId = this.$store.state.user.partnerId; // Partner ID'yi Search'e ekliyoruz, eğer partner girişi yapılmışsa :)

            this.$Progress.start();
            this.search.disabled = true;
            var policyResult = await axios.get(process.env.VUE_APP_API_URL + 'admin/policy', { params: params });
            this.$Progress.finish();
            this.search.disabled = false;

            if(policyResult.data.result === 'success') this.rowData = policyResult.data.list;
            else this.rowData = [];

            if(collapse === true) this.$refs.cbcsearchsidebar.closeNav();
        }
    }
};
</script>

<style lang="scss">
</style>                       