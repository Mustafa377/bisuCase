<template>
    <div class="custom-container p-3">
        <CRow>
            <template v-if="policyData === null">
                <CCol col="12">
                    <CCard>
                        <CCardBody class="p-4 text-center">
                            <lottie-animation
                                path="lotties/loader1.json"
                                :loop="true"
                                :autoPlay="true"
                                :speed="1.5"
                                :height="150"
                            />
                            <h3 class="m-0 mt-3">Yükleniyor..</h3>
                        </CCardBody>
                    </CCard>
                </CCol>
            </template>
            <template v-else-if="!policyData._id">
                <CCol col="12">
                    <CCard>
                        <CCardBody class="p-4 text-center">
                            <lottie-animation
                                path="lotties/notfound.json"
                                :loop="true"
                                :autoPlay="true"
                                :speed="1.5"
                                :height="150"
                            />
                            <h3 class="m-0 mt-5">Kayıt Bulunamadı!</h3>
                        </CCardBody>
                    </CCard>
                </CCol>
            </template>
            <template v-else-if="policyData._id">
                <CCol lg="8">
                    <!-- Ürün Bilgileri -->
                    <CCard>
                        <CCardHeader class="py-1 pl-3">
                            <h6 class="m-0 font-weight-bold" style="line-height: 35px">Ürün Bilgileri</h6>
                        </CCardHeader>
                        <CCardBody class="p-4">
                            <CRow>
                                <CCol col="4" class="d-none d-md-flex justify-content-center align-items-center">
                                    <lottie-animation
                                        :path="
                                            policyData.type === 'casco' ? 
                                                policyData.productDetail.usageType === 'OTOMOBİL' ? 'lotties/car.json' : 
                                                policyData.productDetail.usageType === 'KAMYONET' ? 'lotties/van.json' : 
                                                'lotties/car.json' : 
                                            policyData.type === 'traffic' ? 
                                                policyData.productDetail.usageType === 'OTOMOBİL' ? 'lotties/car.json' : 
                                                policyData.productDetail.usageType === 'KAMYONET' ? 'lotties/van.json' : 
                                                'lotties/car.json' : 
                                            policyData.type === 'dask' ? 
                                                'lotties/building.json' : 
                                            policyData.type === 'housing' ? 
                                                'lotties/housing.json' : 
                                            ''
                                        "
                                        :loop="false"
                                        :autoPlay="true"
                                        :speed=".5"
                                        :height="150"
                                    />
                                </CCol>
                                <CCol col="12" md="8">
                                    <CRow v-if="policyData.type === 'casco' || policyData.type === 'traffic'">
                                        <CCol col="12" sm="4" class="mb-4">
                                            <h6 class="m-0 font-weight-bold">Marka</h6>
                                            <span>{{ `${policyData.productDetail.brandName} (${policyData.productDetail.brandCode})` }}</span>
                                        </CCol>
                                        <CCol col="12" sm="8" class="mb-4">
                                            <h6 class="m-0 font-weight-bold">Model</h6>
                                            <span>{{ `${policyData.productDetail.modelName} (${policyData.productDetail.modelCode})` }}</span>
                                        </CCol>
                                        <CCol col="12" sm="4" class="mb-4">
                                            <h6 class="m-0 font-weight-bold">Plaka</h6>
                                            <span>{{ policyData.productDetail.plate }}</span>
                                        </CCol>
                                        <CCol col="12" sm="4" class="mb-4">
                                            <h6 class="m-0 font-weight-bold">Ruhsat No - Seri</h6>
                                            <span>{{ policyData.productDetail.licenseSerial + ' - ' + policyData.productDetail.licenseNumber }}</span>
                                        </CCol>
                                        <CCol col="12" sm="4" class="mb-4">
                                            <h6 class="m-0 font-weight-bold">Yakıt</h6>
                                            <span>{{ func.strOnlyFirstCharUpperCase(policyData.productDetail.fuelType) }}</span>
                                        </CCol>
                                        <CCol col="12" sm="4" class="mb-4">
                                            <h6 class="m-0 font-weight-bold">Motor No</h6>
                                            <span>{{ policyData.productDetail.motorNo }}</span>
                                        </CCol>
                                        <CCol col="12" sm="4" class="mb-4">
                                            <h6 class="m-0 font-weight-bold">Şasi No</h6>
                                            <span>{{ policyData.productDetail.chassisNo }}</span>
                                        </CCol>
                                        <CCol col="12" sm="4" class="mb-4">
                                            <h6 class="m-0 font-weight-bold">Model Yılı</h6>
                                            <span>{{ policyData.productDetail.modelYear }}</span>
                                        </CCol>
                                        <CCol col="12" sm="4" class="mb-4 mb-sm-0">
                                            <h6 class="m-0 font-weight-bold">Kullanım Tipi</h6>
                                            <span>{{ func.strOnlyFirstCharUpperCase(policyData.productDetail.usageType) }}</span>
                                        </CCol>
                                        <CCol col="12" sm="4" class="mb-4 mb-sm-0">
                                            <h6 class="m-0 font-weight-bold">Koltuk Sayısı</h6>
                                            <span>{{ policyData.productDetail.seat }}</span>
                                        </CCol>
                                        <CCol col="12" sm="4" class="mb-0">
                                            <h6 class="m-0 font-weight-bold">Trafiğe İlk Çıkış Tarihi</h6>
                                            <span>{{ moment(policyData.productDetail.licenseRegistrationDate).locale('tr').format('DD MMMM YYYY') }}</span>
                                        </CCol>
                                    </CRow>
                                    <CRow v-if="policyData.type === 'dask'">
                                        <CCol col="12" sm="4" class="mb-4">
                                            <h6 class="m-0 font-weight-bold">UAVT Kodu</h6>
                                            <span>{{ `${policyData.productDetail.uavtCode}` }}</span>
                                        </CCol>
                                        <CCol col="12" sm="4" class="mb-4">
                                            <h6 class="m-0 font-weight-bold">Daire (m2)</h6>
                                            <span>{{ `${policyData.productDetail.homeArea}` }}</span>
                                        </CCol>
                                        <CCol col="12" sm="4" class="mb-4">
                                            <h6 class="m-0 font-weight-bold">Bina Yapı Tarzı</h6>
                                            <span>{{ policyData.productDetail.buildingType }}</span>
                                        </CCol>
                                        <CCol col="12" sm="4" class="mb-4">
                                            <h6 class="m-0 font-weight-bold">İnşaat Yılı</h6>
                                            <span>{{ policyData.productDetail.buildingYear }}</span>
                                        </CCol>
                                        <CCol col="12" sm="4" class="mb-4">
                                            <h6 class="m-0 font-weight-bold">Toplam Kat</h6>
                                            <span>{{ policyData.productDetail.totalFloor }}</span>
                                        </CCol>
                                        <CCol col="12" sm="4" class="mb-4">
                                            <h6 class="m-0 font-weight-bold">Kullanım Tarzı</h6>
                                            <span>{{ policyData.productDetail.usageType }}</span>
                                        </CCol>
                                        <CCol col="12" sm="4" class="mb-4 mb-sm-0">
                                            <h6 class="m-0 font-weight-bold">Sigorta Ettiren</h6>
                                            <span>{{ policyData.productDetail.insuredTitle }}</span>
                                        </CCol>
                                    </CRow>
                                    <CRow v-if="policyData.type === 'housing'">
                                        <CCol col="12" sm="4" class="mb-4">
                                            <h6 class="m-0 font-weight-bold">UAVT Kodu</h6>
                                            <span>{{ `${policyData.productDetail.uavtCode}` }}</span>
                                        </CCol>
                                        <CCol col="12" sm="4" class="mb-4">
                                            <h6 class="m-0 font-weight-bold">Daire (m2)</h6>
                                            <span>{{ `${policyData.productDetail.homeArea}` }}</span>
                                        </CCol>
                                        <CCol col="12" sm="4" class="mb-4">
                                            <h6 class="m-0 font-weight-bold">Bina Yapı Tarzı</h6>
                                            <span>{{ policyData.productDetail.buildingType }}</span>
                                        </CCol>
                                        <CCol col="12" sm="4" class="mb-4">
                                            <h6 class="m-0 font-weight-bold">İnşaat Yılı</h6>
                                            <span>{{ policyData.productDetail.buildingYear }}</span>
                                        </CCol>
                                        <CCol col="12" sm="4" class="mb-4">
                                            <h6 class="m-0 font-weight-bold">Daire Kat</h6>
                                            <span>{{ policyData.productDetail.apartmentFloor }}</span>
                                        </CCol>
                                    </CRow>
                                </CCol>
                            </CRow>
                        </CCardBody>
                    </CCard>

                    <!-- Sigorta ve Firma Bilgileri -->
                    <CCard>
                        <CCardHeader class="py-1 pl-3">
                            <h6 class="m-0 font-weight-bold" style="line-height: 35px">Sigorta ve Firma Bilgileri</h6>
                        </CCardHeader>
                        <CCardBody class="p-4">
                            <CRow>
                                <CCol col="12" md="4" class="d-flex justify-content-center align-items-center">
                                    <img
                                        :src="VUE_APP_CDN_URL + VUE_APP_CDN_URL_INSURANCE_COMPANY_IMAGE_DIR + policyData.companyDetail.logo"
                                        :alt="policyData.companyDetail.name"
                                        :title="policyData.companyDetail.name"
                                    >
                                </CCol>
                                <CCol col="12" md="8" class="mt-4 mt-md-0">
                                    <CRow>
                                        <CCol col="12" sm="4" class="mb-4">
                                            <h6 class="m-0 font-weight-bold">Firma Adı</h6>
                                            <span>{{ policyData.companyDetail.name }}</span>
                                        </CCol>
                                        <CCol col="12" sm="4" class="mb-4">
                                            <h6 class="m-0 font-weight-bold">Sigorta Türü</h6>
                                            <span>{{ insuranceTypes[policyData.type] ? insuranceTypes[policyData.type] : '---' }}</span>
                                        </CCol>
                                        <CCol col="12" sm="4" class="mb-4">
                                            <h6 class="m-0 font-weight-bold">Sigorta Adı</h6>
                                            <span>{{ policyData.name }}</span>
                                        </CCol>
                                        <template v-if="policyData.type === 'casco' || policyData.type === 'traffic'">
                                            <CCol col="12" sm="4" class="mb-4">
                                                <h6 class="m-0 font-weight-bold">Poliçe Başlangıç Tarihi</h6>
                                                <span>{{ moment(policyData.beginDate).locale('tr').format('DD MMMM YYYY') }}</span>
                                            </CCol>
                                            <CCol col="12" sm="4" class="mb-4">
                                                <h6 class="m-0 font-weight-bold">Poliçe Bitiş Tarihi</h6>
                                                <span>{{ moment(policyData.endDate).locale('tr').format('DD MMMM YYYY') }}</span>
                                            </CCol>
                                            <CCol col="12" sm="4" class="mb-4">
                                                <h6 class="m-0 font-weight-bold">Önceki Acente Kodu</h6>
                                                <span>{{ policyData.productDetail.previousPolicy.agencyCode !== '' ? policyData.productDetail.previousPolicy.agencyCode : '---' }}</span>
                                            </CCol>
                                            <CCol col="12" sm="4" class="mb-4 mb-sm-0">
                                                <h6 class="m-0 font-weight-bold">Önceki Firma Kodu</h6>
                                                <span>{{ policyData.productDetail.previousPolicy.companyCode !== '' ? policyData.productDetail.previousPolicy.companyCode : '---' }}</span>
                                            </CCol>
                                            <CCol col="12" sm="4" class="mb-4 mb-sm-0">
                                                <h6 class="m-0 font-weight-bold">Önceki Poliçe No</h6>
                                                <span>{{ policyData.productDetail.previousPolicy.policyNo !== '' ? policyData.productDetail.previousPolicy.policyNo : '---' }}</span>
                                            </CCol>
                                            <CCol col="12" sm="4" class="mb-0">
                                                <h6 class="m-0 font-weight-bold">Önceki Yenileme No</h6>
                                                <span>{{ policyData.productDetail.previousPolicy.renewalNo !== '' ? policyData.productDetail.previousPolicy.renewalNo : '---' }}</span>
                                            </CCol>
                                        </template>
                                        <template v-if="policyData.type === 'dask' || policyData.type === 'housing'">
                                            <CCol col="12" sm="6" class="mb-4">
                                                <h6 class="m-0 font-weight-bold">Poliçe Başlangıç Tarihi</h6>
                                                <span>{{ moment(policyData.beginDate).locale('tr').format('DD MMMM YYYY') }}</span>
                                            </CCol>
                                            <CCol col="12" sm="6" class="mb-4">
                                                <h6 class="m-0 font-weight-bold">Poliçe Bitiş Tarihi</h6>
                                                <span>{{ moment(policyData.endDate).locale('tr').format('DD MMMM YYYY') }}</span>
                                            </CCol>
                                            <CCol col="12" sm="6" class="mb-4">
                                                <h6 class="m-0 font-weight-bold">Önceki Acente</h6>
                                                <span>{{ policyData.productDetail.previousPolicy.agencyCode !== '' ? policyData.productDetail.previousPolicy.agencyName + ' (' + policyData.productDetail.previousPolicy.agencyCode + ')' : '---' }}</span>
                                            </CCol>
                                            <CCol col="12" sm="6" class="mb-4 mb-sm-0">
                                                <h6 class="m-0 font-weight-bold">Önceki Firma</h6>
                                                <span>{{ policyData.productDetail.previousPolicy.companyCode !== '' ? policyData.productDetail.previousPolicy.companyName + ' (' + policyData.productDetail.previousPolicy.companyCode + ')' : '---' }}</span>
                                            </CCol>
                                            <CCol col="12" sm="6" class="mb-4 mb-sm-0">
                                                <h6 class="m-0 font-weight-bold">Önceki Poliçe No</h6>
                                                <span>{{ policyData.productDetail.previousPolicy.policyNo !== '' ? policyData.productDetail.previousPolicy.policyNo : '---' }}</span>
                                            </CCol>
                                            <CCol col="12" sm="6" class="mb-0">
                                                <h6 class="m-0 font-weight-bold">Önceki Yenileme No</h6>
                                                <span>{{ policyData.productDetail.previousPolicy.renewalNo !== '' ? policyData.productDetail.previousPolicy.renewalNo : '---' }}</span>
                                            </CCol>
                                        </template>
                                    </CRow>
                                </CCol>
                            </CRow>
                        </CCardBody>
                    </CCard>

                    <!-- Teminatlar -->
                    <CCard v-if="policyData.errors.length === 0 && policyData.authorizations.length === 0">
                        <CCardHeader class="py-1 pl-3 d-flex flex-row justify-content-between align-items-center">
                            <h6 class="m-0 font-weight-bold" style="line-height: 35px">Teminatlar</h6>
                            <CButton
                                size="sm"
                                variant="outline"
                                style="color: #fff;"
                                class="font-weight-bold"
                                @click="() => { 
                                    // coverageExpansions dizisindeki tüm objelerin değerlerinden herhangi birinin false olması durumunda tüm objelerin değerlerini true yap, aksi halde false yap
                                    coverageExpansions.every(item => item[Object.keys(item)[0]] === true) ? 
                                        coverageExpansions.forEach(item => item[Object.keys(item)[0]] = false) 
                                    :
                                        coverageExpansions.forEach(item => item[Object.keys(item)[0]] = true)
                                }"
                            >
                            <!-- Value of all objects in coverageExpansions array is true fa-compress-arrows-alt, otherwise make fa-expand-arrows-alt -->
                            <i :class="['fas', coverageExpansions.every(item => item[Object.keys(item)[0]] === true) ? 'fa-compress-arrows-alt' : 'fa-expand-arrows-alt']"></i>
                            </CButton>
                        </CCardHeader>
                        <CCardBody class="p-3">
                            <CCard :class="['m-0', i === 0 ? '':'mt-2']" v-for="(coverageGroup, i) in coverageCategories" :key="i">
                                <CCardHeader class="py-1 pl-3 cursor-pointer d-flex flex-row justify-content-between align-items-center" @click="coverageExpansions[i][i] = !coverageExpansions[i][i]">
                                    <h6 class="m-0 font-weight-bold" style="line-height: 35px">{{ coverageGroup.name }}</h6>
                                    <i :class="['fas', coverageExpansions[i][i] ? 'fa-chevron-down' : 'fa-chevron-up']"></i>
                                </CCardHeader>
                                <CCollapse :show="coverageExpansions[i][i] === true">
                                    <CCardBody class="p-0">
                                        <ul class="list-group list-group-flush">
                                            <template v-for="(cover, i) in coverageGroup.covers">
                                                <li class="list-group list-group-item rounded-0 d-flex flex-row px-3" :key="i">
                                                    <div style="width: 15px;" class="mr-2 d-flex flex-row justify-content-center align-items-center">
                                                        <i :class="[`fas ${policyResultData.covers.filter(e => e.ownCode === cover.ownCode).length === 0 ? 'fa-times text-danger':'fa-check text-primary'} font-weight-normal`]"></i>
                                                    </div>
                                                    <div class="d-flex flex-row justify-content-between align-items-center w-100">
                                                        <div>
                                                            <p class="m-0">
                                                                {{ cover.name }}
                                                                <i :id="'cover-description-tooltip' + cover.ownCode" class="fas fa-info-circle ml-2 text-dark cursor-pointer" v-if="cover.description !== ''"></i>
                                                                <b-tooltip :target="'cover-description-tooltip' + cover.ownCode" :triggers="'hover'" :placement="'right'">
                                                                    <div v-html="`<h6 class='font-weight-bold text-center'>${cover.name}</h6>${cover.description}`"/>
                                                                </b-tooltip>
                                                            </p>
                                                            <p class="m-0 text-muted" 
                                                                v-html="
                                                                    policyResultData.editableCoverList.filter(e => e.ownCode === cover.ownCode)[0].fields[0].inputType === 'select' ? 
                                                                        policyResultData.editableCoverList.filter(e => e.ownCode === cover.ownCode)[0].fields[0].options.length > 0 ? 
                                                                            policyResultData.editableCoverList.filter(e => e.ownCode === cover.ownCode)[0].fields[0].options.filter(e => e.value === policyResultData.editableCoverList.filter(e => e.ownCode === cover.ownCode)[0].fields[0].selectedValue)[0].label
                                                                        :
                                                                            ''
                                                                    :
                                                                        policyResultData.editableCoverList.filter(e => e.ownCode === cover.ownCode)[0].fields[0].inputType === 'input' ? 
                                                                            moneyFormat.format(policyResultData.editableCoverList.filter(e => e.ownCode === cover.ownCode)[0].fields[0].selectedValue, { code: 'TRY', symbol: 'TRY', format: '%v %s' })
                                                                        :
                                                                            policyResultData.editableCoverList.filter(e => e.ownCode === cover.ownCode)[0].fields[0].inputType === 'check' ?
                                                                                policyResultData.editableCoverList.filter(e => e.ownCode === cover.ownCode)[0].fields[0].selectedValue === true ? 'Var' : 'Yok'
                                                                            :
                                                                                ''

                                                                "
                                                                v-if="policyResultData.editableCoverList.filter(e => e.ownCode === cover.ownCode).length > 0"
                                                            />
                                                        </div>
                                                    </div>
                                                </li>
                                            </template>
                                        </ul>
                                    </CCardBody>
                                </CCollapse>
                            </CCard>
                        </CCardBody>
                    </CCard>

                    <!-- Hatalar -->
                    <CCard v-if="policyData.errors.length > 0">
                        <CCardHeader class="py-1 pl-3 bg-danger">
                            <h6 class="m-0 font-weight-bold" style="line-height: 35px">Hatalar</h6>
                        </CCardHeader>
                        <CCardBody class="p-4">
                            <pre>{{ JSON.stringify(policyData.errors, null, 2) }}</pre>
                        </CCardBody>
                    </CCard>

                    <!-- Otorizasyon -->
                    <CCard v-if="policyData.authorizations.length > 0">
                        <CCardHeader class="py-1 pl-3 bg-danger">
                            <h6 class="m-0 font-weight-bold" style="line-height: 35px">Otorizasyon</h6>
                        </CCardHeader>
                        <CCardBody class="p-4">
                            <pre>{{ JSON.stringify(policyData.authorizations, null, 2) }}</pre>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol lg="4">
                    <!-- Genel Bilgiler -->
                    <CCard>
                        <CCardHeader class="py-1 pl-3">
                            <h6 class="m-0 font-weight-bold" style="line-height: 35px">Genel Bilgiler</h6>
                        </CCardHeader>
                        <CCardBody class="py-3 pl-3">
                            <CRow>
                                <CCol col="5">
                                    <span class="font-weight-bold">Acente Poliçe No</span>
                                </CCol>
                                <CCol col="7">
                                    : {{ policyData.agentPolicyNo }}
                                    <i class="far fa-copy fa-lg ml-1 cursor-pointer" @click="func.copyToClipboard2(policyData.agentPolicyNo)" />
                                </CCol>
                                <CCol col="5" class="mt-2">
                                    <span class="font-weight-bold">Firma Poliçe No</span>
                                </CCol>
                                <CCol col="7" class="mt-2">
                                    : {{ policyData.companyPolicyNo }}
                                    <i class="far fa-copy fa-lg ml-1 cursor-pointer" @click="func.copyToClipboard2(policyData.companyPolicyNo)" />
                                </CCol>
                                <CCol col="5" class="mt-2">
                                    <span class="font-weight-bold">Oluşturulma Tarihi:</span>
                                </CCol>
                                <CCol col="7" class="mt-2">
                                    : {{ moment(policyData.createdDate).locale('tr').format('LLLL') }}
                                </CCol>
                                <CCol col="5" class="mt-2">
                                    <span class="font-weight-bold">İşlem Yapan:</span>
                                </CCol>
                                <CCol col="7" class="mt-2">
                                    : {{ 
                                        policyData.member ? 
                                            `${policyData.member.name} ${policyData.member.lastname} ${
                                                policyData.member.accountType === 'individual' ? 
                                                    '(Bireysel Üye)' :
                                                policyData.member.accountType === 'corporate' ? 
                                                    '(Kurumsal Üye)' :
                                                '---'
                                            }` : 
                                        policyData.user ? 
                                            `${policyData.user.name} ${policyData.user.lastname} ${
                                                policyData.user.accountType === 'admin' ? 
                                                    '(Yönetici)' :
                                                policyData.user.accountType === 'partner' ? 
                                                    '(Partner)' :
                                                ''
                                            }` : 
                                        'Ziyaretçi'
                                    }}
                                </CCol>
                                <CCol col="5" class="mt-2">
                                    <span class="font-weight-bold">İşlem Durumu:</span>
                                </CCol>
                                <CCol col="7" class="mt-2">
                                    : <span class="font-weight-bold text-success">Poliçeleştirildi</span>
                                </CCol>
                                <CCol col="5" class="mt-2">
                                    <span class="font-weight-bold">Çalışma Ortamı:</span>
                                </CCol>
                                <CCol col="7" class="mt-2">
                                    : <span :class="[
                                        'font-weight-bold', 
                                        policyData.env === 'development' ? 
                                            'text-warning' :
                                        policyData.env === 'production' ? 
                                            'text-success' :
                                        ''
                                    ]">
                                    {{ 
                                        policyData.env === 'development' ? 
                                            'Geliştirme Ortamı' :
                                        policyData.env === 'production' ? 
                                            'Canlı Ortam' :
                                        '---'
                                    }}
                                    </span>
                                </CCol>
                            </CRow>
                        </CCardBody>
                    </CCard>

                    <!-- Sigortalı Bilgileri -->
                    <CCard>
                        <CCardHeader class="py-1 pl-3">
                            <h6 class="m-0 font-weight-bold" style="line-height: 35px">Sigortalı Bilgileri</h6>
                        </CCardHeader>
                        <CCardBody class="py-3 pl-3">
                            <CRow>
                                <CCol col="5" v-if="policyData.insured.identityType === 'tckn' || policyData.insured.identityType === 'ykn'">
                                    <span class="font-weight-bold">Adı</span>
                                </CCol>
                                <CCol col="7" v-if="policyData.insured.identityType === 'tckn' || policyData.insured.identityType === 'ykn'">
                                    : {{ policyData.insured.name }}
                                </CCol>
                                <CCol col="5" class="mt-2" v-if="policyData.insured.identityType === 'tckn' || policyData.insured.identityType === 'ykn'">
                                    <span class="font-weight-bold">Soyadı</span>
                                </CCol>
                                <CCol col="7" class="mt-2" v-if="policyData.insured.identityType === 'tckn' || policyData.insured.identityType === 'ykn'">
                                    : {{ policyData.insured.lastname }}
                                </CCol>
                                <CCol col="5" class="mt-2" v-if="policyData.insured.identityType === 'vkn'">
                                    <span class="font-weight-bold">Ünvan</span>
                                </CCol>
                                <CCol col="7" class="mt-2" v-if="policyData.insured.identityType === 'vkn'">
                                    : {{ policyData.insured.title }}
                                </CCol>
                                <CCol col="5" class="mt-2">
                                    <span class="font-weight-bold">Kimlik Numarası</span>
                                </CCol>
                                <CCol col="7" class="mt-2">
                                    : {{ policyData.insured.identityNumber }}
                                </CCol>
                                <CCol col="5" class="mt-2" v-if="policyData.insured.identityType === 'tckn' || policyData.insured.identityType === 'ykn'">
                                    <span class="font-weight-bold">Doğum Tarihi:</span>
                                </CCol>
                                <CCol col="7" class="mt-2" v-if="policyData.insured.identityType === 'tckn' || policyData.insured.identityType === 'ykn'">
                                    : {{ moment(policyData.insured.birthDate).locale('tr').format('DD.MM.YYYY') }}
                                </CCol>
                                <CCol col="5" class="mt-2">
                                    <span class="font-weight-bold">Telefon:</span>
                                </CCol>
                                <CCol col="7" class="mt-2">
                                    : {{ func.formatPhoneNumber(policyData.insured.phone) }}
                                </CCol>
                                <CCol col="5" class="mt-2">
                                    <span class="font-weight-bold">E-Posta:</span>
                                </CCol>
                                <CCol col="7" class="mt-2">
                                    : {{ policyData.insured.email }}
                                </CCol>
                            </CRow>
                        </CCardBody>
                    </CCard>

                    <!-- Ücret Bilgileri -->
                    <CCard v-if="policyData.errors.length === 0 && policyData.authorizations.length === 0">
                        <CCardHeader class="py-1 pl-3">
                            <h6 class="m-0 font-weight-bold" style="line-height: 35px">Ücret Bilgileri</h6>
                        </CCardHeader>
                        <CCardBody class="py-3 pl-3">
                            <CRow>
                                <CCol col="4" v-if="policyResultData.updateDate && policyData.priceDetail.nonDiscountPrice !== policyData.priceDetail.priceTotal">
                                    <span class="font-weight-bold">İlk Fiyat</span>
                                </CCol>
                                <CCol col="8" style="text-decoration: line-through;" v-if="policyResultData.updateDate && policyData.priceDetail.nonDiscountPrice !== policyData.priceDetail.priceTotal">
                                    : {{ moneyFormat.format(policyData.priceDetail.nonDiscountPrice, { code: 'TRY', symbol: 'TRY', format: '%v %s' }) }}
                                </CCol>
                                <CCol col="4" :class="{ 'mt-2': policyResultData.updateDate }">
                                    <span class="font-weight-bold">Toplam Fiyat</span>
                                </CCol>
                                <CCol col="8" :class="{ 'mt-2': policyResultData.updateDate }">
                                    : {{ moneyFormat.format(policyData.priceDetail.priceTotal, { code: 'TRY', symbol: 'TRY', format: '%v %s' }) }}
                                </CCol>
                                <CCol col="4" class="mt-2">
                                    <span class="font-weight-bold">Prim Fiyatı</span>
                                </CCol>
                                <CCol col="8" class="mt-2">
                                    : {{ moneyFormat.format(policyData.priceDetail.pricePremium, { code: 'TRY', symbol: 'TRY', format: '%v %s' }) }}
                                </CCol>
                                <CCol col="4" class="mt-2">
                                    <span class="font-weight-bold">Vergi Fiyatı</span>
                                </CCol>
                                <CCol col="8" class="mt-2">
                                    : {{ moneyFormat.format(policyData.priceDetail.priceTax, { code: 'TRY', symbol: 'TRY', format: '%v %s' }) }}
                                </CCol>
                                <CCol col="4" class="mt-2" v-if="this.$store.state.user.accountType === 'admin'">
                                    <span class="font-weight-bold">Komisyon Fiyatı</span>
                                </CCol>
                                <CCol col="8" class="mt-2" v-if="this.$store.state.user.accountType === 'admin'">
                                    : {{ moneyFormat.format(policyData.priceDetail.priceCommission, { code: 'TRY', symbol: 'TRY', format: '%v %s' }) }}
                                </CCol>
                                <CCol col="4" class="mt-2" v-if="policyData.partnerId">
                                    <span class="font-weight-bold">Partner Komisyon Fiyatı</span>
                                </CCol>
                                <CCol col="8" class="mt-2" v-if="policyData.partnerId"> 
                                    : {{ moneyFormat.format(policyData.partnerCommissionAmount, { code: 'TRY', symbol: 'TRY', format: '%v %s' }) }}
                                </CCol>
                                <CCol col="4" class="mt-2">
                                    <span class="font-weight-bold">Ödeme Şekli</span>
                                </CCol>
                                <CCol col="8" class="mt-2">
                                    : {{ policyData.priceDetail.installmentDetail.count > 1 ? `${policyData.priceDetail.installmentDetail.count} Eşit Taksit` : `Peşin` }}
                                </CCol>
                                <CCol col="4" class="mt-2" v-if="policyData.priceDetail.installmentDetail.count > 1">
                                    <span class="font-weight-bold">Ödeme Planı</span>
                                </CCol>
                                <CCol col="8" class="mt-2" v-if="policyData.priceDetail.installmentDetail.count > 1">
                                    <p class="m-0" v-for="(plan, i) in policyData.priceDetail.installmentDetail.plan" :key="i" v-html="`
                                        ${
                                            policyData.priceDetail.installmentDetail.advancePayment === true ? 
                                            (i+1 === 1 ? '<strong>Peşinat</strong> ' : '<strong>' + ((i+1) - 1) + '.</strong> ') + moneyFormat.format(plan.price, { code: 'TRY', symbol: 'TRY', format: '%v %s' }) + ' - ' + moment(plan.date).format('DD.MM.YYYY'): 
                                            '<strong>' + (i+1) + '.</strong> ' + moneyFormat.format(plan.price, { code: 'TRY', symbol: 'TRY', format: '%v %s' }) + ' - ' + moment(plan.date).format('DD.MM.YYYY')
                                        }
                                    `"/>
                                </CCol>
                                <CCol col="12" class="mt-2">
                                    <hr class="m-0">
                                </CCol>
                                <CCol col="4" class="mt-2">
                                    <span class="font-weight-bold">Ödenen Tutar</span>
                                </CCol>
                                <CCol col="8" class="mt-2 text-right font-weight-bold">
                                    {{ moneyFormat.format(policyData.priceDetail.priceTotal, { code: 'TRY', symbol: 'TRY', format: '%v %s' }) }}
                                </CCol>
                            </CRow>
                        </CCardBody>
                    </CCard>

                    <!-- Buttons -->
                    <CCard>
                        <CCardBody class="py-3 pl-3">
                            <CRow>
                                <CCol col="12">
                                    <CButton
                                        block
                                        color="success"
                                        class="font-weight-bold"
                                        :disabled="disabled"
                                        @click="getPolicyPDF('view')"
                                    ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="disabled" />Poliçe Belgesini Görüntüle
                                    </CButton>
                                </CCol>
                                <CCol col="12" class="mt-2">
                                    <CButton
                                        block
                                        color="info"
                                        class="font-weight-bold"
                                        :disabled="disabled"
                                        @click="sendPolicyToInsuredByEmail()"
                                    ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="disabled" />E-Posta Olarak Gönder
                                    </CButton>
                                </CCol>
                                <CCol col="12" class="mt-2">
                                    <CButton
                                        block
                                        color="danger"
                                        class="font-weight-bold"
                                        :disabled="disabled"
                                        @click="closeWindow()"
                                    ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="disabled" />Kapat
                                    </CButton>
                                </CCol>
                            </CRow>
                        </CCardBody>
                    </CCard>
                </CCol>
            </template>
        </CRow>
   </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import Func from '@/func';
import Swal from 'sweetalert2';
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
import CardCheckBox from '../../components/CardCheckBox';
import RadioButton from '@/components/RadioButton';
import { VueMaskDirective } from 'v-mask';
Vue.directive('mask', VueMaskDirective);

export default {
    name: 'PolicyDetail',
    components: {
        LottieAnimation,
        CardCheckBox,
        RadioButton
    },
    data() {
        return {
            VUE_APP_CDN_URL: process.env.VUE_APP_CDN_URL,
            VUE_APP_CDN_URL_INSURANCE_COMPANY_IMAGE_DIR: process.env.VUE_APP_CDN_URL_INSURANCE_COMPANY_IMAGE_DIR,
            func: Func,
            swal: Swal,
            disabled: false,
            insuranceTypes: {
                casco: 'Kasko Sigortası',
                traffic: 'Trafik Sigortası',
                dask: 'DASK Sigortası',
                housing: 'Konut Sigortası',
                privHealth: 'Özel Sağlık Sigortası',
                compHealth: 'Tamamlayıcı Sağlık Sigortası'
            },
            policyData: null,
            policyResultData: null,
            coverageExpansions: [],
            coverageCategories: [],

            search: {
                agentPolicyNo: '',
                companyPolicyNo: ''
            }
        };
    },
    created() {
        if(this.$route.params.agentPolicyNo) this.search.agentPolicyNo = this.$route.params.agentPolicyNo;
        else if(this.$route.params.companyPolicyNo) this.search.companyPolicyNo = this.$route.params.companyPolicyNo;
        else this.$router.push('/');

        this.$store.commit('closeSidebar');
        
        this.getPolicy();
    },
    methods: {
        closeWindow() {
            window.close();
        },
        openModal(modal, title, _process = '', data = null) {
            modal.show = true;
        },
        closeModal(modal) {
            modal.show = false;
        },
        async getPolicy() {
            this.$Progress.start();
            this.disabled = true;

            var policyResponse = await axios.get(process.env.VUE_APP_API_URL + 'admin/policy', { params: this.search });

            if(policyResponse.data.result === 'success') {
                if(policyResponse.data.list.length > 0) {
                    this.policyData = policyResponse.data.list[0];
                    this.policyResultData = this.policyData.result;
                    
                    var coverageDictionary = await axios.get(process.env.VUE_APP_API_URL + 'general/coveragedictionary/' + this.policyData.companyDetail.name + '/' + this.policyData.companyDetail.apiFolder + '/' + this.policyData.type);
                    
                    this.coverageExpansions = []; // Teminat Genişlemeleri Array'ini temizledik.
                    this.coverageCategories = []; // Teminat Kategorileri Array'ini temizledik.
                    
                    coverageDictionary.data.dictionary.forEach((group, i) => { // Teminat sözlüğünü döndürdük.
                        this.coverageExpansions.push({ [i]: true }); // Teminat Genişlemeleri Array'ine teminat kategorilerinin açılıp kapanmasını kontrol edecek değişkenleri ekledik.
                        var resultCovers = []; // Teminat kategorisindeki teminatları tutacak array.

                        Object.values(group.covers).forEach(cover => { // Teminat kategorisindeki teminatları döndürdük.
                            if(Array.isArray(cover) && cover.length > 0) { // Eğer teminat kategorisinde birden fazla teminat varsa
                                cover.forEach(c => { // Teminatları döndürdük.
                                    resultCovers.push(c); // Teminatları array'e ekledik.
                                });
                            } else resultCovers.push(cover); // Eğer teminat kategorisinde sadece bir teminat varsa array'e ekledik.
                        });

                        if(resultCovers.length > 0) { // Eğer teminat kategorisinde teminat varsa
                            this.coverageCategories.push({ // Teminat Kategorileri Array'ine teminat kategorisini ekledik.
                                key: group.key, // Teminat Kategorisi Key
                                name: group.name, // Teminat Kategorisi Adı
                                covers: Func.arrSort(resultCovers, 'name', '>') // Teminatları isme göre sıraladık.
                            });
                        }
                    });

                    // DÜZENLENEBİLİR TEMİNATLAR
                    var editableCovers = {}; // Düzenlenebilir teminatlar için dizi oluşturduk.
                    for (let i = 0; i < this.policyResultData.editableCoverList.length; i++) {
                        const cover = this.policyResultData.editableCoverList[i];
                        
                        editableCovers[cover.ownCode] = []; // Düzenlenebilir teminatlar için obje içerisine teminat kodu ile boş array ekledik.

                        // if(cover.ownCode === 'MESLEK') cover.fields[0].options = Func.arrSort(cover.fields[0].options, 'label', '>'); // MESLEKLER SIRALANIYOR (A-Z)

                        cover.fields.forEach(field => { // Düzenlenebilir teminatın alanlarını döndürdük.
                            editableCovers[cover.ownCode].push(field.selectedValue); // Düzenlenebilir teminatlar için obje içerisindeki teminat kodu ile array'e alan değerini ekledik.
                        });
                    }

                    this.$Progress.finish();
                    this.disabled = false;
                } else {
                    this.$Progress.fail();
                    this.disabled = false;
                    
                    this.policyData = null;
                    this.policyResultData = null;
                }
            } else {
                this.$Progress.fail();
                this.disabled = false;
                
                this.policyData = null;
                this.policyResultData = null;
            }
        },
        async getPartnerCompany() {
            var PartnerCompanyResult = await axios.get(process.env.VUE_APP_API_URL + 'admin/partnerCompanies/' + this.$store.state.user.partnerId);

            if(PartnerCompanyResult.data.result === 'success') this.partnerCompany = PartnerCompanyResult.data.list[0];
            else this.partnerCompany = [];
        },
        async getPolicyPDF(_process) {
            if(this.policyData.authorizations.length > 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Poliçe Belgesini Görüntüle',
                    html: 'Poliçenin otorizasyonda olmasından dolayı belge oluşturulamıyor. Lütfen aşağıdaki otorizasyon durumlarını kontrol edin.',
                    confirmButtonColor: '#1565C0',
                    confirmButtonText: 'Tamam',
                    didClose: () => window.scrollTo(0, document.body.scrollHeight) // Scroll'u sayfanın en altına attık
                });

                return;
            }

            this.$Progress.start();
            this.disabled = true;
            var policyPDFResult = await axios.get(process.env.VUE_APP_API_URL + 'admin/policypdf', { params: { agentPolicyNo: this.policyData.agentPolicyNo } });
            this.$Progress.finish();
            this.disabled = false;

            if(policyPDFResult.data.result === 'success') {
                if(_process === 'view') window.open(policyPDFResult.data.fileUrl, '_blank');
                else if(_process === 'download') {
                    /* var a = document.createElement('a');
                    a.href = response.data.fileUrl;
                    //a.target = '_blank';
                    a.setAttribute('download', response.data.fileName)
                    //a.download = response.data.fileName;
                    a.click();
                    a.remove(); */

                    //setTimeout(() => window.URL.revokeObjectURL(this.srcPDF), 100);
                }
            } else {
                Swal.fire({
                    width: '50rem',
                    icon: policyPDFResult.data.result,
                    title: 'Poliçe Belgesini Görüntüle',
                    html: `
                        <div class="row">
                            <div class="col-12">${policyPDFResult.data.message}</div>
                            ${policyPDFResult.data.errMessage ? `<div class="col-12 mt-3"><pre class="text-left" style="height: 250px; white-space: break-spaces; color: white; background-color: #1565C0; padding: 10px 10px; border-radius: 5px;">${JSON.stringify(policyPDFResult.data.errMessage, null, 2)}</pre></div>` : ``}
                        </div>
                    `,
                    confirmButtonColor: '#1565C0',
                    confirmButtonText: 'Tamam'
                });
            }
        },
        sendPolicyToInsuredByEmail() {
            Swal.fire({
                icon: 'question',
                title: 'Poliçeyi E-Posta Olarak Gönder',
                html: `Bu poliçeyi<br><strong>${this.policyData.insured.name} ${this.policyData.insured.lastname} (${this.policyData.insured.email})</strong><br>isimli sigortalıya e-posta olarak göndermek istiyor musunuz?`,
                confirmButtonColor: '#1565C0',
                confirmButtonText: 'Gönder',
                showCancelButton: true,
                cancelButtonText: 'Kapat'
            }).then(result => {
                if(result.isConfirmed) {
                    this.$Progress.start();
                    this.disabled = true;
                    //Func.setWindowClosedPrompt(true); // Pencere kapatma uyarısı aktif

                    var params = {
                        agentPolicyNo: this.policyData.agentPolicyNo,
                        addResults: true
                    }

                    axios.post(process.env.VUE_APP_API_URL + 'admin/proposal/result/sendPolicyToInsuredByEmail', params).then(response => {
                        this.$Progress.finish();
                        this.disabled = false;
                        //Func.setWindowClosedPrompt(false); // Pencere kapatma uyarısı pasif

                        Swal.fire({
                            icon: response.data.result,
                            width: 500,
                            title: response.data.message,
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
                    });
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