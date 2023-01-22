<template>
    <div class="p-3"> 
        <CRow>
            <!-- Poliçe Bitimi Yaklaşanlar -->
            <CCol @click="modals.lastPolicy.show = true" col="12" md="6" lg="4" style="cursor:pointer;">
                <CWidgetDropdown color="danger" :header="modals.lastPolicy.rowData.length.toString()" text="Poliçe Bitimi Yaklaşanlar">
                    <template #footer>
                    <CChartLineSimple
                        pointed
                        class="mt-3 mx-3"
                        style="height:70px"
                        :data-points="[1, 18, 9, 17, 34, 22, 11]"
                        point-hover-background-color="white"
                        :options="{ elements: { line: { tension: 0.00001 }}}"
                    />
                    </template>
                </CWidgetDropdown>
            </CCol>
            <!-- Bu Ay Alınan Teklifler -->
            <CCol @click="modals.todayProposalRequest.show = true" col="12" md="6" lg="4" style="cursor:pointer;">
                <CWidgetDropdown color="info" :header="modals.todayProposalRequest.rowData.length.toString()" text="Bu Ay Alınan Teklifler">
                    <template #footer>
                    <CChartLineSimple
                        class="mt-3"
                        style="height:70px"
                        background-color="rgba(255,255,255,.2)"
                        :data-points="[78, 81, 80, 45, 34, 12, 40]"
                        :options="{ elements: { line: { borderWidth: 2.5 }}}"
                        point-hover-background-color="warning"
                    />
                    </template>
                </CWidgetDropdown>
            </CCol>
            <!-- Tamamlanan Poliçelerimiz -->
            <CCol @click="modals.successPolicy.show = true" col="12" md="6" lg="4" style="cursor:pointer;">
                <CWidgetDropdown color="success" :header="modals.successPolicy.rowData.length.toString()" text="Poliçeler">
                    <template #footer>
                    <CChartBarSimple
                        class="mt-3 mx-3"
                        style="height:70px"
                        background-color="white"
                        label="Members"
                        labels="months"
                    />
                    </template>
                </CWidgetDropdown>
            </CCol>
        </CRow>

        <!-- Pie Chart -->
        <CRow class="chart mt-1">
            <CCol col="12" md="4" v-if="chartLoading === false">
                <h4 class="text-center">Teklif Durum</h4>
                <PieChart :chart-data="proposalData"/>
            </CCol>
            <CCol col="12" md="4" v-if="chartLoading === true">
                <lottie-animation
                    path="lotties/loader1.json"
                    :loop="true"
                    :autoPlay="true"
                    :speed="1.5"
                    :height="150"
                />
            </CCol>
            <CCol col="12" md="4" v-if="chartLoading === false">
                <h4 class="text-center">Teklif Tipi</h4>
                <PieChart :chart-data="proposalTypeData"/>
            </CCol>
            <CCol col="12" md="4" v-if="chartLoading === true">
                <lottie-animation
                    path="lotties/loader1.json"
                    :loop="true"
                    :autoPlay="true"
                    :speed="1.5"
                    :height="150"
                />
            </CCol>
            <CCol col="12" md="4" v-if="chartLoading === false">
                <h4 class="text-center">Poliçe Tipi</h4>
                <PieChart :chart-data="policyTypeData"/>
            </CCol>
            <CCol col="12" md="4" v-if="chartLoading === true">
                <lottie-animation
                    path="lotties/loader1.json"
                    :loop="true"
                    :autoPlay="true"
                    :speed="1.5"
                    :height="150"
                />
            </CCol>
            <CCol class="mt-5" col="12" md="12" v-if="chartLoading === false">
                <h4 class="p-3"> Aylık Teklif ve Poliçe Sayısı</h4>
                <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
            </CCol>
            <CCol col="12" md="12" v-if="chartLoading === true">
                <lottie-animation
                    path="lotties/loader1.json"
                    :loop="true"
                    :autoPlay="true"
                    :speed="1.5"
                    :height="150"
                />
            </CCol>
        </CRow>

        <!-- Poliçe Bitimi Yaklaşanlar -->
        <CModal
            size="xl"
            :title="modals.lastPolicy.title"
            :show.sync="modals.lastPolicy.show"
            :closeOnBackdrop="false">
            <template #body-wrapper>
                <CRow>
                    <CCol col="12">
                        <ag-grid-vue
                            style="width: 100%; height: 500px"
                            class="ag-theme-balham"
                            :columnDefs="modals.lastPolicy.columnDefs"
                            :defaultColDef="modals.lastPolicy.defaultColDef"
                            :rowData="modals.lastPolicy.rowData"
                            :sideBar="modals.lastPolicy.sideBar"
                            :rowSelection="modals.lastPolicy.rowSelection"
                            :enableRangeSelection="true"
                            :statusBar="modals.lastPolicy.statusBar"
                            :overlayLoadingTemplate="'Yükleniyor..'"
                            :overlayNoRowsTemplate="'Kayıt bulunamadı'"
                            @grid-ready="onGridReady">
                        </ag-grid-vue>
                    </CCol>
                </CRow>
            </template>
            <template #footer-wrapper>
                <span/>
            </template>
        </CModal> 

        <!--  Bu Ay Alınan Teklifler -->
        <CModal
            size="xl"
            :title="modals.todayProposalRequest.title"
            :show.sync="modals.todayProposalRequest.show"
            :closeOnBackdrop="false">
            <template #body-wrapper>
                <CRow>
                    <CCol col="12">
                        <ag-grid-vue
                            style="width: 100%; height: 500px"
                            class="ag-theme-balham"
                            :columnDefs="modals.todayProposalRequest.columnDefs"
                            :defaultColDef="modals.todayProposalRequest.defaultColDef"
                            :rowData="modals.todayProposalRequest.rowData"
                            :sideBar="modals.todayProposalRequest.sideBar"
                            :rowSelection="modals.todayProposalRequest.rowSelection"
                            :enableRangeSelection="true"
                            :statusBar="modals.todayProposalRequest.statusBar"
                            :overlayLoadingTemplate="'Yükleniyor..'"
                            :overlayNoRowsTemplate="'Kayıt bulunamadı'"
                            @grid-ready="onGridReady">
                        </ag-grid-vue>
                    </CCol>
                </CRow>
            </template>
            <template #footer-wrapper>
                <span/>
            </template>
        </CModal>

         <!-- Tamamlanan Poliçelerimiz -->.
        <CModal
            size="xl"
            :title="modals.successPolicy.title"
            :show.sync="modals.successPolicy.show"
            :closeOnBackdrop="false">
            <template #body-wrapper>
                <CRow>
                    <CCol col="12">
                        <ag-grid-vue
                            style="width: 100%; height: 500px"
                            class="ag-theme-balham"
                            :columnDefs="modals.successPolicy.columnDefs"
                            :defaultColDef="modals.successPolicy.defaultColDef"
                            :rowData="modals.successPolicy.rowData"
                            :sideBar="modals.successPolicy.sideBar"
                            :rowSelection="modals.successPolicy.rowSelection"
                            :enableRangeSelection="true"
                            :statusBar="modals.successPolicy.statusBar"
                            :overlayLoadingTemplate="'Yükleniyor..'"
                            :overlayNoRowsTemplate="'Kayıt bulunamadı'"
                            @grid-ready="onGridReady">
                        </ag-grid-vue>
                    </CCol>
                </CRow>
            </template>
            <template #footer-wrapper>
                <span/>
            </template>
        </CModal>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import moment from 'moment';
import Func from '@/func';
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
import { AgGridVue } from 'ag-grid-vue';
import { CChartLineSimple, CChartBarSimple } from '../components/charts/index.js';
import PieChart from '../components/charts/Pie.vue';
import VueApexCharts from 'vue-apexcharts';

Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);

export default {
    name: "Dashboard",
    components: {
        AgGridVue,
        CChartLineSimple,
        CChartBarSimple,
        PieChart,
        LottieAnimation,
        VueApexCharts,
    },
    data() {
        return {
            proposalData : {}, // Teklif Durum
            proposalTypeData: {}, // Teklif Tipi
            chartOptions: {}, // Aylık Teklif ve Poliçe Sayısı
            series: [], // Aylık Teklif ve Poliçe Sayısı
            chartLoading: true, // Grafiklerin yüklenip yüklenmediğini kontrol eder.
            modals: {
                lastPolicy: { 
                    show: false,
                    title: 'Poliçe Bitimi Yaklaşanlar',
                    columnDefs: [
                        {
                            field: 'agentPolicyNo',
                            onCellDoubleClicked: params => this.policyRowDoubleClicked(params),
                            headerName: 'Acente Poliçe No',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 125
                        },
                        {
                            field: 'companyPolicyNo',
                            onCellDoubleClicked: params => this.policyRowDoubleClicked(params),
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
                            field: 'companyDetail.name',
                            onCellDoubleClicked: params => this.policyRowDoubleClicked(params),
                            headerName: 'Firma Adı',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 150
                        },
                        {
                            field: 'type',
                            onCellDoubleClicked: params => this.policyRowDoubleClicked(params),
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
                            field: 'insured.name',
                            onCellDoubleClicked: params => this.policyRowDoubleClicked(params),
                            headerName: 'Ad',
                            width: 120
                        },
                        {
                            field: 'insured.lastname',
                            onCellDoubleClicked: params => this.policyRowDoubleClicked(params),
                            headerName: 'Soyad',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 120
                        },
                        {
                            field: 'beginDate',
                            onCellDoubleClicked: params => this.policyRowDoubleClicked(params),
                            cellRenderer: params => {
                                return moment(new Date(params.value)).format("DD.MM.YYYY");
                            },
                            headerName: 'Poliçe Başlangıç Tarihi',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 150
                        },
                        {
                            field: 'endDate',
                            onCellDoubleClicked: params => this.policyRowDoubleClicked(params),
                            cellRenderer: params => {
                                return moment(new Date(params.value)).format("DD.MM.YYYY");
                            },
                            headerName: 'Poliçe Bitiş Tarihi',
                            width: 150,
                            cellStyle: {  color: 'red', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' } 
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
                },
                successPolicy: { 
                    show: false,
                    title: 'Poliçeler',
                    columnDefs: [
                        {
                            field: 'agentPolicyNo',
                            onCellDoubleClicked: params => this.policyRowDoubleClicked(params),
                            headerName: 'Acente Poliçe No',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 150
                        },
                        {
                            field: 'companyPolicyNo',
                            onCellDoubleClicked: params => this.policyRowDoubleClicked(params),
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
                            field: 'companyDetail.name',
                            onCellDoubleClicked: params => this.policyRowDoubleClicked(params),
                            headerName: 'Firma Adı',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 150
                        },
                        {
                            field: 'type',
                            onCellDoubleClicked: params => this.policyRowDoubleClicked(params),
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
                            field: 'insured.name',
                            onCellDoubleClicked: params => this.policyRowDoubleClicked(params),
                            headerName: 'Ad',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 120
                        },
                        {
                            field: 'insured.lastname',
                            onCellDoubleClicked: params => this.policyRowDoubleClicked(params),
                            headerName: 'Soyad',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 120
                        },
                        {
                            field: 'insured.identityNumber',
                            onCellDoubleClicked: params => this.policyRowDoubleClicked(params),
                            headerName: 'Kimlik Numarası',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 140
                        },
                        {
                            field: 'beginDate',
                            onCellDoubleClicked: params => this.policyRowDoubleClicked(params),
                            cellRenderer: params => {
                                return moment(new Date(params.value)).format("DD.MM.YYYY");
                            },
                            headerName: 'Poliçe Başlangıç Tarihi',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 160
                        },
                        {
                            field: 'endDate',
                            onCellDoubleClicked: params => this.policyRowDoubleClicked(params),
                            cellRenderer: params => {
                                return moment(new Date(params.value)).format("DD.MM.YYYY");
                            },
                            headerName: 'Poliçe Bitiş Tarihi',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 160
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
                },
                todayProposalRequest: { 
                    show: false,
                    title: 'Bu Ay Alınan Teklifler',
                    columnDefs: [
                        {
                            field: 'no',
                            onCellDoubleClicked: params => this.proposalRequestRowDoubleClicked(params),
                            headerName: 'Talep No',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 120
                        },
                        {
                            field: 'results.length',
                            onCellDoubleClicked: params => this.proposalRequestRowDoubleClicked(params),
                            cellRenderer: params => {
                                if (params.data.type === 'casco' || params.data.type === 'traffic') {
                                    return params.data.results.length;
                                } else return '-';
                            },
                            headerName: 'Teklif',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 75
                        },
                        {
                            field: 'results.errors',
                            cellRenderer: params => {
                                if (params.data.type === 'casco' || params.data.type === 'traffic') {
                                    var errors = params.data.results.filter(e => e.errors.length > 0).length;
                                    var success = params.data.results.filter(e => e.errors.length === 0).length;
                                    return `<span class="text-success">${success} Başarılı</span> / <span class="text-danger">${errors} Başarısız</span>`;
                                } else return '-';
                            },
                            onCellDoubleClicked: params => this.proposalRequestRowDoubleClicked(params),
                            headerName: 'Teklif Durumu',
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
                            onCellDoubleClicked: params => this.proposalRequestRowDoubleClicked(params),
                            headerName: 'Sorgulayan Kişi',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 200
                        },
                        {
                            field: 'type',
                            onCellDoubleClicked: params => this.proposalRequestRowDoubleClicked(params),
                            cellRenderer: params => {
                                if(params.value === 'casco') return 'Kasko Sigortası';
                                else if(params.value === 'traffic') return 'Trafik Sigortası';
                                else if(params.value === 'dask') return 'DASK';
                                else if(params.value === 'housing') return 'Konut';
                                else if(params.value === 'privHealth') return 'Özel Sağlık Sigortası';
                                else if(params.value === 'compHealth') return 'Tamamlayıcı Sağlık Sigortası';
                            },
                            headerName: 'Sigorta Tipi',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 150
                        },
                        {
                            field: 'productDetail.usageType',
                            cellRenderer: params => {
                                if (params.data.type === 'casco' || params.data.type === 'traffic') {
                                    return params.data.productDetail.usageType;
                                } else return '-';
                            },
                            onCellDoubleClicked: params => this.proposalRequestRowDoubleClicked(params),
                            headerName: 'Araç Tipi',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 130
                        },
                        {
                            field: 'insured.name',
                            onCellDoubleClicked: params => this.proposalRequestRowDoubleClicked(params),
                            headerName: 'Sigortalı Adı',
                            cellRenderer: params => {
                                if(params.value) return params.value;
                                else return '-';
                            },
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 120
                        },
                        {
                            field: 'insured.lastname',
                            onCellDoubleClicked: params => this.proposalRequestRowDoubleClicked(params),
                            headerName: 'Sigortalı Soyadı',
                            cellRenderer: params => {
                                if(params.value) return params.value;
                                else return '-';
                            },
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 150
                        },
                        {
                            field: 'insured.title',
                            onCellDoubleClicked: params => this.proposalRequestRowDoubleClicked(params),
                            headerName: 'Ünvan',
                            cellRenderer: params => {
                                if(params.value) return params.value;
                                else return '-';
                            },
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 200
                        },
                        {
                            field: 'insured.identityNumber',
                            onCellDoubleClicked: params => this.proposalRequestRowDoubleClicked(params),
                            headerName: 'Sigortalı Kimlik Numarası',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 200
                        },
                        {
                            field: 'insured.email',
                            onCellDoubleClicked: params => this.proposalRequestRowDoubleClicked(params),
                            headerName: 'Sigortalı E-Posta',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 200
                        },
                        {
                            field: 'insured.phone',
                            onCellDoubleClicked: params => this.proposalRequestRowDoubleClicked(params),
                            headerName: 'Sigortalı Telefon',
                            cellRenderer: params => {
                                return Func.formatPhoneNumber(params.value);
                            },
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 140
                        },
                        {
                            field: 'createdDate',
                            cellRenderer: params => {
                                return moment(new Date(params.value)).format("DD.MM.YYYY - HH:mm");
                            },
                            onCellDoubleClicked: params => this.proposalRequestRowDoubleClicked(params),
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
                },
            },
        };
    },
    mounted() {
        this.getPolicy();
        this.getSuccessPolicy();
        this.getProposalRequests();
        this.getResult();
    },
    methods: {
        onGridReady(params) { // Grid ready olduğunda
            this.gridApi = params.api;
            this.gridColumnApi = params.columnApi;
        },
        policyRowDoubleClicked(row) {
            this.$router.push(`../../police/firmaPoliceNo/${row.data.companyPolicyNo}`);
        },
        proposalRequestRowDoubleClicked(row) {
            this.$router.push(`../../teklif-talepleri/talepno/${row.data.no}`);
        },
        async getPolicy() {
            var params = { endDate: true }
            if(this.$store.state.user.accountType === 'partner')  params.partnerId = this.$store.state.user.partnerId; // Partner ID'yi Search'e ekliyoruz, eğer partner girişi yapılmışsa :)
            var lastPolicy = await axios.get(process.env.VUE_APP_API_URL + 'admin/policy', { params: params });

            if(lastPolicy.data.result === 'success') this.modals.lastPolicy.rowData = lastPolicy.data.list;
            else this.modals.lastPolicy.rowData = [];

            console.log(this.modals.lastPolicy.rowData);
        },
        async getSuccessPolicy() {
            var policyTypes = [
                { value: 'casco', text: 'Kasko' },
                { value: 'traffic', text: 'Trafik' },
                { value: 'dask', text: 'DASK' },
                { value: 'housing', text: 'Konut' },
                { value: 'compHealth', text: 'Tamamlayıcı Sağlık' },
                { value: 'privHealth', text: 'Özel Sağlık' }
            ];

            var policyTypeCount = [ 0, 0, 0, 0, 0, 0 ];

            var params = {}
            if(this.$store.state.user.accountType === 'partner')  params.partnerId = this.$store.state.user.partnerId; // Partner ID'yi Search'e ekliyoruz, eğer partner girişi yapılmışsa :)

            var successPolicy = await axios.get(process.env.VUE_APP_API_URL + 'admin/policy', { params: params });
            
            if(successPolicy.data.result === 'success') {
                for (let i = 0; i < successPolicy.data.list.length; i++) {

                    var index = policyTypes.map(e => e.value).indexOf(successPolicy.data.list[i].type);
                    policyTypeCount[index]++;
                }

                this.modals.successPolicy.rowData = successPolicy.data.list;
            } else this.modals.successPolicy.rowData = [];

            this.policyTypeData = {
                labels: policyTypes.map(e => { return e.text }),
                datasets: [
                    {
                        backgroundColor: ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600', '#ffcc00'],
                        data: policyTypeCount
                    }
                ]
            };
        },
        async getProposalRequests() {
            var totalSuccessProposal = 0;
            var totalErrorProposal = 0;

            var proposalRequestTypes = [
                { value: 'casco', text: 'Kasko' },
                { value: 'traffic', text: 'Trafik' },
                { value: 'dask', text: 'DASK' },
                { value: 'housing', text: 'Konut' },
                { value: 'compHealth', text: 'Tamamlayıcı Sağlık' },
                { value: 'privHealth', text: 'Özel Sağlık' }
            ];

            var proposalRequestTypeCount = [ 0, 0, 0, 0, 0, 0 ];

            var form = {
                beginDate: true, 
                addResults: true, 
                sort: -1
            }

            if(this.$store.state.user.accountType === 'partner') form.partnerId = this.$store.state.user.partnerId; // Partner ID ekleme eğer partner girişi yapılmışsa :)
            
            var proposalRequestsResult = await axios.get(process.env.VUE_APP_API_URL + 'admin/proposal/request', { params: form });

            if(proposalRequestsResult.data.result === 'success') {
                for (let i = 0; i < proposalRequestsResult.data.list.length; i++) {
                    const proposalRequest = proposalRequestsResult.data.list[i];

                    totalSuccessProposal = totalSuccessProposal + proposalRequest.results.filter(e => e.errors.length === 0).length;
                    totalErrorProposal = totalErrorProposal + proposalRequest.results.filter(e => e.errors.length > 0).length;

                    var index = proposalRequestTypes.map(e => e.value).indexOf(proposalRequest.type);

                    proposalRequestTypeCount[index]++;
                }

                this.modals.todayProposalRequest.rowData = proposalRequestsResult.data.list;
            } else this.modals.todayProposalRequest.rowData = [];

            this.proposalData = {
                labels: ['Başarılı Teklifler', 'Başarısız Teklifler'],
                datasets: [
                    {
                        backgroundColor: ['#6aaa96', '#de425b'],
                        data: [totalSuccessProposal, totalErrorProposal]
                    }
                ]
            };

            this.proposalTypeData = {
                labels: proposalRequestTypes.map(e => { return e.text }),
                datasets: [
                    {
                        backgroundColor: ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600', '#ffcc00'],
                        data: proposalRequestTypeCount
                    }
                ]
            };

            this.chartLoading = false;
        },
        async getResult() {
            var form = { addResults: true };
            var proposalRequestCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            var policyCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            var months = [
                { value: '1', text: 'Ocak' },
                { value: '2', text: 'Şubat' },
                { value: '3', text: 'Mart' },
                { value: '4', text: 'Nisan' },
                { value: '5', text: 'Mayıs' },
                { value: '6', text: 'Haziran' },
                { value: '7', text: 'Temmuz' },
                { value: '8', text: 'Ağustos' },
                { value: '9', text: 'Eylül' },
                { value: '10', text: 'Ekim' },
                { value: '11', text: 'Kasım' },
                { value: '12', text: 'Aralık' }
            ];

            if(this.$store.state.user.accountType === 'partner') form.partnerId = this.$store.state.user.partnerId; // Partner ID ekleme eğer partner girişi yapılmışsa :)
            
            var proposalRequestsResult = await axios.get(process.env.VUE_APP_API_URL + 'admin/proposal/request', { params: form });

            if(proposalRequestsResult.data.result === 'success') {
                for (let i = 0; i < proposalRequestsResult.data.list.length; i++) {
                    const proposalRequest = proposalRequestsResult.data.list[i];

                    var RequestMonth = new Date(proposalRequest.beginDate).getMonth() + 1;
                    var index = months.map(e => e.value).indexOf(RequestMonth.toString());
                    
                    proposalRequestCount[index]++

                }
            }

            var params = {}
            if(this.$store.state.user.accountType === 'partner')  params.partnerId = this.$store.state.user.partnerId; // Partner ID'yi Search'e ekliyoruz, eğer partner girişi yapılmışsa :)

            var successPolicy = await axios.get(process.env.VUE_APP_API_URL + 'admin/policy', { params: params });
            
            if(successPolicy.data.result === 'success') {
                for (let i = 0; i < successPolicy.data.list.length; i++) {

                    var RequestMonth = new Date(successPolicy.data.list[i].beginDate).getMonth() + 1;
                    var index = months.map(e => e.value).indexOf(RequestMonth.toString());

                    policyCount[index]++
                }
            }

            this.chartOptions = {
                chart: {
                    id: 'Aylık Teklif ve Poliçe Sayısı',
                },
                xaxis: {
                    categories: months.map(e => { return e.text }),
                }
            };
            this.series = [{
                name: 'Teklif Talepleri',
                data: proposalRequestCount
            }, 
            {
                name: 'Poliçe',
                data: policyCount
            }];
        }     
    }
};
</script>

<style lang="scss" scoped>
    .chart {
        background-color: white!important;
        padding: 30px!important;
        border-radius: 4px!important;
        margin-left: 3px;
        margin-right: 3px;
    }
</style>       
