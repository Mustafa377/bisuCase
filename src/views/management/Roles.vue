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
                            :disabled="search.disabled"
                        />
                    </CCol>
                </CRow> 
            </template>
            <template v-slot:searchSideBarFooter>
                <CButton
                    block
                    color="primary"
                    :disabled="search.disabled"
                    @click="getRoles(true)"
                ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="search.disabled" />Ara
                </CButton>
            </template>
            <template v-slot:main>
                <CCard class="rounded-0 border-0">
                    <CCardHeader class="d-flex flex-row justify-content-between align-items-center rounded-0 border-right">
                        <span class="font-weight-bold">Yetki Grupları</span>
                        <div class="card-header-actions">
                            <CButton color="success" class="btn-coreui mr-2" :disabled="search.disabled" @click="openModal(modals.addUpdate, 'Yetki Grubu Ekle', 'post')">
                                <i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="search.disabled" />Yetki Grubu Ekle
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
                            :groupDefaultExpanded="groupDefaultExpanded"
                            :masterDetail="true"
                            :detailCellRendererParams="detailCellRendererParams"
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
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import { AgGridVue } from 'ag-grid-vue';

export default {
    name: 'Roles',
    components: {
        AgGridVue
    },
    data() {
        return {
            columnDefs: [
                {
                    field: 'name',
                    cellRenderer: 'agGroupCellRenderer',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    headerName: 'Grup Adı',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 120
                },
                {
                    field: 'roleCount',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    headerName: 'İzin Sayısı',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 120
                },
                {
                    field: 'userCount',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    headerName: 'Kullanıcı Sayısı',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 120
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
            groupDefaultExpanded: 0,
            detailCellRendererParams: {
                detailGridOptions: {
                    columnDefs: [
                        {
                            field: 'title',
                            headerName: 'Sayfa Adı',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 150
                        },
                        {
                            field: 'view',
                            cellRenderer: params => {
                                if(params.value === true) return 'İzin Verildi';
                                else if(params.value === false) return 'İzin Verilmedi';
                                else return 'İzin Bulunamadı';
                            },
                            cellStyle: params => {
                                if(params.value === true) return { color: '#2eb85c', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' };
                                else if(params.value === false) return { color: '#dc3545', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' };
                                else return { color: '#ffc107', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' };
                            },
                            headerName: 'Listeleme',
                            width: 130
                        },
                        {
                            field: 'add',
                            cellRenderer: params => {
                                if(params.value === true) return 'İzin Verildi';
                                else if(params.value === false) return 'İzin Verilmedi';
                                else return 'İzin Bulunamadı';
                            },
                            cellStyle: params => {
                                if(params.value === true) return { color: '#2eb85c', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' };
                                else if(params.value === false) return { color: '#dc3545', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' };
                                else return { color: '#ffc107', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' };
                            },
                            headerName: 'Kayıt Ekleme',
                            width: 130
                        },
                        {
                            field: 'update',
                            cellRenderer: params => {
                                if(params.value === true) return 'İzin Verildi';
                                else if(params.value === false) return 'İzin Verilmedi';
                                else return 'İzin Bulunamadı';
                            },
                            cellStyle: params => {
                                if(params.value === true) return { color: '#2eb85c', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' };
                                else if(params.value === false) return { color: '#dc3545', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' };
                                else return { color: '#ffc107', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' };
                            },
                            headerName: 'Kayıt Güncelleme',
                            width: 150
                        },
                        {
                            field: 'delete',
                            cellRenderer: params => {
                                if(params.value === true) return 'İzin Verildi';
                                else if(params.value === false) return 'İzin Verilmedi';
                                else return 'İzin Bulunamadı';
                            },
                            cellStyle: params => {
                                if(params.value === true) return { color: '#2eb85c', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' };
                                else if(params.value === false) return { color: '#dc3545', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' };
                                else return { color: '#ffc107', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' };
                            },
                            headerName: 'Kayıt Silme',
                            width: 130
                        }
                    ],
                    defaultColDef: {
                        sortable: true,
                        resizable: true,
                        filter: true,
                        enableCellChangeFlash: true
                    },
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
                    getContextMenuItems: params => {
                        var contextMenu = [];
                        
                        return contextMenu;
                    }
                },
                getDetailRowData: params => {
                    params.successCallback(params.data.roles);
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
                            /* label: 'Grup Adı',
                            labelBold: true, */
                            placeholder: 'Grup adı girin',
                            maxlength: 50
                        }
                    }
                },
                form: {
                    name: { value: '', valid: null }
                }
            },

            modals: {
                addUpdate: {
                    show: false,
                    title: '',
                    process: '',
                    disabled: false,
                    fields: {
                        name: {
                            id: 'name2',
                            name: 'name2',
                            type: 'text',
                            ref: 'name2',
                            options: {
                                label: 'Grup Adı',
                                labelBold: true,
                                placeholder: 'Grup adı girin',
                                maxlength: 50,
                                shaker: true,
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
                        }
                    },
                    form: {
                        _id: '',
                        name: {
                            value: '',
                            valid: null
                        }
                    }
                }
            }
        };
    },
    created() {
        this.getRoles();
    },
    watch: {
        'modals.addUpdate.form.name.value': function(val) {
            this.$refs.name2.validControl();
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
                        _Swal.fire({
                            icon: 'error',
                            title: 'Yetki Grubu Sil',
                            html: `<strong>${params.node.data.name}</strong> isimli yetki grubunu silmek istiyor musunuz?`,
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
                    action: function() {
                        _this.openModal(_this.modals.addUpdate, 'Yetki Grubu Düzenle', 'put', params.node.data);
                    }
                }
            ];
        },
        rowDoubleClicked(row) {
            this.openModal(this.modals.addUpdate, 'Yetki Grubu Düzenle', 'put', row.data);
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
                                name: { value: data.name, valid: true }
                            }
                        } else {
                            modal.form = {
                                _id: '',
                                name: { value: '', valid: null }
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
        async getRoles(collapse = false) {
            var form = {
                name: this.search.form.name.value
            }

            this.$Progress.start();
            this.search.disabled = true;
            var rolesResult = await axios.get(process.env.VUE_APP_API_URL + 'admin/roles', { params: form });
            this.$Progress.finish();
            this.search.disabled = false;

            if(rolesResult.data.result === 'success') {
                var roleGroups = [];
                var roles = [];

                for (let i = 0; i < rolesResult.data.list.length; i++) {
                    const roleGroup = rolesResult.data.list[i];
                    roles = [];

                    for (let x = 0; x < Object.values(roleGroup.fields).length; x++) {
                        roles.push(Object.values(roleGroup.fields)[x]);
                    }

                    roleGroups.push({ _id: roleGroup._id, name: roleGroup.name, roleCount: roles.length, userCount: roleGroup.users.length, roles: roles });
                }

                this.rowData = roleGroups;
            } else {
                this.rowData = [];

                Swal.fire({
                    icon: rolesResult.data.result,
                    title: rolesResult.data.message,
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

            // inputErrors array içinde false olan varsa
            if(inputErrors.includes(false) === true) return;

            var params = {
                name: this.modals.addUpdate.form.name.value,
                deneme: 'deneme'
            }

            if(this.modals.addUpdate.process === 'put') params._id = this.modals.addUpdate.form._id;

            this.$Progress.start();
            this.modals.addUpdate.disabled = true;
            var addUpdateResult = await axios[this.modals.addUpdate.process](process.env.VUE_APP_API_URL + 'admin/roles', params);
            this.$Progress.finish();
            this.modals.addUpdate.disabled = false

            if(addUpdateResult.data.result === 'success') {
                this.getRoles();
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
                    confirmButtonColor: '#1565C0'
                });
            }
        },
        async delete(_id) {
            this.$Progress.start();
            this.search.disabled = true;
            var deleteResult = await axios.delete(process.env.VUE_APP_API_URL + 'admin/roles/' + params._id);
            this.search.disabled = false;
            this.$Progress.finish();

            if(deleteResult.data.result === 'success') {
                this.getRoles();

                Swal.fire({
                    icon: deleteResult.data.result,
                    title: deleteResult.data.message,
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
                    icon: deleteResult.data.result,
                    title: 'Yetki Grubu Sil',
                    html: deleteResult.data.message,
                    confirmButtonText: 'Tamam',
                    confirmButtonColor: '#1565C0'
                });
            }
        }
    }
};
</script>

<style lang="scss">

</style>