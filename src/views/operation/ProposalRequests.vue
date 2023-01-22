<template>
    <div class="custom-container">
        <cbc-searchsidebar ref="cbcsearchsidebar" :isOpen="true" :visibleSearchSideBarFooter="true">
            <template v-slot:searchSideBar>
                <CRow>
                    <CCol col="12">
                        <cbcinput-vue 
                            v-model="search.form.memberName"
                            :id="search.fields.memberName.id"
                            :name="search.fields.memberName.name"
                            :type="search.fields.memberName.type"
                            :ref="search.fields.memberName.ref"
                            :options="search.fields.memberName.options"
                            :disabled="search.disabled"/>
                    </CCol>
                    <CCol col="12">
                        <cbcinput-vue 
                            v-model="search.form.memberLastname"
                            :id="search.fields.memberLastname.id"
                            :name="search.fields.memberLastname.name"
                            :type="search.fields.memberLastname.type"
                            :ref="search.fields.memberLastname.ref"
                            :options="search.fields.memberLastname.options"
                            :disabled="search.disabled"/>
                    </CCol>
                    <CCol col="12">
                        <cbcinput-vue 
                            v-model="search.form.memberIdentityNumber"
                            :id="search.fields.memberIdentityNumber.id"
                            :name="search.fields.memberIdentityNumber.name"
                            :type="search.fields.memberIdentityNumber.type"
                            :ref="search.fields.memberIdentityNumber.ref"
                            :options="search.fields.memberIdentityNumber.options"
                            :disabled="search.disabled"/>
                    </CCol>
                    <CCol col="12">
                        <cbcinput-vue 
                            v-model="search.form.insuredTitle"
                            :id="search.fields.insuredTitle.id"
                            :name="search.fields.insuredTitle.name"
                            :type="search.fields.insuredTitle.type"
                            :ref="search.fields.insuredTitle.ref"
                            :options="search.fields.insuredTitle.options"
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
                        <cbcinput-vue 
                            v-model="search.form.insuredPhone"
                            :id="search.fields.insuredPhone.id"
                            :name="search.fields.insuredPhone.name"
                            :type="search.fields.insuredPhone.type"
                            :ref="search.fields.insuredPhone.ref"
                            :options="search.fields.insuredPhone.options"
                            :disabled="search.disabled"/>
                    </CCol>
                    <CCol col="12">
                        <cbcinput-vue 
                            v-model="search.form.requestNo"
                            :id="search.fields.requestNo.id"
                            :name="search.fields.requestNo.name"
                            :type="search.fields.requestNo.type"
                            :ref="search.fields.requestNo.ref"
                            :options="search.fields.requestNo.options"
                            :disabled="search.disabled"/>
                    </CCol>
                    <CCol col="12">
                        <cbcinput-vue 
                            v-model="search.form.agentProposalNo"
                            :id="search.fields.agentProposalNo.id"
                            :name="search.fields.agentProposalNo.name"
                            :type="search.fields.agentProposalNo.type"
                            :ref="search.fields.agentProposalNo.ref"
                            :options="search.fields.agentProposalNo.options"
                            :disabled="search.disabled"/>
                    </CCol>
                    <CCol col="12">
                        <cbcinput-vue 
                            v-model="search.form.companyProposalNo"
                            :id="search.fields.companyProposalNo.id"
                            :name="search.fields.companyProposalNo.name"
                            :type="search.fields.companyProposalNo.type"
                            :ref="search.fields.companyProposalNo.ref"
                            :options="search.fields.companyProposalNo.options"
                            :disabled="search.disabled"/>
                    </CCol>
                    <CCol col="12">
                        <cbcinput-vue 
                            v-model="search.form.callback"
                            :id="search.fields.callback.id"
                            :name="search.fields.callback.name"
                            :type="search.fields.callback.type"
                            :ref="search.fields.callback.ref"
                            :options="search.fields.callback.options"
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
                    <template v-if="search.form.type.value.value === 'casco' || search.form.type.value.value === 'traffic'">
                        <CCol col="12">
                            <cbcinput-vue 
                                v-model="search.form.plate"
                                :id="search.fields.plate.id"
                                :name="search.fields.plate.name"
                                :type="search.fields.plate.type"
                                :ref="search.fields.plate.ref"
                                :options="search.fields.plate.options"
                                :disabled="search.disabled"/>
                        </CCol>
                        <CCol col="12">
                            <cbcinput-vue 
                                v-model="search.form.modelYear"
                                :id="search.fields.modelYear.id"
                                :name="search.fields.modelYear.name"
                                :type="search.fields.modelYear.type"
                                :ref="search.fields.modelYear.ref"
                                :options="search.fields.modelYear.options"
                                :disabled="search.disabled"/>
                        </CCol>
                        <CCol col="12">
                            <cbcinput-vue 
                                v-model="search.form.brandName"
                                :id="search.fields.brandName.id"
                                :name="search.fields.brandName.name"
                                :type="search.fields.brandName.type"
                                :ref="search.fields.brandName.ref"
                                :options="search.fields.brandName.options"
                                :disabled="search.disabled"/>
                        </CCol>
                        <CCol col="12">
                            <cbcinput-vue 
                                v-model="search.form.modelName"
                                :id="search.fields.modelName.id"
                                :name="search.fields.modelName.name"
                                :type="search.fields.modelName.type"
                                :ref="search.fields.modelName.ref"
                                :options="search.fields.modelName.options"
                                :disabled="search.disabled"/>
                        </CCol>
                    </template>
                    <template v-if="search.form.type.value.value === 'dask' || search.form.type.value.value === 'housing'">
                        <CCol col="12">
                            <cbcinput-vue 
                                v-model="search.form.uavtCode"
                                :id="search.fields.uavtCode.id"
                                :name="search.fields.uavtCode.name"
                                :type="search.fields.uavtCode.type"
                                :ref="search.fields.uavtCode.ref"
                                :options="search.fields.uavtCode.options"
                                :disabled="search.disabled"/>
                        </CCol>
                        <CCol col="12">
                            <cbcinput-vue 
                                v-model="search.form.daskPolicyNo"
                                :id="search.fields.daskPolicyNo.id"
                                :name="search.fields.daskPolicyNo.name"
                                :type="search.fields.daskPolicyNo.type"
                                :ref="search.fields.daskPolicyNo.ref"
                                :options="search.fields.daskPolicyNo.options"
                                :disabled="search.disabled"/>
                        </CCol>
                    </template>
                </CRow>
            </template>
            <template v-slot:searchSideBarFooter>
                <CButton
                    block
                    color="primary"
                    :disabled="search.disabled"
                    @click="getProposalRequests(true)"
                ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="search.disabled" />Ara
                </CButton>
            </template>
            <template v-slot:main>
                <CCard class="rounded-0 border-0">
                    <CCardHeader class="d-flex flex-row justify-content-between align-items-center rounded-0 border-right">
                        <span class="font-weight-bold">Teklif Talepleri</span>
                        <div class="card-header-actions">
                            <CButton color="success" class="btn-coreui mr-2" :disabled="search.disabled" @click="openModal(modals.newProposal, 'Teklif Sorgulama Ekranı', 'post')">
                                <i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="search.disabled" />Teklif Al
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
                            :rowSelection="rowSelection"
                            :enableRangeSelection="true"
                            :getContextMenuItems="getContextMenuItems"
                            :statusBar="statusBar"
                            :groupDefaultExpanded="groupDefaultExpanded"
                            :masterDetail="masterDetail"
                            :detailCellRendererParams="detailCellRendererParams"
                            @grid-ready="onGridReady">
                        </ag-grid-vue>
                    </CCardBody>
                </CCard>
            </template>
        </cbc-searchsidebar>

        <!-- Teklif Talep Detayları -->
        <CModal
            size="lg"
            :title="modals.proposalRequestDetail.title"
            :show.sync="modals.proposalRequestDetail.show"
            :closeOnBackdrop="false">
            <CRow v-if="modals.proposalRequestDetail.data !== null">
                <CCol col="12">
                    <div id="proposalRequestDetail" class="accordion">
                        <!-- ARAÇ, KONUT, SAĞLIK DETAYLARI -->
                        <div class="accordion-item">
                            <h2 id="productDetailTypeHead" class="accordion-header">
                                <button 
                                    ref="productDetailTypeHeadButton" 
                                    class="accordion-button" 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#productDetailTypeContent" 
                                    aria-expanded="true" 
                                    aria-controls="productDetailTypeContent"
                                    >
                                    <template v-if="modals.proposalRequestDetail.data.type === 'casco' || modals.proposalRequestDetail.data.type === 'traffic'">
                                        <i class="fas fa-car fa-lg mr-2"></i>Araç Detayları
                                    </template>
                                    <template v-if="modals.proposalRequestDetail.data.type === 'dask' || modals.proposalRequestDetail.data.type === 'housing'">
                                        <i class="fas fa-building fa-lg mr-2"></i>Konut Detayları
                                    </template>
                                    <template v-if="modals.proposalRequestDetail.data.type === 'compHealth' || modals.proposalRequestDetail.data.type === 'privHealth'">
                                        <i class="fas fa-heartbeat fa-lg mr-2"></i>Sağlık Detayları
                                    </template>
                                </button>
                            </h2>
                            <div id="productDetailTypeContent" class="accordion-collapse collapse show" aria-labelledby="productDetailTypeHead" data-bs-parent="#proposalRequestDetail">
                                <div class="accordion-body">
                                    <template v-if="modals.proposalRequestDetail.data.type === 'casco' || modals.proposalRequestDetail.data.type === 'traffic'">
                                        <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff"><strong>Sigorta Tipi:</strong> <strong>{{ insuranceProducts[modals.proposalRequestDetail.data.type] }}</strong></div>
                                        <div class="d-flex justify-content-between p-1"><strong>Plaka:</strong> <span>{{ modals.proposalRequestDetail.data.productDetail.plate }}<i class="far fa-copy fa-lg ml-2 cursor-pointer" @click="func.copyToClipboard2(modals.proposalRequestDetail.data.productDetail.plate)" /></span></div>
                                        <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff"><strong>Marka:</strong> <span>{{ modals.proposalRequestDetail.data.productDetail.brandName }}<i class="far fa-copy fa-lg ml-2 cursor-pointer" @click="func.copyToClipboard2(modals.proposalRequestDetail.data.productDetail.brandName)" /></span></div>
                                        <div class="d-flex justify-content-between p-1"><strong>Model:</strong> <span>{{ modals.proposalRequestDetail.data.productDetail.modelName }}<i class="far fa-copy fa-lg ml-2 cursor-pointer" @click="func.copyToClipboard2(modals.proposalRequestDetail.data.productDetail.modelName)" /></span></div>
                                        <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff"><strong>Motor No:</strong> <span>{{ modals.proposalRequestDetail.data.productDetail.motorNo }}<i class="far fa-copy fa-lg ml-2 cursor-pointer" @click="func.copyToClipboard2(modals.proposalRequestDetail.data.productDetail.motorNo)" /></span></div>
                                        <div class="d-flex justify-content-between p-1"><strong>Şasi No:</strong> <span>{{ modals.proposalRequestDetail.data.productDetail.chassisNo }}<i class="far fa-copy fa-lg ml-2 cursor-pointer" @click="func.copyToClipboard2(modals.proposalRequestDetail.data.productDetail.chassisNo)" /></span></div>
                                        <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff" v-if="modals.proposalRequestDetail.data.productDetail.plate.match(new RegExp(/[0-9]{2}\sYK\s0000/)) === null"><strong>Ruhsat Seri - No:</strong> <span>{{ modals.proposalRequestDetail.data.productDetail.licenseSerial }}<i class="far fa-copy fa-lg ml-2 cursor-pointer" @click="func.copyToClipboard2(modals.proposalRequestDetail.data.productDetail.licenseSerial)" /> - {{ modals.proposalRequestDetail.data.productDetail.licenseNumber }}<i class="far fa-copy fa-lg ml-2 cursor-pointer" @click="func.copyToClipboard2(modals.proposalRequestDetail.data.productDetail.licenseNumber)" /></span></div>
                                        <div class="d-flex justify-content-between p-1" v-if="modals.proposalRequestDetail.data.productDetail.plate.match(new RegExp(/[0-9]{2}\sYK\s0000/)) == null"><strong>Tescil Tarihi:</strong> {{ moment(new Date(modals.proposalRequestDetail.data.productDetail.licenseRegistrationDate)).format("DD.MM.YYYY") }}</div>
                                        <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff"><strong>Model Yılı:</strong> {{ modals.proposalRequestDetail.data.productDetail.modelYear }}</div>
                                        <div class="d-flex justify-content-between p-1"><strong>Kullanım Tipi:</strong> {{ modals.proposalRequestDetail.data.productDetail.usageType }}</div>
                                        <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff"><strong>Kullanım Tarzı:</strong> HUSUSİ OTO</div>
                                        <div class="d-flex justify-content-between p-1"><strong>Poliçe Başlangıç Tarihi:</strong> {{ moment(new Date(modals.proposalRequestDetail.data.beginDate)).format("DD.MM.YYYY") }}</div>
                                        <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff"><strong>Poliçe Bitiş Tarihi:</strong> {{ moment(new Date(modals.proposalRequestDetail.data.endDate)).format("DD.MM.YYYY") }}</div>
                                        <div class="d-flex justify-content-between p-1"><strong>Teklif Oluşturulma Tarihi:</strong> {{ moment(new Date(modals.proposalRequestDetail.data.createdDate)).format("DD.MM.YYYY") }}</div>
                                    </template>
                                    <template v-if="modals.proposalRequestDetail.data.type === 'dask'">
                                        <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff"><strong>Sigorta Tipi:</strong> <strong>{{ insuranceProducts[modals.proposalRequestDetail.data.type] }}</strong></div>
                                        <div class="d-flex justify-content-between p-1"><strong>UAVT Kodu:</strong> <span>{{ modals.proposalRequestDetail.data.productDetail.uavtCode }}<i class="far fa-copy fa-lg ml-2 cursor-pointer" @click="func.copyToClipboard2(modals.proposalRequestDetail.data.productDetail.uavtCode)" /></span></div>
                                        <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff"><strong>DASK Poliçesi:</strong> <span>{{ modals.proposalRequestDetail.data.productDetail.policyNo !== '' ? modals.proposalRequestDetail.data.productDetail.policyNo:'-' }}<i class="far fa-copy fa-lg ml-2 cursor-pointer" v-if="modals.proposalRequestDetail.data.productDetail.policyNo !== ''" @click="func.copyToClipboard2(modals.proposalRequestDetail.data.productDetail.policyNo)" /></span></div>
                                        <div class="d-flex justify-content-between p-1"><strong>Daire (m2):</strong> {{ modals.proposalRequestDetail.data.productDetail.homeArea }}</div>
                                        <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff"><strong>Bina Yapı Tarzı:</strong>{{ modals.proposalRequestDetail.data.productDetail.buildingType }} </div>
                                        <div class="d-flex justify-content-between p-1"><strong>Bina İnşaat Yılı:</strong> {{ modals.proposalRequestDetail.data.productDetail.buildingYear }}</div>
                                        <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff"><strong>Bina Toplam Kat:</strong> {{ modals.proposalRequestDetail.data.productDetail.totalFloor }}</div>
                                        <div class="d-flex justify-content-between p-1"><strong>Konut Kullanım Tipi:</strong> {{ modals.proposalRequestDetail.data.productDetail.usageType }}</div>
                                        <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff"><strong>Sigorta Ettiren Sıfatı:</strong> {{ modals.proposalRequestDetail.data.productDetail.insurerTitle }}</div>
                                        <div class="d-flex justify-content-between p-1"><strong>Teklif Oluşturulma Tarihi:</strong> {{ moment(new Date(modals.proposalRequestDetail.data.createdDate)).format("DD.MM.YYYY") }}</div>
                                    </template>
                                    <template v-if="modals.proposalRequestDetail.data.type === 'housing'">
                                        <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff"><strong>Sigorta Tipi:</strong> <strong>{{ insuranceProducts[modals.proposalRequestDetail.data.type] }}</strong></div>
                                        <div class="d-flex justify-content-between p-1"><strong>UAVT Kodu:</strong> <span>{{ modals.proposalRequestDetail.data.productDetail.uavtCode }}<i class="far fa-copy fa-lg ml-2 cursor-pointer" @click="func.copyToClipboard2(modals.proposalRequestDetail.data.productDetail.uavtCode)" /></span></div>
                                        <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff"><strong>DASK Poliçesi:</strong> <span>{{ modals.proposalRequestDetail.data.productDetail.policyNo !== '' ? modals.proposalRequestDetail.data.productDetail.policyNo:'-' }}<i class="far fa-copy fa-lg ml-2 cursor-pointer" v-if="modals.proposalRequestDetail.data.productDetail.policyNo !== ''" @click="func.copyToClipboard2(modals.proposalRequestDetail.data.productDetail.policyNo)" /></span></div>
                                        <div class="d-flex justify-content-between p-1"><strong>Daire Kat:</strong> {{ modals.proposalRequestDetail.data.productDetail.apartmentFloor }}</div>
                                        <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff"><strong>Daire (m2):</strong> {{ modals.proposalRequestDetail.data.productDetail.homeArea }}</div>
                                        <div class="d-flex justify-content-between p-1"><strong>Bina Yapı Tarzı:</strong>{{ modals.proposalRequestDetail.data.productDetail.buildingType }} </div>
                                        <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff"><strong>Bina İnşaat Yılı:</strong> {{ modals.proposalRequestDetail.data.productDetail.buildingYear }}</div>
                                        <div class="d-flex justify-content-between p-1"><strong>Teklif Oluşturulma Tarihi:</strong> {{ moment(new Date(modals.proposalRequestDetail.data.createdDate)).format("DD.MM.YYYY") }}</div>
                                    </template>
                                    <!-- <template v-elseif="modals.proposalRequestDetail.data.type === 'compHealth'  || modals.proposalRequestDetail.data.type === 'privHealth'">
                                        <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff"><strong>Sigorta Tipi:</strong> <strong>{{ insuranceProducts[modals.proposalRequestDetail.data.type] }}</strong></div>
                                        <div class="d-flex justify-content-between p-1"><strong>Boy:</strong> <strong>{{ modals.proposalRequestDetail.data.productDetail.yourLength }}</strong></div>
                                        <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff"><strong>Kilo:</strong> <strong>{{ modals.proposalRequestDetail.data.productDetail.yourWeight }}</strong></div>
                                        <div class="d-flex justify-content-between p-1"><strong>SGK'lı mı?</strong> <strong>{{ sgkType[modals.proposalRequestDetail.data.productDetail.sgkType] }}</strong></div>
                                        <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff" v-if="modals.proposalRequestDetail.data.type === 'compHealth'"><strong>Daha önce yaptırdığınız ve/veya halen yürürlükte olan özel veya ek sağlık sigortanız var mı?</strong> <strong>{{ modals.proposalRequestDetail.data && compHealth[modals.proposalRequestDetail.data.productDetail.compHealth] }}</strong></div>
                                        <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff" v-if="modals.proposalRequestDetail.data.type === 'privHealth'"><strong>Kimin için sigorta yaptırmak istiyorsunuz?</strong> <strong>{{ insuranceTypes[modals.proposalRequestDetail.data.productDetail.insuranceProducts] }}</strong></div>
                                        <div class="d-flex justify-content-between p-1"><strong>Teklif Oluşturulma Tarihi:</strong> {{ moment(new Date(modals.proposalRequestDetail.data.createdDate)).format("DD.MM.YYYY") }}</div>
                                    </template> -->
                                </div>
                            </div>
                        </div>

                        <!-- SİGORTALI DETAYLARI -->
                        <div class="accordion-item">
                            <h2 id="insuredDetailTypeHead" class="accordion-header">
                                <button 
                                    ref="insuredDetailTypeHeadButton" 
                                    class="accordion-button" 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#insuredDetailTypeContent" 
                                    aria-expanded="true" 
                                    aria-controls="insuredDetailTypeContent"
                                    ><i class="fas fa-id-card fa-lg mr-2"></i>Sigortalı Detayları
                                </button>
                            </h2>
                            <div id="insuredDetailTypeContent" class="accordion-collapse collapse show" aria-labelledby="insuredDetailTypeHead" data-bs-parent="#proposalRequestDetail">
                                <div class="accordion-body">
                                    <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff" v-if="modals.proposalRequestDetail.data.insured.title !== null"><strong>Ünvan:</strong> {{ modals.proposalRequestDetail.data.insured.title }}</div>
                                    <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff" v-if="modals.proposalRequestDetail.data.insured.name !== null && modals.proposalRequestDetail.data.insured.lastname !== null"><strong>Ad Soyad:</strong> {{ modals.proposalRequestDetail.data.insured.name }} {{ modals.proposalRequestDetail.data.insured.lastname }}</div>
                                    <div class="d-flex justify-content-between p-1"><strong>{{ modals.proposalRequestDetail.data.insured.identityType === 'tckn' ? 'TC Kimlik Numarası': modals.proposalRequestDetail.data.insured.identityType === 'vkn' ? 'Vergi Kimlik Numarası': 'Yabancı Kimlik Numarası' }}:</strong> <span>{{ modals.proposalRequestDetail.data.insured.identityNumber }}<i class="far fa-copy fa-lg ml-2 cursor-pointer" @click="func.copyToClipboard2(modals.proposalRequestDetail.data.insured.identityNumber)" /></span></div>
                                    <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff"><strong>E-Posta:</strong> {{ modals.proposalRequestDetail.data.insured.email }}</div>
                                    <div class="d-flex justify-content-between p-1"><strong>Telefon:</strong> {{ func.formatPhoneNumber(modals.proposalRequestDetail.data.insured.phone) }}</div>
                                    <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff" v-if="modals.proposalRequestDetail.data.insured.birthDate !== null"><strong>Doğum Tarihi:</strong>{{ moment(modals.proposalRequestDetail.data.insured.birthDate).format('DD.MM.YYYY') }}</div>
                                </div>
                            </div>
                        </div>

                        <!-- TEKLİF SORGULAYAN DETAYLARI -->
                        <div class="accordion-item">
                            <h2 id="notesDetailHeadHead" class="accordion-header">
                                <button 
                                    ref="notesDetailHeadHeadButton" 
                                    class="accordion-button" 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#notesDetailHeadContent" 
                                    aria-expanded="true" 
                                    aria-controls="notesDetailHeadContent"
                                    ><i class="fas fa-exchange fa-lg mr-2"></i>Teklif Sorgulayan Detayları
                                </button>
                            </h2>
                            <div id="notesDetailHeadContent" class="accordion-collapse collapse show" aria-labelledby="notesDetailHeadHead" data-bs-parent="#proposalRequestDetail">
                                <div class="accordion-body">
                                    <template v-if="modals.proposalRequestDetail.data.memberId">
                                        <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff"><strong>Yetki:</strong> {{ `${ modals.proposalRequestDetail.data.member.accountType === 'individual' ? 'Bireysel' : 'Kurumsal' } Üye` }}</div>
                                        <div class="d-flex justify-content-between p-1"><strong>Ad Soyad:</strong> {{ `${modals.proposalRequestDetail.data.member.name} ${modals.proposalRequestDetail.data.member.lastname}` }}</div>
                                        <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff"><strong>E-Posta:</strong> {{ modals.proposalRequestDetail.data.member.email }}</div>
                                    </template>
                                    <template v-if="modals.proposalRequestDetail.data.userId">
                                        <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff">
                                            <strong>Yetki:</strong> 
                                            {{ 
                                                modals.proposalRequestDetail.data.member.accountType === 'admin' ?
                                                    'Yönetici'
                                                :
                                                modals.proposalRequestDetail.data.member.accountType === 'staff' ?
                                                    'Personel'
                                                :
                                                    'Partner'
                                            }}
                                        </div>
                                        <div class="d-flex justify-content-between p-1"><strong>Ad Soyad:</strong> {{ `${modals.proposalRequestDetail.data.user.name} ${modals.proposalRequestDetail.data.user.lastname}` }}</div>
                                        <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff"><strong>E-Posta:</strong> {{ modals.proposalRequestDetail.data.user.email }}</div>
                                    </template>
                                    <template v-if="!modals.proposalRequestDetail.data.memberId && !modals.proposalRequestDetail.data.userId">
                                        <div class="d-flex justify-content-between p-1" style="background-color: #e7f1ff"><strong>Yetki:</strong> Misafir</div>
                                    </template>
                                </div>
                            </div>
                        </div>

                        <!-- TEKLİF NOTLAR'IN DETAYLARI -->
                        <div class="accordion-item" v-if="modals.proposalRequestDetail.data.callBack === true">
                            <h2 id="notesDetailHead" class="accordion-header">
                                <button 
                                    ref="notesDetailHeadButton" 
                                    class="accordion-button" 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#notesDetailHeadContent" 
                                    aria-expanded="true" 
                                    aria-controls="notesDetailHeadContent"
                                    ><i class="fas fa-sticky-note fa-lg mr-2"></i>Teklif Notları
                                </button>
                            </h2>
                            <div id="notesDetailHeadContent" class="accordion-collapse collapse show" aria-labelledby="notesDetailHead" data-bs-parent="#proposalRequestDetail">
                                <div class="accordion-body" :style="modals.proposalRequestDetail.data.notes.length > 0 ? 'overflow-y: scroll!important; max-height: 700px!important;' : ''">
                                    <!-- Textarea Label -->
                                    <section class="msger" v-if="modals.proposalRequestDetail.data.notes && modals.proposalRequestDetail.data.notes.length > 0">
                                            <main class="msger-chat" v-for="(note, i) in modals.proposalRequestDetail.data.notes" :key="i">
                                                <div :class="i % 2 ? 'msg right-msg' : 'msg left-msg'">
                                                    <div class="msg-bubble">
                                                        <div class="msg-info">
                                                            <div class="msg-info-name"> {{ note.user }} </div>
                                                            <div class="msg-info-time"> {{ note.date }} </div>
                                                        </div>
                                                        <div class="msg-text">
                                                            {{ note.message }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </main>
                                    </section>
                                    <!-- Textarea Label -->
                                    <div class="form-floating mt-3 mb-3">
                                        <textarea 
                                            class="form-control" 
                                            id="notesDetail" 
                                            placeholder="Teklif Notları" 
                                            style="height: 200px; display:block; resize: none;"  
                                            v-model="modals.proposalRequestDetail.data.message"
                                        >
                                        </textarea>
                                        <label for="floatingTextarea2"> {{ modals.proposalRequestDetail.data.message && 'Karakter Sayısı: ' + modals.proposalRequestDetail.data.message.length }}</label>
                                        <button :class="'floatingTextareaButton btn btn-primary ' + modals.updateProposalRequestNotes.messageClass " @click="updateProposalRequestNotes()"><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="modals.updateProposalRequestNotes.disabled"/> <i class="fas fa-paper-plane" style="cursor: pointer;"></i> </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CCol>
            </CRow>
            <template #footer>
                <CButton
                    color="danger"
                    @click="modals.proposalRequestDetail.show = false"
                >Kapat
                </CButton>
            </template>
        </CModal>

        <!-- Yeni Teklif Al -->
        <CModal
            size="xl"
            :title="modals.newProposal.title"
            :show.sync="modals.newProposal.show"
            :closeOnBackdrop="false">
            <CRow>
                <CCol col="12">
                    <div id="proposalOffer" class="accordion">
                        <div class="accordion-item" v-for="(step, i) in modals.newProposal.steps" :key="i">
                            <h2 :id="`${step.id}Header`" class="accordion-header">
                                <button :ref="`${step.id}HeaderButton`" :class="['accordion-button', { 'collapsed':i > 0 }]" type="button" data-bs-toggle="collapse" :data-bs-target="`#${step.id}Content`" aria-expanded="true" :aria-controls="`${step.id}Content`" :disabled="step.permission === false">
                                    <template v-if="step.id === 'insuranceType' || step.id === 'productInfos'">
                                        <i class="fas fa-car fa-lg mr-2" v-if="modals.newProposal.steps[0].form.type.value.value === 'casco' || modals.newProposal.steps[0].form.type.value.value === 'traffic'"></i>
                                        <i class="fas fa-building fa-lg mr-2" v-if="modals.newProposal.steps[0].form.type.value.value === 'dask' || modals.newProposal.steps[0].form.type.value.value === 'housing'"></i>
                                        <i class="fas fa-heartbeat fa-lg mr-2" v-if="modals.newProposal.steps[0].form.type.value.value === 'compHealth'  || modals.newProposal.steps[0].form.type.value.value === 'privHealth'"></i>
                                    </template>
                                    <template v-else>
                                        <i :class="[step.icon, 'fa-lg mr-2']"></i>
                                    </template>
                                    <template v-if="step.id === 'productInfos'">
                                        {{
                                            modals.newProposal.steps[0].form.type.value.value === 'casco' || modals.newProposal.steps[0].form.type.value.value === 'traffic' ? 'Araç ve Ruhsat Bilgileri' :
                                            modals.newProposal.steps[0].form.type.value.value === 'dask' || modals.newProposal.steps[0].form.type.value.value === 'housing' ? 'Konut Bilgileri' :
                                            modals.newProposal.steps[0].form.type.value.value === 'compHealth' || modals.newProposal.steps[0].form.type.value.value === 'privHealth' ? 'Sağlık Bilgileri' : ''
                                        }}
                                    </template>
                                    <template v-else>
                                        {{ step.title }}
                                    </template>
                                </button>
                            </h2>
                            <div :id="`${step.id}Content`" :class="['accordion-collapse collapse', { 'show':i === 0 }]" :aria-labelledby="`${step.id}Header`" data-bs-parent="#proposalOffer">
                                <div class="accordion-body">
                                    <CRow v-if="step.id === 'insuranceType'">
                                        <CCol md="6">
                                            <cbcinput-vue 
                                                v-model="step.form.type"
                                                :id="step.fields.type.id"
                                                :name="step.fields.type.name"
                                                :type="step.fields.type.type"
                                                :ref="step.fields.type.ref"
                                                :options="step.fields.type.options"
                                                :disabled="step.disabled"
                                                @input="onSelectChangeHandler(step, step.fields.type.name, $event)"/>
                                        </CCol>
                                        <CCol md="6" class="d-flex align-items-center">
                                            <CButton
                                                block
                                                color="primary"
                                                :disabled="step.disabled"
                                                @click="methodStep(i, i+1)"
                                            ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="step.disabled" v-if="step.nextButton.loadSpinner === true" /><span v-html="step.nextButton.text"></span></CButton>
                                        </CCol>
                                    </CRow>
                                    <CRow v-if="step.id === 'insuredInfos'">
                                        <CCol md="6">
                                            <cbcinput-vue 
                                                v-model="step.form.insuredSearch"
                                                :id="step.fields.insuredSearch.id"
                                                :name="step.fields.insuredSearch.name"
                                                :type="step.fields.insuredSearch.type"
                                                :ref="step.fields.insuredSearch.ref"
                                                :options="step.fields.insuredSearch.options"
                                                :disabled="step.disabled"
                                                @onKeyUp="(name, key, keyCode, value) => keyCode === 13 && getInsuredModal(step, value)" />
                                        </CCol>
                                        <CCol md="6" class="d-flex align-items-end mb-3">
                                            <CButton
                                                block
                                                color="primary"
                                                :disabled="step.disabled"
                                                @click="getInsuredModal(step, step.form.insuredSearch.value)"
                                            ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="step.disabled" v-if="step.searchButton.loadSpinner === true" /><span v-html="step.searchButton.text"></span></CButton>
                                        </CCol>
                                        <CCol col="12" class="mb-3 my-2">
                                            <div class="border rounded" style="background-color: #e7f1ff; padding: 10px 10px 8px 10px;">
                                                <p class="m-0 mb-2 font-weight-bold">Sigortalı Tipi</p>
                                                <div class="form-check form-check-inline">
                                                    <input 
                                                        id="individual" 
                                                        name="individual" 
                                                        value="individual" 
                                                        class="form-check-input" 
                                                        type="radio" 
                                                        v-model="step.form.insuredType" 
                                                        :disabled="step.disabled"
                                                        ><!-- @click="onChangeInsuredType('individual', $event)" -->
                                                    <label class="form-check-label cursor-pointer" for="individual">Bireysel</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input 
                                                        id="corporate"
                                                        name="corporate" 
                                                        value="corporate" 
                                                        class="form-check-input" 
                                                        type="radio" 
                                                        v-model="step.form.insuredType" 
                                                        :disabled="step.disabled"
                                                        ><!-- @click="onChangeInsuredType('corporate', $event)" -->
                                                    <label class="form-check-label cursor-pointer" for="corporate">Kurumsal</label>
                                                </div>
                                            </div>
                                        </CCol>
                                        <CCol md="6" v-show="step.form.insuredType === 'corporate'">
                                            <cbcinput-vue 
                                                v-model="step.form.insuredTitle"
                                                :id="step.fields.insuredTitle.id"
                                                :name="step.fields.insuredTitle.name"
                                                :type="step.fields.insuredTitle.type"
                                                :ref="step.fields.insuredTitle.ref"
                                                :options="step.fields.insuredTitle.options"
                                                :disabled="step.disabled"/>
                                        </CCol>
                                        <CCol md="6" v-show="step.form.insuredType === 'individual'">
                                            <cbcinput-vue 
                                                v-model="step.form.insuredName"
                                                :id="step.fields.insuredName.id"
                                                :name="step.fields.insuredName.name"
                                                :type="step.fields.insuredName.type"
                                                :ref="step.fields.insuredName.ref"
                                                :options="step.fields.insuredName.options"
                                                :disabled="step.disabled"/>
                                        </CCol>
                                        <CCol md="6" v-show="step.form.insuredType === 'individual'">
                                            <cbcinput-vue 
                                                v-model="step.form.insuredLastname"
                                                :id="step.fields.insuredLastname.id"
                                                :name="step.fields.insuredLastname.name"
                                                :type="step.fields.insuredLastname.type"
                                                :ref="step.fields.insuredLastname.ref"
                                                :options="step.fields.insuredLastname.options"
                                                :disabled="step.disabled"/>
                                        </CCol>
                                        <CCol md="6">
                                            <p class="m-0 mb-2 font-weight-bold">{{ step.form.insuredType === 'individual' ? 'Sigortalı T.C. Kimlik No' : 'Sigortalı Vergi No' }}</p>
                                            <cbcinput-vue 
                                                v-model="step.form.insuredIdentityNumber"
                                                :id="step.fields.insuredIdentityNumber.id"
                                                :name="step.fields.insuredIdentityNumber.name"
                                                :type="step.fields.insuredIdentityNumber.type"
                                                :ref="step.fields.insuredIdentityNumber.ref"
                                                :options="step.fields.insuredIdentityNumber.options"
                                                :disabled="step.disabled"/>
                                        </CCol>
                                        <CCol md="6" v-show="step.form.insuredType === 'individual'">
                                            <p class="m-0 mb-2 font-weight-bold">Sigortalı Doğum Tarihi </p>
                                            <div class="d-flex flex-row">
                                                <cbcinput-vue 
                                                    v-model="step.form.insuredBirthDateDay"
                                                    :id="step.fields.insuredBirthDateDay.id"
                                                    :name="step.fields.insuredBirthDateDay.name"
                                                    :type="step.fields.insuredBirthDateDay.type"
                                                    :ref="step.fields.insuredBirthDateDay.ref"
                                                    :options="step.fields.insuredBirthDateDay.options"
                                                    :disabled="step.disabled"/>
                                                <cbcinput-vue 
                                                    v-model="step.form.insuredBirthDateMonth"
                                                    :id="step.fields.insuredBirthDateMonth.id"
                                                    :name="step.fields.insuredBirthDateMonth.name"
                                                    :type="step.fields.insuredBirthDateMonth.type"
                                                    :ref="step.fields.insuredBirthDateMonth.ref"
                                                    :options="step.fields.insuredBirthDateMonth.options"
                                                    :disabled="step.disabled"/>
                                                <cbcinput-vue 
                                                    v-model="step.form.insuredBirthDateYear"
                                                    :id="step.fields.insuredBirthDateYear.id"
                                                    :name="step.fields.insuredBirthDateYear.name"
                                                    :type="step.fields.insuredBirthDateYear.type"
                                                    :ref="step.fields.insuredBirthDateYear.ref"
                                                    :options="step.fields.insuredBirthDateYear.options"
                                                    :disabled="step.disabled"/>
                                            </div>
                                        </CCol>
                                        <CCol md="6">
                                            <cbcinput-vue 
                                                v-model="step.form.insuredEmail"
                                                :id="step.fields.insuredEmail.id"
                                                :name="step.fields.insuredEmail.name"
                                                :type="step.fields.insuredEmail.type"
                                                :ref="step.fields.insuredEmail.ref"
                                                :options="step.fields.insuredEmail.options"
                                                :disabled="step.disabled"/>
                                        </CCol>
                                        <CCol md="6">
                                            <cbcinput-vue 
                                                v-model="step.form.insuredPhone"
                                                :id="step.fields.insuredPhone.id"
                                                :name="step.fields.insuredPhone.name"
                                                :type="step.fields.insuredPhone.type"
                                                :ref="step.fields.insuredPhone.ref"
                                                :options="step.fields.insuredPhone.options"
                                                :disabled="step.disabled"/>
                                        </CCol>
                                        <CCol col="12">
                                            <CButton
                                                block
                                                color="primary"
                                                :disabled="step.disabled"
                                                @click="methodStep(i, i+1)"
                                            ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="step.disabled" v-if="step.nextButton.loadSpinner === true" /><span v-html="step.nextButton.text"></span></CButton>
                                        </CCol>
                                    </CRow>
                                    <CRow v-if="step.id === 'productInfos' && (modals.newProposal.steps[0].form.type.value.value === 'casco' || modals.newProposal.steps[0].form.type.value.value === 'traffic')">
                                        <CCol col="12" class="mb-3 my-2">
                                            <div class="border rounded" style="background-color: #e7f1ff; padding: 10px 10px 8px 10px;">
                                                <p class="m-0 mb-2 font-weight-bold">Araç Durumu</p>
                                                <div class="form-check form-check-inline">
                                                    <input 
                                                        id="vehicleStatusPlate" 
                                                        name="vehicleStatusPlate" 
                                                        value="plate" 
                                                        class="form-check-input" 
                                                        type="radio" 
                                                        v-model="step.form.vehicleStatus" 
                                                        :disabled="step.disabled"
                                                        >
                                                    <label class="form-check-label cursor-pointer" for="vehicleStatusPlate">Aracın Plakası Var</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input 
                                                        id="vehicleStatusNoPlate"
                                                        name="vehicleStatusNoPlate" 
                                                        value="noplate" 
                                                        class="form-check-input" 
                                                        type="radio" 
                                                        v-model="step.form.vehicleStatus" 
                                                        :disabled="step.disabled"
                                                        >
                                                    <label class="form-check-label cursor-pointer" for="vehicleStatusNoPlate">Aracın Plakası Yok, Sıfır Araç</label>
                                                </div>
                                            </div>
                                        </CCol>
                                        <CCol col="12" v-show="step.form.vehicleStatus === 'plate'">
                                            <cbcinput-vue 
                                                v-model="step.form.plate"
                                                :id="step.fields.plate.id"
                                                :name="step.fields.plate.name"
                                                :type="step.fields.plate.type"
                                                :ref="step.fields.plate.ref"
                                                :options="step.fields.plate.options"
                                                :disabled="step.disabled"/>
                                        </CCol>
                                        <CCol md="6" v-show="step.form.vehicleStatus === 'plate'">
                                            <cbcinput-vue 
                                                v-model="step.form.licenseSerial"
                                                :id="step.fields.licenseSerial.id"
                                                :name="step.fields.licenseSerial.name"
                                                :type="step.fields.licenseSerial.type"
                                                :ref="step.fields.licenseSerial.ref"
                                                :options="step.fields.licenseSerial.options"
                                                :disabled="step.disabled"/>
                                        </CCol>
                                        <CCol md="6" v-show="step.form.vehicleStatus === 'plate'">
                                            <cbcinput-vue 
                                                v-model="step.form.licenseNumber"
                                                :id="step.fields.licenseNumber.id"
                                                :name="step.fields.licenseNumber.name"
                                                :type="step.fields.licenseNumber.type"
                                                :ref="step.fields.licenseNumber.ref"
                                                :options="step.fields.licenseNumber.options"
                                                :disabled="step.disabled"/>
                                        </CCol>
                                        <CCol col="12" v-show="step.form.vehicleStatus === 'plate'">
                                            <CButton
                                                block
                                                color="primary"
                                                :disabled="step.disabled"
                                                @click="methodStep(i, i+1)"
                                            ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="step.disabled" v-if="step.nextButton.loadSpinner === true" /><span v-html="step.nextButton.text"></span></CButton>
                                        </CCol>
                                        <CCol col="12" v-show="step.form.vehicleStatus === 'plate'">
                                            <CButton
                                                block
                                                color="primary"
                                                :disabled="step.disabled"
                                                @click="methodStep(i, i+1)"
                                            ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="step.disabled" v-if="step.nextButton.loadSpinner === true" /><span v-html="step.nextButton.text"></span></CButton>
                                        </CCol>
                                        <CCol md="6" v-show="step.form.vehicleStatus === 'noplate'">
                                            <cbcinput-vue 
                                                v-model="step.form.city"
                                                :id="step.fields.city.id"
                                                :name="step.fields.city.name"
                                                :type="step.fields.city.type"
                                                :ref="step.fields.city.ref"
                                                :options="step.fields.city.options"
                                                :disabled="step.disabled"
                                                @input="onSelectChangeHandler(step, step.fields.city.name, $event)"/>
                                        </CCol>
                                        <CCol md="6" v-show="step.form.vehicleStatus === 'noplate'">
                                            <cbcinput-vue 
                                                v-model="step.form.district"
                                                :id="step.fields.district.id"
                                                :name="step.fields.district.name"
                                                :type="step.fields.district.type"
                                                :ref="step.fields.district.ref"
                                                :options="step.fields.district.options"
                                                :disabled="step.disabled"/>
                                        </CCol>
                                        <CCol md="6" v-show="step.form.vehicleStatus === 'noplate'">
                                            <cbcinput-vue 
                                                v-model="step.form.modelYear"
                                                :id="step.fields.modelYear.id"
                                                :name="step.fields.modelYear.name"
                                                :type="step.fields.modelYear.type"
                                                :ref="step.fields.modelYear.ref"
                                                :options="step.fields.modelYear.options"
                                                :disabled="step.disabled"
                                                @input="onSelectChangeHandler(step, step.fields.modelYear.name, $event)"/>
                                        </CCol>
                                        <CCol md="6" v-show="step.form.vehicleStatus === 'noplate'">
                                            <cbcinput-vue 
                                                v-model="step.form.brandCode"
                                                :id="step.fields.brandCode.id"
                                                :name="step.fields.brandCode.name"
                                                :type="step.fields.brandCode.type"
                                                :ref="step.fields.brandCode.ref"
                                                :options="step.fields.brandCode.options"
                                                :disabled="step.disabled"
                                                @input="onSelectChangeHandler(step, step.fields.brandCode.name, $event)"/>
                                        </CCol>
                                        <CCol md="6" v-show="step.form.vehicleStatus === 'noplate'">
                                            <cbcinput-vue 
                                                v-model="step.form.modelCode"
                                                :id="step.fields.modelCode.id"
                                                :name="step.fields.modelCode.name"
                                                :type="step.fields.modelCode.type"
                                                :ref="step.fields.modelCode.ref"
                                                :options="step.fields.modelCode.options"
                                                :disabled="step.disabled"
                                                @input="onSelectChangeHandler(step, step.fields.modelCode.name, $event)"/>
                                        </CCol>
                                        <CCol md="6" v-show="step.form.vehicleStatus === 'noplate'">
                                            <cbcinput-vue 
                                                v-model="step.form.usageType"
                                                :id="step.fields.usageType.id"
                                                :name="step.fields.usageType.name"
                                                :type="step.fields.usageType.type"
                                                :ref="step.fields.usageType.ref"
                                                :options="step.fields.usageType.options"
                                                :disabled="step.disabled"/>
                                        </CCol>
                                        <CCol md="6" v-show="step.form.vehicleStatus === 'noplate'">
                                            <cbcinput-vue 
                                                v-model="step.form.seat"
                                                :id="step.fields.seat.id"
                                                :name="step.fields.seat.name"
                                                :type="step.fields.seat.type"
                                                :ref="step.fields.seat.ref"
                                                :options="step.fields.seat.options"
                                                :disabled="step.disabled"/>
                                        </CCol>
                                        <CCol md="6" v-show="step.form.vehicleStatus === 'noplate'">
                                            <cbcinput-vue 
                                                v-model="step.form.fuelType"
                                                :id="step.fields.fuelType.id"
                                                :name="step.fields.fuelType.name"
                                                :type="step.fields.fuelType.type"
                                                :ref="step.fields.fuelType.ref"
                                                :options="step.fields.fuelType.options"
                                                :disabled="step.disabled"/>
                                        </CCol>
                                        <CCol md="6" v-show="step.form.vehicleStatus === 'noplate'">
                                            <cbcinput-vue 
                                                v-model="step.form.motorNo"
                                                :id="step.fields.motorNo.id"
                                                :name="step.fields.motorNo.name"
                                                :type="step.fields.motorNo.type"
                                                :ref="step.fields.motorNo.ref"
                                                :options="step.fields.motorNo.options"
                                                :disabled="step.disabled"/>
                                        </CCol>
                                        <CCol md="6" v-show="step.form.vehicleStatus === 'noplate'">
                                            <cbcinput-vue 
                                                v-model="step.form.chassisNo"
                                                :id="step.fields.chassisNo.id"
                                                :name="step.fields.chassisNo.name"
                                                :type="step.fields.chassisNo.type"
                                                :ref="step.fields.chassisNo.ref"
                                                :options="step.fields.chassisNo.options"
                                                :disabled="step.disabled"/>
                                        </CCol>
                                    </CRow>
                                </div>
                            </div>
                        </div>
                    </div>
                </CCol>
            </CRow>
            <template #footer-wrapper>
                <span/>
            </template>
        </CModal>

        <!-- Sigortalı Listesi -->
        <CModal
            size="xl"
            :title="modals.insuredList.title"
            :show.sync="modals.insuredList.show"
            :closeOnBackdrop="false">
            <template #body-wrapper>
                <CRow>
                    <CCol col="12">
                        <ag-grid-vue
                            style="width: 100%; height: 500px"
                            class="ag-theme-balham"
                            :columnDefs="modals.insuredList.columnDefs"
                            :defaultColDef="modals.insuredList.defaultColDef"
                            :rowData="modals.insuredList.rowData"
                            :sideBar="modals.insuredList.sideBar"
                            :rowSelection="modals.insuredList.rowSelection"
                            :enableRangeSelection="true"
                            :statusBar="modals.insuredList.statusBar"
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
import Func from '@/func';
import Swal from 'sweetalert2';
import moment from 'moment';
import { AgGridVue } from 'ag-grid-vue';
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';
import TelAllCountries from '@/assets/js/all-countries';
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
import XmlViewer from 'vue-xml-viewer';
import CardCheckBox from '../../components/CardCheckBox';
import RadioButton from '@/components/RadioButton';
import { VueMaskDirective } from 'v-mask';
Vue.directive('mask', VueMaskDirective);

const moneyFormat = require('currency-formatter');

export default {
    name: 'ProposalRequests',
    components: {
        AgGridVue,
        VueTelInput,
        LottieAnimation,
        XmlViewer,
        CardCheckBox,
        RadioButton
    },
    data() {
        return {
            VUE_APP_CDN_URL: process.env.VUE_APP_CDN_URL,
            VUE_APP_CDN_URL_INSURANCE_COMPANY_IMAGE_DIR: process.env.VUE_APP_CDN_URL_INSURANCE_COMPANY_IMAGE_DIR,
            swal: Swal,
            func: Func,
            moneyFormat: moneyFormat,
            disableWatch: false,
            insuranceProducts: {
                casco: 'Kasko Sigortası',
                traffic: 'Trafik Sigortası',
                dask: 'DASK Sigortası',
                housing: 'Konut Sigortası',
                privHealth: 'Özel Sağlık Sigortası',
                compHealth: 'Tamamlayıcı Sağlık Sigortası'
            },

            columnDefs: [
                {
                    field: 'no',
                    headerName: 'Talep No',
                    cellStyle: { display: 'flex', alignItems: 'center' },
                    width: 160,
                    cellRenderer: 'agGroupCellRenderer',
                    headerCheckboxSelection: true,
                    checkboxSelection: true
                },
                {
                    field: 'results.length',
                    headerName: 'Teklif',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 75,
                    onCellDoubleClicked: params => this.proposalRequestRowDoubleClicked(params),
                    cellRenderer: params => {
                        if (params.data.type === 'casco' || params.data.type === 'traffic' || params.data.type === 'dask' || params.data.type === 'housing') {
                            return params.data.results.length;
                        } else return '-';
                    }
                },
                {
                    field: 'results.errors',
                    headerName: 'Teklif Durumu',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 150,
                    onCellDoubleClicked: params => this.proposalRequestRowDoubleClicked(params),
                    cellRenderer: params => {
                        if (params.data.type === 'casco' || params.data.type === 'traffic' || params.data.type === 'dask' || params.data.type === 'housing') {
                            var errors = params.data.results.filter(e => e.errors.length > 0).length;
                            var success = params.data.results.filter(e => e.errors.length === 0).length;
                            return `<span class="text-success">${success} Başarılı</span> / <span class="text-danger">${errors} Başarısız</span>`;
                        } else return '-';
                    }
                },
                {
                    field: 'user',
                    headerName: 'Sorgulayan',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 200,
                    onCellDoubleClicked: params => this.proposalRequestRowDoubleClicked(params),
                    cellRenderer: params => {
                        if (params.data.user) {
                            if (params.data.user.accountType === 'admin') return `${params.data.user.name} ${params.data.user.lastname} (Yönetici)`;
                            else if (params.data.user.accountType === 'partner') return `${params.data.user.name} ${params.data.user.lastname} (Partner)`;
                        } else if (params.data.member) return `${params.data.member.name} ${params.data.member.lastname} (Üye)`;
                        else return 'Misafir';
                    }
                },
                {
                    field: 'type',
                    headerName: 'Sigorta Tipi',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 160,
                    onCellDoubleClicked: params => this.proposalRequestRowDoubleClicked(params),
                    cellRenderer: params => {
                        if(params.value === 'casco') return 'Kasko Sigortası';
                        else if(params.value === 'traffic') return 'Trafik Sigortası';
                        else if(params.value === 'dask') return 'DASK';
                        else if(params.value === 'housing') return 'Konut';
                        else if(params.value === 'privHealth') return 'Özel Sağlık Sigortası';
                        else if(params.value === 'compHealth') return 'Tamamlayıcı Sağlık Sigortası';
                    }
                },
                {
                    field: 'insured.name',
                    headerName: 'Sigortalı Adı',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 120,
                    onCellDoubleClicked: params => this.proposalRequestRowDoubleClicked(params),
                    cellRenderer: params => {
                        if(params.value) return params.value;
                        else return '-';
                    }
                },
                {
                    field: 'insured.lastname',
                    headerName: 'Sigortalı Soyadı',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 150,
                    onCellDoubleClicked: params => this.proposalRequestRowDoubleClicked(params),
                    cellRenderer: params => {
                        if(params.value) return params.value;
                        else return '-';
                    }
                },
                {
                    field: 'insured.title',
                    headerName: 'Ünvan',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 200,
                    onCellDoubleClicked: params => this.proposalRequestRowDoubleClicked(params),
                    cellRenderer: params => {
                        if(params.value) return params.value;
                        else return '-';
                    }
                },
                {
                    field: 'insured.identityNumber',
                    headerName: 'Sigortalı Kimlik Numarası',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 200,
                    onCellDoubleClicked: params => this.proposalRequestRowDoubleClicked(params),
                },
                {
                    field: 'insured.email',
                    headerName: 'Sigortalı E-Posta',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 200,
                    onCellDoubleClicked: params => this.proposalRequestRowDoubleClicked(params),
                },
                {
                    field: 'insured.phone',
                    headerName: 'Sigortalı Telefon',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 140,
                    onCellDoubleClicked: params => this.proposalRequestRowDoubleClicked(params),
                    cellRenderer: params => {
                        return Func.formatPhoneNumber(params.value);
                    }
                },
                {
                    field: 'createdDate',
                    headerName: 'Oluşturulma Tarihi',
                    cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    width: 160,
                    onCellDoubleClicked: params => this.proposalRequestRowDoubleClicked(params),
                    cellRenderer: params => {
                        return moment(new Date(params.value)).format("DD.MM.YYYY - HH:mm");
                    }
                }
            ],
            defaultColDef: {
                sortable: true,
                resizable: true,
                filter: true
            },
            groupDefaultExpanded: 0,
            detailCellRendererParams: {
                detailGridOptions: {
                    columnDefs: [
                        {
                            field: '_id',
                            onCellDoubleClicked: params => this.proposalResultRowDoubleClicked(params),
                            cellRenderer: params => {
                                if(params.data.errors.length > 0) return 'Teklif Başarısız';
                                else if(params.data.authorizations.length > 0) return 'Otorizasyonlu Teklif';
                                else return 'Teklif Başarılı';
                            },
                            cellStyle: params => {
                                if(params.data.errors.length > 0) return { color: '#e55353', fontWeight: 'bold', display: 'flex', alignItems: 'center' };
                                else if(params.data.authorizations.length > 0) return { color: '#f9b115', fontWeight: 'bold', display: 'flex', alignItems: 'center' };
                                else return { color: '#2eb85c', fontWeight: 'bold', display: 'flex', alignItems: 'center' };
                            },
                            checkboxSelection: true,
                            headerName: 'Teklif Durumu',
                            headerCheckboxSelection: true,
                            width: 180
                        },
                        {
                            field: 'status',
                            onCellDoubleClicked: params => this.proposalResultRowDoubleClicked(params),
                            cellRenderer: params => {
                                if(params.value === 'nonpolicied') return 'Poliçeleştirilmedi';
                                else if(params.value === 'policied') return 'Poliçeleştirildi';
                                else if(params.value === 'paymentError') return 'Ödeme Hatası';
                                else if(params.value === 'paymentOkNotPolicied') return 'Ödeme Alındı - Poliçeleştirilemedi';
                                else if(params.value === 'timeout') return 'Konut';
                                else if(params.value === 'authorizedProposal') return 'Otorizasyonlu Teklif';
                            },
                            cellStyle: params => {
                                if(params.value === 'nonpolicied') return { color: '#39f', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' };
                                else if(params.value === 'policied') return { color: '#2eb85c', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' };
                                else if(params.value === 'paymentError') return { color: '#e55353', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' };
                                else if(params.value === 'paymentOkNotPolicied') return { color: '#f9b115', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' };
                                else if(params.value === 'timeout') return { color: '#e55353', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' };
                                else if(params.value === 'authorizedProposal') return { color: '#f9b115', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' };
                            },
                            headerName: 'Durum',
                            width: 150
                        },
                        {
                            field: 'agentProposalNo',
                            onCellDoubleClicked: params => this.proposalResultRowDoubleClicked(params),
                            headerName: 'Acente Teklif No',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 140
                        },
                        {
                            field: 'companyProposalNo',
                            onCellDoubleClicked: params => this.proposalResultRowDoubleClicked(params),
                            cellRenderer: params => {
                                if(params.value === '') return '-';
                                else return params.value;
                            },
                            headerName: 'Firma Teklif No',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 140
                        },
                        {
                            field: 'companyDetail.name',
                            onCellDoubleClicked: params => this.proposalResultRowDoubleClicked(params),
                            headerName: 'Firma Adı',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 190
                        },
                        {
                            field: 'name',
                            onCellDoubleClicked: params => this.proposalResultRowDoubleClicked(params),
                            headerName: 'Teklif Adı',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 170
                        },
                        {
                            field: 'beginDate',
                            cellRenderer: params => {
                                return moment(new Date(params.value)).format("DD.MM.YYYY");
                            },
                            onCellDoubleClicked: params => this.proposalResultRowDoubleClicked(params),
                            headerName: 'Başlangıç Tarihi',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 140
                        },
                        {
                            field: 'endDate',
                            cellRenderer: params => {
                                return moment(new Date(params.value)).format("DD.MM.YYYY");
                            },
                            onCellDoubleClicked: params => this.proposalResultRowDoubleClicked(params),
                            headerName: 'Bitiş Tarihi',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 120
                        },
                        {
                            field: 'priceDetail.nonDiscountPrice',
                            cellRenderer: params => {
                                return moneyFormat.format(params.value, { code: 'TRY', symbol: 'TRY', format: '%v %s' });
                            },
                            onCellDoubleClicked: params => this.proposalResultRowDoubleClicked(params),
                            headerName: 'İndirimsiz Fiyat',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 130
                        },
                        {
                            field: 'priceDetail.priceTotal',
                            cellRenderer: params => {
                                return moneyFormat.format(params.value, { code: 'TRY', symbol: 'TRY', format: '%v %s' });
                            },
                            onCellDoubleClicked: params => this.proposalResultRowDoubleClicked(params),
                            headerName: 'Toplam Fiyat',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 120
                        },
                        {
                            field: 'priceDetail.pricePremium',
                            cellRenderer: params => {
                                return moneyFormat.format(params.value, { code: 'TRY', symbol: 'TRY', format: '%v %s' });
                            },
                            onCellDoubleClicked: params => this.proposalResultRowDoubleClicked(params),
                            headerName: 'Prim Fiyatı',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 120
                        },
                        {
                            field: 'priceDetail.priceTax',
                            cellRenderer: params => {
                                return moneyFormat.format(params.value, { code: 'TRY', symbol: 'TRY', format: '%v %s' });
                            },
                            onCellDoubleClicked: params => this.proposalResultRowDoubleClicked(params),
                            headerName: 'Vergi Fiyat',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 120
                        },
                        {
                            field: 'priceDetail.priceCommission',
                            cellRenderer: params => {
                                return moneyFormat.format(params.value, { code: 'TRY', symbol: 'TRY', format: '%v %s' });
                            },
                            onCellDoubleClicked: params => this.proposalResultRowDoubleClicked(params),
                            headerName: 'Komisyon Fiyatı',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 140
                        },
                        {
                            field: 'createdDate',
                            cellRenderer: params => {
                                return moment(new Date(params.value)).format("DD.MM.YYYY - HH:mm");
                            },
                            onCellDoubleClicked: params => this.proposalResultRowDoubleClicked(params),
                            headerName: 'Oluşturulma Tarihi',
                            cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            width: 150
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
                    getContextMenuItems: params => {
                        var _this = this;

                        var selectedProposals = [];

                        if(params.node) {
                            if(params.api.getSelectedRows().length > 0) {
                                if(params.api.getSelectedRows().includes(params.node.data)) {
                                    params.api.getSelectedRows().forEach(data => {
                                        selectedProposals.push(data);
                                    });
                                } else {
                                    params.api.rowModel.rowsToDisplay.forEach(row => {
                                        row.setSelected(false);
                                    });

                                    selectedProposals.push(params.node.data);
                                    params.node.setSelected(true);
                                }
                            } else {
                                selectedProposals.push(params.node.data);
                                params.node.setSelected(true);
                            }
                        }

                        var contextMenu = [];

                        if(selectedProposals.length > 0) { // Seçilen teklif sayısı sıfır'dan büyük ise
                            /* if(selectedProposals.length > 1) { // Birden fazla teklif seçildiyse
                                if(selectedProposals.filter(e => e.errors.length > 0).length === 0) { // Seçilen tekliflerin arasında errors array sayısı sıfır olanlar
                                    contextMenu.push({
                                        name: 'Karşılaştır',
                                        action: function() {
                                            
                                        }
                                    });
                                }
                            } else {
                                var selectedProposal = selectedProposals[0];

                                contextMenu.push({
                                    name: 'Düzenle',
                                    action: function() {
                                        _this.modals.updateProposal.selectedAGGridNode = params.node;
                                        _this.openModal(_this.modals.updateProposal, 'Teklif Düzenleme', 'post', params.node.data);
                                    }
                                });

                                if(selectedProposal.errors.length === 0) {
                                    contextMenu.push({
                                        name: 'Poliçeleştir',
                                        action: function() {
                                            _this.openModal(_this.modals.createPolicy, 'Teklif Poliçeleştir', 'post', selectedProposal);
                                        }
                                    });
                                }
                            } */

                            contextMenu.push({
                                name: 'Sil',
                                action: function() {
                                    
                                }
                            });
                        }
                        
                        return contextMenu;
                    }
                },
                getDetailRowData: params => {
                    params.successCallback(params.data.results);
                }
            },
            masterDetail: true,
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
                    memberName: {
                        id: 'memberName',
                        name: 'memberName',
                        type: 'text',
                        ref: 'memberName',
                        options: {
                            placeholder: 'Üye Adı',
                            maxlength: 35,
                            onlyLetter: true,
                            toUpperCase: true,
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
                    memberLastname: {
                        id: 'memberLastname',
                        name: 'memberLastname',
                        type: 'text',
                        ref: 'memberLastname',
                        options: {
                            placeholder: 'Üye Soyadı',
                            maxlength: 35,
                            onlyLetter: true,
                            toUpperCase: true,
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
                    memberIdentityNumber: {
                        id: 'memberIdentityNumber',
                        name: 'memberIdentityNumber',
                        type: 'text',
                        ref: 'memberIdentityNumber',
                        options: {
                            placeholder: 'Üye T.C. Kimlik veya Vergi No',
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
                    insuredTitle: {
                        id: 'insuredTitle',
                        name: 'insuredTitle',
                        type: 'text',
                        ref: 'insuredTitle',
                        options: {
                            placeholder: 'Sigortalı Ünvan',
                            maxlength: 50,
                            onlyLetter: true,
                            toUpperCase: true,
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
                    insuredName: {
                        id: 'insuredName',
                        name: 'insuredName',
                        type: 'text',
                        ref: 'insuredName',
                        options: {
                            placeholder: 'Sigortalı Adı',
                            maxlength: 35,
                            onlyLetter: true,
                            toUpperCase: true,
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
                            placeholder: 'Sigortalı Soyadı',
                            maxlength: 35,
                            onlyLetter: true,
                            toUpperCase: true,
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
                        type: 'text',
                        ref: 'insuredEmail',
                        options: {
                            placeholder: 'Sigortalı E-Posta',
                            maxlength: 50,
                            onlyLetter: true,
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
                    insuredPhone: {
                        id: 'insuredPhone',
                        name: 'insuredPhone',
                        type: 'tel',
                        ref: 'insuredPhone',
                        options: {
                            phoneOptions: {
                                inputOptions: {
                                    placeholder: 'Sigortalı Telefon'
                                }
                            }
                        }
                    },
                    requestNo: {
                        id: 'requestNo',
                        name: 'requestNo',
                        type: 'text',
                        ref: 'requestNo',
                        options: {
                            placeholder: 'Talep No',
                            maxlength: 10,
                            onlyNumber: true,
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'svg',
                                    src: 'M96 176C96 167.2 103.2 160 112 160H144C152.8 160 160 167.2 160 176V320H176C184.8 320 192 327.2 192 336C192 344.8 184.8 352 176 352H112C103.2 352 96 344.8 96 336C96 327.2 103.2 320 112 320H128V192H112C103.2 192 96 184.8 96 176zM252.3 218.2C246.6 225 236.5 225.9 229.8 220.3C222.1 214.6 222.1 204.5 227.7 197.8L240.1 182.9C260.1 157.8 298.4 154.9 322.1 176.4C347.1 197.4 349.6 233.1 328.6 258.1L275 319.1H336C344.8 319.1 352 327.2 352 336C352 344.8 344.8 352 336 352H240C233.7 352 228 348.3 225.4 342.6C222.8 336.9 223.8 330.3 227.9 325.5L304.5 237.2C313.9 226.3 312.7 209.9 301.9 200.4C290.9 190.8 274.1 192.1 264.7 203.4L252.3 218.2zM576 64C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H576zM576 96H64C46.33 96 32 110.3 32 128V384C32 401.7 46.33 416 64 416H576C593.7 416 608 401.7 608 384V128C608 110.3 593.7 96 576 96z',
                                    viewBox: '0 0 640 512'
                                }
                            }
                        }
                    },
                    agentProposalNo: {
                        id: 'agentProposalNo',
                        name: 'agentProposalNo',
                        type: 'text',
                        ref: 'agentProposalNo',
                        options: {
                            placeholder: 'Acente Teklif No',
                            maxlength: 10,
                            onlyNumber: true,
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'svg',
                                    src: 'M96 176C96 167.2 103.2 160 112 160H144C152.8 160 160 167.2 160 176V320H176C184.8 320 192 327.2 192 336C192 344.8 184.8 352 176 352H112C103.2 352 96 344.8 96 336C96 327.2 103.2 320 112 320H128V192H112C103.2 192 96 184.8 96 176zM252.3 218.2C246.6 225 236.5 225.9 229.8 220.3C222.1 214.6 222.1 204.5 227.7 197.8L240.1 182.9C260.1 157.8 298.4 154.9 322.1 176.4C347.1 197.4 349.6 233.1 328.6 258.1L275 319.1H336C344.8 319.1 352 327.2 352 336C352 344.8 344.8 352 336 352H240C233.7 352 228 348.3 225.4 342.6C222.8 336.9 223.8 330.3 227.9 325.5L304.5 237.2C313.9 226.3 312.7 209.9 301.9 200.4C290.9 190.8 274.1 192.1 264.7 203.4L252.3 218.2zM576 64C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H576zM576 96H64C46.33 96 32 110.3 32 128V384C32 401.7 46.33 416 64 416H576C593.7 416 608 401.7 608 384V128C608 110.3 593.7 96 576 96z',
                                    viewBox: '0 0 640 512'
                                }
                            }
                        }
                    },
                    companyProposalNo: {
                        id: 'companyProposalNo',
                        name: 'companyProposalNo',
                        type: 'text',
                        ref: 'companyProposalNo',
                        options: {
                            placeholder: 'Firma Teklif No',
                            maxlength: 20,
                            onlyNumber: true,
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'svg',
                                    src: 'M96 176C96 167.2 103.2 160 112 160H144C152.8 160 160 167.2 160 176V320H176C184.8 320 192 327.2 192 336C192 344.8 184.8 352 176 352H112C103.2 352 96 344.8 96 336C96 327.2 103.2 320 112 320H128V192H112C103.2 192 96 184.8 96 176zM252.3 218.2C246.6 225 236.5 225.9 229.8 220.3C222.1 214.6 222.1 204.5 227.7 197.8L240.1 182.9C260.1 157.8 298.4 154.9 322.1 176.4C347.1 197.4 349.6 233.1 328.6 258.1L275 319.1H336C344.8 319.1 352 327.2 352 336C352 344.8 344.8 352 336 352H240C233.7 352 228 348.3 225.4 342.6C222.8 336.9 223.8 330.3 227.9 325.5L304.5 237.2C313.9 226.3 312.7 209.9 301.9 200.4C290.9 190.8 274.1 192.1 264.7 203.4L252.3 218.2zM576 64C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H576zM576 96H64C46.33 96 32 110.3 32 128V384C32 401.7 46.33 416 64 416H576C593.7 416 608 401.7 608 384V128C608 110.3 593.7 96 576 96z',
                                    viewBox: '0 0 640 512'
                                }
                            }
                        }
                    },
                    callback: {
                        id: 'callback',
                        name: 'callback',
                        type: 'select',
                        ref: 'callback',
                        options: {
                            selectSettings: {
                                placeholder: 'Geri Arama',
                                showLabels: true,
                                selectedLabel: 'Seçildi',
                                deselectLabel: 'Kaldır',
                                allowEmpty: true,
                            },
                            selectOptions: [
                                { value: true, label: 'Evet' },
                                { value: false, label: 'Hayır' }
                            ]
                        }
                    },
                    type: {
                        id: 'type',
                        name: 'type',
                        type: 'select',
                        ref: 'type',
                        options: {
                            selectSettings: {
                                placeholder: 'Sigorta Tipi',
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
                                { value: 'privHealth', label: 'Özel Sağlık Sigortası' },
                                { value: 'compHealth', label: 'Tamamlayıcı Sağlık Sigortası' }
                            ]
                        }
                    },
                    // Sigorta Tipi Kasko Sigortası ya da Trafik Sigortası ise
                    plate: {
                        id: 'plate',
                        name: 'plate',
                        type: 'text',
                        ref: 'plate',
                        options: {
                            placeholder: 'Araç Plaka No',
                            maxlength: 10,
                            toUpperCase: true,
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'svg',
                                    src: 'M176 160C182.5 160 188.4 163.1 190.9 170.1L254.9 330.1C258.1 338.3 254.1 347.6 245.9 350.9C237.7 354.1 228.4 350.1 225.1 341.9L216.4 319.1L216 320H136L135.6 319.1L126.9 341.9C123.6 350.1 114.3 354.1 106.1 350.9C97.85 347.6 93.86 338.3 97.14 330.1L161.1 170.1C163.6 163.1 169.5 160 176 160H176zM148.4 288H203.6L176 219.1L148.4 288zM288 176C288 167.2 295.2 160 304 160H360C390.9 160 416 185.1 416 216C416 228.1 412.2 239.3 405.6 248.5C421.5 258.4 432 275.1 432 296C432 326.9 406.9 352 376 352H304C295.2 352 288 344.8 288 336V176zM320 272V320H376C389.3 320 400 309.3 400 296C400 282.7 389.3 272 376 272H320zM360 240C373.3 240 384 229.3 384 216C384 202.7 373.3 192 360 192H320V240H360zM0 128C0 92.65 28.65 64 64 64H576C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H64C28.65 448 0 419.3 0 384V128zM32 128V384C32 401.7 46.33 416 64 416H576C593.7 416 608 401.7 608 384V128C608 110.3 593.7 96 576 96H64C46.33 96 32 110.3 32 128z',
                                    viewBox: '0 0 640 512'
                                }
                            }
                        }
                    },
                    modelYear: {
                        id: 'modelYear',
                        name: 'modelYear',
                        type: 'select',
                        ref: 'modelYear',
                        options: {
                            selectSettings: {
                                placeholder: 'Araç Model Yılı',
                                showLabels: true,
                                selectedLabel: 'Seçildi',
                                deselectLabel: 'Kaldır',
                                allowEmpty: true,
                            },
                            selectOptions: [].concat(Func.generateYearsBetween(new Date().getFullYear(), new Date().getFullYear() - process.env.VUE_APP_MIN_CAR_AGE).map(e => { return { value: e, label: e } }))
                        }
                    },
                    brandName: {
                        id: 'brandName',
                        name: 'brandName',
                        type: 'text',
                        ref: 'brandName',
                        options: {
                            placeholder: 'Araç Marka Adı',
                            maxlength: 30,
                            toUpperCase: true,
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'fontawesome',
                                    src: ['far', 'car']
                                }
                            }
                        }
                    },
                    modelName: {
                        id: 'modelName',
                        name: 'modelName',
                        type: 'text',
                        ref: 'modelName',
                        options: {
                            placeholder: 'Araç Model Adı',
                            maxlength: 50,
                            toUpperCase: true,
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'fontawesome',
                                    src: ['far', 'car']
                                }
                            }
                        }
                    },
                    // Sigorta Tipi DASK Sigortası ya da Konut Sigortası ise
                    uavtCode: {
                        id: 'uavtCode',
                        name: 'uavtCode',
                        type: 'text',
                        ref: 'uavtCode',
                        options: {
                            placeholder: 'UAVT Kodu',
                            maxlength: 10,
                            onlyNumber: true,
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'svg',
                                    src: 'M96 176C96 167.2 103.2 160 112 160H144C152.8 160 160 167.2 160 176V320H176C184.8 320 192 327.2 192 336C192 344.8 184.8 352 176 352H112C103.2 352 96 344.8 96 336C96 327.2 103.2 320 112 320H128V192H112C103.2 192 96 184.8 96 176zM252.3 218.2C246.6 225 236.5 225.9 229.8 220.3C222.1 214.6 222.1 204.5 227.7 197.8L240.1 182.9C260.1 157.8 298.4 154.9 322.1 176.4C347.1 197.4 349.6 233.1 328.6 258.1L275 319.1H336C344.8 319.1 352 327.2 352 336C352 344.8 344.8 352 336 352H240C233.7 352 228 348.3 225.4 342.6C222.8 336.9 223.8 330.3 227.9 325.5L304.5 237.2C313.9 226.3 312.7 209.9 301.9 200.4C290.9 190.8 274.1 192.1 264.7 203.4L252.3 218.2zM576 64C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H576zM576 96H64C46.33 96 32 110.3 32 128V384C32 401.7 46.33 416 64 416H576C593.7 416 608 401.7 608 384V128C608 110.3 593.7 96 576 96z',
                                    viewBox: '0 0 640 512'
                                }
                            }
                        }
                    },
                    daskPolicyNo: {
                        id: 'daskPolicyNo',
                        name: 'daskPolicyNo',
                        type: 'text',
                        ref: 'daskPolicyNo',
                        options: {
                            placeholder: 'Dask Poliçe No',
                            maxlength: 15,
                            onlyNumber: true,
                            inputIcon: {
                                status: true,
                                placement: 'left',
                                icon: {
                                    library: 'svg',
                                    src: 'M96 176C96 167.2 103.2 160 112 160H144C152.8 160 160 167.2 160 176V320H176C184.8 320 192 327.2 192 336C192 344.8 184.8 352 176 352H112C103.2 352 96 344.8 96 336C96 327.2 103.2 320 112 320H128V192H112C103.2 192 96 184.8 96 176zM252.3 218.2C246.6 225 236.5 225.9 229.8 220.3C222.1 214.6 222.1 204.5 227.7 197.8L240.1 182.9C260.1 157.8 298.4 154.9 322.1 176.4C347.1 197.4 349.6 233.1 328.6 258.1L275 319.1H336C344.8 319.1 352 327.2 352 336C352 344.8 344.8 352 336 352H240C233.7 352 228 348.3 225.4 342.6C222.8 336.9 223.8 330.3 227.9 325.5L304.5 237.2C313.9 226.3 312.7 209.9 301.9 200.4C290.9 190.8 274.1 192.1 264.7 203.4L252.3 218.2zM576 64C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H576zM576 96H64C46.33 96 32 110.3 32 128V384C32 401.7 46.33 416 64 416H576C593.7 416 608 401.7 608 384V128C608 110.3 593.7 96 576 96z',
                                    viewBox: '0 0 640 512'
                                }
                            }
                        }
                    }
                },
                form: {
                    memberId: '',
                    memberName: { value: '', valid: null },
                    memberLastname: { value: '', valid: null },
                    memberIdentityNumber: { value: '', valid: null },
                    insuredTitle: { value: '', valid: null },
                    insuredName: { value: '', valid: null },
                    insuredLastname: { value: '', valid: null },
                    insuredIdentityNumber: { value: '', valid: null },
                    insuredEmail: { value: '', valid: null },
                    insuredPhone: { value: '', valid: null },
                    requestNo: { value: '', valid: null },
                    agentProposalNo: { value: '', valid: null },
                    companyProposalNo: { value: '', valid: null },
                    callback: { value: '', valid: null },
                    type: { value: '', valid: null },
                    plate: { value: '', valid: null },
                    modelYear: { value: '', valid: null },
                    brandName: { value: '', valid: null },
                    modelName: { value: '', valid: null },
                    uavtCode: { value: '', valid: null },
                    daskPolicyNo: { value: '', valid: null },
                    addResults: true,
                    sort: -1
                }
            },

            modals: {
                proposalRequestDetail: { // TEKLİF TALEBİ
                    title: '',
                    show: false,
                    data: null
                },
                newProposal: { // TEKLİF AL
                    show: false,
                    title: '',
                    currentStep: 0,
                    steps: [
                        { // 1. Adım
                            id: 'insuranceType',
                            title: 'Sigorta Tipi',
                            description: `Sigorta sistemindeki bilgilerinizi doğrulamamız ve size özel indirimler sunabilmemiz için araç sahibinin kimlik bilgilerini bizimle paylaşır mısınız? Böylece <strong class="color-blue">${process.env.VUE_APP_NAME}</strong> size en uygun ve gerçekçi teklifleri sunarak, avantajlı sigorta paketlerinden yararlanmanızı sağlar.`,
                            icon: 'fas fa-car',
                            disabled: false,
                            permission: true,
                            nextButton: {
                                text: 'Devam<i class="far fa-chevron-right ml-2"></i>',
                                loadSpinner: true
                            },
                            fields: {
                                type: {
                                    id: 'type',
                                    name: 'type',
                                    type: 'select',
                                    ref: 'type',
                                    options: {
                                        marginButtom: '0px',
                                        selectSettings: {
                                            placeholder: 'Sigorta Tipi',
                                            showLabels: true,
                                            selectedLabel: 'Seçildi',
                                            allowEmpty: false,
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
                                }
                            },
                            form: {
                                type: { value: 'casco', valid: true }
                            }
                        },
                        { // 2. Adım
                            id: 'insuredInfos',
                            title: 'Sigortalı Bilgileri',
                            description: ``,
                            icon: 'fas fa-user',
                            disabled: false,
                            permission: false,
                            searchButton: {
                                text: 'Ara<i class="far fa-search ml-2"></i>',
                                loadSpinner: true
                            },
                            nextButton: {
                                text: 'Devam<i class="far fa-chevron-right ml-2"></i>',
                                loadSpinner: true
                            },
                            fields: {
                                insuredSearch: {
                                    id: 'insuredSearch',
                                    name: 'insuredSearch',
                                    type: 'text',
                                    ref: 'insuredSearch',
                                    options: {
                                        label: 'Sigortalı Ara',
                                        placeholder: 'Kimlik No, Ad, Soyad, Telefon, E-Posta',
                                        maxlength: 50,
                                        inputIcon: {
                                            status: true,
                                            placement: 'left',
                                            icon: {
                                                library: 'fontawesome',
                                                src: ['far', 'search']
                                            }
                                        }
                                    }
                                },
                                insuredTitle: {
                                    id: 'insuredTitle',
                                    name: 'insuredTitle',
                                    type: 'text',
                                    ref: 'insuredTitle',
                                    options: {
                                        label: 'Sigortalı Ünvanı',
                                        placeholder: 'Örn: xxx A.Ş.',
                                        maxlength: 50,
                                        onlyLetter: true,
                                        toUpperCase: true,
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
                                insuredName: {
                                    id: 'insuredName',
                                    name: 'insuredName',
                                    type: 'text',
                                    ref: 'insuredName',
                                    options: {
                                        label: 'Sigortalı Adı',
                                        placeholder: 'Örn: Ahmet',
                                        maxlength: 35,
                                        onlyLetter: true,
                                        toUpperCase: true,
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
                                insuredLastname: {
                                    id: 'insuredLastname',
                                    name: 'insuredLastname',
                                    type: 'text',
                                    ref: 'insuredLastname',
                                    options: {
                                        label: 'Sigortalı Soyadı',
                                        placeholder: 'Örn: Yılmaz',
                                        maxlength: 35,
                                        onlyLetter: true,
                                        toUpperCase: true,
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
                                            status: false,
                                            errorMessage: 'Bu alanı boş bırakamazsınız!'
                                        },
                                        validLengthMin: {
                                            status: false,
                                            number: 2,
                                            errorMessage: 'Bu alana en az <strong>2</strong> karakter girebilirsiniz!'
                                        }
                                    }
                                },
                                insuredIdentityNumber: {
                                    id: 'insuredIdentityNumber',
                                    name: 'insuredIdentityNumber',
                                    type: 'text',
                                    ref: 'insuredIdentityNumber',
                                    options: {
                                        placeholder: 'Örn: 12345678901',
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
                                        validLengthMax: {
                                            status: true,
                                            number: 11,
                                            errorMessage: 'Bu alana en fazla <strong>11</strong> karakter girebilirsiniz!'
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
                                insuredBirthDateDay: {
                                    id: 'insuredBirthDateDay',
                                    name: 'insuredBirthDateDay',
                                    type: 'select',
                                    ref: 'insuredBirthDateDay',
                                    options: {
                                        selectSettings: {
                                            placeholder: 'Gün',
                                            searchable: true
                                        },
                                        selectOptions: []
                                    }
                                },
                                insuredBirthDateMonth: {
                                    id: 'insuredBirthDateMonth',
                                    name: 'insuredBirthDateMonth',
                                    type: 'select',
                                    ref: 'insuredBirthDateMonth',
                                    options: {
                                        marginLeft: '10px',
                                        selectSettings: {
                                            placeholder: 'Ay',
                                            searchable: true
                                        },
                                        selectOptions: []
                                    }
                                },
                                insuredBirthDateYear: {
                                    id: 'insuredBirthDateYear',
                                    name: 'insuredBirthDateYear',
                                    type: 'select',
                                    ref: 'insuredBirthDateYear',
                                    options: {
                                        marginLeft: '10px',
                                        selectSettings: {
                                            placeholder: 'Yıl',
                                            searchable: true
                                        },
                                        selectOptions: []
                                    }
                                },
                                insuredEmail: {
                                    id: 'insuredEmail',
                                    name: 'insuredEmail',
                                    type: 'text',
                                    ref: 'insuredEmail',
                                    options: {
                                        label: 'Sigortalı E-Posta',
                                        placeholder: 'Örn: xxx@xxx.com',
                                        maxlength: 50,
                                        onlyLetter: true,
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
                                insuredPhone: {
                                    id: 'insuredPhone',
                                    name: 'insuredPhone',
                                    type: 'tel',
                                    ref: 'insuredPhone',
                                    options: {
                                        label: 'Sigortalı Telefon',
                                        phoneOptions: {
                                            inputOptions: {
                                                placeholder: 'Örn: +90 555 555 55 55'
                                            }
                                        }
                                    }
                                },
                            },
                            form: {
                                insuredSearch: { value: '', valid: null },
                                insuredType: 'individual',
                                insuredTitle: { value: '', valid: null },
                                insuredName: { value: '', valid: null },
                                insuredLastname: { value: '', valid: null },
                                insuredIdentityNumber: { value: '', valid: null },
                                insuredBirthDateDay: { value: '', valid: null },
                                insuredBirthDateMonth: { value: '', valid: null },
                                insuredBirthDateYear: { value: '', valid: null },
                                insuredEmail: { value: '', valid: null },
                                insuredPhone: { value: '', valid: null }
                            }
                        },
                        { // 3. Adım
                            id: 'productInfos',
                            title: '',
                            description: '',
                            icon: '',
                            disabled: false,
                            permission: false,
                            nextButton: {
                                text: 'Ruhsat Sorgula<i class="far fa-search ml-2"></i>',
                                loadSpinner: true
                            },
                            fields: {
                                // ARAÇ VE RUHSAT BİLGİLERİ
                                plate: {
                                    id: 'plate',
                                    name: 'plate',
                                    type: 'text',
                                    ref: 'plate',
                                    options: {
                                        label: 'Araç Plaka No',
                                        labelBold: true,
                                        placeholder: 'Örn: 34 XXX 999',
                                        maxlength: 10,
                                        toUpperCase: true,
                                        shaker: true,
                                        inputIcon: {
                                            status: true,
                                            placement: 'left',
                                            icon: {
                                                library: 'svg',
                                                src: 'M176 160C182.5 160 188.4 163.1 190.9 170.1L254.9 330.1C258.1 338.3 254.1 347.6 245.9 350.9C237.7 354.1 228.4 350.1 225.1 341.9L216.4 319.1L216 320H136L135.6 319.1L126.9 341.9C123.6 350.1 114.3 354.1 106.1 350.9C97.85 347.6 93.86 338.3 97.14 330.1L161.1 170.1C163.6 163.1 169.5 160 176 160H176zM148.4 288H203.6L176 219.1L148.4 288zM288 176C288 167.2 295.2 160 304 160H360C390.9 160 416 185.1 416 216C416 228.1 412.2 239.3 405.6 248.5C421.5 258.4 432 275.1 432 296C432 326.9 406.9 352 376 352H304C295.2 352 288 344.8 288 336V176zM320 272V320H376C389.3 320 400 309.3 400 296C400 282.7 389.3 272 376 272H320zM360 240C373.3 240 384 229.3 384 216C384 202.7 373.3 192 360 192H320V240H360zM0 128C0 92.65 28.65 64 64 64H576C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H64C28.65 448 0 419.3 0 384V128zM32 128V384C32 401.7 46.33 416 64 416H576C593.7 416 608 401.7 608 384V128C608 110.3 593.7 96 576 96H64C46.33 96 32 110.3 32 128z',
                                                viewBox: '0 0 640 512'
                                            }
                                        },
                                        validRequired: {
                                            status: true,
                                            errorMessage: 'Bu alanı boş bırakamazsınız!'
                                        },
                                        validLengthMin: {
                                            status: true,
                                            number: 7,
                                            errorMessage: 'Bu alana en az <strong>7</strong> karakter girebilirsiniz!'
                                        },
                                        validRegExp: {
                                            status: true,
                                            regexp: /^(0[1-9]|[1-7][0-9]|8[01])(\s|)(([A-Z])(\s|)(\d{4,5})|([A-Z]{2})(\s|)(\d{3,4})|([A-Z]{3})(\s|)(\d{2,3}))$/,
                                            errorMessage: 'Plaka formatını hatalı girdiniz!',
                                        }
                                    }
                                },
                                licenseSerial: {
                                    id: 'licenseSerial',
                                    name: 'licenseSerial',
                                    type: 'text',
                                    ref: 'licenseSerial',
                                    options: {
                                        label: 'Belge Seri <span style=\'color: red\'>*</span>',
                                        labelBold: true,
                                        placeholder: 'Belge Seri',
                                        maxlength: 3,
                                        toUpperCase: true,
                                        shaker: true,
                                        onlyLetter: true,
                                        inputIcon: {
                                            status: true,
                                            placement: 'left',
                                            icon: {
                                                library: 'svg',
                                                src: 'M176 160C182.5 160 188.4 163.1 190.9 170.1L254.9 330.1C258.1 338.3 254.1 347.6 245.9 350.9C237.7 354.1 228.4 350.1 225.1 341.9L216.4 319.1L216 320H136L135.6 319.1L126.9 341.9C123.6 350.1 114.3 354.1 106.1 350.9C97.85 347.6 93.86 338.3 97.14 330.1L161.1 170.1C163.6 163.1 169.5 160 176 160H176zM148.4 288H203.6L176 219.1L148.4 288zM288 176C288 167.2 295.2 160 304 160H360C390.9 160 416 185.1 416 216C416 228.1 412.2 239.3 405.6 248.5C421.5 258.4 432 275.1 432 296C432 326.9 406.9 352 376 352H304C295.2 352 288 344.8 288 336V176zM320 272V320H376C389.3 320 400 309.3 400 296C400 282.7 389.3 272 376 272H320zM360 240C373.3 240 384 229.3 384 216C384 202.7 373.3 192 360 192H320V240H360zM0 128C0 92.65 28.65 64 64 64H576C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H64C28.65 448 0 419.3 0 384V128zM32 128V384C32 401.7 46.33 416 64 416H576C593.7 416 608 401.7 608 384V128C608 110.3 593.7 96 576 96H64C46.33 96 32 110.3 32 128z',
                                                viewBox: '0 0 640 512'
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
                                        },
                                        validRegExp: {
                                            status: true,
                                            regexp: /^([a-zA-Z]{2,3})$/,
                                            errorMessage: 'Hatalı belge seri formatı!',
                                        }
                                    }
                                },
                                licenseNumber: {
                                    id: 'licenseNumber',
                                    name: 'licenseNumber',
                                    type: 'text',
                                    ref: 'licenseNumber',
                                    options: {
                                        label: 'Belge No <span style=\'color: red\'>*</span>',
                                        labelBold: true,
                                        placeholder: 'Belge No',
                                        maxlength: 6,
                                        shaker: true,
                                        onlyNumber: true,
                                        inputIcon: {
                                            status: true,
                                            placement: 'left',
                                            icon: {
                                                library: 'svg',
                                                src: 'M96 176C96 167.2 103.2 160 112 160H144C152.8 160 160 167.2 160 176V320H176C184.8 320 192 327.2 192 336C192 344.8 184.8 352 176 352H112C103.2 352 96 344.8 96 336C96 327.2 103.2 320 112 320H128V192H112C103.2 192 96 184.8 96 176zM252.3 218.2C246.6 225 236.5 225.9 229.8 220.3C222.1 214.6 222.1 204.5 227.7 197.8L240.1 182.9C260.1 157.8 298.4 154.9 322.1 176.4C347.1 197.4 349.6 233.1 328.6 258.1L275 319.1H336C344.8 319.1 352 327.2 352 336C352 344.8 344.8 352 336 352H240C233.7 352 228 348.3 225.4 342.6C222.8 336.9 223.8 330.3 227.9 325.5L304.5 237.2C313.9 226.3 312.7 209.9 301.9 200.4C290.9 190.8 274.1 192.1 264.7 203.4L252.3 218.2zM576 64C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H576zM576 96H64C46.33 96 32 110.3 32 128V384C32 401.7 46.33 416 64 416H576C593.7 416 608 401.7 608 384V128C608 110.3 593.7 96 576 96z',
                                                viewBox: '0 0 640 512'
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
                                        validRegExp: {
                                            status: true,
                                            regexp: /^([0-9]{6})$/,
                                            errorMessage: 'Hatalı belge no formatı!',
                                        }
                                    }
                                },
                                city: {
                                    id: 'city',
                                    name: 'city',
                                    type: 'select',
                                    ref: 'city',
                                    options: {
                                        label: 'Plaka İli',
                                        selectSettings: {
                                            placeholder: 'Seçiniz',
                                            searchable: true,
                                            allowEmpty: false
                                        },
                                        selectOptions: [
                                            { value: '01 - Adana', label: '01 - Adana' },
                                            { value: '02 - Adıyaman', label: '02 - Adıyaman' },
                                            { value: '03 - Afyon', label: '03 - Afyon' },
                                            { value: '04 - Ağrı', label: '04 - Ağrı' },
                                            { value: '05 - Amasya', label: '05 - Amasya' },
                                            { value: '06 - Ankara', label: '06 - Ankara' },
                                            { value: '07 - Antalya', label: '07 - Antalya' },
                                            { value: '08 - Artvin', label: '08 - Artvin' },
                                            { value: '09 - Aydın', label: '09 - Aydın' },
                                            { value: '10 - Balıkesir', label: '10 - Balıkesir' },
                                            { value: '11 - Bilecik', label: '11 - Bilecik' },
                                            { value: '12 - Bingöl', label: '12 - Bingöl' },
                                            { value: '13 - Bitlis', label: '13 - Bitlis' },
                                            { value: '14 - Bolu', label: '14 - Bolu' },
                                            { value: '15 - Burdur', label: '15 - Burdur' },
                                            { value: '16 - Bursa', label: '16 - Bursa' },
                                            { value: '17 - Çanakkale', label: '17 - Çanakkale' },
                                            { value: '18 - Çankırı', label: '18 - Çankırı' },
                                            { value: '19 - Çorum', label: '19 - Çorum' },
                                            { value: '20 - Denizli', label: '20 - Denizli' },
                                            { value: '21 - Diyarbakır', label: '21 - Diyarbakır' },
                                            { value: '22 - Edirne', label: '22 - Edirne' },
                                            { value: '23 - Elazığ', label: '23 - Elazığ' },
                                            { value: '24 - Erzincan', label: '24 - Erzincan' },
                                            { value: '25 - Erzurum', label: '25 - Erzurum' },
                                            { value: '26 - Eskişehir', label: '26 - Eskişehir' },
                                            { value: '27 - Gaziantep', label: '27 - Gaziantep' },
                                            { value: '28 - Giresun', label: '28 - Giresun' },
                                            { value: '29 - Gümüşhane', label: '29 - Gümüşhane' },
                                            { value: '30 - Hakkari', label: '30 - Hakkari' },
                                            { value: '31 - Hatay', label: '31 - Hatay' },
                                            { value: '32 - Isparta', label: '32 - Isparta' },
                                            { value: '33 - Mersin İçel', label: '33 - Mersin İçel' },
                                            { value: '34 - İstanbul', label: '34 - İstanbul' },
                                            { value: '35 - İzmir', label: '35 - İzmir' },
                                            { value: '36 - Kars', label: '36 - Kars' },
                                            { value: '37 - Kastamonu', label: '37 - Kastamonu' },
                                            { value: '38 - Kayseri', label: '38 - Kayseri' },
                                            { value: '39 - Kırklareli', label: '39 - Kırklareli' },
                                            { value: '40 - Kırşehir', label: '40 - Kırşehir' },
                                            { value: '41 - Kocaeli', label: '41 - Kocaeli' },
                                            { value: '42 - Konya', label: '42 - Konya' },
                                            { value: '43 - Kütahya', label: '43 - Kütahya' },
                                            { value: '44 - Malatya', label: '44 - Malatya' },
                                            { value: '45 - Manisa', label: '45 - Manisa' },
                                            { value: '46 - Kahramanmaraş', label: '46 - Kahramanmaraş' },
                                            { value: '47 - Mardin', label: '47 - Mardin' },
                                            { value: '48 - Muğla', label: '48 - Muğla' },
                                            { value: '49 - Muş', label: '49 - Muş' },
                                            { value: '50 - Nevşehir', label: '50 - Nevşehir' },
                                            { value: '51 - Niğde', label: '51 - Niğde' },
                                            { value: '52 - Ordu', label: '52 - Ordu' },
                                            { value: '53 - Rize', label: '53 - Rize' },
                                            { value: '54 - Sakarya', label: '54 - Sakarya' },
                                            { value: '55 - Samsun', label: '55 - Samsun' },
                                            { value: '56 - Siirt', label: '56 - Siirt' },
                                            { value: '57 - Sinop', label: '57 - Sinop' },
                                            { value: '58 - Sivas', label: '58 - Sivas' },
                                            { value: '59 - Tekirdağ', label: '59 - Tekirdağ' },
                                            { value: '60 - Tokat', label: '60 - Tokat' },
                                            { value: '61 - Trabzon', label: '61 - Trabzon' },
                                            { value: '62 - Tunceli', label: '62 - Tunceli' },
                                            { value: '63 - Şanlıurfa', label: '63 - Şanlıurfa' },
                                            { value: '64 - Uşak' , label: '64 - Uşak' },
                                            { value: '65 - Van', label: '65 - Van' },
                                            { value: '66 - Yozgat', label: '66 - Yozgat' },
                                            { value: '67 - Zonguldak', label: '67 - Zonguldak' },
                                            { value: '68 - Aksaray', label: '68 - Aksaray' },
                                            { value: '69 - Bayburt', label: '69 - Bayburt' },
                                            { value: '70 - Karaman', label: '70 - Karaman' },
                                            { value: '71 - Kırıkkale', label: '71 - Kırıkkale' },
                                            { value: '72 - Batman', label: '72 - Batman' },
                                            { value: '73 - Şırnak', label: '73 - Şırnak' },
                                            { value: '74 - Bartın', label: '74 - Bartın' },
                                            { value: '75 - Ardahan', label: '75 - Ardahan' },
                                            { value: '76 - Iğdır', label: '76 - Iğdır' },
                                            { value: '77 - Yalova', label: '77 - Yalova' },
                                            { value: '78 - Karabük', label: '78 - Karabük' },
                                            { value: '79 - Kilis', label: '79 - Kilis' },
                                            { value: '80 - Osmaniye', label: '80 - Osmaniye' },
                                            { value: '81 - Düzce', label: '81 - Düzce' }
                                        ]
                                    }
                                },
                                district: {
                                    id: 'district',
                                    name: 'district',
                                    type: 'select',
                                    ref: 'district',
                                    options: {
                                        label: 'Plaka İlçesi',
                                        selectSettings: {
                                            placeholder: 'Seçiniz',
                                            searchable: true,
                                            allowEmpty: false
                                        },
                                        selectOptions: []
                                    }
                                },
                                modelYear: {
                                    id: 'modelYear',
                                    name: 'modelYear',
                                    type: 'select',
                                    ref: 'modelYear',
                                    options: {
                                        label: 'Model Yılı',
                                        selectSettings: {
                                            placeholder: 'Seçiniz',
                                            searchable: true,
                                            allowEmpty: false
                                        },
                                        selectOptions: [].concat(Func.generateYearsBetween(new Date().getFullYear(), new Date().getFullYear() - process.env.VUE_APP_MIN_CAR_AGE).map(e => { return { value: e, label: e } })),
                                    }
                                },
                                brandCode: {
                                    id: 'brandCode',
                                    name: 'brandCode',
                                    type: 'select',
                                    ref: 'brandCode',
                                    options: {
                                        label: 'Marka',
                                        selectSettings: {
                                            placeholder: 'Seçiniz',
                                            searchable: true,
                                            allowEmpty: false
                                        },
                                        selectOptions: []
                                    }
                                },
                                modelCode: {
                                    id: 'modelCode',
                                    name: 'modelCode',
                                    type: 'select',
                                    ref: 'modelCode',
                                    options: {
                                        label: 'Model',
                                        selectSettings: {
                                            placeholder: 'Seçiniz',
                                            searchable: true,
                                            allowEmpty: false
                                        },
                                        selectOptions: []
                                    }
                                },
                                usageType: {
                                    id: 'usageType',
                                    name: 'usageType',
                                    type: 'select',
                                    ref: 'usageType',
                                    options: {
                                        label: 'Kullanım Tipi',
                                        selectSettings: {
                                            placeholder: 'Seçiniz',
                                            searchable: true,
                                            allowEmpty: false
                                        },
                                        selectOptions: [
                                            { value: 'OTOMOBİL', label: 'OTOMOBİL' },
                                            { value: 'KAMYONET', label: 'KAMYONET' },
                                            { value: 'OTOBÜS', label: 'OTOBÜS (18-30 Koltuk)' },
                                            { value: 'OTOBÜS', label: 'OTOBÜS (31 ve üstü koltuk)' },
                                            { value: 'KAMYON', label: 'KOMYON' },
                                            { value: 'MOTOSİKLET', label: 'MOTOSİKLET' },
                                            { value: 'MİNİBÜS', label: 'MİNİBÜS' }
                                        ]
                                    }
                                },
                                seat: {
                                    id: 'seat',
                                    name: 'seat',
                                    type: 'text',
                                    ref: 'seat',
                                    options: {
                                        label: 'Koltuk Sayısı',
                                        placeholder: 'Örn: 5',
                                        maxlength: 1,
                                        onlyNumber: true,
                                        shaker: true,
                                        validRequired: {
                                            status: true,
                                            errorMessage: 'Bu alanı boş bırakamazsınız!'
                                        },
                                        validRegExp: {
                                            status: true,
                                            regexp: /([1-9]{1})+$/,
                                            errorMessage: 'Hatalı koltuk sayısı formatı!'
                                        }
                                    }
                                },
                                fuelType: {
                                    id: 'fuelType',
                                    name: 'fuelType',
                                    type: 'select',
                                    ref: 'fuelType',
                                    options: {
                                        label: 'Yakıt Tipi',
                                        selectSettings: {
                                            placeholder: 'Seçiniz',
                                            searchable: true,
                                            allowEmpty: false
                                        },
                                        selectOptions: [
                                            { value: 'DİZEL', label: 'Dizel' },
                                            { value: 'BENZİN', label: 'Benzin' },
                                            { value: 'LPG', label: 'LPG' },
                                            { value: 'ELEKTRİK', label: 'Elektrikli' }
                                        ]
                                    }
                                },
                                motorNo: {
                                    id: 'motorNo',
                                    name: 'motorNo',
                                    type: 'text',
                                    ref: 'motorNo',
                                    options: {
                                        label: 'Motor No',
                                        placeholder: 'Örn: 1234567890',
                                        maxlength: 10,
                                        toUpperCase: true,
                                        shaker: true,
                                        validRequired: {
                                            status: true,
                                            errorMessage: 'Bu alanı boş bırakamazsınız!'
                                        },
                                        validLengthMin: {
                                            status: true,
                                            number: 5,
                                            errorMessage: 'Bu alana en az <strong>5</strong> karakter girebilirsiniz!'
                                        }
                                    }
                                },
                                chassisNo: {
                                    id: 'chassisNo',
                                    name: 'chassisNo',
                                    type: 'text',
                                    ref: 'chassisNo',
                                    options: {
                                        label: 'Şasi No',
                                        placeholder: 'Örn: 12345678901234567',
                                        maxlength: 17,
                                        toUpperCase: true,
                                        shaker: true,
                                        validRequired: {
                                            status: true,
                                            errorMessage: 'Bu alanı boş bırakamazsınız!'
                                        },
                                        validLengthMin: {
                                            status: true,
                                            number: 17,
                                            errorMessage: 'Bu alana en az <strong>17</strong> karakter girebilirsiniz!'
                                        }
                                    }
                                }
                            },
                            form: {
                                vehicleStatus: 'plate',

                                // ARAÇ VE RUHSAT BİLGİLERİ
                                plate: { value: '', valid: null },
                                licenseSerial: { value: '', valid: null },
                                licenseNumber: { value: '', valid: null },
                                city: { value: '', valid: null },
                                district: { value: '', valid: null },
                                modelYear: { value: '', valid: null },
                                brandCode: { value: '', valid: null },
                                brandName: '',
                                modelCode: { value: '', valid: null },
                                modelName: '',
                                usageType: { value: '', valid: null },
                                seat: { value: '', valid: null },
                                fuelType: { value: '', valid: null },
                                motorNo: { value: '', valid: null },
                                chassisNo: { value: '', valid: null },

                                // KONUT BİLGİLERİ


                                // SAĞLIK BİLGİLERİ

                            }
                        }
                    ],






                    /* fields: {
                        // SİGORTA SORGULAMA TİPİ
                        type: {
                            label: 'Sigorta Tipi',
                            shake: false,
                            options: [
                                { value: 'casco', label: 'Kasko Sigortası' },
                                { value: 'traffic', label: 'Trafik Sigortası' },
                                { value: 'dask', label: 'DASK' },
                                { value: 'housing', label: 'Konut Sigortası' },
                                { value: 'compHealth', label: 'Tamamlayıcı Sağlık Sigortası' },
                                { value: 'privHealth', label: 'Özel Sağlık Sigortası' }
                            ],
                            valid: {
                                value: true,
                                text: ''
                            }
                        },

                        // KİŞİSEL BİLGİLER
                        insuredSearch: {
                            label: 'Arama (Kimlik No, Ad, Soyad, Telefon, E-Posta)',
                            placeHolder: 'Üstteki bilgilerden birini girin',
                            min: 0,
                            max: 50,
                            shake: false,
                            valid: {
                                value: null,
                                text: ''
                            }
                        },
                        insuredType: {
                            label: 'Sigortalı Tipi',
                            options: [
                                { value: 'individual', label: 'Bireysel Sigortalı' },
                                { value: 'corporate', label: 'Kurumsal Sigortalı' }
                            ]
                        },
                        title: {
                            label: 'Ünvan',
                            placeHolder: 'Sigortalı ünvanını girin',
                            min: 5,
                            max: 50,
                            shake: false,
                            valid: {
                                value: null,
                                text: ''
                            }
                        },
                        name: {
                            label: 'Adı',
                            placeHolder: 'Sigortalı adını girin',
                            min: 2,
                            max: 25,
                            shake: false,
                            valid: {
                                value: null,
                                text: ''
                            }
                        },
                        lastname: {
                            label: 'Soyadı',
                            placeHolder: 'Sigortalı soyadını girin',
                            min: 2,
                            max: 25,
                            shake: false,
                            valid: {
                                value: null,
                                text: ''
                            }
                        },
                        identityNumber: {
                            label: 'Kimlik Numarası',
                            placeHolder: 'Sigortalı kimlik numarası girin',
                            min: 10,
                            max: 11,
                            shake: false,
                            valid: {
                                value: null,
                                text: ''
                            }
                        },
                        birthDate: {
                            label: 'Doğum Tarihi',
                            shake: false,
                            options: {
                                day: [],
                                month: [],
                                year: []
                            },
                            valid: {
                                value: null,
                                text: ''
                            }
                        },
                        email: {
                            label: 'E-Posta',
                            placeHolder: 'Sigortalı e-posta adresini girin',
                            min: 6,
                            max: 50,
                            shake: false,
                            valid: {
                                value: null,
                                text: ''
                            }
                        },
                        phone: {
                            label: 'Cep Telefon',
                            allCountries: TelAllCountries,  // Type: Array =>          Default: An array of all countries, see allCountries.js => All countries that are used in libphonenumber-js, can be overridden by this prop
                            autoFormat: true,               // Type: Boolean =>        Default: true =>        Auto update the input to the formatted phone number when it's valid
                            customValidate: false,          // Type: Boolean, RegExp => Default: false =>      Custom validation RegExp for input
                            defaultCountry: 'TR',           // Type: String, Number => Default: '' =>          Default country (by iso2 or dialCode), will override the country fetched from IP address of user
                            disabled: false,                // Type: Boolean =>        Default: false =>       Disable vue-tel-input, including the input & flag dropdown
                            autoDefaultCountry: false,      // Type: Boolean =>        Default: true =>        To fetch default country based on IP address of user
                            ignoredCountries: [],           // Type: Array =>          Default: [] =>          List of countries will NOT be shown on the dropdown
                            errorMessage: '',               // Type: String =>         Default: ''
                            mode: 'international',          // Type: String =>         Default: 'auto' =>      Allowed values: 'auto' (Default set by phone), 'international' (Format number with the dial code i.e. + 61), 'national' (Format number without dial code i.e. 0321232)
                            onlyCountries: [],              // Type: Array =>          Default: [] =>          List of countries will be shown on the dropdown
                            preferredCountries: [],         // Type: Array =>          Default: [] =>          Preferred countries list, will be on top of the dropdown
                            styleClasses: 'get-proposal-insured-phone text-nowrap',    // Type: String, Array, Object => Default: '' =>   Custom classes for the wrapper
                            validCharactersOnly: true,      // Type: Boolean =>        Default: false =>       Only allow valid characters in a phone number (will also verify in mounted, so phone number with invalid characters will be shown as an empty string)
                            min: 0,
                            max: 25,
                            shake: false,
                            inputOptions: {
                                autocomplete: 'on',                     // Type: String =>         Default: 'on' =>        Native input autocomplete attribute
                                autofocus: false,                       // Type: Boolean =>        Default: false =>       Native input autofocus attribute
                                'aria-describedby': '',                 // Type: String =>         Default: '' =>          Native input aria-describedby attribute
                                id: 'phone',                            // Type: String =>         Default: '' =>          Native input id attribute
                                maxlength: 17,                          // Type: Number =>         Default: 25 =>          Native input maxlength attribute
                                name: 'phone',                          // Type: String =>         Default: 'telephone' => Native input name attribute
                                showDialCode: false,                    // Type: Boolean =>        Default: false =>            Show dial code in input
                                placeholder: 'Sigortalı cep telefonunu girin',      // Type: String => Default: 'Enter a phone number' => Placeholder for the input
                                readonly: false,                        // Type: Boolean =>        Default: false =>       Native input readonly attribute
                                required: true,                         // Type: Boolean =>        Default: false =>       Native input required attribute
                                tabindex: 0,                            // Type: Number =>         Default: 0 =>           Native input tabindex attribute
                                type: 'tel',                            // Type: String =>         Default: 'tel' =>       Native input type attribute
                                styleClasses: 'text-nowrap'             // Type: String, Array, Object => Default: '' =>   Custom classes for the input
                            },
                            dropdownOptions: {
                                disabled: false,                // Type: Boolean =>        Default: false =>       Disable dropdown
                                showDialCodeInList: true,       // Type: Boolean =>        Default: true =>        Show dial code in the dropdown list
                                showDialCodeInSelection: false, // Type: Boolean =>        Default: false =>       Show dial code in the dropdown selection
                                showFlags: true,                // Type: Boolean =>        Default: true =>        Show flags in the dropdown selection and list
                                showSearchBox: false,           // Type: Boolean =>        Default: false =>       Show country search box
                                tabindex: 0,                    // Type: Number =>         Default: 0 =>           Native dropdown tabindex attribute
                                width: '300px'                  // Type: String =>         Default: '390px' =>     Specify dropdown width
                            },
                            valid: {
                                value: null,
                                text: ''
                            }
                        },

                        // ARAÇ VE RUHSAT BİLGİLERİ
                        newVehicleStatus: {
                            options: [
                                { value: 'plate', label: 'Aracın plakası var' },
                                { value: 'noplate', label: 'Aracın plakası yok, sıfır araç' }
                            ]
                        },
                        plate: {
                            label: 'Plaka No',
                            placeHolder: 'Aracın plakasını girin',
                            min: 7,
                            max: 10,
                            shake: false,
                            valid: {
                                value: null,
                                text: ''
                            }
                        },
                        cities: {
                            label: 'Plaka İl',
                            shake: false,
                            options: [
                                { value: '', label: 'Aracın plaka ilini seçin' },
                                { value: '01 YK 0000', label: '01 - Adana' },
                                { value: '02 YK 0000', label: '02 - Adıyaman' },
                                { value: '03 YK 0000', label: '03 - Afyon' },
                                { value: '04 YK 0000', label: '04 - Ağrı' },
                                { value: '05 YK 0000', label: '05 - Amasya' },
                                { value: '06 YK 0000', label: '06 - Ankara' },
                                { value: '07 YK 0000', label: '07 - Antalya' },
                                { value: '08 YK 0000', label: '08 - Artvin' },
                                { value: '09 YK 0000', label: '09 - Aydın' },
                                { value: '10 YK 0000', label: '10 - Balıkesir' },
                                { value: '11 YK 0000', label: '11 - Bilecik' },
                                { value: '12 YK 0000', label: '12 - Bingöl' },
                                { value: '13 YK 0000', label: '13 - Bitlis' },
                                { value: '14 YK 0000', label: '14 - Bolu' },
                                { value: '15 YK 0000', label: '15 - Burdur' },
                                { value: '16 YK 0000', label: '16 - Bursa' },
                                { value: '17 YK 0000', label: '17 - Çanakkale' },
                                { value: '18 YK 0000', label: '18 - Çankırı' },
                                { value: '19 YK 0000', label: '19 - Çorum' },
                                { value: '20 YK 0000', label: '20 - Denizli' },
                                { value: '21 YK 0000', label: '21 - Diyarbakır' },
                                { value: '22 YK 0000', label: '22 - Edirne' },
                                { value: '23 YK 0000', label: '23 - Elazığ' },
                                { value: '24 YK 0000', label: '24 - Erzincan' },
                                { value: '25 YK 0000', label: '25 - Erzurum' },
                                { value: '26 YK 0000', label: '26 - Eskişehir' },
                                { value: '27 YK 0000', label: '27 - Gaziantep' },
                                { value: '28 YK 0000', label: '28 - Giresun' },
                                { value: '29 YK 0000', label: '29 - Gümüşhane' },
                                { value: '30 YK 0000', label: '30 - Hakkari' },
                                { value: '31 YK 0000', label: '31 - Hatay' },
                                { value: '32 YK 0000', label: '32 - Isparta' },
                                { value: '33 YK 0000', label: '33 - Mersin İçel' },
                                { value: '34 YK 0000', label: '34 - İstanbul' },
                                { value: '35 YK 0000', label: '35 - İzmir' },
                                { value: '36 YK 0000', label: '36 - Kars' },
                                { value: '37 YK 0000', label: '37 - Kastamonu' },
                                { value: '38 YK 0000', label: '38 - Kayseri' },
                                { value: '39 YK 0000', label: '39 - Kırklareli' },
                                { value: '40 YK 0000', label: '40 - Kırşehir' },
                                { value: '41 YK 0000', label: '41 - Kocaeli' },
                                { value: '42 YK 0000', label: '42 - Konya' },
                                { value: '43 YK 0000', label: '43 - Kütahya' },
                                { value: '44 YK 0000', label: '44 - Malatya' },
                                { value: '45 YK 0000', label: '45 - Manisa' },
                                { value: '46 YK 0000', label: '46 - Kahramanmaraş' },
                                { value: '47 YK 0000', label: '47 - Mardin' },
                                { value: '48 YK 0000', label: '48 - Muğla' },
                                { value: '49 YK 0000', label: '49 - Muş' },
                                { value: '50 YK 0000', label: '50 - Nevşehir' },
                                { value: '51 YK 0000', label: '51 - Niğde' },
                                { value: '52 YK 0000', label: '52 - Ordu' },
                                { value: '53 YK 0000', label: '53 - Rize' },
                                { value: '54 YK 0000', label: '54 - Sakarya' },
                                { value: '55 YK 0000', label: '55 - Samsun' },
                                { value: '56 YK 0000', label: '56 - Siirt' },
                                { value: '57 YK 0000', label: '57 - Sinop' },
                                { value: '58 YK 0000', label: '58 - Sivas' },
                                { value: '59 YK 0000', label: '59 - Tekirdağ' },
                                { value: '60 YK 0000', label: '60 - Tokat' },
                                { value: '61 YK 0000', label: '61 - Trabzon' },
                                { value: '62 YK 0000', label: '62 - Tunceli' },
                                { value: '63 YK 0000', label: '63 - Şanlıurfa' },
                                { value: '64 YK 0000', label: '64 - Uşak' },
                                { value: '65 YK 0000', label: '65 - Van' },
                                { value: '66 YK 0000', label: '66 - Yozgat' },
                                { value: '67 YK 0000', label: '67 - Zonguldak' },
                                { value: '68 YK 0000', label: '68 - Aksaray' },
                                { value: '69 YK 0000', label: '69 - Bayburt' },
                                { value: '70 YK 0000', label: '70 - Karaman' },
                                { value: '71 YK 0000', label: '71 - Kırıkkale' },
                                { value: '72 YK 0000', label: '72 - Batman' },
                                { value: '73 YK 0000', label: '73 - Şırnak' },
                                { value: '74 YK 0000', label: '74 - Bartın' },
                                { value: '75 YK 0000', label: '75 - Ardahan' },
                                { value: '76 YK 0000', label: '76 - Iğdır' },
                                { value: '77 YK 0000', label: '77 - Yalova' },
                                { value: '78 YK 0000', label: '78 - Karabük' },
                                { value: '79 YK 0000', label: '79 - Kilis' },
                                { value: '80 YK 0000', label: '80 - Osmaniye' },
                                { value: '81 YK 0000', label: '81 - Düzce' }
                            ],
                            valid: {
                                value: null,
                                text: ''
                            }
                        },
                        districts: {
                            label: 'Plaka İlçe',
                            shake: false,
                            options: [
                                { value: '', label: 'Aracın plaka ilçesini seçin' },
                            ],
                            valid: {
                                value: null,
                                text: ''
                            }
                        },
                        licenseSerial: {
                            label: 'Belge Seri',
                            placeHolder: 'Aracın belge seri girin',
                            min: 2,
                            max: 3,
                            shake: false,
                            valid: {
                                value: null,
                                text: ''
                            }
                        },
                        licenseNumber: {
                            label: 'Belge No',
                            placeHolder: 'Aracın belge no girin',
                            min: 6,
                            max: 6,
                            shake: false,
                            valid: {
                                value: null,
                                text: ''
                            }
                        },
                        licenseRegistrationDate: {
                            label: 'Sıfır aracı satın aldığınız tarih (Gün Ay Yıl)',
                            shake: false,
                            options: {
                                day: [],
                                month: [],
                                year: []
                            },
                            valid: {
                                value: null,
                                text: ''
                            }
                        },
                        usageType: {
                            label: 'Kullanım Tipi',
                            shake: false,
                            options: [
                                { value: '', label: 'Aracın kullanım tipini seçin' },
                                { value: 'OTOMOBİL', label: 'Otomobil' },
                                //{ value: 'JİP', label: 'Jip' },
                                { value: 'MOTOSİKLET', label: 'Motosiklet' },
                                // { value: 'MİNİBÜS', label: 'Minibüs' },
                                //{ value: 'KOTOBÜS', label: 'Küçük Otobüs' },
                                //{ value: 'BOTOBÜS', label: 'Büyük Otobüs' },
                                { value: 'KAMYONET', label: 'Kamyonet' },
                                //{ value: 'KAMYON', label: 'Kamyon' }
                            ],
                            valid: {
                                value: null,
                                text: ''
                            }
                        },
                        usageStyle: {
                            label: 'Kullanım Tarzı',
                            shake: false,
                            options: [
                                { code: '', options: [
                                    { value: '', label: 'Aracın kullanım tarzını seçin' }
                                ]},
                                { code: 'OTOMOBİL', options: [
                                    { value: '', label: 'Aracın kullanım tarzını seçin' },
                                    { value: 'HUSUSI', label: 'Hususi Oto' },
                                    { value: 'RENTACAR', label: 'Rent A Car' },
                                    { value: 'TAKSI', label: 'Taksi' },
                                    { value: 'ZIRHLIARAC', label: 'Zırhlı Araç' },
                                    { value: 'DOLMUS', label: 'Dolmuş' }
                                ]},
                                { code: 'JİP', options: [
                                    { value: '', label: 'Aracın kullanım tarzını seçin' },
                                    { value: 'HUSUSI', label: 'Hususi Oto' },
                                    { value: 'SAV', label: 'SAV (Sportif Hizmet Aracı)' },
                                    { value: 'SUV', label: 'SUV (Sportif Aktivite Aracı)' },
                                    { value: 'RENTACAR', label: 'Rent A Car' },
                                    { value: 'TAKSI', label: 'Taksi' }
                                ]},
                                { code: 'MOTOSİKLET', options: [
                                    { value: '', label: 'Aracın kullanım tarzını seçin' },
                                    { value: 'HUSUSI', label: 'Hususi Oto' }
                                ]},
                                { code: 'MİNİBÜS', options: [
                                    { value: '', label: 'Aracın kullanım tarzını seçin' },
                                    { value: 'HATLI', label: 'Hatlı' },
                                    { value: 'OZEL', label: 'Özel' },
                                    { value: 'SERVIS', label: 'Servis' },
                                    { value: 'RENTACAR', label: 'Rent A Car' },
                                    { value: 'AMBULANS', label: 'Ambulans' },
                                    { value: 'TURIZM', label: 'Turizm' }
                                ]},
                                { code: 'KOTOBÜS', options: [
                                    { value: '', label: 'Aracın kullanım tarzını seçin' },
                                    { value: '1530', label: '15-30 Yolcu' },
                                    { value: 'SERVIS', label: 'Servis' },
                                    { value: 'SEHIRICI', label: 'Şehir İçi' },
                                    { value: 'HATLI', label: 'Hatlı' },
                                    { value: 'TURIZM', label: 'Turizm' }
                                ]},
                                { code: 'BOTOBÜS', options: [
                                    { value: '', label: 'Aracın kullanım tarzını seçin' },
                                    { value: '31UST', label: '31 Yolcu Üzeri' },
                                    { value: 'SERVIS', label: 'Servis' },
                                    { value: 'SEHIRICI', label: 'Şehir İçi' },
                                    { value: 'TURIZM', label: 'Turizm' }
                                ]},
                                { code: 'KAMYONET', options: [
                                    { value: '', label: 'Aracın kullanım tarzını seçin' },
                                    { value: 'ACIKKASA', label: 'Açık Kasa' },
                                    { value: 'KAPALIKASA', label: 'Kapalı Kasa' },
                                    { value: 'PANELGLASSVAN', label: 'Panel/Glass Van' },
                                    { value: 'TUPGAZTASIYICI', label: 'Tüp Gaz Taşıyıcı' },
                                    { value: 'PICKUP', label: 'Pickup' },
                                    { value: 'AMBULANS', label: 'Ambulans' },
                                    { value: '41YOLCUHUSUSI', label: '4+1 Yolcu Hususi' },
                                    { value: 'RENTACAR', label: 'Rent A Car' },
                                ]},
                                { code: 'KAMYON', options: [
                                    { value: '', label: 'Aracın kullanım tarzını seçin' },
                                    { value: 'ACIKKASA', label: 'Açık Kasa' },
                                    { value: 'KAPALIKASA', label: 'Kapalı Kasa' },
                                    { value: 'TUPGAZTASIYICI', label: 'Tüp Gaz Taşıyıcı' },
                                    { value: 'COP', label: 'Çöp' },
                                    { value: 'ITFAIYE', label: 'İtfaiye' },
                                    { value: 'DAMPERLI', label: 'Damperli' },
                                    { value: 'FRIGOFIRIK', label: 'Frigofirik' },
                                    { value: 'TRANSMIKSERLI', label: 'Transmikserli' },
                                    { value: 'SILOLU', label: 'Silolu' },
                                    { value: 'BETONPOMPALI', label: 'Beton Pompalı' },
                                    { value: 'KAYA', label: 'Kaya' },
                                    { value: 'VINCLI', label: 'Vinçli' },
                                    { value: 'KURTARICI', label: 'Kurtarıcı' }
                                ]},
                            ],
                            valid: {
                                value: null,
                                text: ''
                            }
                        },

                        seat: {
                            label: 'Koltuk Sayısı',
                            placeHolder: 'Koltuk sayısı girin',
                            min: 2,
                            max: 9,
                            shake: false,
                            valid: {
                                value: null,
                                text: ''
                            }
                        },
                        fuelTypes: {
                            label: 'Yakıt Tipi',
                            shake: false,
                            options: [
                                { value: '', label: 'Aracın yakıt tipini seçin' },
                                { value: 'DİZEL', label: 'Dizel' },
                                { value: 'BENZİN', label: 'Benzin' },
                                { value: 'LPG', label: 'LPG' },
                                { value: 'ELEKTRİK', label: 'Elektrikli' }
                            ],
                            valid: {
                                value: null,
                                text: ''
                            }
                        },
                        brands: {
                            label: 'Marka',
                            shake: false,
                            options: [
                                { value: '', label: 'Aracın markasını seçin' }
                            ],
                            valid: {
                                value: null,
                                text: ''
                            }
                        },
                        models: {
                            label: 'Model',
                            shake: false,
                            options: [
                                { value: '', label: 'Aracın modelini seçin' }
                            ],
                            valid: {
                                value: null,
                                text: ''
                            }
                        },
                        motorNo: {
                            label: 'Motor No',
                            placeHolder: 'Aracın motor numarasını girin',
                            min: 5,
                            max: 20,
                            shake: false,
                            valid: {
                                value: null,
                                text: ''
                            }
                        },
                        chassisNo: {
                            label: 'Şasi No',
                            placeHolder: 'Aracın şasi numarasını girin',
                            min: 17,
                            max: 17,
                            shake: false,
                            valid: {
                                value: null,
                                text: ''
                            }
                        }
                    },
                    form: {
                        // SİGORTA SORGULAMA TİPİ
                        type: '',

                        // KİŞİSEL BİLGİLER
                        insuredSearch: 'casco',
                        insuredType: 'individual', // Bireysel Sigortalı - Kurumsal Sigortalı
                        _id: '',
                        title: '', // Sigortalı ünvanı
                        name: '',
                        lastname: '',
                        identityNumber: '',
                        birthDateDay: '',
                        birthDateMonth: '',
                        birthDateYear: '',
                        email: '',
                        phone: '',

                        // ARAÇ VE RUHSAT BİLGİLERİ
                        newVehicleStatus: 'plate', // Plaka var - Plaka yok, sıfır araç
                        plate: '',
                        districtCode: '',
                        licenseSerial: '',
                        licenseNumber: '',
                        licenseRegistrationDateDay: '',
                        licenseRegistrationDateMonth: '',
                        licenseRegistrationDateYear: '',
                        usageType: '',
                        usageStyle: '',
                        modelYear: '',
                        seat: 2,
                        fuelType: '',
                        brandName: '',
                        brandCode: 0,
                        modelName: '',
                        modelCode: 0,
                        motorNo: '',
                        chassisNo: ''
                    },
                    temp: {
                        insuredType: 'individual', // Bireysel Sigortalı - Kurumsal Sigortalı
                        _id: '',
                        title: '',
                        name: '',
                        lastname: '',
                        identityNumber: '',
                        birthDateDay: '',
                        birthDateMonth: '',
                        birthDateYear: '',
                        email: '',
                        phone: ''
                    } */
                },
                insuredList: { // SİGORTALI LİSTESİ
                    show: false,
                    title: '',
                    columnDefs: [
                        {
                            field: 'identityNumber',
                            onCellDoubleClicked: params => this.insuredRowDoubleClicked(params),
                            headerName: 'Tip',
                            cellRenderer: params => {
                                if(params.data.identityType === 'tckn' || params.data.identityType === 'ykn') return 'Bireysel';
                                else if(params.data.identityType === 'vkn') return 'Kurumsal';
                            },
                            width: 120
                        },
                        {
                            field: 'title',
                            onCellDoubleClicked: params => this.insuredRowDoubleClicked(params),
                            headerName: 'Ünvan',
                            cellRenderer: params => {
                                if(params.data.identityType === 'vkn') return params.value;
                                else if(params.data.identityType === 'tckn' || params.data.identityType === 'ykn') return '-';
                            },
                            width: 200
                        },
                        {
                            field: 'partner.title',
                            onCellDoubleClicked: params => this.insuredRowDoubleClicked(params),
                            headerName: 'Partner Firma',
                            width: 250
                        },
                        {
                            field: 'name',
                            onCellDoubleClicked: params => this.insuredRowDoubleClicked(params),
                            headerName: 'Ad',
                            cellRenderer: params => {
                                if(params.data.identityType === 'tckn' || params.data.identityType === 'ykn') return params.value;
                                else if(params.data.identityType === 'vkn') return '-';
                            },
                            width: 120
                        },
                        {
                            field: 'lastname',
                            onCellDoubleClicked: params => this.insuredRowDoubleClicked(params),
                            headerName: 'Soyad',
                            cellRenderer: params => {
                                if(params.data.identityType === 'tckn' || params.data.identityType === 'ykn') return params.value;
                                else if(params.data.identityType === 'vkn') return '-';
                            },
                            width: 120
                        },
                        {
                            field: 'identityNumber',
                            onCellDoubleClicked: params => this.insuredRowDoubleClicked(params),
                            headerName: 'Kimlik Numarası',
                            width: 140
                        },
                        {
                            field: 'birthDate',
                            onCellDoubleClicked: params => this.insuredRowDoubleClicked(params),
                            headerName: 'Doğum Tarihi',
                            cellRenderer: params => {
                                if(params.value) return moment(new Date(params.value)).format('DD.MM.YYYY');
                                else return '-';
                            },
                            width: 120
                        },
                        {
                            field: 'email',
                            onCellDoubleClicked: params => this.insuredRowDoubleClicked(params),
                            headerName: 'E-Posta',
                            width: 200
                        },
                        {
                            field: 'phone',
                            onCellDoubleClicked: params => this.insuredRowDoubleClicked(params),
                            headerName: 'Telefon',
                            width: 130
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
                            { statusPanel: 'agAggregationComponent' }
                        ]
                    }
                },
                proposalSearcher: { // TEKLİF ARAMA İŞLEMİ
                    show: false,
                    title: '',
                    proposalRequest: {},
                    companies: [],
                    proposals: []
                },
                updateProposalRequestNotes: { // TEKLİF NOTLARINI GÜNCELLEME İŞLEMİ
                    disabled: false,
                    form: {
                        notes: ''
                    },
                    notesButtonAdd: false,
                    messageClass: 'd-none',
                }
            }
        };
    },
    created() {
        var dates = Func.getDateByYearRange(null, null, process.env.VUE_APP_MIN_INSURED_AGE, process.env.VUE_APP_MAX_INSURED_AGE);
        this.modals.newProposal.steps[1].fields.insuredBirthDateDay.options.selectOptions = dates.days.slice(1);
        this.modals.newProposal.steps[1].fields.insuredBirthDateMonth.options.selectOptions = dates.months.slice(1);
        this.modals.newProposal.steps[1].fields.insuredBirthDateYear.options.selectOptions = dates.years.slice(1);

        //if(this.$route.params.memberId) this.search.form.memberId = this.$route.params.memberId;

        /* if(this.$route.params.tip) {
            switch (this.$route.params.tip) {
                case 'uye':
                    if(this.$route.params.name && this.$route.params.lastname && this.$route.params.identityNumber) {
                        this.search.form.memberName = this.$route.params.name;
                        this.search.form.memberLastname = this.$route.params.lastname;
                        this.search.form.memberIdentityNumber = this.$route.params.identityNumber;

                        this.validInput(this.search.form.memberName, this.search.fields.memberName);
                        this.validInput(this.search.form.memberLastname, this.search.fields.memberLastname);
                        this.validInput(this.search.form.memberIdentityNumber, this.search.fields.memberIdentityNumber);
                    }

                    this.getProposalRequests(true);
                    break;
                case 'sigortali':
                    if(this.$route.params.name && this.$route.params.lastname && this.$route.params.identityNumber) {
                        this.search.form.insuredName = this.$route.params.name;
                        this.search.form.insuredLastname = this.$route.params.lastname;
                        this.search.form.insuredIdentityNumber = this.$route.params.identityNumber;

                        this.validInput(this.search.form.insuredName, this.search.fields.insuredName);
                        this.validInput(this.search.form.insuredLastname, this.search.fields.insuredLastname);
                        this.validInput(this.search.form.insuredIdentityNumber, this.search.fields.insuredIdentityNumber);
                    }
                    
                    if(this.$route.params.title && this.$route.params.identityNumber) {
                        this.search.form.insuredTitle = this.$route.params.title;
                        this.search.form.insuredIdentityNumber = this.$route.params.identityNumber;

                        this.validInput(this.search.form.insuredTitle, this.search.fields.insuredTitle);
                        this.validInput(this.search.form.insuredIdentityNumber, this.search.fields.insuredIdentityNumber);
                    }

                    this.getProposalRequests(true);
                    break;
            }
        } else if(this.$route.params.requestNo) {
            this.search.form.requestNo = this.$route.params.requestNo;
            this.validInput(this.search.form.requestNo, this.search.fields.requestNo);

            this.getProposalRequests(true);
        } */

        this.$store.commit('closeSidebar'); // Sidebar kapatılır
    },
    watch: {
        // ##### YENİ TEKLİF AL #####
        // ARAÇ VE RUHSAT BİLGİLERİ
        'modals.newProposal.form.city': function(val) {
            //if(this.disableWatch === false) this.validInput(val, this.modals.getProposal.fields.type);

            console.log(val);

            //var cityCode = val.substring(0,2);

            // ##### İLÇELER #####
            // İL KODUNA GÖRE İLÇE LİSTESİNİ ÇEKİYORUZ.
            /* this.$Progress.start();
            this.modals.getProposal.disabled = true;
            var districtList = await this.getDistrictList(cityCode);
            this.$Progress.finish();
            this.modals.getProposal.disabled = false;

            this.modals.getProposal.fields.districts.options = [{ value: '', label: 'Aracın plaka ilçesini seçin' }];
            if(districtList.length > 0) {
                for (let i = 0; i < districtList.length; i++) {
                    const district = districtList[i];

                    this.modals.getProposal.fields.districts.options.push({ value: district.code, label: district.name });
                }

                this.modals.getProposal.fields.districts.label = `Plaka İlçe - ${districtList.length} adet ilçe`;
            } else this.modals.getProposal.fields.districts.label = 'Plaka İlçe'; */
        },
    },
    methods: {
        onGridReady(params) {
            this.gridApi = params.api;
            this.gridColumnApi = params.columnApi;
        },
        getContextMenuItems(params) {
            const _this = this;
            //var requestType = Object.entries(_this.insuranceProducts).filter(e => e.toString().split(',')[0] === params.node.data.type)[0].toString().split(',')[1];

            var selectedRequests = [];

            if(params.api.getSelectedRows().length > 0) {
                if(params.api.getSelectedRows().includes(params.node.data)) {
                    params.api.getSelectedRows().forEach(data => {
                        selectedRequests.push(data);
                    });
                } else {
                    params.api.rowModel.rowsToDisplay.forEach(row => {
                        row.setSelected(false);
                    });

                    selectedRequests.push(params.node.data);
                    params.node.setSelected(true);
                }
            } else {
                selectedRequests.push(params.node.data);
                params.node.setSelected(true);
            }

            /* params.api.getCellRanges().forEach(range => {
                let colIds = range.columns.map(col => col.colId);
                let startRowIndex = Math.min(range.startRow.rowIndex, range.endRow.rowIndex);
                let endRowIndex = Math.max(range.startRow.rowIndex, range.endRow.rowIndex);

                for (let i = startRowIndex; i <= endRowIndex; i++) {
                    let data = params.api.rowModel.rowsToDisplay[i].data;

                    //params.api.rowModel.rowsToDisplay[i].setSelected(true);

                    colIds.forEach(column => {
                        data[column] = "";
                    });

                    selectedRequests.push(data);
                }
            }); */

            var contextMenu= [];

            if(selectedRequests.length > 0) {
                if(selectedRequests.length === 1) {
                    contextMenu.push({
                        name: `Yeniden Teklifi Al`,
                        action: function() {
                            Swal.fire({
                                icon: 'question',
                                width: 900,
                                title: `<span>Yeniden Teklifi Al</span>`,
                                html: `
                                    <div class="row">
                                        <div class="col-12">Aşağıdaki bilgilerle yeniden teklif almak istiyor musunuz?</div>
                                        <div class="col-12">
                                            <div class="row" style="font-size: 16px">
                                                <div class="col-12 col-lg-6 mt-3">
                                                    <h5>${
                                                        params.node.data.type === 'casco' || params.node.data.type === 'traffic' ?
                                                            'Araç Bilgileri'
                                                        :
                                                        params.node.data.type === 'dask' || params.node.data.type === 'housing' ?
                                                            'Konut Bilgileri'
                                                        :
                                                        params.node.data.type === 'privHealth' || params.node.data.type === 'compHealth' ?
                                                            'Sağlık Bilgileri'
                                                        :
                                                            ''
                                                    }</h5>
                                                    <div class="d-flex justify-content-between align-items-center p-1" style="background-color: #efefef">
                                                        <strong>Teklif Tipi:</strong>
                                                        <!-- <select id="again-proposal-type" class="form-select" aria-label="Teklif Tipi" style="width: 200px; line-height: 1!important;">
                                                            ${
                                                                Object.entries(_this.insuranceProducts).map(e => {
                                                                    return `<option value="${e.toString().split(',')[0]}"${e.toString().split(',')[0] === params.node.data.type ? 'selected':''}>${e.toString().split(',')[1]}</option>`;
                                                                })
                                                            }
                                                        </select> -->
                                                        <span class="text-right">${ _this.insuranceProducts[params.node.data.type] }</span>
                                                    </div>
                                                    ${
                                                        params.node.data.type === 'casco' || params.node.data.type === 'traffic' ?
                                                            `
                                                            <div class="d-flex justify-content-between p-1"><strong>Plaka:</strong> <span class="text-right">${params.node.data.productDetail.plate}</span></div>
                                                            <div class="d-flex justify-content-between p-1" style="background-color: #efefef"><strong>Marka:</strong> <span class="text-right">${params.node.data.productDetail.brandName}</span></div>
                                                            <div class="d-flex justify-content-between p-1"><strong>Model:</strong> <span class="text-right">${params.node.data.productDetail.modelName}</span></div>
                                                            <div class="d-flex justify-content-between p-1" style="background-color: #efefef"><strong>Model Yılı:</strong> <span class="text-right">${params.node.data.productDetail.modelYear}</span></div>
                                                            <div class="d-flex justify-content-between p-1"><strong>Kullanım Tipi:</strong> <span class="text-right">${params.node.data.productDetail.usageType}</span></div>
                                                            <div class="d-flex justify-content-between p-1" style="background-color: #efefef"><strong>Koltuk Sayısı (Sürücü Dahil):</strong> <span class="text-right">${params.node.data.productDetail.seat}</span></div>
                                                            ` + 
                                                                (
                                                                    params.node.data.productDetail.plate.match(new RegExp(/[0-9]{2}\sYK\s0000/)) !== null ? 
                                                                        ``
                                                                    :
                                                                        `
                                                                        <div class="d-flex justify-content-between p-1"><strong>Ruhsat Seri - No:</strong> <span class="text-right">${params.node.data.productDetail.licenseSerial} - ${params.node.data.productDetail.licenseNumber}</span></div>
                                                                        <div class="d-flex justify-content-between p-1" style="background-color: #efefef"><strong>Trafiğe İlk Çıkış Tarihi:</strong> <span class="text-right">${moment(new Date(params.node.data.productDetail.licenseRegistrationDate)).format("DD.MM.YYYY")}</span></div>
                                                                        `
                                                                ) + 
                                                            `
                                                            <div class="d-flex justify-content-between p-1"><strong>Yakıt Tipi:</strong> <span class="text-right">${params.node.data.productDetail.fuelType}</span></div>
                                                            <div class="d-flex justify-content-between p-1" style="background-color: #efefef"><strong>Motor No:</strong> <span class="text-right">${params.node.data.productDetail.motorNo}</span></div>
                                                            <div class="d-flex justify-content-between p-1"><strong>Şasi No:</strong> <span class="text-right">${params.node.data.productDetail.chassisNo}</span></div>
                                                            
                                                            `
                                                        :
                                                        params.node.data.type === 'dask' ?
                                                            `
                                                            <div class="d-flex justify-content-between p-1"><strong>UAVT Kodu:</strong> <span class="text-right">${params.node.data.productDetail.uavtCode}</span></div>
                                                            <div class="d-flex justify-content-between p-1" style="background-color: #efefef"><strong>Daire (m2):</strong> <span class="text-right">${params.node.data.productDetail.homeArea}</span></div>
                                                            <div class="d-flex justify-content-between p-1"><strong>Bina Yapı Tipi:</strong> <span class="text-right text-truncate">${params.node.data.productDetail.buildingType}</span></div>
                                                            <div class="d-flex justify-content-between p-1" style="background-color: #efefef"><strong>Bina İnşaat Yılı:</strong> <span class="text-right">${params.node.data.productDetail.buildingYear}</span></div>
                                                            <div class="d-flex justify-content-between p-1"><strong>Bina Toplam Kat:</strong> <span class="text-right">${params.node.data.productDetail.totalFloor}</span></div>
                                                            <div class="d-flex justify-content-between p-1" style="background-color: #efefef"><strong>Kullanım Tipi:</strong> <span class="text-right">${params.node.data.productDetail.usageType}</span></div>
                                                            <div class="d-flex justify-content-between p-1"><strong>Sigorta Ettiren:</strong> <span class="text-right">${params.node.data.productDetail.insurerTitle}</span></div>
                                                            `
                                                        :
                                                        params.node.data.type === 'housing' ?
                                                            `
                                                            <div class="d-flex justify-content-between p-1"><strong>UAVT Kodu:</strong> <span class="text-right">${params.node.data.productDetail.uavtCode}</span></div>
                                                            <div class="d-flex justify-content-between p-1" style="background-color: #efefef"><strong>Daire Kat:</strong> <span class="text-right">${params.node.data.productDetail.apartmentFloor}</span></div>
                                                            <div class="d-flex justify-content-between p-1"><strong>Daire (m2):</strong> <span class="text-right">${params.node.data.productDetail.homeArea}</span></div>
                                                            <div class="d-flex justify-content-between p-1" style="background-color: #efefef"><strong>Bina Yapı Tipi:</strong> <span class="text-right text-truncate">${params.node.data.productDetail.buildingType}</span></div>
                                                            <div class="d-flex justify-content-between p-1"><strong>Bina İnşaat Yılı:</strong> <span class="text-right">${params.node.data.productDetail.buildingYear}</span></div>
                                                            `
                                                        :
                                                        params.node.data.type === 'privHealth' || params.node.data.type === 'compHealth' ?
                                                            `
                                                            <div class="d-flex justify-content-between p-1"><strong>Ad Soyad:</strong> <span class="text-right">${params.node.data.productDetail.name}</span></div>
                                                            <div class="d-flex justify-content-between p-1" style="background-color: #efefef"><strong>TC Kimlik No:</strong> <span class="text-right text-truncate">${params.node.data.productDetail.tcNo}</span></div>
                                                            `
                                                        :
                                                            ''
                                                    }
                                                </div>
                                                <div class="col-12 col-lg-6 mt-3">
                                                    <h5>Sigortalı Detayları</h5>`+
                                                        (params.node.data.insured.title !== null ? `<div class="d-flex justify-content-between p-1" style="background-color: #efefef"><strong>Ünvan:</strong> <span class="text-right">${params.node.data.insured.title}</span></div>`:``) + 
                                                        (params.node.data.insured.name !== null && params.node.data.insured.lastname !== null ? `<div class="d-flex justify-content-between p-1" style="background-color: #efefef"><strong>Ad Soyad:</strong> <span class="text-right">${params.node.data.insured.name} ${params.node.data.insured.lastname}</span></div>`:``) + 
                                                    `<div class="d-flex justify-content-between p-1"><strong>${params.node.data.insured.identityType === 'tckn' ? 'TC Kimlik Numarası': params.node.data.insured.identityType === 'vkn' ? 'Vergi Kimlik Numarası': 'Yabancı Kimlik Numarası'}:</strong> <span class="text-right">${params.node.data.insured.identityNumber}</span></div>
                                                    <div class="d-flex justify-content-between p-1" style="background-color: #efefef"><strong>E-Posta:</strong> <span class="text-right">${params.node.data.insured.email}</span></div>
                                                    <div class="d-flex justify-content-between p-1"><strong>Telefon:</strong> <span class="text-right">${Func.formatPhoneNumber(params.node.data.insured.phone)}</span></div>`+ 
                                                        (params.node.data.insured.birthDate !== null ? `<div class="d-flex justify-content-between p-1" style="background-color: #efefef"><strong>Doğum Tarihi:</strong> <span class="text-right">${moment(params.node.data.insured.birthDate).format("DD.MM.YYYY")}</span></div>`:``) + 
                                                    `
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ` ,
                                confirmButtonText: 'Evet',
                                confirmButtonColor: '#3652B3',
                                showDenyButton: true,
                                denyButtonText: 'Hayır',
                            }).then(result => {
                                if(result.isConfirmed) {
                                    //params.node.data.type = document.querySelector('#again-proposal-type').value;

                                    _this.newProposal(params.node.data);
                                }
                            });
                        }
                    });
                }

                contextMenu.push(
                    {
                        name: 'Sil',
                        action: function() {
                            var html = '';

                            if(selectedRequests.length > 1) {
                                html = `
                                    <div class="row">
                                        <div class="col-12">Aşağıdaki toplam <strong>${selectedRequests.length}</strong> adet teklif talebini silmek istiyor musunuz?</div>
                                `;

                                for (let i = 0; i < selectedRequests.length; i++) {
                                    const request = selectedRequests[i];
                                    
                                    html = html.concat(`
                                        <div class="col-12 col-lg-6 my-3" style="font-size: 16px;${i%2 ? '':'border-right: 1px solid #efefef'}">
                                            <div class="d-flex justify-content-between p-1" style="background-color: #efefef"><strong>Talep No:</strong> <span class="text-right">${request.no}</span></div>
                                            <div class="d-flex justify-content-between p-1"><strong>Talep Tipi:</strong> <span class="text-right">${Object.entries(_this.insuranceProducts).filter(product => product.toString().split(',')[0] === request.type).toString().split(',')[1]}</span></div>
                                            <div class="d-flex justify-content-between p-1" style="background-color: #efefef"><strong>Toplam Teklif:</strong> <span class="text-right">${request.results.length > 0 ? `${request.results.length} (<span class="font-weight-bold" style="color: #2eb85c">${request.results.filter(e => e.errors.length === 0).length} Başarılı</span> - <span class="font-weight-bold" style="color: #dc3741">${request.results.filter(e => e.errors.length > 0).length} Başarısız</span>)` : `${request.results.length}`}</div>` + 
                                                (request.insured.title !== null ? `<div class="d-flex justify-content-between p-1"><strong>Ünvan:</strong> <span class="text-right">${request.insured.title}</span></div>`:``) + 
                                                (request.insured.name !== null && request.insured.lastname !== null ? `<div class="d-flex justify-content-between p-1"><strong>Ad Soyad:</strong> <span class="text-right">${request.insured.name} ${request.insured.lastname}</span></div>`:``) + 
                                            `<div class="d-flex justify-content-between p-1" style="background-color: #efefef"><strong>${request.insured.identityType === 'tckn' ? 'TC Kimlik Numarası': request.insured.identityType === 'vkn' ? 'Vergi Kimlik Numarası': 'Yabancı Kimlik Numarası'}:</strong> <span class="text-right">${request.insured.identityNumber}</span></div>
                                        </div>
                                    `);

                                    if(i%2) html = html.concat(`<hr class="m-0">`);
                                }

                                html = html.concat(`</div>`);
                            } else html = `<strong> ${selectedRequests[0].no} </strong> no'lu <strong>${selectedRequests[0].insured.title !== null ? selectedRequests[0].insured.title : selectedRequests[0].insured.name + ' ' + selectedRequests[0].insured.lastname}</strong> ${selectedRequests[0].insured.title !== null ? 'ünvanlı' : 'isimli'} sigortalıya ait <strong>${Object.entries(_this.insuranceProducts).filter(product => product.toString().split(',')[0] === selectedRequests[0].type).toString().split(',')[1]}</strong> sigortası teklif talebini silmek istiyor musunuz?`;

                            Swal.fire({
                                icon: 'error',
                                width: selectedRequests.length > 1 ? 800 : 600,
                                title:'Teklif Talebi Sil',
                                html: html,
                                confirmButtonText: 'Evet',
                                confirmButtonColor: '#3652B3',
                                showDenyButton: true,
                                denyButtonText: 'Hayır',
                            }).then(async result => {
                                if (result.isConfirmed) {
                                    var deletedRequest = 0;
                                    var undeletedRequest = 0;

                                    _this.$Progress.start();

                                    for (let i = 0; i < selectedRequests.length; i++) {
                                        const request = selectedRequests[i];
                                        
                                        var response = await axios.delete(process.env.VUE_APP_API_URL + 'admin/proposal/request/' + request._id);

                                        if(response.data.result === 'success') deletedRequest++;
                                        else undeletedRequest++;
                                    }

                                    _this.$Progress.finish();

                                    _this.getProposalRequests();

                                    Swal.fire({
                                        icon: 'success',
                                        width: 500,
                                        title: selectedRequests.length === 1 ? `<strong>${selectedRequests[0].no}</strong> no'lu <strong>${selectedRequests[0].insured.title !== null ? selectedRequests[0].insured.title : selectedRequests[0].insured.name + ' ' + selectedRequests[0].insured.lastname}</strong> ${selectedRequests[0].insured.title !== null ? 'ünvanlı' : 'isimli'} sigortalıya ait teklif talebi başarıyla silindi.` : deletedRequest === selectedRequests.length ? `<strong>${deletedRequest}</strong> adet teklif talebi başarıyla silindi.` : `<strong>Silinen teklif talebi:</strong> ${deletedRequest}<br><strong>Silinemeyen teklif talebi:</strong> ${undeletedRequest}`,
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
                            });
                        }
                    }
                )
            }

            return contextMenu;
        },
        proposalRequestRowDoubleClicked(row) {
            this.openModal(this.modals.proposalRequestDetail, `Teklif Talep Detayları - ${row.data.no}`, '', row.data);
        },
        proposalResultRowDoubleClicked(row) {
            window.open(`/teklif/acenteTeklifNo/${row.data.agentProposalNo}`, '_blank');
        },
        openModal(modal, title, _process = '', data = null) {
            this.disableWatch = true;

            switch (modal) {
                case this.modals.proposalRequestDetail:
                    modal.title = title;
                    modal.data = data;
                    break;
                case this.modals.newProposal:
                    modal.title = title;
                    modal.steps[0].form.type = { value: 'casco', valid: true };
                    modal.steps[1].form.insuredSearch = { value: '', valid: null };
                    modal.steps[1].form.insuredType = 'individual';
                    modal.steps[1].form.insuredTitle = { value: '', valid: null };
                    modal.steps[1].form.insuredName = { value: '', valid: null };
                    modal.steps[1].form.insuredLastname = { value: '', valid: null };
                    modal.steps[1].form.insuredIdentityNumber = { value: '', valid: null };
                    modal.steps[1].form.insuredBirthDateDay = { value: '', valid: null };
                    modal.steps[1].form.insuredBirthDateMonth = { value: '', valid: null };
                    modal.steps[1].form.insuredBirthDateYear = { value: '', valid: null };
                    modal.steps[1].form.insuredEmail = { value: '', valid: null };
                    modal.steps[1].form.insuredPhone = { value: '', valid: null };
                    modal.steps[2].form.vehicleStatus = 'plate';
                    modal.steps[2].form.plate = { value: '', valid: null };
                    modal.steps[2].form.licenseSerial = { value: '', valid: null };
                    modal.steps[2].form.licenseNumber = { value: '', valid: null };
                    modal.steps[2].form.city = { value: '', valid: null };
                    modal.steps[2].form.district = { value: '', valid: null };
                    modal.steps[2].form.modelYear = { value: '', valid: null };
                    modal.steps[2].form.brand = { value: '', valid: null };
                    modal.steps[2].form.model = { value: '', valid: null };
                    modal.steps[2].form.usageType = { value: '', valid: null };
                    modal.steps[2].form.seat = { value: '', valid: null };
                    modal.steps[2].form.fuelType = { value: '', valid: null };
                    modal.steps[2].form.motorNo = { value: '', valid: null };
                    modal.steps[2].form.chassisNo = { value: '', valid: null };


                    /* modal.insuredInfoPanelPass = false;
                    modal.vehicleLicenseInfoPanelPass = false;
                    modal.summaryPanelPass = false;
                    modal.showBrandModelSelectBox = false; */

                    // KİŞİSEL BİLGİLER
                    /* modal.fields.insuredSearch.valid = { value: true, text: '' };
                    modal.fields.title.valid = { value: null, text: '' };
                    modal.fields.name.valid = { value: null, text: '' };
                    modal.fields.lastname.valid = { value: null, text: '' };
                    modal.fields.identityNumber.valid = { value: null, text: '' };
                    modal.fields.birthDate.valid = { value: null, text: '' };
                    modal.fields.email.valid = { value: null, text: '' };
                    modal.fields.phone.valid = { value: null, text: '' }; */
                    //document.querySelector('.get-proposal-insured-phone').classList.remove('is-valid');
                    //document.querySelector('.get-proposal-insured-phone').classList.remove('is-invalid');

                    // ARAÇ VE RUHSAT BİLGİLERİ
                    /* modal.fields.plate.valid = { value: null, text: '' };
                    modal.fields.cities.valid = { value: null, text: '' };
                    modal.fields.districts.valid = { value: null, text: '' };
                    modal.fields.licenseSerial.valid = { value: null, text: '' };
                    modal.fields.licenseNumber.valid = { value: null, text: '' };
                    modal.fields.licenseRegistrationDate.valid = { value: null, text: '' };
                    modal.fields.usageType.valid = { value: null, text: '' };
                    modal.fields.usageStyle.valid = { value: null, text: '' };
                    modal.fields.modelYear.valid = { value: null, text: '' };
                    modal.fields.seat.valid = { value: null, text: '' };
                    modal.fields.fuelTypes.valid = { value: null, text: '' };
                    modal.fields.brands.valid = { value: null, text: '' };
                    modal.fields.models.valid = { value: null, text: '' };
                    modal.fields.motorNo.valid = { value: null, text: '' };
                    modal.fields.chassisNo.valid = { value: null, text: '' }; */

                    /* modal.form = {
                        // SİGORTA SORGULAMA TİPİ
                        type: 'casco',

                        // KİŞİSEL BİLGİLER
                        insuredSearch: '',
                        insuredType: 'individual', // Bireysel Sigortalı - Kurumsal Sigortalı
                        _id: '',
                        title: '', // Sigortalı ünvanı
                        name: '',
                        lastname: '',
                        identityNumber: '',
                        birthDateDay: '',
                        birthDateMonth: '',
                        birthDateYear: '',
                        email: '',
                        phone: '',

                        // ARAÇ VE RUHSAT BİLGİLERİ
                        newVehicleStatus: 'plate', // Plaka var - Plaka yok, sıfır araç
                        plate: '',
                        districtCode: '',
                        licenseSerial: '',
                        licenseNumber: '',
                        licenseRegistrationDateDay: '',
                        licenseRegistrationDateMonth: '',
                        licenseRegistrationDateYear: '',
                        usageType: '',
                        usageStyle: '',
                        modelYear: '',
                        seat: 2,
                        fuelType: '',
                        brandName: '',
                        brandCode: 0,
                        modelName: '',
                        modelCode: 0,
                        motorNo: '',
                        chassisNo: ''
                    }; */

                    /* modal.temp = {
                        insuredType: 'corporate', // Bireysel Sigortalı - Kurumsal Sigortalı
                        _id: '',
                        title: '',
                        name: '',
                        lastname: '',
                        identityNumber: '',
                        birthDateDay: '',
                        birthDateMonth: '',
                        birthDateYear: '',
                        email: '',
                        phone: ''
                    }; */

                    setTimeout(() => {
                        if(document.querySelector('#insuranceTypeContent').classList.contains('show') === false) this.$refs.insuranceTypeHeaderButton[0].click(); // İlk adım
                    }, 300);
                    
                    break;
                case this.modals.insuredList:
                    modal.title = title;

                    break;
                case this.modals.proposalSearcher:
                    modal.title = title;

                    break;
            }
            
            modal.show = true;

            setTimeout(() => {
                this.disableWatch = false;
            }, 500);
        },
        closeModal(modal) {
            modal.show = false;
        },
        async onSelectChangeHandler(step, name, val) {
            console.log(step, name, val);
            // Her hangi bir seçim yapıldığında şuan ki adımdan sonraki adımların gidiş izinlerini kaldırdık.
            this.modals.newProposal.steps.forEach((e, i) => {
                if(i > this.modals.newProposal.currentStep) e.permission = false;
            });

            switch (name) {
                case 'birthDateMonth':
                    var birthDates = {};
                    var year = null;
                    var month = null;

                    if(this.data.insured.isRegistered === true) {
                        year = step.form.birthDateYear.value === '' ? parseInt(step.fields.birthDateYear.options.placeholder) : parseInt(step.form.birthDateYear.value);
                        month = val.value === '' ? null : parseInt(val.value);
                    } else {
                        year = step.form.birthDateYear.value === '' ? null : parseInt(step.form.birthDateYear.value);
                        month = val.value === '' ? null : parseInt(val.value);
                    }

                    birthDates = Func.initSelectBoxDate(year, month, parseInt(process.env.VUE_APP_MIN_INSURED_AGE), parseInt(process.env.VUE_APP_MAX_INSURED_AGE));
        
                    step.fields.birthDateDay.options.selectOptions = birthDates.days;
                    step.fields.birthDateMonth.options.selectOptions = birthDates.months;
                    step.fields.birthDateYear.options.selectOptions = birthDates.years;

                    if(step.form.birthDateDay.value !== '') { // Gün seçilmişse
                        // Seçilen günün yeni doldurulan ay'da varsa (Ay o günü çekiyorsa. Örn: Şubat 28-29 çekmesi gibi) 
                        var isSelectedDay = step.fields.birthDateDay.options.selectOptions.filter(e => e.value === step.form.birthDateDay.value);

                        if(isSelectedDay.length === 0) { // Seçilen gün yok ise
                            if(this.data.insured.isRegistered === true) step.form.birthDateDay = { value: '', valid: true };
                            else step.form.birthDateDay = { value: '', valid: null };
                        }
                    }

                    break;
                case 'birthDateYear':
                    var birthDates = {};
                    var year = null;
                    var month = null;

                    if(this.data.insured.isRegistered === true) {
                        year = val.value === '' ? parseInt(step.fields.birthDateYear.options.placeholder) : parseInt(val.value);
                        month = step.form.birthDateMonth.value === '' ? null : parseInt(step.form.birthDateMonth.value);
                    } else {
                        year = val.value === '' ? null : parseInt(val.value);
                        month = step.form.birthDateMonth.value === '' ? null : parseInt(step.form.birthDateMonth.value);
                    }

                    birthDates = Func.initSelectBoxDate(year, month, parseInt(process.env.VUE_APP_MIN_INSURED_AGE), parseInt(process.env.VUE_APP_MAX_INSURED_AGE));
        
                    step.fields.birthDateDay.options.selectOptions = birthDates.days;
                    step.fields.birthDateMonth.options.selectOptions = birthDates.months;
                    step.fields.birthDateYear.options.selectOptions = birthDates.years;

                    if(step.form.birthDateDay.value !== '') { // Gün seçilmişse
                        // Seçilen günün yeni doldurulan ay'da varsa (Ay o günü çekiyorsa. Örn: Şubat 28-29 çekmesi gibi) 
                        var isSelectedDay = step.fields.birthDateDay.options.selectOptions.filter(e => e.value === step.form.birthDateDay.value);

                        if(isSelectedDay.length === 0) { // Seçilen gün yok ise
                            if(this.data.insured.isRegistered === true) step.form.birthDateDay = { value: '', valid: true };
                            else step.form.birthDateDay = { value: '', valid: null };
                        }
                    }

                    break;
                case 'city':
                    step.fields.district.options.selectOptions = [];
                    step.form.district = { value: '', valid: null };

                    if(val.value !== '') {
                        // ##### İLÇELER #####
                        // İL KODUNA GÖRE İLÇE LİSTESİNİ ÇEKİYORUZ.
                        step.disabled = true;
                        var districtList = await this.getDistrictList(val.value.value.substring(0,2));
                        step.disabled = false;

                        if(districtList.length > 0) {
                            districtList.forEach(district => {
                                step.fields.district.options.selectOptions.push({ value: district.code, label: district.name });
                            });
                        }
                    }

                    break;
                case 'modelYear':
                    step.fields.brandCode.options.selectOptions = [];
                    step.fields.modelCode.options.selectOptions = [];

                    step.form.brandCode = { value: '', valid: null };
                    step.form.brandName = '';
                    step.form.modelCode = { value: '', valid: null };
                    step.form.modelName = '';

                    if(val.value !== '') {
                        // ##### MARKALAR #####
                        // MODEL YILINA GÖRE ARAÇ MARKA LİSTESİNİ ÇEKİYORUZ.
                        step.disabled = true;
                        var brandList = await this.getBrandList(val.value.value);
                        step.disabled = false;

                        if(brandList.length > 0) {
                            brandList.forEach(brand => {
                                step.fields.brandCode.options.selectOptions.push({ value: brand.markaKodu, label: brand.markaAdi });
                            });
                        }
                    }

                    break;
                case 'brandCode':
                    step.fields.modelCode.options.selectOptions = [];
                    step.form.modelCode = { value: '', valid: null };
                    step.form.modelName = '';

                    if(val.value !== '') {
                        step.form.brandName = step.fields.brandCode.options.selectOptions.filter(e => e.value === val.value.value)[0].label;

                        // ##### MODELLER #####
                        // ARAÇ MARKA KODUNA GÖRE ARAÇ MODEL LİSTESİNİ ÇEKİYORUZ.
                        step.disabled = true;
                        var modelList = await this.getModelList(val.value.value);
                        step.disabled = false;

                        if(modelList.length > 0) {
                            modelList.forEach(model => {
                                step.fields.modelCode.options.selectOptions.push({ value: model.tipKodu, label: model.tipAdi });
                            });
                        }
                    }

                    break;
                case 'modelCode':
                    if(val.value !== '') {
                        step.form.modelName = step.fields.modelCode.options.selectOptions.filter(e => e.value === val.value.value)[0].label;
                    }

                    break;
            }
        },
        async getProposalRequests(collapse = false) {
            var form = {};

            Object.entries(this.search.form).map(e => { return { [e[0]]: typeof e[1] === 'object' ? e[1].value : e[1] } }).forEach(e => {
                var key = Object.keys(e);
                var value = Object.values(e);
                form[key[0]] = typeof value[0] === 'object' ? value[0].value : value[0];
            });

            this.$Progress.start();
            this.search.disabled = true;
            var proposalRequestsResult = await axios.get(process.env.VUE_APP_API_URL + 'admin/proposal/request', { params: form });
            this.$Progress.finish();
            this.search.disabled = false;

            if(proposalRequestsResult.data.result === 'success') {
                // Dönen teklif taleplerini döndürdük
                proposalRequestsResult.data.list.forEach(request => {
                    // Teklif talebine gelen teklif fiyatlarını küçükten büyüğe sıraladık
                    request.results = Func.arrSort(request.results, ['priceDetail', 'priceTotal'], '>');
                });

                this.rowData = proposalRequestsResult.data.list;
            } else this.rowData = [];

            if(collapse === true) this.$refs.cbcsearchsidebar.closeNav();

            // AG GRID'in tüm açılır kapanır satırlarını otomatik kapalı olarak ayarladık.
            this.groupDefaultExpanded = 0;
        },
        async getInsuredModal(step, value) {
            /* var inputErrors = [];
            
            this.validInput(this.modals.newProposal.form.insuredSearch, this.modals.newProposal.fields.insuredSearch);
            
            inputErrors.push(this.modals.newProposal.fields.insuredSearch.valid.value);

            // inputErrors array içinde false olan varsa
            if(inputErrors.includes(false) === true) {
                Func.shaker(this.modals.newProposal);
                return;
            } */
            
            this.$Progress.start();
            step.disabled = true;

            var insuredsResponse = await axios.get(process.env.VUE_APP_API_URL + 'admin/insureds', { params: { search: value } });

            this.$Progress.finish();
            step.disabled = false;

            if(insuredsResponse.data.result === 'success') this.modals.insuredList.rowData = insuredsResponse.data.list;
            else this.modals.insuredList.rowData = [];

            this.openModal(this.modals.insuredList, 'Sigortalılar');
        },
        async getDistrictList(cityCode) {
            var districtListResponse = await axios.get(process.env.VUE_APP_API_URL + 'general/districts', { params: { cityCode: cityCode } });
            
            if (districtListResponse.data.result === 'success') return districtListResponse.data.districts;
            else return [];
        },
        async getBrandList(modelYear) {
            var brandListResponse = await axios.post(process.env.VUE_APP_API_URL + 'general/getcarbrands', { modelYear: modelYear });

            if(brandListResponse.data.result === 'success') return brandListResponse.data.list;
            else return [];
        },
        async getModelList(brandCode) {
            var modelListResponse = await axios.post(process.env.VUE_APP_API_URL + 'general/getcarmodels', { carBrandCode: brandCode });
            
            if (modelListResponse.data.result === 'success') return modelListResponse.data.list;
            else return [];
        },
        async methodStep(currentStep, nextStep) {
            if(nextStep <= this.modals.newProposal.steps.length - 1) {
                var step1 = this.modals.newProposal.steps[0]; // Sigorta Tipi
                var step2 = this.modals.newProposal.steps[1]; // Sigortalı Bilgileri
                var step3 = this.modals.newProposal.steps[2]; // Araç Bilgileri

                switch (nextStep) {
                    case 1: // Sigorta Tipi => Sigortalı Bilgileri
                        step2.permission = true; // Sigortalı Bilgileri adımına geçiş izni verildi
                        await Func.sleep(100); // 100ms bekledik
                        this.$refs.insuredInfosHeaderButton[0].click(); // Sigortalı Bilgileri adımına geçiş yaptık
                        break;
                    case 2: // Sigortalı Bilgileri => Araç Bilgileri
                        var inputErrors = [];

                        if(step2.form.insuredType === 'individual') { // Bireysel Sigortalı
                            this.$refs.insuredName[0].validControl(true);
                            inputErrors.push(step2.form.insuredName.valid);

                            this.$refs.insuredLastname[0].validControl(true);
                            inputErrors.push(step2.form.insuredLastname.valid);
                        } else { // Kurumsal Sigortalı
                            this.$refs.insuredTitle[0].validControl(true);
                            inputErrors.push(step2.form.insuredTitle.valid);
                        }

                        this.$refs.insuredIdentityNumber[0].validControl(true);
                        inputErrors.push(step2.form.insuredIdentityNumber.valid);

                        // inputErrors array içinde false olan varsa
                        if(inputErrors.includes(false) === true) return;

                        return;

                        var insuredArgs = {};

                        if(this.modals.getProposal.form.insuredType === 'individual') {
                            this.validInput(this.modals.getProposal.form.name, this.modals.getProposal.fields.name);
                            this.validInput(this.modals.getProposal.form.lastname, this.modals.getProposal.fields.lastname);
                            this.validInput(this.modals.getProposal.form.identityNumber, this.modals.getProposal.fields.identityNumber);
                            this.validInput(null, this.modals.getProposal.fields.birthDate);
                            this.validInput(this.modals.getProposal.form.phone, this.modals.getProposal.fields.phone);
                            this.validInput(this.modals.getProposal.form.email, this.modals.getProposal.fields.email);

                            if(this.modals.getProposal.fields.name.valid.value === false || this.modals.getProposal.fields.lastname.valid.value === false || 
                                this.modals.getProposal.fields.identityNumber.valid.value === false || this.modals.getProposal.fields.birthDate.valid.value === false || 
                                this.modals.getProposal.fields.phone.valid.value === false || this.modals.getProposal.fields.email.valid.value === false) {
                                    Func.shaker(this.modals.getProposal);
                                    return;
                                }
                                
                            var verifyTCArgs = {
                                name: this.modals.getProposal.form.name,
                                lastname: this.modals.getProposal.form.lastname,
                                birthDateYear: this.modals.getProposal.form.birthDateYear,
                                identityNumber: this.modals.getProposal.form.identityNumber
                            };

                            this.$Progress.start();
                            this.modals.getProposal.disabled = true;
                            var verifyTCID = await axios.post(process.env.VUE_APP_API_URL + 'general/verify/tcid', verifyTCArgs);
                            this.$Progress.finish();
                            this.modals.getProposal.disabled = false;

                            if(verifyTCID.data.result === 'error') {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Kişisel Bilgiler',
                                    html: 'Sigortalı kimlik bilgileri ile TC kimlik numarası eşleşmemektedir. Lütfen kontrol edin.',
                                    confirmButtonText: 'Tamam',
                                    confirmButtonColor: '#3652B3'
                                });

                                return;
                            }

                            insuredArgs = {
                                name: this.modals.getProposal.form.name,
                                lastname: this.modals.getProposal.form.lastname,
                                identityNumber: this.modals.getProposal.form.identityNumber,
                                birthDate: `${this.modals.getProposal.form.birthDateYear}-${this.modals.getProposal.form.birthDateMonth}-${this.modals.getProposal.form.birthDateDay}`,
                                email: this.modals.getProposal.form.email,
                                phone: this.modals.getProposal.form.phone.split(' ').join('')
                            };

                        } else if(this.modals.getProposal.form.insuredType === 'corporate') {
                            this.validInput(this.modals.getProposal.form.title, this.modals.getProposal.fields.title);
                            this.validInput(this.modals.getProposal.form.identityNumber, this.modals.getProposal.fields.identityNumber);
                            //this.validInput(this.modals.getProposal.form.phone, this.modals.getProposal.fields.phone);
                            this.validInput(this.modals.getProposal.form.email, this.modals.getProposal.fields.email);

                            if(this.modals.getProposal.fields.title.valid.value === false || this.modals.getProposal.fields.identityNumber.valid.value === false || 
                                this.modals.getProposal.fields.email.valid.value === false || this.modals.getProposal.fields.phone.valid.value === false) {
                                    Func.shaker(this.modals.getProposal);
                                    return;
                                }

                            insuredArgs = {
                                title: this.modals.getProposal.form.title,
                                identityNumber: this.modals.getProposal.form.identityNumber,
                                email: this.modals.getProposal.form.email,
                                phone: this.modals.getProposal.form.phone.split(' ').join('')
                            };
                        }
                        
                        if(this.$store.state.user.accountType === 'partner') insuredArgs.partnerId = this.$store.state.user.partnerId; // Partner ID ekleme eğer partner girişi yapılmışsa :)

                        if(this.modals.getProposal.form._id === '') {
                            Swal.fire({
                                icon: 'question',
                                title: 'Yeni Sigortalı',
                                html: `<strong>${insuredArgs.name} ${insuredArgs.lastname}</strong> isimli sigortalı eklenecek. Devam etmek istiyor musunuz?`,
                                confirmButtonText: 'Evet',
                                confirmButtonColor: '#3652B3',
                                showCancelButton: true,
                                cancelButtonText: 'Hayır'
                            }).then(result => {
                                if(result.isConfirmed) {
                                    this.$Progress.start();
                                    this.modals.getProposal.disabled = true;
                                    axios.post(process.env.VUE_APP_API_URL + 'insureds', insuredArgs).then(response => {
                                        this.$Progress.finish();
                                        this.modals.getProposal.disabled = false;

                                        if(response.data.result === 'success') {
                                            // "Araç ve Ruhsat Bilgileri" geçişine izni true yapıyoruz.
                                            this.modals.getProposal.vehicleLicenseInfoPanelPass = true;

                                            this.modals.getProposal.form._id = response.data.insured._id;
                                            this.modals.getProposal.title = `Teklif Sorgulama Ekranı - ${insuredArgs.name} ${insuredArgs.lastname}`;

                                            setTimeout(() => {
                                                switch (this.modals.getProposal.form.type) {
                                                    case 'casco':
                                                    case 'traffic':
                                                        this.$refs.vehicleAndLicenseInformationHeadButton.click();
                                                        break;
                                                    case 'dask':
                                                    case 'housing':
                                                        this.$refs.daskHousingInformationHeadButton.click();
                                                        break;
                                                    case 'compHealth':
                                                    case 'privHealth':
                                                        this.$refs.healthInformationHeadButton.click();
                                                        break;
                                                }
                                            }, 100);
                                        } else {
                                            Swal.fire({
                                                icon: response.data.result,
                                                title: 'Yeni Sigortalı',
                                                html: response.data.message,
                                                confirmButtonColor: '#1565C0',
                                                confirmButtonText: 'Tamam'
                                            });
                                        }
                                    });
                                }
                            });
                        } else {
                            insuredArgs._id = this.modals.getProposal.form._id;
                            insuredArgs.updatedDate = new Date();

                            if(this.modals.getProposal.form.insuredType === 'individual' ? 
                                (
                                    this.modals.getProposal.form.name !== this.modals.getProposal.temp.name || this.modals.getProposal.form.lastname !== this.modals.getProposal.temp.lastname || 
                                    this.modals.getProposal.form.identityNumber !== this.modals.getProposal.temp.identityNumber || this.modals.getProposal.form.birthDateDay !== this.modals.getProposal.temp.birthDateDay || 
                                    this.modals.getProposal.form.birthDateMonth !== this.modals.getProposal.temp.birthDateMonth || this.modals.getProposal.form.birthDateYear !== this.modals.getProposal.temp.birthDateYear || 
                                    this.modals.getProposal.form.email !== this.modals.getProposal.temp.email || this.modals.getProposal.form.phone.split(' ').join('') !== this.modals.getProposal.temp.phone.split(' ').join('')
                                ) 
                                : 
                                (
                                    this.modals.getProposal.form.title !== this.modals.getProposal.temp.title || this.modals.getProposal.form.identityNumber !== this.modals.getProposal.temp.identityNumber || 
                                    this.modals.getProposal.form.email !== this.modals.getProposal.temp.email || this.modals.getProposal.form.phone.split(' ').join('') !== this.modals.getProposal.temp.phone.split(' ').join('')
                                )
                            ) {
                                Swal.fire({
                                    icon: 'question',
                                    title: 'Sigortalı Güncelle',
                                    html: `Sigortalı güncellenecek. Devam etmek istiyor musunuz?`,
                                    confirmButtonText: 'Evet',
                                    confirmButtonColor: '#3652B3',
                                    showCancelButton: true,
                                    cancelButtonText: 'Hayır'
                                }).then(result => {
                                    if(result.isConfirmed) {
                                        this.$Progress.start();
                                        this.modals.getProposal.disabled = true;
                                        axios.put(process.env.VUE_APP_API_URL + 'insureds', insuredArgs).then(response => {
                                            this.$Progress.finish();
                                            this.modals.getProposal.disabled = false;

                                            if(response.data.result === 'success') {
                                                if(this.modals.getProposal.form.insuredType === 'individual') {
                                                    this.modals.getProposal.title = `Teklif Sorgulama Ekranı - ${this.modals.getProposal.form.name} ${this.modals.getProposal.form.lastname}`;

                                                    Object.assign(this.modals.getProposal.temp, {
                                                        insuredType: 'individual',
                                                        _id: this.modals.getProposal.form._id,
                                                        title: '',
                                                        name: this.modals.getProposal.form.name,
                                                        lastname: this.modals.getProposal.form.lastname,
                                                        identityNumber: this.modals.getProposal.form.identityNumber,
                                                        birthDateDay: this.modals.getProposal.form.birthDateDay,
                                                        birthDateMonth: this.modals.getProposal.form.birthDateMonth,
                                                        birthDateYear: this.modals.getProposal.form.birthDateYear,
                                                        phone: this.modals.getProposal.form.phone,
                                                        email: this.modals.getProposal.form.email
                                                    });
                                                } else if(this.modals.getProposal.form.insuredType === 'corporate') {
                                                    this.modals.getProposal.title = `Teklif Sorgulama Ekranı - ${this.modals.getProposal.form.title}`;

                                                    Object.assign(this.modals.getProposal.temp, {
                                                        insuredType: 'corporate',
                                                        _id: this.modals.getProposal.form._id,
                                                        title: this.modals.getProposal.form.title,
                                                        name: '',
                                                        lastname: '',
                                                        identityNumber: this.modals.getProposal.form.identityNumber,
                                                        birthDateDay: '',
                                                        birthDateMonth: '',
                                                        birthDateYear: '',
                                                        phone: this.modals.getProposal.form.phone,
                                                        email: this.modals.getProposal.form.email
                                                    });
                                                }

                                                // "Araç ve Ruhsat Bilgileri" geçişine izni true yapıyoruz.
                                                this.modals.getProposal.vehicleLicenseInfoPanelPass = true;
                                                
                                                setTimeout(() => {
                                                    switch (this.modals.getProposal.form.type) {
                                                        case 'casco':
                                                        case 'traffic':
                                                            this.$refs.vehicleAndLicenseInformationHeadButton.click();
                                                            break;
                                                        case 'dask':
                                                        case 'housing':
                                                            this.$refs.daskHousingInformationHeadButton.click();
                                                            break;
                                                        case 'compHealth':
                                                        case 'privHealth':
                                                            this.$refs.healthInformationHeadButton.click();
                                                            break;
                                                    }
                                                }, 100);
                                            } else {
                                                Swal.fire({
                                                    icon: response.data.result,
                                                    title: 'Yeni Sigortalı',
                                                    html: response.data.message,
                                                    confirmButtonColor: '#1565C0',
                                                    confirmButtonText: 'Tamam'
                                                });
                                            }
                                        });
                                    }
                                });
                            } else {
                                // "Araç ve Ruhsat Bilgileri" geçişine izni true yapıyoruz.
                                this.modals.getProposal.vehicleLicenseInfoPanelPass = true;

                                setTimeout(() => {
                                    switch (this.modals.getProposal.form.type) {
                                        case 'casco':
                                        case 'traffic':
                                            this.$refs.vehicleAndLicenseInformationHeadButton.click();
                                            break;
                                        case 'dask':
                                        case 'housing':
                                            this.$refs.daskHousingInformationHeadButton.click();
                                            break;
                                        case 'compHealth':
                                        case 'privHealth':
                                            this.$refs.healthInformationHeadButton.click();
                                            break;
                                    }
                                }, 100);
                            }
                        }
                        break;
                    case 4:
                        switch (this.modals.getProposal.form.type) {
                            case 'casco':
                            case 'traffic':
                                // Araç plakası yoksa ya da araç marka model bulunamadıysa
                                if(this.modals.getProposal.form.newVehicleStatus === 'noplate') {
                                    this.validInput(this.modals.getProposal.form.plate, this.modals.getProposal.fields.cities);
                                    this.validInput(this.modals.getProposal.form.districtCode, this.modals.getProposal.fields.districts);
                                    this.validInput(this.modals.getProposal.form.modelYear, this.modals.getProposal.fields.modelYear);
                                    this.validInput(this.modals.getProposal.form.brandName, this.modals.getProposal.fields.brands);
                                    this.validInput(this.modals.getProposal.form.modelName, this.modals.getProposal.fields.models);
                                    this.validInput(this.modals.getProposal.form.usageType, this.modals.getProposal.fields.usageType);
                                    //this.validInput(this.modals.getProposal.form.usageStyle, this.modals.getProposal.fields.usageStyle);
                                    this.validInput(this.modals.getProposal.form.seat, this.modals.getProposal.fields.seat);
                                    this.validInput(this.modals.getProposal.form.fuelType, this.modals.getProposal.fields.fuelTypes);
                                    this.validInput(this.modals.getProposal.form.motorNo, this.modals.getProposal.fields.motorNo);
                                    this.validInput(this.modals.getProposal.form.chassisNo, this.modals.getProposal.fields.chassisNo);

                                    if(this.modals.getProposal.fields.cities.valid.value === false || this.modals.getProposal.fields.cities.valid.value === false || 
                                        this.modals.getProposal.fields.modelYear.valid.value === false || this.modals.getProposal.fields.brands.valid.value === false || 
                                        this.modals.getProposal.fields.models.valid.value === false || this.modals.getProposal.fields.usageType.valid.value === false || 
                                        /* this.modals.getProposal.fields.usageStyle.valid.value === false ||  */this.modals.getProposal.fields.seat.valid.value === false || 
                                        this.modals.getProposal.fields.fuelTypes.valid.value === false || this.modals.getProposal.fields.motorNo.valid.value === false || 
                                        this.modals.getProposal.fields.chassisNo.valid.value === false) {
                                            Func.shaker(this.modals.getProposal);
                                            return;
                                        }

                                    this.modals.getProposal.summaryPanelPass = true;

                                    setTimeout(() => {
                                        this.$refs.summaryHeadButton.click();
                                    }, 100);
                                } else {
                                    this.validInput(this.modals.getProposal.form.plate, this.modals.getProposal.fields.plate);
                                    this.validInput(this.modals.getProposal.form.licenseSerial, this.modals.getProposal.fields.licenseSerial);
                                    this.validInput(this.modals.getProposal.form.licenseNumber, this.modals.getProposal.fields.licenseNumber);

                                    if(this.modals.getProposal.fields.plate.valid.value === false || this.modals.getProposal.fields.licenseSerial.valid.value === false || 
                                        this.modals.getProposal.fields.licenseNumber.valid.value === false) {
                                            Func.shaker(this.modals.getProposal);
                                            return;
                                        }

                                    if(skip === true) {
                                        this.validInput(this.modals.getProposal.form.brandName, this.modals.getProposal.fields.brands);
                                        this.validInput(this.modals.getProposal.form.modelName, this.modals.getProposal.fields.models);

                                        if(this.modals.getProposal.fields.brands.valid.value === false || this.modals.getProposal.fields.models.valid.value === false) {
                                            Func.shaker(this.modals.getProposal);
                                            return;
                                        }

                                        this.modals.getProposal.summaryPanelPass = true;
                                        
                                        setTimeout(() => {
                                            this.$refs.summaryHeadButton.click();
                                        }, 100);

                                        return;
                                    }

                                    this.$Progress.start();
                                    this.modals.getProposal.disabled = true;
                                    this.disableWatch = true; // Watch izleme kapalı

                                    // ##### EGM SORGU YAPIYORUZ #####
                                    // GİRİLEN PLAKA, RUHSAT SERİ VE NO İLE ARACA AİT; TESCİL TARİHİ, KULLANIM TARZI (CİNS), MODEL YILI DATALARINI ÇEKİYORUZ.
                                    var responseEGMSorgu = await axios.post(process.env.VUE_APP_API_URL + 'mapfre/general/egmSorgu', {
                                        plate: this.modals.getProposal.form.plate,
                                        licenseSerial: this.modals.getProposal.form.licenseSerial,
                                        licenseNumber: this.modals.getProposal.form.licenseNumber
                                    });

                                    if(responseEGMSorgu.data.result === 'success') {
                                        var licenseRegistrationDate = new Date(responseEGMSorgu.data.details.aracTescilBilgileri.tescilTarihi.time);

                                        this.modals.getProposal.form.licenseRegistrationDateDay = licenseRegistrationDate.getDate();
                                        this.modals.getProposal.form.licenseRegistrationDateMonth = licenseRegistrationDate.getMonth() + 1;
                                        this.modals.getProposal.form.licenseRegistrationDateYear = licenseRegistrationDate.getFullYear();
                                        this.modals.getProposal.fields.licenseRegistrationDate.valid = { value: true, text: '' };
                                        this.modals.getProposal.form.usageType = responseEGMSorgu.data.details.aracBilgi.ustCins;
                                        this.modals.getProposal.fields.usageType.valid = { value: true, text: '' };
                                        /* this.modals.getProposal.form.usageStyle = '';
                                        this.modals.getProposal.fields.usageStyle.valid = { value: true, text: '' }; */
                                        this.modals.getProposal.form.modelYear = responseEGMSorgu.data.details.aracBilgi.modelYili;
                                        this.modals.getProposal.fields.modelYear.valid = { value: true, text: '' };
                                        this.modals.getProposal.form.seat = responseEGMSorgu.data.details.aracBilgi.koltukSayisi;
                                        this.modals.getProposal.fields.seat.valid = { value: true, text: '' };
                                        this.modals.getProposal.form.fuelType = responseEGMSorgu.data.details.aracBilgi.yakitTipi;
                                        this.modals.getProposal.fields.fuelTypes.valid = { value: true, text: '' };

                                        this.modals.getProposal.form.brandName = '';
                                        this.modals.getProposal.form.brandCode = 0;
                                        this.modals.getProposal.fields.brands.valid = { value: null, text: '' };
                                        this.modals.getProposal.form.modelName = '';
                                        this.modals.getProposal.form.modelCode = 0;
                                        this.modals.getProposal.fields.models.valid = { value: null, text: '' };

                                        this.modals.getProposal.form.motorNo = responseEGMSorgu.data.details.aracBilgi.motorNo;
                                        this.modals.getProposal.fields.motorNo.valid = { value: true, text: '' };
                                        this.modals.getProposal.form.chassisNo = responseEGMSorgu.data.details.aracBilgi.sasiNo;
                                        this.modals.getProposal.fields.chassisNo.valid = { value: true, text: '' };

                                        if(this.modals.getProposal.form.type === 'casco') {
                                            // ##### POLICE KASKO SORGULAMASI YAPIYORUZ #####
                                            // GİRİLEN TC VE PLAKA İLE ARACA AİT; MARKA VE MODEL KODU DATALARINI ÇEKİYORUZ.
                                            var responsePoliceSorguKasko = await axios.post(process.env.VUE_APP_API_URL + 'mapfre/general/policeSorguKasko', {
                                                identityNumber: this.modals.getProposal.form.identityNumber,
                                                plate: this.modals.getProposal.form.plate
                                            });

                                            if(responsePoliceSorguKasko.data.result === 'success') {
                                                if(responsePoliceSorguKasko.data.details.result.yururlukPoliceList) {
                                                    // Gelen datada birden çok kayıt var ise array, tek kayıt var ise object geliyordu. Bu sebeple isArray ile array olup olmadığını kontrol ediyoruz ve array ise sıfırıncı değerini alıyoruz.
                                                    var yururlukPolice = Array.isArray(responsePoliceSorguKasko.data.details.result.yururlukPoliceList.TramerSorguPoliceValue) ? responsePoliceSorguKasko.data.details.result.yururlukPoliceList.TramerSorguPoliceValue[0] : responsePoliceSorguKasko.data.details.result.yururlukPoliceList.TramerSorguPoliceValue;

                                                    this.modals.getProposal.form.brandCode = yururlukPolice.aracMarkaKodu;
                                                    this.modals.getProposal.form.modelCode = yururlukPolice.aracinTipi;
                                                } else if(responsePoliceSorguKasko.data.details.result.oncekiPoliceList) {
                                                    // Gelen datada birden çok kayıt var ise array, tek kayıt var ise object geliyordu. Bu sebeple isArray ile array olup olmadığını kontrol ediyoruz ve array ise sıfırıncı değerini alıyoruz.
                                                    var oncekiPolice = Array.isArray(responsePoliceSorguKasko.data.details.result.oncekiPoliceList.TramerSorguPoliceValue) ? responsePoliceSorguKasko.data.details.result.oncekiPoliceList.TramerSorguPoliceValue[0] : responsePoliceSorguKasko.data.details.result.oncekiPoliceList.TramerSorguPoliceValue;

                                                    this.modals.getProposal.form.brandCode = oncekiPolice.aracMarkaKodu;
                                                    this.modals.getProposal.form.modelCode = oncekiPolice.aracinTipi;
                                                }
                                            }
                                        } else if(this.modals.getProposal.form.type === 'traffic') {
                                            // ##### POLICE TRAFİK SORGULAMASI YAPIYORUZ #####
                                            // GİRİLEN TC VE PLAKA İLE ARACA AİT; MARKA VE MODEL KODU DATALARINI ÇEKİYORUZ.
                                            var responsePoliceSorguTrafik = await axios.post(process.env.VUE_APP_API_URL + 'mapfre/general/policeSorguTrafik', {
                                                identityNumber: this.modals.getProposal.form.identityNumber,
                                                plate: this.modals.getProposal.form.plate
                                            });

                                            if(responsePoliceSorguTrafik.data.result === 'success') {
                                                if(responsePoliceSorguTrafik.data.details.result.trafikHasar.TrafikHasarBilgi) {
                                                    // Gelen datada birden çok kayıt var ise array, tek kayıt var ise object geliyordu. Bu sebeple isArray ile array olup olmadığını kontrol ediyoruz ve array ise sıfırıncı değerini alıyoruz.
                                                    var trafikHasarBilgi = Array.isArray(responsePoliceSorguTrafik.data.details.result.trafikHasar.TrafikHasarBilgi) ? responsePoliceSorguTrafik.data.details.result.trafikHasar.TrafikHasarBilgi[0] : responsePoliceSorguTrafik.data.details.result.trafikHasar.TrafikHasarBilgi;

                                                    this.modals.getProposal.form.brandCode = trafikHasarBilgi.marka;
                                                    this.modals.getProposal.form.modelCode = trafikHasarBilgi.model;
                                                }
                                            }
                                        }

                                        this.modals.getProposal.productEGMControl = true;

                                        // ##### ARAÇ MARKA LİSTESİNİ ÇEKİYORUZ #####
                                        // GELEN MODEL YILINA GÖRE ARAÇ MARKA LİSTESİNİ ÇEKİYORUZ.
                                        var brandList = await this.getBrandList(this.modals.getProposal.form.modelYear);

                                        this.modals.getProposal.fields.brands.options = [{ value: '', label: 'Aracın markasını seçin' }];
                                        if(brandList.length > 0) {
                                            for (let i = 0; i < brandList.length; i++) {
                                                const brand = brandList[i];

                                                this.modals.getProposal.fields.brands.options.push({ value: brand.markaKodu, label: brand.markaAdi });
                                            }

                                            if(this.modals.getProposal.form.brandCode !== 0 && this.modals.getProposal.form.modelCode !== 0) {
                                                var brand = this.modals.getProposal.fields.brands.options.filter(brand => brand.value === this.modals.getProposal.form.brandCode);

                                                if(brand.length > 0) {
                                                    this.modals.getProposal.form.brandName = brand[0].label;
                                                    this.validInput(this.modals.getProposal.form.brandCode, this.modals.getProposal.fields.brands);

                                                    // ##### ARAÇ MODEL LİSTESİNİ ÇEKİYORUZ #####
                                                    // GELEN MARKA KODUNA GÖRE ARAÇ MODEL LİSTESİNİ ÇEKİYORUZ.
                                                    var modelList = await this.getModelList(this.modals.getProposal.form.brandCode);

                                                    this.modals.getProposal.fields.models.options = [{ value: '', label: 'Aracın modelini seçin' }];
                                                    if(modelList.length > 0) {
                                                        for (let i = 0; i < modelList.length; i++) {
                                                            const model = modelList[i];

                                                            this.modals.getProposal.fields.models.options.push({ value: model.tipKodu, label: model.tipAdi });
                                                        }

                                                        var model = this.modals.getProposal.fields.models.options.filter(model => model.value === this.modals.getProposal.form.modelCode);

                                                        if(model.length > 0) {
                                                            this.modals.getProposal.summaryPanelPass = true;
                                                            this.modals.getProposal.showBrandModelSelectBox = false;
                                                            this.modals.getProposal.form.modelName = model[0].label;
                                                            this.validInput(this.modals.getProposal.form.modelName, this.modals.getProposal.fields.models);
                                                            
                                                            setTimeout(() => {
                                                                this.$refs.summaryHeadButton.click();
                                                            }, 100);
                                                        } else {
                                                            this.modals.getProposal.showBrandModelSelectBox = true;

                                                            Swal.fire({
                                                                icon: 'error',
                                                                title: 'Araç ve Ruhsat Bilgileri',
                                                                html: `İlgili araca ait EGM kaydı bulundu. Fakat <strong>${this.modals.getProposal.form.modelYear}</strong> yılına ait <strong>${this.modals.getProposal.form.modelCode}</strong> model kodlu araç bulunamadı!`,
                                                                confirmButtonColor: '#1565C0',
                                                                confirmButtonText: 'Tamam'
                                                            });
                                                        }
                                                    }
                                                } else {
                                                    this.modals.getProposal.showBrandModelSelectBox = true;

                                                    Swal.fire({
                                                        icon: 'error',
                                                        title: 'Araç ve Ruhsat Bilgileri',
                                                        html: `İlgili araca ait EGM kaydı bulundu. Fakat <strong>${this.modals.getProposal.form.modelYear}</strong> yılına ait <strong>${this.modals.getProposal.form.brandCode}</strong> marka kodlu araç bulunamadı!`,
                                                        confirmButtonColor: '#1565C0',
                                                        confirmButtonText: 'Tamam'
                                                    });
                                                }
                                            } else {
                                                this.modals.getProposal.showBrandModelSelectBox = true;

                                                Swal.fire({
                                                    icon: 'error',
                                                    title: 'Araç ve Ruhsat Bilgileri',
                                                    html: `İlgili araca ait EGM kaydı bulundu. Fakat aracın marka model bilgisine ulaşılamadı! Lütfen araç marka model seçimi yapın.`,
                                                    confirmButtonColor: '#1565C0',
                                                    confirmButtonText: 'Tamam'
                                                });
                                            }
                                        } else {
                                            this.modals.getProposal.showBrandModelSelectBox = true;

                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Araç ve Ruhsat Bilgileri',
                                                html: `İlgili araca ait EGM kaydı bulundu. Fakat veritabanında <strong>${this.modals.getProposal.form.modelYear}</strong> yılına ait araç bulunamadı!`,
                                                confirmButtonColor: '#1565C0',
                                                confirmButtonText: 'Tamam'
                                            });
                                        }
                                    } else {
                                        Swal.fire({
                                            icon: responseEGMSorgu.data.result,
                                            title: 'Araç ve Ruhsat Bilgileri',
                                            html: responseEGMSorgu.data.message,
                                            confirmButtonColor: '#1565C0',
                                            confirmButtonText: 'Tamam'
                                        });
                                    }

                                    this.$Progress.finish();
                                    this.modals.getProposal.disabled = false;
                                    this.disableWatch = false; // Watch izleme açık
                                }
                                break;
                        }
                        break;
                }
            } else {

            }
            
        },
    }
};
</script>

<style lang="scss">
:root {
  --msger-bg: #fff;
  --border: 2px solid #ddd;
  --left-msg-bg: #ececec;
  --right-msg-bg: #4264d5;
}
.floatingTextareaButton {
    position:absolute;
    bottom:15px;
    right:15px;
}
.msger {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 100%;
}
.msger-chat {
  flex: 1;
  overflow-y: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}
.msger-chat::-webkit-scrollbar {
  width: 6px;
}
.msger-chat::-webkit-scrollbar-track {
  background: #ddd;
}
.msger-chat::-webkit-scrollbar-thumb {
  background: #bdbdbd;
}
.msg {
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
}
.msg:last-of-type {
  margin: 0;
}
.msg-bubble {
  max-width: 450px;
  padding: 15px;
  border-radius: 15px;
  background: var(--left-msg-bg);
}
.msg-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.msg-info-name {
  margin-right: 10px;
  font-weight: bold;
}
.msg-info-time {
  font-size: 0.85em;
}
.left-msg .msg-bubble {
  border-bottom-left-radius: 0;
}
.right-msg {
  flex-direction: row-reverse;
}
.right-msg .msg-bubble {
  background: var(--right-msg-bg);
  color: #fff;
  border-bottom-right-radius: 0;
}
.right-msg .msg-img {
  margin: 0 0 0 10px;
}
.accordion-button:focus {
    box-shadow: unset!important;
}
</style>