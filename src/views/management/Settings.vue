<template>
    <div class="p-4">
        <CRow>
            <CCol col="12">
                <CCard>
                    <CCardHeader class="px-3 py-2 card-header-radius">
                        <CNav variant="pills" role="tablist" layout="fill">
                            <CNavItem v-for="(panel, i) in tabsPanel.panels" :key="i">
                                <div :class="['nav-link-custom', tabsPanel.key === panel.key ? 'active':'']" @click="tabsPanel.key = panel.key, getSettings(panel.key)">
                                    {{ panel.value }}
                                </div>
                            </CNavItem>
                        </CNav>
                    </CCardHeader>
                </CCard>
            </CCol>

            <CCol col="12" v-if="tabsPanel.key === 'generalSettings'">
                <CRow>
                    <CCol md="12" lg="8">
                        <CCard>
                            <CCardHeader>
                                <span style="line-height: 35px"><strong>Genel Ayarlar</strong></span>
                                <div class="card-header-actions"></div>
                            </CCardHeader>
                            <CCardBody class="p-3">
                                <CRow>
                                    <CCol md="6">
                                        <CInput 
                                            type="text" 
                                            v-model="generalSettings.form.siteURL"
                                            :label="generalSettings.fields.siteURL.label"
                                            :placeholder="generalSettings.fields.siteURL.placeHolder" 
                                            :class="{'anim-shake': generalSettings.fields.siteURL.shake}" 
                                            :invalid-feedback="generalSettings.fields.siteURL.valid.text" 
                                            :is-valid="generalSettings.fields.siteURL.valid.value" 
                                            :disabled="generalSettings.disabled" 
                                            @input="validInput($event, generalSettings.fields.siteURL)" /> 
                                    </CCol>
                                    <CCol md="6">
                                        <CInput 
                                            type="text" 
                                            v-model="generalSettings.form.siteName"
                                            :label="generalSettings.fields.siteName.label"
                                            :placeholder="generalSettings.fields.siteName.placeHolder" 
                                            :class="{'anim-shake': generalSettings.fields.siteName.shake}" 
                                            :invalid-feedback="generalSettings.fields.siteName.valid.text" 
                                            :is-valid="generalSettings.fields.siteName.valid.value" 
                                            :disabled="generalSettings.disabled" 
                                            @input="validInput($event, generalSettings.fields.siteName)" /> 
                                    </CCol>
                                    <CCol md="6">
                                        <CInput 
                                            type="text" 
                                            v-model="generalSettings.form.siteTitle"
                                            :label="generalSettings.fields.siteTitle.label"
                                            :placeholder="generalSettings.fields.siteTitle.placeHolder" 
                                            :class="{'anim-shake': generalSettings.fields.siteTitle.shake}" 
                                            :invalid-feedback="generalSettings.fields.siteTitle.valid.text" 
                                            :is-valid="generalSettings.fields.siteTitle.valid.value" 
                                            :disabled="generalSettings.disabled" 
                                            @input="validInput($event, generalSettings.fields.siteTitle)" /> 
                                    </CCol>
                                    <CCol md="6">
                                        <CInput 
                                            type="text" 
                                            v-model="generalSettings.form.siteDesc"
                                            :label="generalSettings.fields.siteDesc.label"
                                            :placeholder="generalSettings.fields.siteDesc.placeHolder" 
                                            :class="{'anim-shake': generalSettings.fields.siteDesc.shake}" 
                                            :invalid-feedback="generalSettings.fields.siteDesc.valid.text" 
                                            :is-valid="generalSettings.fields.siteDesc.valid.value" 
                                            :disabled="generalSettings.disabled" 
                                            @input="validInput($event, generalSettings.fields.siteDesc)" /> 
                                    </CCol>
                                    <CCol col="12">
                                        <CInput 
                                            type="text" 
                                            v-model="generalSettings.form.siteKey"
                                            :label="generalSettings.fields.siteKey.label"
                                            :placeholder="generalSettings.fields.siteKey.placeHolder" 
                                            :class="{'anim-shake': generalSettings.fields.siteKey.shake}" 
                                            :invalid-feedback="generalSettings.fields.siteKey.valid.text" 
                                            :is-valid="generalSettings.fields.siteKey.valid.value" 
                                            :disabled="generalSettings.disabled" 
                                            @input="validInput($event, generalSettings.fields.siteKey)" /> 
                                    </CCol>
                                    <CCol md="12" class="text-right">
                                        <CButton
                                            color="primary"
                                            :disabled="generalSettings.disabled"
                                            @click="update()"
                                        ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="generalSettings.disabled" />Güncelle
                                        </CButton>
                                    </CCol>
                                </CRow> 
                            </CCardBody> 
                        </CCard>
                    </CCol>

                    <CCol md="12" lg="4">
                        <CCard>
                            <CCardHeader>
                                <span style="line-height: 35px"><strong>Site Logosu</strong></span>
                                <div class="card-header-actions"></div>
                            </CCardHeader>
                            <CCardBody class="p-3">
                                <CRow>
                                    <CCol col="12">
                                        <ImageUploader
                                            id="logoUploader" 
                                            name="logoUploader" 
                                            ref="logoUploader"
                                            :previewWidth="'100%'"
                                            :previewHeight="'250px'"
                                            :allowedMultipleSelection="true"
                                            :maxImageUploadSize="5242880"
                                            :maxAddImageCount="1"
                                            :visibleTitle="true"
                                            :axiosURL="VUE_APP_API_URL + 'admin/writetemp/file'"
                                            :cdnDir="VUE_APP_CDN_URL"
                                            :cdnImageDir="VUE_APP_CDN_URL_LOGO_IMAGE_DIR"
                                            :createAndUploadThumbnail="false"
                                        />
                                    </CCol>
                                    <CCol col="12" class="mt-3 text-right">
                                        <CButton
                                            color="primary"
                                            block
                                            :disabled="generalSettings.disabled"
                                            @click="update()"
                                        ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="generalSettings.disabled" />Güncelle
                                        </CButton>
                                    </CCol>
                                </CRow> 
                            </CCardBody> 
                        </CCard>

                        <CCard>
                            <CCardHeader>
                                <span style="line-height: 35px"><strong>Site Favicon</strong></span>
                                <div class="card-header-actions"></div>
                            </CCardHeader>
                            <CCardBody class="p-3">
                                <CRow>
                                    <CCol col="12">
                                        <ImageUploader
                                            id="faviconUploader" 
                                            name="faviconUploader" 
                                            ref="faviconUploader"
                                            :previewWidth="'100%'"
                                            :previewHeight="'250px'"
                                            :allowedMultipleSelection="true"
                                            :maxImageUploadSize="5242880"
                                            :maxAddImageCount="1"
                                            :visibleTitle="true"
                                            :axiosURL="VUE_APP_API_URL + 'admin/writetemp/file'"
                                            :cdnDir="VUE_APP_CDN_URL"
                                            :cdnImageDir="VUE_APP_CDN_URL_FAVICON_IMAGE_DIR"
                                            :createAndUploadThumbnail="false"
                                        />
                                    </CCol>
                                    <CCol col="12" class="mt-3 text-right">
                                        <CButton
                                            color="primary"
                                            block
                                            :disabled="generalSettings.disabled"
                                            @click="update()"
                                        ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="generalSettings.disabled" />Güncelle
                                        </CButton>
                                    </CCol>
                                </CRow> 
                            </CCardBody> 
                        </CCard>
                    </CCol>
                </CRow>
            </CCol>

            <CCol col="12" v-if="tabsPanel.key === 'contactSettings'">
                <CRow>
                    <CCol md="6">
                        <CCard>
                            <CCardHeader class="d-flex align-items-center justify-content-between">
                                <span style="line-height: 35px"><i class="fas fa-envelope fa-lg mr-2"></i><strong>E-Posta Ayarları</strong></span>
                                <div class="card-header-actions">
                                    <CSwitch
                                        color="primary"
                                        variant="3d"
                                        size="sm"
                                        :checked="contactSettings.emailSettings.form.status"
                                        :disabled="contactSettings.disabled" 
                                        @update:checked="contactSettings.emailSettings.form.status = !contactSettings.emailSettings.form.status, update()"
                                    />
                                </div>
                            </CCardHeader>
                            <CCardBody class="p-3">
                                <CRow>
                                    <CCol md="6">
                                        <CInput 
                                            type="text" 
                                            v-model="contactSettings.emailSettings.form.host"
                                            :label="contactSettings.emailSettings.fields.host.label"
                                            :placeholder="contactSettings.emailSettings.fields.host.placeHolder" 
                                            :class="{'anim-shake': contactSettings.emailSettings.fields.host.shake}" 
                                            :invalid-feedback="contactSettings.emailSettings.fields.host.valid.text" 
                                            :is-valid="contactSettings.emailSettings.fields.host.valid.value" 
                                            :disabled="contactSettings.disabled" 
                                            @input="validInput($event, contactSettings.emailSettings.fields.host)" /> 
                                    </CCol>
                                    <CCol md="6">
                                        <CInput 
                                            type="number"
                                            v-model="contactSettings.emailSettings.form.port"
                                            :min="0"
                                            :max="65535"
                                            :label="contactSettings.emailSettings.fields.port.label"
                                            :placeholder="contactSettings.emailSettings.fields.port.placeHolder" 
                                            :class="{'anim-shake': contactSettings.emailSettings.fields.port.shake}" 
                                            :invalid-feedback="contactSettings.emailSettings.fields.port.valid.text" 
                                            :is-valid="contactSettings.emailSettings.fields.port.valid.value" 
                                            :disabled="contactSettings.disabled" 
                                            @input="validInput($event, contactSettings.emailSettings.fields.port)" /> 
                                    </CCol>
                                    <CCol md="6">
                                        <CInput 
                                            type="text" 
                                            v-model="contactSettings.emailSettings.form.email"
                                            :label="contactSettings.emailSettings.fields.email.label"
                                            :placeholder="contactSettings.emailSettings.fields.email.placeHolder" 
                                            :class="{'anim-shake': contactSettings.emailSettings.fields.email.shake}" 
                                            :invalid-feedback="contactSettings.emailSettings.fields.email.valid.text" 
                                            :is-valid="contactSettings.emailSettings.fields.email.valid.value" 
                                            :disabled="contactSettings.disabled" 
                                            @input="validInput($event, contactSettings.emailSettings.fields.email)" /> 
                                    </CCol>
                                    <CCol md="6">
                                        <CInput 
                                            type="text" 
                                            v-model="contactSettings.emailSettings.form.username"
                                            :label="contactSettings.emailSettings.fields.username.label"
                                            :placeholder="contactSettings.emailSettings.fields.username.placeHolder" 
                                            :class="{'anim-shake': contactSettings.emailSettings.fields.username.shake}" 
                                            :invalid-feedback="contactSettings.emailSettings.fields.username.valid.text" 
                                            :is-valid="contactSettings.emailSettings.fields.username.valid.value" 
                                            :disabled="contactSettings.disabled" 
                                            @input="validInput($event, contactSettings.emailSettings.fields.username)" /> 
                                    </CCol>
                                    <CCol md="6">
                                        <CInput 
                                            type="text" 
                                            v-model="contactSettings.emailSettings.form.password"
                                            :label="contactSettings.emailSettings.fields.password.label"
                                            :placeholder="contactSettings.emailSettings.fields.password.placeHolder" 
                                            :class="{'anim-shake': contactSettings.emailSettings.fields.password.shake}" 
                                            :invalid-feedback="contactSettings.emailSettings.fields.password.valid.text" 
                                            :is-valid="contactSettings.emailSettings.fields.password.valid.value" 
                                            :disabled="contactSettings.disabled" 
                                            @input="validInput($event, contactSettings.emailSettings.fields.password)" /> 
                                    </CCol>
                                    <CCol md="6" class="d-flex flex-row">
                                        <div class="mt-1">
                                            <h6 class="font-weight-normal">Secure</h6>
                                            <CSwitch
                                                color="primary"
                                                variant="3d"
                                                size="sm"
                                                class="mt-1"
                                                :checked="contactSettings.emailSettings.form.secure"
                                                :disabled="contactSettings.disabled" 
                                                @update:checked="contactSettings.emailSettings.form.secure = !contactSettings.emailSettings.form.secure"
                                            />
                                        </div>
                                        <div class="mt-1 ml-4">
                                            <h6 class="font-weight-normal">TLS</h6>
                                            <CSwitch
                                                color="primary"
                                                variant="3d"
                                                size="sm"
                                                class="mt-1"
                                                :checked="contactSettings.emailSettings.form.tls"
                                                :disabled="contactSettings.disabled" 
                                                @update:checked="contactSettings.emailSettings.form.tls = !contactSettings.emailSettings.form.tls"
                                            />
                                        </div>
                                    </CCol>
                                    <CCol md="12" class="text-right">
                                        <CButton
                                            color="primary"
                                            :disabled="contactSettings.disabled"
                                            @click="update()"
                                        ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="contactSettings.disabled" />Güncelle
                                        </CButton>
                                    </CCol>
                                </CRow> 
                            </CCardBody> 
                        </CCard>
                    </CCol>
                    <CCol md="6">
                        <CCard>
                            <CCardHeader class="d-flex align-items-center justify-content-between">
                                <span style="line-height: 35px"><i class="fas fa-sms fa-lg mr-2"></i><strong>SMS API Ayarları</strong></span>
                                <div class="card-header-actions">
                                    <CSwitch
                                        color="primary"
                                        variant="3d"
                                        size="sm"
                                        :checked="contactSettings.smsSettings.form.status"
                                        :disabled="contactSettings.disabled" 
                                        @update:checked="contactSettings.smsSettings.form.status = !contactSettings.smsSettings.form.status, update()"
                                    />
                                </div>
                            </CCardHeader>
                            <CCardBody class="p-3">
                                <CRow>
                                    <CCol md="6">
                                        <CSelect
                                            :label="contactSettings.smsSettings.fields.company.label"
                                            :options="contactSettings.smsSettings.fields.company.options"
                                            :value.sync="contactSettings.smsSettings.form.company" 
                                            :disabled="contactSettings.disabled" />
                                    </CCol>
                                    <CCol md="6">
                                        <CInput 
                                            type="text" 
                                            v-model="contactSettings.smsSettings.form.username"
                                            :label="contactSettings.smsSettings.fields.username.label"
                                            :placeholder="contactSettings.smsSettings.fields.username.placeHolder" 
                                            :class="{'anim-shake': contactSettings.smsSettings.fields.username.shake}" 
                                            :invalid-feedback="contactSettings.smsSettings.fields.username.valid.text" 
                                            :is-valid="contactSettings.smsSettings.fields.username.valid.value" 
                                            :disabled="contactSettings.disabled" 
                                            @input="validInput($event, contactSettings.smsSettings.fields.username)" /> 
                                    </CCol>
                                    <CCol md="6">
                                        <CInput 
                                            type="text" 
                                            v-model="contactSettings.smsSettings.form.password"
                                            :label="contactSettings.smsSettings.fields.password.label"
                                            :placeholder="contactSettings.smsSettings.fields.password.placeHolder" 
                                            :class="{'anim-shake': contactSettings.smsSettings.fields.password.shake}" 
                                            :invalid-feedback="contactSettings.smsSettings.fields.password.valid.text" 
                                            :is-valid="contactSettings.smsSettings.fields.password.valid.value" 
                                            :disabled="contactSettings.disabled" 
                                            @input="validInput($event, contactSettings.smsSettings.fields.password)" /> 
                                    </CCol>
                                    <CCol md="6">
                                        <CInput 
                                            type="text" 
                                            v-model="contactSettings.smsSettings.form.senderName"
                                            :label="contactSettings.smsSettings.fields.senderName.label"
                                            :placeholder="contactSettings.smsSettings.fields.senderName.placeHolder" 
                                            :class="{'anim-shake': contactSettings.smsSettings.fields.senderName.shake}" 
                                            :invalid-feedback="contactSettings.smsSettings.fields.senderName.valid.text" 
                                            :is-valid="contactSettings.smsSettings.fields.senderName.valid.value" 
                                            :disabled="contactSettings.disabled" 
                                            @input="validInput($event, contactSettings.smsSettings.fields.senderName)" /> 
                                    </CCol>
                                    <CCol md="12" class="text-right">
                                        <CButton
                                            color="primary"
                                            :disabled="contactSettings.disabled"
                                            @click="update()"
                                        ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="contactSettings.disabled" />Güncelle
                                        </CButton>
                                    </CCol>
                                </CRow> 
                            </CCardBody> 
                        </CCard>
                    </CCol>
                    <CCol col="12">
                        <CCard>
                            <CCardHeader class="d-flex align-items-center justify-content-between">
                                <span style="line-height: 35px"><i class="fas fa-at fa-lg mr-2"></i><strong>İletişim Bilgileri</strong></span>
                                <div class="card-header-actions">
                                    <CButton
                                        color="primary" 
                                        :disabled="contactSettings.disabled"
                                        @click="openModal(contactSettings.contactInformations.modals.addUpdate, 'İletişim Bilgisi Ekle', 'post')"
                                    >İletişim Bilgisi Ekle
                                    </CButton>
                                </div>
                            </CCardHeader>
                            <CCardBody class="p-3">
                                <ag-grid-vue
                                    style="width: 100%; height: 300px"
                                    class="ag-theme-balham"
                                    :columnDefs="contactSettings.contactInformations.columnDefs"
                                    :defaultColDef="contactSettings.contactInformations.defaultColDef"
                                    :rowData="contactSettings.contactInformations.rowData"
                                    :sideBar="contactSettings.contactInformations.sideBar"
                                    :getContextMenuItems="getContextMenuItems"
                                    :rowSelection="contactSettings.contactInformations.rowSelection"
                                    :enableRangeSelection="true"
                                    :statusBar="contactSettings.contactInformations.statusBar"
                                    :overlayLoadingTemplate="'Yükleniyor..'"
                                    :overlayNoRowsTemplate="'Kayıt bulunamadı'"
                                    :rowDragManaged="true"
                                    :rowDragMultiRow="true"
                                    :animateRows="true"
                                    @grid-ready="onGridReady"
                                    @rowDragEnd="onRowDragEnd">
                                </ag-grid-vue>
                            </CCardBody> 
                        </CCard>
                    </CCol>
                </CRow>
            </CCol>

            <CCol col="12" v-if="tabsPanel.key === 'seoAndURLSettings'">
                <CCard>
                    <CCardHeader>
                        <span style="line-height: 35px"><strong>SEO ve URL Ayarları</strong></span>
                        <div class="card-header-actions"></div>
                    </CCardHeader>
                    <CCardBody class="p-3">

                    </CCardBody> 
                </CCard>
            </CCol>

            <CCol col="12" v-if="tabsPanel.key === 'securitySettings'">
                <CCard>
                    <CCardHeader>
                        <span style="line-height: 35px"><strong>Güvenlik Ayarları</strong></span>
                        <div class="card-header-actions"></div>
                    </CCardHeader>
                    <CCardBody class="p-3">

                    </CCardBody> 
                </CCard>
            </CCol>
        </CRow>

        <CModal
            size="lg"
            :title="contactSettings.contactInformations.modals.addUpdate.title"
            :show.sync="contactSettings.contactInformations.modals.addUpdate.show"
            :closeOnBackdrop="false">
            <CRow>
                <CCol md="6" lg="4">
                    <CInput 
                        type="text" 
                        v-model="contactSettings.contactInformations.modals.addUpdate.form.title" 
                        :label="contactSettings.contactInformations.modals.addUpdate.fields.title.label"
                        :placeholder="contactSettings.contactInformations.modals.addUpdate.fields.title.placeHolder" 
                        :class="{'anim-shake': contactSettings.contactInformations.modals.addUpdate.fields.title.shake}" 
                        :invalid-feedback="contactSettings.contactInformations.modals.addUpdate.fields.title.valid.text" 
                        :is-valid="contactSettings.contactInformations.modals.addUpdate.fields.title.valid.value" 
                        :disabled="contactSettings.contactInformations.modals.addUpdate.disabled"
                        @input="validInput($event, contactSettings.contactInformations.modals.addUpdate.fields.title)" />
                </CCol>
                <CCol md="6" lg="4" :class="{'anim-shake': contactSettings.contactInformations.modals.addUpdate.fields.phone.shake}">
                    <label v-html="contactSettings.contactInformations.modals.addUpdate.fields.phone.label" />
                    <vue-tel-input 
                        v-model="contactSettings.contactInformations.modals.addUpdate.form.phone"
                        :allCountries="contactSettings.contactInformations.modals.addUpdate.fields.phone.allCountries"
                        :autoFormat="contactSettings.contactInformations.modals.addUpdate.fields.phone.autoFormat"
                        :customValidate="contactSettings.contactInformations.modals.addUpdate.fields.phone.customValidate"
                        :defaultCountry="contactSettings.contactInformations.modals.addUpdate.fields.phone.defaultCountry"
                        :disabled="contactSettings.contactInformations.modals.addUpdate.fields.phone.disabled"
                        :autoDefaultCountry="contactSettings.contactInformations.modals.addUpdate.fields.phone.autoDefaultCountry"
                        :ignoredCountries="contactSettings.contactInformations.modals.addUpdate.fields.phone.ignoredCountries"
                        :mode="contactSettings.contactInformations.modals.addUpdate.fields.phone.mode"
                        :onlyCountries="contactSettings.contactInformations.modals.addUpdate.fields.phone.onlyCountries"
                        :preferredCountries="contactSettings.contactInformations.modals.addUpdate.fields.phone.preferredCountries"
                        :styleClasses="contactSettings.contactInformations.modals.addUpdate.fields.phone.styleClasses"
                        :validCharactersOnly="contactSettings.contactInformations.modals.addUpdate.fields.phone.validCharactersOnly"
                        :inputOptions="contactSettings.contactInformations.modals.addUpdate.fields.phone.inputOptions"
                        :dropdownOptions="contactSettings.contactInformations.modals.addUpdate.fields.phone.dropdownOptions"
                        @input="validInput($event, contactSettings.contactInformations.modals.addUpdate.fields.phone)" 
                    />
                    <span class="input-error-message" v-html="contactSettings.contactInformations.modals.addUpdate.fields.phone.valid.text" v-if="contactSettings.contactInformations.modals.addUpdate.fields.phone.valid.value === false"/>
                </CCol>
                <CCol md="6" lg="4" :class="{'anim-shake': contactSettings.contactInformations.modals.addUpdate.fields.fax.shake}">
                    <label v-html="contactSettings.contactInformations.modals.addUpdate.fields.fax.label" />
                    <vue-tel-input 
                        v-model="contactSettings.contactInformations.modals.addUpdate.form.fax"
                        :allCountries="contactSettings.contactInformations.modals.addUpdate.fields.fax.allCountries"
                        :autoFormat="contactSettings.contactInformations.modals.addUpdate.fields.fax.autoFormat"
                        :customValidate="contactSettings.contactInformations.modals.addUpdate.fields.fax.customValidate"
                        :defaultCountry="contactSettings.contactInformations.modals.addUpdate.fields.fax.defaultCountry"
                        :disabled="contactSettings.contactInformations.modals.addUpdate.fields.fax.disabled"
                        :autoDefaultCountry="contactSettings.contactInformations.modals.addUpdate.fields.fax.autoDefaultCountry"
                        :ignoredCountries="contactSettings.contactInformations.modals.addUpdate.fields.fax.ignoredCountries"
                        :mode="contactSettings.contactInformations.modals.addUpdate.fields.fax.mode"
                        :onlyCountries="contactSettings.contactInformations.modals.addUpdate.fields.fax.onlyCountries"
                        :preferredCountries="contactSettings.contactInformations.modals.addUpdate.fields.fax.preferredCountries"
                        :styleClasses="contactSettings.contactInformations.modals.addUpdate.fields.fax.styleClasses"
                        :validCharactersOnly="contactSettings.contactInformations.modals.addUpdate.fields.fax.validCharactersOnly"
                        :inputOptions="contactSettings.contactInformations.modals.addUpdate.fields.fax.inputOptions"
                        :dropdownOptions="contactSettings.contactInformations.modals.addUpdate.fields.fax.dropdownOptions"
                        @input="validInput($event, contactSettings.contactInformations.modals.addUpdate.fields.fax)" 
                    />
                    <span class="input-error-message" v-html="contactSettings.contactInformations.modals.addUpdate.fields.fax.valid.text" v-if="contactSettings.contactInformations.modals.addUpdate.fields.fax.valid.value === false"/>
                </CCol>
                <CCol col="12">
                    <CInput 
                        type="text" 
                        v-model="contactSettings.contactInformations.modals.addUpdate.form.address" 
                        :label="contactSettings.contactInformations.modals.addUpdate.fields.address.label"
                        :placeholder="contactSettings.contactInformations.modals.addUpdate.fields.address.placeHolder" 
                        :class="{'anim-shake': contactSettings.contactInformations.modals.addUpdate.fields.address.shake}" 
                        :invalid-feedback="contactSettings.contactInformations.modals.addUpdate.fields.address.valid.text" 
                        :is-valid="contactSettings.contactInformations.modals.addUpdate.fields.address.valid.value" 
                        :disabled="contactSettings.contactInformations.modals.addUpdate.disabled"
                        @input="validInput($event, contactSettings.contactInformations.modals.addUpdate.fields.address)" />
                </CCol>
                <CCol col="12">
                    <CInput 
                        type="text" 
                        v-model="contactSettings.contactInformations.modals.addUpdate.form.googleMapURL" 
                        :label="contactSettings.contactInformations.modals.addUpdate.fields.googleMapURL.label"
                        :placeholder="contactSettings.contactInformations.modals.addUpdate.fields.googleMapURL.placeHolder"
                        :class="{'anim-shake': contactSettings.contactInformations.modals.addUpdate.fields.googleMapURL.shake}" 
                        :invalid-feedback="contactSettings.contactInformations.modals.addUpdate.fields.googleMapURL.valid.text" 
                        :is-valid="contactSettings.contactInformations.modals.addUpdate.fields.googleMapURL.valid.value" 
                        :disabled="contactSettings.contactInformations.modals.addUpdate.disabled"
                        @input="validInput($event, contactSettings.contactInformations.modals.addUpdate.fields.googleMapURL)" />
                </CCol>
                <CCol md="6" lg="4">
                    <CInput 
                        type="text" 
                        v-model="contactSettings.contactInformations.modals.addUpdate.form.email" 
                        :label="contactSettings.contactInformations.modals.addUpdate.fields.email.label"
                        :placeholder="contactSettings.contactInformations.modals.addUpdate.fields.email.placeHolder"
                        :class="{'anim-shake': contactSettings.contactInformations.modals.addUpdate.fields.email.shake}" 
                        :invalid-feedback="contactSettings.contactInformations.modals.addUpdate.fields.email.valid.text" 
                        :is-valid="contactSettings.contactInformations.modals.addUpdate.fields.email.valid.value" 
                        :disabled="contactSettings.contactInformations.modals.addUpdate.disabled"
                        @input="validInput($event, contactSettings.contactInformations.modals.addUpdate.fields.email)" />
                </CCol>
                <!-- <CCol md="6" lg="4">
                    <CSelect
                        :label="modals.addUpdate.fields.auth.label"
                        :value.sync="modals.addUpdate.form.auth"
                        :options="modals.addUpdate.fields.auth.options" 
                        :disabled="modals.addUpdate.disabled" />
                </CCol>
                <CCol md="6" lg="4">
                    <CSelect
                        :label="modals.addUpdate.fields.status.label"
                        :value.sync="modals.addUpdate.form.status"
                        :options="modals.addUpdate.fields.status.options" 
                        :disabled="modals.addUpdate.disabled" />
                </CCol> -->
            </CRow>
            <template #footer>
                <CButton
                    color="primary"
                    :disabled="contactSettings.contactInformations.modals.addUpdate.disabled"
                    @click="updateModal()"
                ><i class="fas fa-circle-notch fa-lg fa-spin mr-2" v-show="contactSettings.contactInformations.modals.addUpdate.disabled" />{{ contactSettings.contactInformations.modals.addUpdate.process === 'post' ? 'Ekle':'Düzenle' }}
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
import ImageUploader from '@/components/ImageUploader';
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';
import TelAllCountries from '@/assets/js/all-countries';

export default {
    name: 'Settings',
    components: {
        AgGridVue,
        ImageUploader,
        VueTelInput
    },
    data() {
        return {
            VUE_APP_API_URL: process.env.VUE_APP_API_URL,
            VUE_APP_CDN_URL: process.env.VUE_APP_CDN_URL,
            VUE_APP_CDN_URL_LOGO_IMAGE_DIR: process.env.VUE_APP_CDN_URL_LOGO_IMAGE_DIR,
            VUE_APP_CDN_URL_FAVICON_IMAGE_DIR: process.env.VUE_APP_CDN_URL_FAVICON_IMAGE_DIR,
            tabsPanel: {
                key: 'generalSettings',
                panels: [
                    { key: 'generalSettings', value: 'Genel Ayarlar'},
                    { key: 'contactSettings', value: 'İletişim Ayarları'},
                    { key: 'seoAndURLSettings', value: 'SEO ve URL Ayarları'},
                    { key: 'securitySettings', value: 'Güvenlik Ayarları'}
                ]
            },
            _id: '',

            // #### GENEL AYARLAR ####
            generalSettings: {
                disabled: false,
                fields: {
                    siteURL: {
                        label: 'Site URL',
                        placeHolder: 'Site url girin',
                        min: 10,
                        max: 50,
                        shake: false,
                        valid: {
                            value: null,
                            text: ''
                        }
                    },
                    siteName: {
                        label: 'Site Adı',
                        placeHolder: 'Site adını girin',
                        min: 1,
                        max: 50,
                        shake: false,
                        valid: {
                            value: null,
                            text: ''
                        }
                    },
                    siteTitle: {
                        label: 'Site Başlık',
                        placeHolder: 'Site başlık girin',
                        min: 1,
                        max: 50,
                        shake: false,
                        valid: {
                            value: null,
                            text: ''
                        }
                    },
                    siteDesc: {
                        label: 'Site Açıklama',
                        placeHolder: 'Site açıklama girin',
                        min: 1,
                        max: 100,
                        shake: false,
                        valid: {
                            value: null,
                            text: ''
                        }
                    },
                    siteKey: {
                        label: 'Site Key',
                        placeHolder: 'Site keylerini girin',
                        min: 1,
                        max: 200,
                        shake: false,
                        valid: {
                            value: null,
                            text: ''
                        }
                    }
                },
                form: {
                    siteURL: '',
                    siteName: '',
                    siteTitle: '',
                    siteDesc: '',
                    siteKey: '',
                    logos: [],
                    favicons: []
                }
            },

            // #### İLETİŞİM BİLGİLERİ ####
            contactSettings: {
                disabled: false,
                emailSettings: {
                    fields: {
                        host: {
                            label: 'SMTP Host',
                            placeHolder: 'SMTP host adresi girin',
                            min: 5,
                            max: 50,
                            shake: false,
                            valid: {
                                value: null,
                                text: ''
                            }
                        },
                        port: {
                            label: 'Port',
                            placeHolder: 'Port girin',
                            min: 1,
                            max: 5,
                            shake: false,
                            valid: {
                                value: null,
                                text: ''
                            }
                        },
                        email: {
                            label: 'E-Posta',
                            placeHolder: 'E-Posta adresi girin',
                            min: 10,
                            max: 50,
                            shake: false,
                            valid: {
                                value: null,
                                text: ''
                            }
                        },
                        username: {
                            label: 'SMTP Kullanıcı Adı',
                            placeHolder: 'SMTP kullanıcı adını girin',
                            min: 6,
                            max: 50,
                            shake: false,
                            valid: {
                                value: null,
                                text: ''
                            }
                        },
                        password: {
                            label: 'SMTP Şifre',
                            placeHolder: 'SMTP şifresi girin',
                            min: 6,
                            max: 100,
                            shake: false,
                            valid: {
                                value: null,
                                text: ''
                            }
                        }
                    },
                    form: {
                        host: '',
                        port: '',
                        email: '',
                        username: '',
                        password: '',
                        secure: false,
                        tls: false,
                        status: false
                    }
                },
                smsSettings: {
                    fields: {
                        company: {
                            label: 'SMS Firması',
                            options: [
                                { value: 'netgsm', label: 'NetGSM' },
                                { value: 'masgsm', label: 'MasGSM' }
                            ]
                        },
                        username: {
                            label: 'Kullanıcı Adı',
                            placeHolder: 'Kullanıcı adı girin',
                            min: 5,
                            max: 25,
                            shake: false,
                            valid: {
                                value: null,
                                text: ''
                            }
                        },
                        password: {
                            label: 'Şifre',
                            placeHolder: 'Şifre girin',
                            min: 5,
                            max: 25,
                            shake: false,
                            valid: {
                                value: null,
                                text: ''
                            }
                        },
                        senderName: {
                            label: 'Gönderen Adı',
                            placeHolder: 'Gönderen adı girin',
                            min: 10,
                            max: 25,
                            shake: false,
                            valid: {
                                value: null,
                                text: ''
                            }
                        }
                    },
                    form: {
                        company: '',
                        username: '',
                        password: '',
                        senderName: '',
                        status: false
                    }
                },
                contactInformations: {
                    // AG GRID
                    columnDefs: [ // Grid sütünların dizisi
                        {
                            field: 'order',
                            rowDrag: true,
                            onCellDoubleClicked: params => this.rowDoubleClicked(params),
                            headerName: 'Sıra',
                            width: 70
                        },
                        {
                            field: 'title',
                            onCellDoubleClicked: params => this.rowDoubleClicked(params),
                            headerName: 'Başlık',
                            width: 160,
                        },
                        {
                            field: 'address',
                            onCellDoubleClicked: params => this.rowDoubleClicked(params),
                            headerName: 'Adres',
                            width: 300
                        },
                        {
                            field: 'phone',
                            onCellDoubleClicked: params => this.rowDoubleClicked(params),
                            /* cellRenderer: params => {
                                return moment(new Date(params.value)).format("DD.MM.YYYY - HH:mm");
                            }, */
                            headerName: 'Telefon',
                            width: 150
                        },
                        {
                            field: 'fax',
                            onCellDoubleClicked: params => this.rowDoubleClicked(params),
                            headerName: 'Fax',
                            width: 150
                        },
                        {
                            field: 'email',
                            onCellDoubleClicked: params => this.rowDoubleClicked(params),
                            headerName: 'E-Posta',
                            width: 160
                        }
                    ],
                    defaultColDef: { // Varsayılan bir sütun tanımı
                        sortable: true,
                        resizable: true,
                        filter: true
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
                            {
                                id: 'filters',
                                labelDefault: 'Filtreler',
                                labelKey: 'filters',
                                iconKey: 'filter',
                                toolPanel: 'agFiltersToolPanel',
                            }
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
                            { statusPanel: 'agAggregationComponent' }
                        ]
                    },
                    rowDragManaged: true,
                    animateRows: true,

                    modals: {
                        addUpdate: {
                            show: false,
                            title: '',
                            process: '',
                            disabled: false,
                            fields: {
                                title: {
                                    label: 'Başlık',
                                    placeHolder: 'Başlık girin',
                                    min: 2,
                                    max: 50,
                                    shake: false,
                                    valid: {
                                        value: null,
                                        text: ''
                                    }
                                },
                                address: {
                                    label: 'Adres',
                                    placeHolder: 'Adres girin',
                                    min: 2,
                                    max: 200,
                                    shake: false,
                                    valid: {
                                        value: null,
                                        text: ''
                                    }
                                },
                                phone: {
                                    label: 'Telefon',
                                    allCountries: TelAllCountries,  // Type: Array =>          Default: An array of all countries, see allCountries.js => All countries that are used in libphonenumber-js, can be overridden by this prop
                                    autoFormat: true,               // Type: Boolean =>        Default: true =>        Auto update the input to the formatted phone number when it's valid
                                    customValidate: false,          // Type: Boolean, RegExp => Default: false =>      Custom validation RegExp for input
                                    defaultCountry: 'TR',           // Type: String, Number => Default: '' =>          Default country (by iso2 or dialCode), will override the country fetched from IP address of user
                                    disabled: false,                // Type: Boolean =>        Default: false =>       Disable vue-tel-input, including the input & flag dropdown
                                    autoDefaultCountry: false,      // Type: Boolean =>        Default: true =>        To fetch default country based on IP address of user
                                    ignoredCountries: [],           // Type: Array =>          Default: [] =>          List of countries will NOT be shown on the dropdown
                                    invalidMsg: '',                 // Type: String =>         Default: ''
                                    mode: 'international',          // Type: String =>         Default: 'auto' =>      Allowed values: 'auto' (Default set by phone), 'international' (Format number with the dial code i.e. + 61), 'national' (Format number without dial code i.e. 0321232)
                                    onlyCountries: [],              // Type: Array =>          Default: [] =>          List of countries will be shown on the dropdown
                                    preferredCountries: [],         // Type: Array =>          Default: [] =>          Preferred countries list, will be on top of the dropdown
                                    styleClasses: 'text-nowrap',    // Type: String, Array, Object => Default: '' =>   Custom classes for the wrapper
                                    validCharactersOnly: true,      // Type: Boolean =>        Default: false =>       Only allow valid characters in a phone number (will also verify in mounted, so phone number with invalid characters will be shown as an empty string)
                                    min: 6,
                                    max: 25,
                                    shake: false,
                                    inputOptions: {
                                        autocomplete: 'on',                     // Type: String =>         Default: 'on' =>             Native input autocomplete attribute
                                        autofocus: false,                       // Type: Boolean =>        Default: false =>            Native input autofocus attribute
                                        'aria-describedby': '',                 // Type: String =>         Default: '' =>               Native input aria-describedby attribute
                                        id: 'phone',                            // Type: String =>         Default: '' =>               Native input id attribute
                                        maxlength: 17,                          // Type: Number =>         Default: 25 =>               Native input maxlength attribute
                                        name: 'phone',                          // Type: String =>         Default: 'telephone' =>      Native input name attribute
                                        showDialCode: false,                    // Type: Boolean =>        Default: false =>            Show dial code in input
                                        placeholder: 'Telefon numarası girin',  // Type: String => Default: 'Enter a phone number' =>   Placeholder for the input
                                        readonly: false,                        // Type: Boolean =>        Default: false =>            Native input readonly attribute
                                        required: true,                         // Type: Boolean =>        Default: false =>            Native input required attribute
                                        tabindex: 0,                            // Type: Number =>         Default: 0 =>                Native input tabindex attribute
                                        type: 'tel',                            // Type: String =>         Default: 'tel' =>            Native input type attribute
                                        styleClasses: 'text-nowrap'             // Type: String, Array, Object => Default: '' =>        Custom classes for the input
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
                                fax: {
                                    label: 'Fax',
                                    allCountries: TelAllCountries,  // Type: Array =>          Default: An array of all countries, see allCountries.js => All countries that are used in libphonenumber-js, can be overridden by this prop
                                    autoFormat: true,               // Type: Boolean =>        Default: true =>        Auto update the input to the formatted phone number when it's valid
                                    customValidate: false,          // Type: Boolean, RegExp => Default: false =>      Custom validation RegExp for input
                                    defaultCountry: 'TR',           // Type: String, Number => Default: '' =>          Default country (by iso2 or dialCode), will override the country fetched from IP address of user
                                    disabled: false,                // Type: Boolean =>        Default: false =>       Disable vue-tel-input, including the input & flag dropdown
                                    autoDefaultCountry: false,      // Type: Boolean =>        Default: true =>        To fetch default country based on IP address of user
                                    ignoredCountries: [],           // Type: Array =>          Default: [] =>          List of countries will NOT be shown on the dropdown
                                    invalidMsg: '',                 // Type: String =>         Default: ''
                                    mode: 'international',          // Type: String =>         Default: 'auto' =>      Allowed values: 'auto' (Default set by phone), 'international' (Format number with the dial code i.e. + 61), 'national' (Format number without dial code i.e. 0321232)
                                    onlyCountries: [],              // Type: Array =>          Default: [] =>          List of countries will be shown on the dropdown
                                    preferredCountries: [],         // Type: Array =>          Default: [] =>          Preferred countries list, will be on top of the dropdown
                                    styleClasses: 'text-nowrap',    // Type: String, Array, Object => Default: '' =>   Custom classes for the wrapper
                                    validCharactersOnly: true,      // Type: Boolean =>        Default: false =>       Only allow valid characters in a phone number (will also verify in mounted, so phone number with invalid characters will be shown as an empty string)
                                    min: 6,
                                    max: 25,
                                    shake: false,
                                    inputOptions: {
                                        autocomplete: 'on',                 // Type: String =>         Default: 'on' =>             Native input autocomplete attribute
                                        autofocus: false,                   // Type: Boolean =>        Default: false =>            Native input autofocus attribute
                                        'aria-describedby': '',             // Type: String =>         Default: '' =>               Native input aria-describedby attribute
                                        id: 'fax',                          // Type: String =>         Default: '' =>               Native input id attribute
                                        maxlength: 17,                      // Type: Number =>         Default: 25 =>               Native input maxlength attribute
                                        name: 'fax',                        // Type: String =>         Default: 'telephone' =>      Native input name attribute
                                        showDialCode: false,                // Type: Boolean =>        Default: false =>            Show dial code in input
                                        placeholder: 'Fax numarası girin',  // Type: String => Default: 'Enter a phone number' =>   Placeholder for the input
                                        readonly: false,                    // Type: Boolean =>        Default: false =>            Native input readonly attribute
                                        required: true,                     // Type: Boolean =>        Default: false =>            Native input required attribute
                                        tabindex: 0,                        // Type: Number =>         Default: 0 =>                Native input tabindex attribute
                                        type: 'tel',                        // Type: String =>         Default: 'tel' =>            Native input type attribute
                                        styleClasses: 'text-nowrap'         // Type: String, Array, Object => Default: '' =>        Custom classes for the input
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
                                email: {
                                    label: 'E-Posta',
                                    placeHolder: 'E-Posta girin',
                                    min: 6,
                                    max: 50,
                                    shake: false,
                                    valid: {
                                        value: null,
                                        text: ''
                                    }
                                },
                                googleMapURL: {
                                    label: 'Google Map URL',
                                    placeHolder: 'Google Map URL girin',
                                    min: 2,
                                    max: 300,
                                    shake: false,
                                    valid: {
                                        value: null,
                                        text: ''
                                    }
                                }
                            },
                            form: {
                                _id: '',
                                title: '',
                                address: '',
                                phone: '',
                                fax: '',
                                email: '',
                                googleMapURL: ''
                            }
                        }
                    }
                }
            },

            // #### SEO VE URL AYARLARI ####
            seoAndURLSettings: {
                disabled: false
            },

            // #### GÜVENLİK AYARLARI ####
            securitySettings: {
                disabled: false
            }
        };
    },
    created() {
        this.getSettings();
    },
    watch: {
        // GENEL AYARLAR - SİTE AYARLARI
        'generalSettings.form.siteURL': function(val) {
            this.validInput(val, this.generalSettings.fields.siteURL);
        },
        'generalSettings.form.siteName': function(val) {
            this.validInput(val, this.generalSettings.fields.siteName);
        },
        'generalSettings.form.siteTitle': function(val) {
            this.validInput(val, this.generalSettings.fields.siteTitle);
        },
        'generalSettings.form.siteDesc': function(val) {
            this.validInput(val, this.generalSettings.fields.siteDesc);
        },
        'generalSettings.form.siteKey': function(val) {
            this.validInput(val, this.generalSettings.fields.siteKey);
        },

        // İLETİŞİM AYARLARI - EPOSTA AYARLARI
        'contactSettings.emailSettings.form.host': function(val) {
            this.validInput(val, this.contactSettings.emailSettings.fields.host);
        },
        'contactSettings.emailSettings.form.port': function(val) {
            this.validInput(val, this.contactSettings.emailSettings.fields.port);
        },
        'contactSettings.emailSettings.form.email': function(val) {
            this.validInput(val, this.contactSettings.emailSettings.fields.email);
        },
        'contactSettings.emailSettings.form.username': function(val) {
            this.validInput(val, this.contactSettings.emailSettings.fields.username);
        },
        'contactSettings.emailSettings.form.password': function(val) {
            this.validInput(val, this.contactSettings.emailSettings.fields.password);
        },

        // İLETİŞİM AYARLARI - SMS AYARLARI
        'contactSettings.smsSettings.form.username': function(val) {
            this.validInput(val, this.contactSettings.smsSettings.fields.username);
        },
        'contactSettings.smsSettings.form.password': function(val) {
            this.validInput(val, this.contactSettings.smsSettings.fields.password);
        },
        'contactSettings.smsSettings.form.senderName': function(val) {
            this.validInput(val, this.contactSettings.smsSettings.fields.senderName);
        },
        
        // İLETİŞİM AYARLARI - İLETİŞİM BİLGİLERİ
        'contactSettings.contactInformations.modals.addUpdate.form.title': function(val) {
            this.validInput(val, this.contactSettings.contactInformations.modals.addUpdate.fields.title);
        },
        'contactSettings.contactInformations.modals.addUpdate.form.address': function(val) {
            this.validInput(val, this.contactSettings.contactInformations.modals.addUpdate.fields.address);
        },
        'contactSettings.contactInformations.modals.addUpdate.form.phone': function(val) {
            this.validInput(val, this.contactSettings.contactInformations.modals.addUpdate.fields.phone);
        },
        'contactSettings.contactInformations.modals.addUpdate.form.fax': function(val) {
            this.validInput(val, this.contactSettings.contactInformations.modals.addUpdate.fields.fax);
        },
        'contactSettings.contactInformations.modals.addUpdate.form.email': function(val) {
            this.validInput(val, this.contactSettings.contactInformations.modals.addUpdate.fields.email);
        },
        'contactSettings.contactInformations.modals.addUpdate.form.googleMapURL': function(val) {
            this.validInput(val, this.contactSettings.contactInformations.modals.addUpdate.fields.googleMapURL);
        }
    },
    methods: {
        onGridReady(params) {
            this.gridApi = params.api;
            this.gridColumnApi = params.columnApi;
        },
        getContextMenuItems(params) {
            const _this = this;

            if(this.tabsPanel.key === 'contactSettings') { // İLETİŞİM BİLGİLERİ
                return [
                    {
                        name: 'Sil',
                        action: function() {
                            Swal.fire({
                                icon: 'error',
                                title: 'İletişim Bilgisi Sil',
                                html: `<strong>${params.node.data.title}</strong> başlıklı iletişim bilgisini silmek istiyor musunuz?`,
                                showDenyButton: true,
                                confirmButtonText: 'Evet',
                                denyButtonText: 'Hayır',
                            }).then(result => {
                                if(result.isConfirmed) {
                                    _this.contactSettings.contactInformations.rowData.splice(params.node.childIndex, 1); // Seçilen indexteki item'ı sildik.
                                    _this.update();
                                }
                            });
                        }
                    },
                    {
                        name: 'Düzenle',
                        action: function() {
                            _this.openModal(_this.contactSettings.contactInformations.modals.addUpdate, 'İletişim Bilgisi Düzenle', 'put', params.node.data);
                        }
                    },
                    {
                        name: 'Kopyala',
                        action: function() {
                            _this.gridApi.copySelectedRangeToClipboard();
                        }
                    }
                ];
            }
        },
        rowDoubleClicked(row) {
            switch (this.tabsPanel.key) {
                case 'contactSettings':
                    this.openModal(this.contactSettings.contactInformations.modals.addUpdate, 'İletişim Bilgisi Düzenle', 'put', row.data);
                    break;
            }
        },
        async openModal(modal, title, _process = '', data = null) {
            switch (modal) {
                case this.contactSettings.contactInformations.modals.addUpdate:
                    modal.title = title;
                    modal.process = _process;

                    if(data !== null) modal.form = data;
                    else {
                        await new Promise(resolve => {
                            modal.form = {
                                _id: '',
                                title: '',
                                address: '',
                                phone: '',
                                fax: '',
                                email: '',
                                googleMapURL: ''
                            };

                            resolve();
                        });

                        modal.fields.title.valid.value = null;
                        modal.fields.title.valid.text = '';
                        modal.fields.address.valid.value = null;
                        modal.fields.address.valid.text = '';
                        modal.fields.phone.valid.value = null;
                        modal.fields.phone.valid.text = '';
                        modal.fields.fax.valid.value = null;
                        modal.fields.fax.valid.text = '';
                        modal.fields.email.valid.value = null;
                        modal.fields.email.valid.text = '';
                        modal.fields.googleMapURL.valid.value = null;
                        modal.fields.googleMapURL.valid.text = '';
                    }
                    
                    break;
            }
            
            modal.show = true;
        },
        closeModal(modal) {
            modal.show = false;
        },
        validInput(val, field) {
            switch (field) {
                // GENEL AYARLAR - SİTE AYARLARI
                case this.generalSettings.fields.siteURL:
                case this.generalSettings.fields.siteName:
                case this.generalSettings.fields.siteTitle:
                case this.generalSettings.fields.siteDesc:
                case this.generalSettings.fields.siteKey:
                    if(val === '') {
                        field.valid.text = 'Bu alan boş bırakılamaz!';
                        field.valid.value = false;
                    } else if(val.length < field.min || val.length > field.max) {
                        field.valid.text = `Bu alana en az ${field.min}, en fazla ${field.max} karakter girebilirsiniz!`;
                        field.valid.value = false;
                    } else {
                        field.valid.text = '';
                        field.valid.value = true;
                    }
                    break;
                // İLETİŞİM AYARLARI - E-POSTA AYARLARI
                case this.contactSettings.emailSettings.fields.host:
                case this.contactSettings.emailSettings.fields.username:
                    if(val !== '') {
                        if(val.length < field.min || val.length > field.max) {
                            field.valid.text = `Bu alana en az ${field.min}, en fazla ${field.max} karakter girebilirsiniz!`;
                            field.valid.value = false;
                        } else {
                            field.valid.text = '';
                            field.valid.value = true;
                        }
                    } else {
                        field.valid.text = '';
                        field.valid.value = true;
                    }
                    break;
                case this.contactSettings.emailSettings.fields.password:
                    if(val !== '') {
                        if(val.length < field.min || val.length > field.max) {
                            field.valid.text = `Bu alana en az ${field.min}, en fazla ${field.max} karakter girebilirsiniz!`;
                            field.valid.value = false;
                        } else {
                            field.valid.text = '';
                            field.valid.value = true;
                        }
                    } else {
                        field.valid.text = '';
                        field.valid.value = true;
                    }
                    break;
                case this.contactSettings.emailSettings.fields.port:
                    if(val !== '') {
                        if(val.length < field.min || val.length > field.max) {
                            field.valid.text = `Bu alana en az ${field.min}, en fazla ${field.max} karakter girebilirsiniz!`;
                            field.valid.value = false;
                        } else {
                            field.valid.text = '';
                            field.valid.value = true;
                        }
                    } else {
                        field.valid.text = '';
                        field.valid.value = true;
                    }
                    break;
                case this.contactSettings.emailSettings.fields.email:
                    if(val !== '') {
                        if(!val.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g)) {
                            field.valid.text = 'Hatalı e-posta formatı!'
                            field.valid.value = false;
                        } else if(val.length < field.min || val.length > field.max) {
                            field.valid.text = `Bu alana en az ${field.min}, en fazla ${field.max} karakter girebilirsiniz!`;
                            field.valid.value = false;
                        } else {
                            field.valid.text = '';
                            field.valid.value = true;
                        }
                    } else {
                        field.valid.text = '';
                        field.valid.value = true;
                    }
                    break;
                // İLETİŞİM AYARLARI - SMS AYARLARI
                case this.contactSettings.smsSettings.fields.username:
                case this.contactSettings.smsSettings.fields.password:
                case this.contactSettings.smsSettings.fields.senderName:
                    if(val !== '') {
                        if(val.length < field.min || val.length > field.max) {
                            field.valid.text = `Bu alana en az ${field.min}, en fazla ${field.max} karakter girebilirsiniz!`;
                            field.valid.value = false;
                        } else {
                            field.valid.text = '';
                            field.valid.value = true;
                        }
                    } else {
                        field.valid.text = '';
                        field.valid.value = true;
                    }
                    break;
                // İLETİŞİM AYARLARI - İLETİŞİM BİLGİLERİ
                case this.contactSettings.contactInformations.modals.addUpdate.fields.title:
                case this.contactSettings.contactInformations.modals.addUpdate.fields.address:
                case this.contactSettings.contactInformations.modals.addUpdate.fields.googleMapURL:
                    if(val !== '') {
                        if(val.length < field.min || val.length > field.max) {
                            field.valid.text = `Bu alana en az ${field.min}, en fazla ${field.max} karakter girebilirsiniz!`;
                            field.valid.value = false;
                        } else {
                            field.valid.text = '';
                            field.valid.value = true;
                        }
                    } else {
                        field.valid.text = '';
                        field.valid.value = true;
                    }
                    break;
                case this.contactSettings.contactInformations.modals.addUpdate.fields.phone:
                    if(val !== '') {
                        if(!val.match(/\+[0-9]{2}\s[0-9]{3}\s\d\d\d\s\d\d\s\d\d$/g)) {
                            field.valid.text = 'Hatalı telefon formatı!';
                            field.valid.value = false;
                        } else if(val.length < field.min || val.length > field.max) {
                            field.valid.text = `Bu alana en az ${field.min}, en fazla ${field.max} karakter girebilirsiniz!`;
                            field.valid.value = false;
                        } else {
                            field.valid.text = '';
                            field.valid.value = true;
                        }
                    } else {
                        field.valid.text = '';
                        field.valid.value = true;
                    }
                    break;
                case this.contactSettings.contactInformations.modals.addUpdate.fields.fax:
                    if(val !== '') {
                        if(!val.match(/\+[0-9]{2}\s[0-9]{3}\s\d\d\d\s\d\d\s\d\d$/g)) {
                            field.valid.text = 'Hatalı fax formatı!';
                            field.valid.value = false;
                        } else if(val.length < field.min || val.length > field.max) {
                            field.valid.text = `Bu alana en az ${field.min}, en fazla ${field.max} karakter girebilirsiniz!`;
                            field.valid.value = false;
                        } else {
                            field.valid.text = '';
                            field.valid.value = true;
                        }
                    } else {
                        field.valid.text = '';
                        field.valid.value = true;
                    }
                    break;
                case this.contactSettings.contactInformations.modals.addUpdate.fields.email:
                    if(val !== '') {
                        if(!val.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g)) {
                            field.valid.text = 'Hatalı e-posta formatı!'
                            field.valid.value = false;
                        } else if(val.length < field.min || val.length > field.max) {
                            field.valid.text = `Bu alana en az ${field.min}, en fazla ${field.max} karakter girebilirsiniz!`;
                            field.valid.value = false;
                        } else {
                            field.valid.text = '';
                            field.valid.value = true;
                        }
                    } else {
                        field.valid.text = '';
                        field.valid.value = true;
                    }
                    break;
            }
        },
        getSettings() {
            this.$Progress.start();
            this[this.tabsPanel.key].disabled = true;
            
            axios.get(process.env.VUE_APP_API_URL + 'admin/settings').then(response => {
                this.$Progress.finish();
                this[this.tabsPanel.key].disabled = false;

                if(response.data.result === 'success') {
                    this._id = response.data.settings._id;
                    this.$store.commit('settings', response.data.settings);

                    switch (this.tabsPanel.key) {
                        case 'generalSettings': // GENEL AYARLAR
                            this.generalSettings.form = {
                                siteURL: response.data.settings.siteURL,
                                siteName: response.data.settings.siteName,
                                siteTitle: response.data.settings.siteTitle,
                                siteDesc: response.data.settings.siteDesc,
                                siteKey: response.data.settings.siteKey,
                                logos: response.data.settings.logos[0],
                                favicons: response.data.settings.favicons[0]
                            }

                            if(this.generalSettings.form.logos) {
                                // LOGO UPLOADER - BAŞLANGIÇ
                                this.$refs.logoUploader.setAddedImages([{
                                    src: this.generalSettings.form.logos.fileName,
                                    blob: null,
                                    type: '',
                                    fileName: '',
                                    size: this.generalSettings.form.logos.size.split(' ').join('&nbsp;'),
                                    orjSize: 0,
                                    progress: 0,
                                    uploadFailed: false,
                                    uploadedFileNameThumb: this.generalSettings.form.logos.fileName,
                                    uploadedFileName: this.generalSettings.form.logos.fileName
                                }]);
                            }

                            if(this.generalSettings.form.favicons) {
                                // FAVICON UPLOADER - BAŞLANGIÇ
                                this.$refs.faviconUploader.setAddedImages([{
                                    src: this.generalSettings.form.favicons.fileName,
                                    blob: null,
                                    type: '',
                                    fileName: '',
                                    size: this.generalSettings.form.favicons.size.split(' ').join('&nbsp;'),
                                    orjSize: 0,
                                    progress: 0,
                                    uploadFailed: false,
                                    uploadedFileNameThumb: this.generalSettings.form.favicons.fileName,
                                    uploadedFileName: this.generalSettings.form.favicons.fileName
                                }]);
                            }
                            break;
                        case 'contactSettings': // İLETİŞİM BİLGİLERİ
                            this.contactSettings.emailSettings.form = {
                                host: response.data.settings.smtp.host,
                                port: response.data.settings.smtp.port,
                                email: response.data.settings.smtp.email,
                                username: response.data.settings.smtp.username,
                                password: response.data.settings.smtp.password,
                                secure: response.data.settings.smtp.secure,
                                tls: response.data.settings.smtp.tls,
                                status: response.data.settings.smtp.status
                            }

                            this.contactSettings.smsSettings.form = {
                                company: response.data.settings.sms.company,
                                username: response.data.settings.sms.username,
                                password: response.data.settings.sms.password,
                                senderName: response.data.settings.sms.senderName,
                                status: response.data.settings.sms.status
                            }

                            this.contactSettings.contactInformations.rowData = Func.arrSort(response.data.settings.contacts, 'order', '>');
                            break;
                    }
                } else {
                    Swal.fire({
                        icon: response.data.result,
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
                }
            });
        },
        async update() {
            var form = {};

            switch (this.tabsPanel.key) {
                case 'generalSettings':
                    this.validInput(this.generalSettings.form.siteName, this.generalSettings.fields.siteName);

                    Func.shaker(this.generalSettings);

                    if(this.generalSettings.fields.siteName.valid.value === false) return;

                    // LOGO UPLOADER - BAŞLANGIÇ
                    var logoUploadedImages = await this.$refs.logoUploader.uploadImages(); // Seçilen resim varsa sunucunun temp klasörüne yülüyoruz. İşlem sonunda yüklenen dosyaların datasını array döner.
                    // LOGO UPLOADER - BİTİŞ

                    // FAVICON UPLOADER - BAŞLANGIÇ
                    var faviconUploadedImages = await this.$refs.faviconUploader.uploadImages(); // Seçilen resim varsa sunucunun temp klasörüne yülüyoruz. İşlem sonunda yüklenen dosyaların datasını array döner.
                    // FAVICON UPLOADER - BİTİŞ

                    form = {
                        _id: this._id,
                        siteURL: this.generalSettings.form.siteURL,
                        siteName: this.generalSettings.form.siteName,
                        siteTitle: this.generalSettings.form.siteTitle,
                        siteDesc: this.generalSettings.form.siteDesc,
                        siteKey: this.generalSettings.form.siteKey,
                        logos: logoUploadedImages ? 
                            logoUploadedImages.map(e => { 
                                return {
                                    fileName: e.uploadedFileName,
                                    size: e.size.split('&nbsp;').join(' ')
                                }
                            })
                            :
                            [],
                        favicons: faviconUploadedImages ? 
                            faviconUploadedImages.map(e => { 
                                return {
                                    fileName: e.uploadedFileName,
                                    size: e.size.split('&nbsp;').join(' ')
                                }
                            })
                            :
                            []
                    }
                    break;
                case 'contactSettings':
                    form = {
                        _id: this._id,
                        contacts: this.contactSettings.contactInformations.rowData,
                        smtp: this.contactSettings.emailSettings.form,
                        sms: this.contactSettings.smsSettings.form
                    }
                    break;
            }

            this.$Progress.start();
            this[this.tabsPanel.key].disabled = true;

            axios.put(process.env.VUE_APP_API_URL + 'admin/settings', form).then(response => {
                if(this.tabsPanel.key === 'generalSettings') {
                    // LOGO UPLOADER - BAŞLANGIÇ
                    this.$refs.logoUploader.setUploading(false); // Yükleniyor değişkeni: false
                    // LOGO UPLOADER - BİTİŞ

                    // FAVICON UPLOADER - BAŞLANGIÇ
                    this.$refs.faviconUploader.setUploading(false); // Yükleniyor değişkeni: false
                    // FAVICON UPLOADER - BİTİŞ
                }

                this.$Progress.finish();
                this[this.tabsPanel.key].disabled = false;

                if(response.data.result === 'success') this.getSettings();

                Swal.fire({
                    icon: response.data.result,
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
        },
        updateModal() {
            var modal = null;
            var form = {};

            switch (this.tabsPanel.key) {
                case 'generalSettings': // GENEL AYARLAR

                    break;
                case 'contactSettings': // İLETİŞİM AYARLARI
                    modal = this.contactSettings.contactInformations.modals.addUpdate;
                    
                    this.validInput(modal.form.title, modal.fields.title);
                    this.validInput(modal.form.address, modal.fields.address);
                    this.validInput(modal.form.phone, modal.fields.phone);
                    this.validInput(modal.form.fax, modal.fields.fax);
                    this.validInput(modal.form.email, modal.fields.email);
                    this.validInput(modal.form.googleMapURL, modal.fields.googleMapURL);

                    Func.shaker(modal);

                    if (modal.fields.title.valid.value === false || modal.fields.address.valid.value === false || modal.fields.phone.valid.value === false || 
                        modal.fields.fax.valid.value === false || modal.fields.email.valid.value === false || modal.fields.googleMapURL.valid.value === false) return;

                    if(modal.process === 'post') {
                        this.contactSettings.contactInformations.rowData.push({
                            title: modal.form.title,
                            address: modal.form.address,
                            phone: modal.form.phone,
                            fax: modal.form.fax,
                            email: modal.form.email,
                            googleMapURL: modal.form.googleMapURL,
                            socialMedia: {
                                facebook: '',
                                instagrm: '',
                                twitter: '',
                                linkedin: '',
                                youtube: ''
                            },
                            default: false
                        });
                    }

                    form = {
                        _id: this._id,
                        contacts: this.contactSettings.contactInformations.rowData
                    }
            }
            
            this.$Progress.start();
            modal.disabled = true;

            axios.put(process.env.VUE_APP_API_URL + 'admin/settings', form).then(response => {
                this.$Progress.finish();
                modal.disabled = false;

                if(response.data.result === 'success') {
                    this.getSettings();
                    this.closeModal(modal);
                }

                Swal.fire({
                    icon: response.data.result,
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
        },
        onRowDragEnd(e) {
            switch (this.tabsPanel.key) {
                case 'generalSettings': // GENEL AYARLAR

                    break;
                case 'contactSettings': // İLETİŞİM AYARLARI
                    e.node.parent.allLeafChildren.forEach((row, i) => {
                        this.contactSettings.contactInformations.rowData[parseInt(row.id)].order = i
                    });

                    this.update();
                    break;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.card {
    .card-header {
        background-color: #1565C0;
        color: white;
    }
}

.nav-item {
    .nav-link {
        padding: unset!important;
        background-color: unset!important;
    }

    .nav-link-custom {
        border-radius: 0.25rem;
        padding: 0.5rem 1rem;
        color: #fff;

        &.active {
            color: #000;
            background-color: #ffffff;
        }
    }
}
</style>