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
                            v-model="search.form.slug"
                            :id="search.fields.slug.id"
                            :name="search.fields.slug.name"
                            :type="search.fields.slug.type"
                            :ref="search.fields.slug.ref"
                            :options="search.fields.slug.options"
                            :disabled="search.disabled"/>
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
                    @click="getInsuranceCompanys(false)"
                ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="search.disabled" />Ara
                </CButton>
            </template>
            <template v-slot:main>
                <CCard class="rounded-0 border-0">
                    <CCardHeader class="d-flex flex-row justify-content-between align-items-center rounded-0 border-right">
                        <span class="font-weight-bold">Sigorta Firmaları</span>
                        <div class="card-header-actions">
                            <CButton color="success" class="btn-coreui mr-2" :disabled="search.disabled" @click="openModal(modals.addUpdate, 'Sigorta Firması Ekle', 'post')">
                                <i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="search.disabled" />Sigorta Firması Ekle
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
                        v-model="modals.addUpdate.form.slug"
                        :id="modals.addUpdate.fields.slug.id"
                        :name="modals.addUpdate.fields.slug.name"
                        :type="modals.addUpdate.fields.slug.type"
                        :ref="modals.addUpdate.fields.slug.ref"
                        :options="modals.addUpdate.fields.slug.options"
                        :disabled="modals.addUpdate.disabled"/>
                </CCol>
                <CCol md="6" lg="4">
                    <cbcinput-vue 
                        v-model="modals.addUpdate.form.apiFolder"
                        :id="modals.addUpdate.fields.apiFolder.id"
                        :name="modals.addUpdate.fields.apiFolder.name"
                        :type="modals.addUpdate.fields.apiFolder.type"
                        :ref="modals.addUpdate.fields.apiFolder.ref"
                        :options="modals.addUpdate.fields.apiFolder.options"
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
import { AgGridVue } from 'ag-grid-vue';

export default {
    name: 'InsuranceCompanies',
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
                        _this: this,
                        changed: function(_id, checked) {
                            _this.changeStatus(this.data._id, this.data.apiFolder, checked);
                        }
                    },
                    cellStyle: () => { return { display: 'flex', alignItems: 'center', justifyContent: 'center' } },
                    headerName: 'Durum',
                    width: 80
                },
                {
                    field: 'name',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    headerName: 'Firma Adı',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 160
                },
                {
                    field: 'slug',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    headerName: 'Firma Slug',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 160
                },
                {
                    field: 'apiFolder',
                    headerName: 'API Klasörü',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 200
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
                                label: 'Firma İsmi <span style=\'color: red\'>*</span>',
                                labelBold: true,
                                placeholder: 'Firma İsmi girin',
                                maxlength: 50,
                                shaker: true,
                                inputIcon: {
                                    status: true,
                                    placement: 'left',
                                    icon: {
                                        library: 'fontawesome',
                                        src: ['far', 'building']
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
                        slug: {
                            id: 'slug',
                            name: 'slug',
                            type: 'text',
                            ref: 'slug',
                            options: {
                                label: 'Firma Slug <span style=\'color: red\'>*</span>',
                                labelBold: true,
                                placeholder: 'Firma Slug girin',
                                maxlength: 50,
                                shaker: true,
                                inputIcon: {
                                    status: true,
                                    placement: 'left',
                                    icon: {
                                        library: 'fontawesome',
                                        src: ['far', 'book-user']
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
                        apiFolder: {
                            id: 'apiFolder',
                            name: 'apiFolder',
                            type: 'text',
                            ref: 'apiFolder',
                            options: {
                                label: 'API Klasörü <span style=\'color: red\'>*</span>',
                                labelBold: true,
                                placeholder: 'API Klasörü girin',
                                maxlength: 50,
                                shaker: true,
                                inputIcon: {
                                    status: true,
                                    placement: 'left',
                                    icon: {
                                        library: 'fontawesome',
                                        src: ['far', 'folders']
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
                    },
                    form: null,
                }
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
                            /* label: 'Ad <span style=\'color: red\'>*</span>',
                            labelBold: true, */
                            placeholder: 'Ad girin',
                            maxlength: 50,
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
                    slug: {
                        id: 'slug',
                        name: 'slug',
                        type: 'text',
                        ref: 'slug',
                        options: {
                            /* label: 'Slug <span style=\'color: red\'>*</span>',
                            labelBold: true, */
                            placeholder: 'Slug girin',
                            maxlength: 50,
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
                    status: {
                        id: 'status',
                        name: 'status',
                        type: 'select',
                        ref: 'status',
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
                            ]
                        }
                    }
                },
                form: {
                    name: { value: '', valid: null },
                    slug: { value: '', valid: null },
                    status: { value: '', valid: null }
                }
            }
        };
    },
    created() {
        this.getInsuranceCompanys({ params: this.search.form });       
    },
    watch: {
        'modals.addUpdate.form.name.value': function(val) {
            this.modals.addUpdate.form.slug.value = Func.slugify(val);
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
                            title: 'Sigorta Firması Sil',
                            html: `<strong> ${params.node.data.name} </strong> isimli sigorta firmasını silmek istiyor musunuz?`,
                            confirmButtonText: 'Evet',
                            confirmButtonColor: '#3652B3',
                            showDenyButton: true,
                            denyButtonText: 'Hayır'
                        }).then(result => {
                            if(result.isConfirmed) _this.delete(params.node.data._id);
                        });
                    }
                },
                {
                    name: 'Düzenle',
                    action: async function() {
                        _this.openModal(_this.modals.addUpdate, 'Sigorta Firması Düzenle', 'put', params.node.data);
                    },
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
            this.openModal(this.modals.addUpdate, 'Sigorta Firması Düzenle', 'put', row.data);
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
                                name: { value: data.name, valid: true },
                                slug: { value: data.slug, valid: true },
                                apiFolder: { value: data.apiFolder, valid: true },
                                status: { value: data.status, valid: true }
                            }
                        } else {
                            modal.form = {
                                _id: '',
                                name: { value: '', valid: null },
                                slug: { value: '', valid: null },
                                apiFolder: { value: '', valid: null },
                                status: { value: true, valid: true }
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
        async getInsuranceCompanys(collapse = false) {
            var form = {
                name: this.search.form.name.value,
                slug: this.search.form.slug.value,
                status: this.search.form.status.value.value
            }

            this.$Progress.start();
            this.search.disabled = true;
            var companyResult = await axios.get(process.env.VUE_APP_API_URL + 'admin/companies', { params: form });
            this.$Progress.finish();
            this.search.disabled = false;

            if(companyResult.data.result === 'success') this.rowData = companyResult.data.list;
            else {
                this.rowData = [];

                Swal.fire({
                    icon: companyResult.data.result,
                    title: companyResult.data.message,
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

            if(collapse === true) this.$refs.cbcsearchsidebar.closeNav();
        },
        async addUpdate() {
            var inputErrors = [];

            this.$refs.name.validControl(true);
            inputErrors.push(this.modals.addUpdate.form.name.valid);
            
            this.$refs.slug.validControl(true);
            inputErrors.push(this.modals.addUpdate.form.slug.valid);

            this.$refs.apiFolder.validControl(true);
            inputErrors.push(this.modals.addUpdate.form.apiFolder.valid);

            // inputErrors array içinde false olan varsa
            if(inputErrors.includes(false) === true) return;

            this.$Progress.start();
            this.modals.addUpdate.disabled = true;

            var form = {
                name: this.modals.addUpdate.form.name.value,
                slug: this.modals.addUpdate.form.slug.value,
                apiFolder: this.modals.addUpdate.form.apiFolder.value,
                status: this.modals.addUpdate.form.status.value,
                logo: this.modals.addUpdate.form.slug.value
            }

            if(this.modals.addUpdate.process === 'put') form._id = this.modals.addUpdate.form._id;

            this.$Progress.start();
            this.modals.addUpdate.disabled = true;
            var addUpdateResult = await axios[this.modals.addUpdate.process](process.env.VUE_APP_API_URL + 'admin/companies', form);
            this.$Progress.finish();
            this.modals.addUpdate.disabled = false;

            if(addUpdateResult.data.result === 'success') {
                this.getInsuranceCompanys(true);
                this.closeModal(this.modals.addUpdate);
                
                Swal.fire({
                    icon: addUpdateResult.data.result,
                    title: addUpdateResult.data.message,
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
            } else {
                Swal.fire({
                    icon: addUpdateResult.data.result,
                    title: this.modals.addUpdate.title,
                    html: addUpdateResult.data.message,
                    confirmButtonText: 'Tamam',
                    confirmButtonColor: '#3652B3'
                });
            }
        },
        async delete(_id) {
            this.$Progress.start();
            this.search.disabled = true;
            var deleteResult = await axios.delete(process.env.VUE_APP_API_URL + 'admin/companies/' + _id);
            this.$Progress.finish();
            this.search.disabled = false;

            if(deleteResult.data.result === 'success') this.getInsuranceCompanys();

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
        async changeStatus(_id, apiFolder, status) {
            var form = {
                _id: _id,
                apiFolder: apiFolder,
                status: status
            };

            this.$Progress.start();
            this.search.disabled = true;
            var changeStatusResult = await axios.put(process.env.VUE_APP_API_URL + 'admin/companies', form);
            this.$Progress.finish();
            this.search.disabled = false;

            if(changeStatusResult.data.result === 'error') this.getInsuranceCompanys();

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
.card {
    .card-header {
        background-color: #1565C0;
        color: white;
    }
}
</style>