<template>
    <div class="custom-container">
        <cbc-searchsidebar ref="cbcsearchsidebar" :isOpen="true">
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
                            v-model="search.form.subject"
                            :id="search.fields.subject.id"
                            :name="search.fields.subject.name"
                            :type="search.fields.subject.type"
                            :ref="search.fields.subject.ref"
                            :options="search.fields.subject.options"
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
                    <CCol col="12">
                        <CButton
                            block
                            color="primary"
                            :disabled="search.disabled"
                            @click="getSupportRequests(true)"
                        ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="search.disabled" />Ara
                        </CButton>
                    </CCol>
                </CRow>
            </template>
            <template v-slot:main>
                <CCard class="rounded-0 border-0">
                    <CCardHeader class="d-flex flex-row justify-content-between align-items-center rounded-0 border-right">
                        <span class="font-weight-bold">Destek Talepleri</span>
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
                            :rowHeight="40"
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
            v-if="modals.update.form !== null"
            size="lg"
            :title="modals.update.title + (modals.update.form.answer.length > 0 ? ' - Cevaplandı':'')"
            :show.sync="modals.update.show"
            :closeOnBackdrop="false">
            <CRow>
                <CCol md="6" lg="4">
                    <h6 class="mr-2 font-weight-bold">Ad</h6>
                    <p>{{ modals.update.form.name }}</p>
                </CCol>
                <CCol md="6" lg="4">
                    <h6 class="mr-2 font-weight-bold">Soyad</h6>
                    <p>{{ modals.update.form.lastname }}</p>
                </CCol>
                <CCol md="6" lg="4">
                    <h6 class="mr-2 font-weight-bold">E-Posta</h6>
                    <p>{{ modals.update.form.email }}</p>
                </CCol>
                <CCol md="6" lg="4">
                    <h6 class="mr-2 font-weight-bold">Telefon</h6>
                    <p>{{ modals.update.form.phone }}</p>
                </CCol>
                <CCol md="6" lg="4">
                    <h6 class="mr-2 font-weight-bold">Tarih</h6>
                    <p>{{ moment(modals.update.form.registered).locale('tr').format('DD MMMM YYYY - HH:mm:ss') }}</p>
                </CCol>
                <CCol md="6" lg="4">
                    <h6 class="mr-2 font-weight-bold">Konu</h6>
                    <p>{{ subjectType[modals.update.form.subject] }} </p>
                </CCol>
                <CCol col="12">
                    <h6 class="mr-2 font-weight-bold">Mesaj</h6>
                    <p>{{ modals.update.form.message }}</p>
                </CCol>
                <CCol col="12" style="margin-bottom: 1rem;">
                    <cbcinput-vue 
                        v-model="modals.update.form.answerType"
                        :id="modals.update.fields.answerType.id"
                        :name="modals.update.fields.answerType.name"
                        :type="modals.update.fields.answerType.type"
                        :ref="modals.update.fields.answerType.ref"
                        :options="modals.update.fields.answerType.options"
                        :disabled="modals.update.disabled"
                    />
                </CCol>
                <CCol col="12" :class="{'anim-shake': modals.update.fields.answer.shake}">
                    <div class="d-flex flex-row">
                        <h6 class="font-weight-bold mr-2">{{ modals.update.fields.answer.label }}</h6>
                        <span class="invalid-feedback d-block m-0" v-html="modals.update.fields.answer.valid.text" v-if="modals.update.fields.answer.valid.value === false"/>
                    </div>
                    <ckeditor v-model="modals.update.form.answer" :config="ckeditor.config" :readOnly="modals.update.disabled"></ckeditor>
                </CCol>
            </CRow>
            <template #footer>
                <CButton
                    color="primary"
                    :disabled="modals.update.disabled"
                    @click="update()"
                ><i :class="['fas', modals.update.disabled === true ? 'fa-circle-notch fa-spin' : 'fa-paper-plane', 'fa-lg mr-2']"></i>Cevabı Gönder
                </CButton>
                <CButton
                    color="danger"
                    :disabled="modals.update.disabled"
                    @click="modals.update.show = false"
                ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="modals.update.disabled" />Kapat
                </CButton>
            </template>
        </CModal>
    </div>
</template>

<script> 
import Vue from 'vue';
import axios from 'axios';
import Func from '@/func';
import Swal from 'sweetalert2';
import moment from 'moment';
import { AgGridVue } from 'ag-grid-vue';
import CKEditor from 'ckeditor4-vue';

Vue.use(CKEditor);

export default {
    name: 'SupportRequests',
    components: {
        AgGridVue,
        AgGridSelectBox: {
            template: `
                <select class="custom-select custom-select-sm" @change="chkChangedHandler($event)">
                    <option :value="option.value" v-for="(option, i) in options" :key="i" v-bind="[params.data.status === option.value && {'selected':true}]">{{option.text}}</option>
                </select>
            `,
            data() {
                return {
                    options: [
                        { value: 'Completed', text: 'Tamamlandı' },
                        { value: 'Pending', text: 'Bekliyor' }
                    ]
                }
            },
            methods: {
                chkChangedHandler(event) {
                    this.params.changed(this.params.data._id, event.target[event.target.options.selectedIndex].value);
                }
            }
        }
    },
    data() {
        var _this = this;

        return {
            ckeditor: {
                config: {
                    entities_latin: false,
                    toolbarGroups: [
                        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
                        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
                        { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                        { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
                        { name: 'forms', groups: [ 'forms' ] },
                        { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
                        '/',
                        { name: 'links', groups: [ 'links' ] },
                        { name: 'insert', groups: [ 'insert' ] },
                        '/',
                        { name: 'styles', groups: [ 'styles' ] },
                        { name: 'colors', groups: [ 'colors' ] },
                        { name: 'tools', groups: [ 'tools' ] },
                        { name: 'others', groups: [ 'others' ] },
                        { name: 'about', groups: [ 'about' ] }
                    ],
                    removeButtons: 'Save,Templates,NewPage,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,CreateDiv,JustifyBlock,JustifyRight,JustifyCenter,JustifyLeft,Styles,Format,Font,FontSize,TextColor,BGColor,ShowBlocks,Maximize,About,Image,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Anchor,Unlink,Link,BidiLtr,BidiRtl,Language,Replace,ExportPdf,Preview,Print,CopyFormatting,RemoveFormat,Superscript,Subscript,Blockquote,BulletedList,NumberedList,Outdent,Indent,Scayt,SelectAll,Find,PasteFromWord'
                }
            },
            subjectType: {
                'casco': 'Kasko',
                'traffic': 'Trafik',
                'dask': 'Dask',
                'housing': 'Konut',
                'privHealth': 'Özel Sağlık',
                'compHealth': 'Tam Sağlık',
                'Diğer': 'Diğer',
            },

            // AG GRID
            columnDefs: [ // Grid sütünların dizisi
                {
                    field: 'status',
                    cellRenderer: 'AgGridSelectBox',
                    cellRendererParams: {
                        changed: function(_id, value) {
                            _this.changeStatus(_id, value);
                        }
                    },
                    cellStyle: () => { return { display: 'flex', alignItems: 'center', justifyContent: 'center' } },
                    headerName: 'Durum',
                    width: 150
                },
                {
                    field: 'answer',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    cellRenderer: params => {
                        return params.value.length > 0 ? 'Cevaplandı' : 'Cevaplanmadı'
                    },
                    headerName: 'Cevap',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 130
                },
                {
                    field: 'name',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    headerName: 'Ad',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 150
                },
                {
                    field: 'lastname',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    headerName: 'Soyad',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 130
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
                    width: 150
                },
                {
                    field: 'subject',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    cellRenderer: params => {
                        if(params.data.subject === 'casco') return 'Kasko';
                        else if(params.data.subject === 'traffic') return 'Trafik';
                        else if(params.data.subject === 'dask') return 'Dask';
                        else if(params.data.subject === 'housing') return 'Konut';
                        else if(params.data.subject === 'privHealth') return 'Özel Sağlık';
                        else if(params.data.subject === 'compHealth') return 'Tam Sağlık';
                        else return 'Diğer';
                    },
                    headerName: 'Konu',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 180
                },
                /* {
                    field: 'message',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    cellRenderer: params => {
                        return params.value.substring(0, params.value.length > 75 ? 75:params.value.length) + '...'
                    },
                    cellStyle: () => { return { display: 'flex', alignItems: 'center' } },
                    headerName: 'Mesaj',
                    width: 300
                }, */
                {
                    field: 'registered',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    cellRenderer: params => {
                        return moment(new Date(params.value)).format("DD.MM.YYYY - HH:mm");
                    },
                    headerName: 'Mesaj Tarihi',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 150
                },
                {
                    field: 'answerDate',
                    onCellDoubleClicked: params => this.rowDoubleClicked(params),
                    cellRenderer: params => {
                        return params.data.answerType.length === 0 && params.data.answer.length === 0 ? '-':moment(new Date(params.value)).format("DD.MM.YYYY - HH:mm");
                    },
                    headerName: 'Cevap Tarihi',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 150
                }
            ],
            defaultColDef: { // Varsayılan bir sütun tanımı
                sortable: true,
                resizable: true,
                filter: true,
            },
            rowData: [], // Verilerin ekleneceği dizi
            sideBar: { // Grid yan çubuk tanımlaması
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
            rowSelection: 'multiple', // Satır Seçim Türü
            statusBar: { // Durum çubuğunda kullanılacak bileşenler
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
                    name: {
                        id: 'name',
                        name: 'name',
                        type: 'text',
                        ref: 'name',
                        options: {
                            /* label: 'Ad',
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
                            /* label: 'Soyad',
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
                    email: {
                        id: 'email',
                        name: 'email',
                        type: 'email',
                        ref: 'email',
                        options: {
                            /* label: 'E-Posta Adresi',
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
                            /* label: 'Cep Telefonu',
                            labelBold: true */
                        }
                    },
                    subject: {
                        id: 'subject',
                        name: 'subject',
                        type: 'select',
                        ref: 'subject',
                        options: {
                            /* label: 'Konu',
                            labelBold: true, */
                            selectSettings: {
                                placeholder: 'Konu seçin',
                                showLabels: true,
                                selectedLabel: 'Seçildi',
                                deselectLabel: 'Kaldır',
                                allowEmpty: true,
                            },
                            selectOptions: [
                                { value: 'casco', label: 'Kasko' },
                                { value: 'traffic', label: 'Trafik' },
                                { value: 'dask', label: 'Dask' },
                                { value: 'housing', label: 'Konut' },
                                { value: 'privHealth', label: 'Özel Sağlık' },
                                { value: 'compHealth', label: 'Tam Sağlık' },
                                { value: 'Diğer', label: 'Diğer' }
                            ]
                        }
                    },
                    status: {
                        id: 'status',
                        name: 'status',
                        type: 'select',
                        ref: 'status',
                        options: {
                            /* label: 'Durum',
                            labelBold: true, */
                            selectSettings: {
                                placeholder: 'Durum seçin',
                                showLabels: true,
                                selectedLabel: 'Seçildi',
                                deselectLabel: 'Kaldır',
                                allowEmpty: true,
                            },
                            selectOptions: [
                                { value: 'Completed', label: 'Tamamlandı' },
                                { value: 'Pending', label: 'Bekliyor' }
                            ]
                        }
                    }
                },
                form: {
                    name: { value: '', valid: null },
                    lastname: { value: '', valid: null },
                    email: { value: '', valid: null },
                    phone: { value: '', valid: null },
                    subject: { value: '', valid: null },
                    status: { value: '', valid: null },
                }
            },

            modals: {
                update: {
                    show: false,
                    title: '',
                    process: '',
                    disabled: false,
                    watchDisabled: false,
                    fields: {
                        answerType: {
                            id: 'answerType',
                            name: 'answerType',
                            type: 'select',
                            ref: 'answerType',
                            options: {
                                label: 'Cevap Şekli',
                                labelBold: true,
                                selectSettings: {
                                    placeholder: 'Cevap Şekli seçin',
                                    showLabels: true,
                                    selectedLabel: 'Seçildi',
                                    deselectLabel: 'Kaldır',
                                    allowEmpty: true,
                                },
                                selectOptions: [
                                    { value: 'Completed', label: 'Tamamlandı' },
                                    { value: 'Pending', label: 'Bekliyor' }
                                ]
                            }
                        },
                        answer: {
                            label: 'Cevap',
                            min: 6,
                            max: 300,
                            shake: false,
                            valid: {
                                value: null,
                                text: ''
                            }
                        }
                    },
                    form: null
                }
            }
        };
    },
    created() {
        this.getSupportRequests();
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
                    name: 'Görüntüle / Cevapla',
                    action: async function() {
                        _this.openModal(_this.modals.update, 'Destek Talebi', 'put', params.node.data);
                    }
                },
                {
                    name: 'Sil',
                    action: function() {
                        _Swal.fire({
                            icon: 'error',
                            title: 'Destek Talebi Sil',
                            html: `<strong>${params.node.data.name} ${params.node.data.lastname}</strong> isimli kişinin destek talebini silmek istiyor musunuz?`,
                            showDenyButton: true,
                            confirmButtonText: 'Evet',
                            denyButtonText: 'Hayır',
                        }).then(result => {
                            if (result.isConfirmed) _this.delete(params.node.data._id);
                        });
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
            this.openModal(this.modals.update, 'Destek Talebi', 'put', row.data);
        },
        async openModal(modal, title, _process = '', data = null) {
            modal.watchDisabled = true;

            switch (modal) {
                case this.modals.update:
                    modal.title = title;
                    modal.process = _process;

                    await new Promise(resolve => {
                        if(data !== null) {
                            modal.form = {
                                _id: data._id,
                                name: data.name,
                                lastname: data.lastname,
                                email: data.email,
                                phone: data.phone,
                                status: data.status,
                                subject: data.subject,
                                message: data.message,
                                answerType: data.answerType.value,
                                answer: '',
                                answerDate: null,
                                registered: data.registered
                            }
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
        async getSupportRequests(collapse = false) {
            var form = {
                name: this.search.form.name.value,
                lastname: this.search.form.lastname.value,
                email: this.search.form.email.value,
                phone: this.search.form.phone.value,
                subject: this.search.form.subject.value.value,
                status: this.search.form.status.value.value
            }

            this.$Progress.start();
            this.search.disabled = true;
            var supportRequestsResult = await axios.get(process.env.VUE_APP_API_URL + 'admin/supportRequests', { params: form });
            this.$Progress.finish();
            this.search.disabled = false;

            if(supportRequestsResult.data.result === 'success') this.rowData = supportRequestsResult.data.list;
            else this.rowData = [];

            if(collapse === true) this.$refs.cbcsearchsidebar.closeNav();
        },
        async update() {
            var params = {
                _id: this.modals.update.form._id,
                name: this.modals.update.form.name,
                lastname: this.modals.update.form.lastname,
                email: this.modals.update.form.email,
                phone: this.modals.update.form.phone.split(' ').join(''),
                status: this.modals.update.form.status,
                subject: this.modals.update.form.subject,
                message: this.modals.update.form.message,
                answerType: this.modals.update.form.answerType.value.value,
                answer: this.modals.update.form.answer,
                registered: this.modals.update.form.registered,
            }

            this.$Progress.start();
            this.modals.update.disabled = true;
            var updateResult = await axios[this.modals.update.process](process.env.VUE_APP_API_URL + 'admin/supportRequests', params);
            this.$Progress.finish();
            this.modals.update.disabled = false;

            if(updateResult.data.result === 'success') {
                this.getMembers();
                this.closeModal(this.modals.update);
                
                Swal.fire({
                    icon: updateResult.data.result,
                    title: updateResult.data.message,
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
                    icon: updateResult.data.result,
                    title: this.modals.update.title,
                    html: updateResult.data.message,
                    confirmButtonText: 'Tamam',
                    confirmButtonColor: '#1565C0'
                });
            }
        },
        async delete(_id) {
            this.$Progress.start();
            this.search.disabled = true;
            var deleteResult = await axios.delete(process.env.VUE_APP_API_URL + 'admin/supportRequests/' + _id);
            this.$Progress.finish();
            this.search.disabled = false;

            if(deleteResult.data.result === 'success') this.getSupportRequests();

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
            var changeStatusResult = await axios.put(process.env.VUE_APP_API_URL + 'admin/supportRequests', form);
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