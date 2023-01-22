<template>
    <div>
        <input id="inputImage" type="file" ref="inputImage" class="d-none" :accept="allowedImageFormats" v-bind="[ allowedMultipleSelection === true && {'multiple':true} ]" @change="selectedImage($event)"/><!-- multiple -->
        <div class="row">
            <div class="col-12 mb-3 text-center" v-if="visibleTitle === false">
                <h5 class="m-0">Resim Ekle</h5>
            </div>
            <!-- <div class="col-6 col-md-4 col-lg-2 d-flex flex-column justify-content-center align-items-center" v-for="(image, i) in addedImages" :key="i">
                <div class="thumbImage border rounded d-flex align-items-end justify-content-end pr-1 pb-1" :style="`background-image: url(${image.src});`">
                    <CButtonClose style="color: white; background-color: #000" class="p-1 rounded" @click="deleteImage(i)">
                        <i class="fas fa-trash-alt"></i>
                    </CButtonClose>
                </div>
                <div class="px-1 mt-1" style="width: 100%;">
                    <CProgress style="width: 100%" size="sm">
                        <CProgressBar color="success" variant="striped" animated :value="50"/>
                    </CProgress>
                </div>
            </div> -->
            <div class="col-12 d-flex flex-row flex-wrap">
                <div class="mb-2 mr-2" :style="`width: ${previewWidth}; height: ${previewHeight}`" v-for="(image, i) in addedImages" :key="i">
                    <div class="thumbImage border rounded d-flex align-items-center justify-content-center" :style="`width: ${previewWidth}; height: ${previewHeight}; background-color: transparent; background-image: url(${image.blob ? image.src : cdnDir + cdnImageDir + image.uploadedFileNameThumb.split('.')[0] + '.' + image.uploadedFileNameThumb.split('.')[1]});`">
                        <div class="d-flex align-items-end justify-content-start ml-1 mb-2" :style="`width: ${previewWidth}; height: ${previewHeight}`">
                            <small class="text-white rounded" style="padding: 2px; background-color: rgb(0 0 0 / 50%);" v-html="image.size" />
                        </div>
                        <div class="d-flex align-items-end justify-content-end mr-1 mb-2" :style="`width: ${previewWidth}; height: ${previewHeight}`" v-if="isUploading && parseInt(image.progress) > 1 && parseInt(image.progress) < 100">
                            <small class="text-white rounded" style="padding: 2px; background-color: rgb(0 0 0 / 50%);">{{ image.progress + '%' }}</small>
                        </div>
                        <div class="d-flex align-items-end justify-content-end mr-1 mb-2" :style="`width: ${previewWidth}; height: ${previewHeight}`" v-if="!isUploading">
                            <CButtonClose style="color: white; background-color: #000" class="p-1 rounded" @click="deleteImage(i)">
                                <i class="fas fa-trash-alt"></i>
                            </CButtonClose>
                        </div>
                    </div>
                    <div class="px-1 mt-1" style="width: 100%;" v-if="isUploading && image.blob">
                        <CProgress style="width: 100%" size="sm">
                            <CProgressBar :color="image.progress >= 100 ? 'success' : 'info'" v-bind="[image.progress < 100 && {'animated':true, 'variant':'striped'}]" :value="image.progress"/>
                        </CProgress>
                        <small v-if="image.uploadFailed">hata!</small>
                    </div>
                </div>
                <div class="blankImage rounded pr-1 pb-1 d-flex align-items-center justify-content-center" :style="`width: ${previewWidth}; height: ${previewHeight}`" @click="$refs.inputImage.click()" v-if="!isUploading && (maxAddImageCount !== 0 && addedImages.length < maxAddImageCount)">
                    <div class="position-absolute">
                        <div class="d-flex align-items-center justify-content-center position-absolute">
                            <i class="fas fa-images fa-3x" style="color: #000"></i>
                        </div>
                        <div class="d-flex align-items-end justify-content-end">
                            <i class="fas fa-plus fa-3x" style="color: #000"></i>
                        </div>
                    </div>
                    <div class="ml-1 mb-1 d-flex align-items-end justify-content-start" :style="`width: ${previewWidth}; height: ${previewHeight}`">
                        <small class="text-white rounded" style="padding: 2px; background-color: rgb(0 0 0 / 50%);" v-html="`Kalan: ${maxAddImageCount - addedImages.length}/${maxAddImageCount}`" />
                    </div>
                </div>
            </div>
        </div>

        <CModal
            title="Resim Kırp"
            :show.sync="modals.modalImageCropper.visible"
            :closeOnBackdrop="false"
            size="xl"
        >
            <CRow>
                <CCol col="12">
                    <cropper
                        ref="cropper"
                        :src="modals.modalImageCropper.image.src"
                        :stencil-props="{
                            aspectRatio: 1
                        }"
                    />
                </CCol>
            </CRow>
            <template #footer>
                <CButton
                    color="success"
                    @click="croppedImage()"
                >Kırp</CButton>
            </template>
        </CModal>
    </div>
</template>

<script>
/**
 * @author Can Bahadır Ceylan <ravenloft.raven@gmail.com>
 */
import Vue from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';

axios.defaults.withCredentials = true;

export default {
    components: {
        Cropper
    },
    props: {
        id: { // ID
            type: String,
            required: true
        },
        name: { // Name
            type: String,
            required: true
        },
        previewWidth: { // Item Başına Önizleme Genişlik
            type: String,
            default: '100px'
        },
        previewHeight: { // Item Başına Önizleme YÜkseklik
            type: String,
            default: '100px'
        },
        allowedImageFormats: { // Kabul edilen resim uzantıları - Varsaylan: image/png, image/jpg, image/jpeg
            type: String,
            default: 'image/png, image/jpg, image/jpeg'
        },
        allowedMultipleSelection: { // Çoklu resim seçimi - Varsayılan: false => Çoklu seçimi kapalı
            type: Boolean,
            default: false
        },
        maxImageUploadSize: { // Yüklenecek maksimum resim boyutu - Varsayılan: 1048576 byte => 1 MB
            type: Number,
            default: 1048576
        },
        maxAddImageCount: { // Eklenebilecek maksimum resim sayısı - Varsayılan: 0 => Sınırsız resim ekleme
            type: Number,
            default: 0
        },
        visibleTitle: { // Component başlığını gizle - Varsayılan: false => Başlık görünür
            type: Boolean,
            default: false
        },
        axiosURL: { // Resimleri yüklemek için kullanılacak backend URL adresi
            type: String,
            required: true
        },
        cdnDir: { // CDN dizini
            type: String,
            required: true
        },
        cdnImageDir: { // CDN'deki klasör dizini
            type: String,
            required: true
        },
        createAndUploadThumbnail: { // Resmin küçük bir kopyasını oluşturur ve gönderir.
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            addedImages: [],
            isUploading: false,
            multiCropper: false,
            modals: {
                modalImageCropper: {
                    visible: false,
                    image: {
                        src: null,
                        type: null,
                        fileName: '',
                        size: 0,
                        orjSize: 0
                    }
                }
            }
        }
    },
    created() {
    },
    destroyed() {
        // Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
		if (this.modals.modalImageCropper.image.src) URL.revokeObjectURL(this.modals.modalImageCropper.image.src);
    },
    watch: {
    },
    methods: {
        sleep(ms) {
            return new Promise(resolver => setTimeout(resolver, ms));
        },
        getMimeType(file, fallback = null) {
            const byteArray = (new Uint8Array(file)).subarray(0, 4);
            var header = '';
            for (var i = 0; i < byteArray.length; i++) {
                header += byteArray[i].toString(16);
            }
            switch (header) {
                case "89504e47":
                    return "image/png";
                case "47494638":
                    return "image/gif";
                case "ffd8ffe0":
                case "ffd8ffe1":
                case "ffd8ffe2":
                case "ffd8ffe3":
                case "ffd8ffe8":
                    return "image/jpeg";
                default:
                    return fallback;
            }
        },
        returnFileSize(size) {
            if(size < 1024) return size + '&nbsp;bytes';
            else if(size >= 1024 && size < 1048576) return (size/1024).toFixed(1) + '&nbsp;KB';
            else if(size >= 1048576) return (size/1048576).toFixed(1) + '&nbsp;MB';
        },
        async selectedImage(event) {
            const { files } = event.target;

            if(files.length === 1) { // Seçilen resim sayısı 1 ise
                // maxAddImageCount değeri sıfır ise (SINIRSIZ RESİM EKLEME) ya da addedImages değeri (Eklenen resim sayısı) maxAddImageCount değerinden (Maksimum eklenecek resim)
                if(this.maxAddImageCount === 0 || this.addedImages.length < this.maxAddImageCount) {
                    const file = files[0];

                    if(files && file) {
                        var fileType = this.getMimeType(file, file.type);

                        if(file.size > this.maxImageUploadSize) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Hata',
                                html: `En fazla <strong>${this.returnFileSize(this.maxImageUploadSize)}</strong> boyutuna kadar resim yükleyebilirsiniz!`,
                                confirmButtonText: 'Tamam'
                            });
                        } else if(!this.allowedImageFormats.split(', ').includes(fileType)) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Hata',
                                html: `Yalnızca <strong>${this.allowedImageFormats.split('image/').join('')}</strong> formatlı resimleri yükleyebilirsiniz!`,
                                confirmButtonText: 'Tamam'
                            });
                        } else {
                            // Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
                            if (this.modals.modalImageCropper.image.src) URL.revokeObjectURL(this.modals.modalImageCropper.image.src);

                            const fileReader = new FileReader();

                            fileReader.onload = (e) => {
                                this.modals.modalImageCropper.image = {
                                    src: URL.createObjectURL(file),
                                    type: fileType,
                                    fileName: file.name,
                                    size: 0,
                                    orjSize: this.returnFileSize(file.size)
                                }

                                this.modals.modalImageCropper.visible = true;
                            };

                            fileReader.readAsDataURL(file);
                        }
                    }
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Hata',
                        html: `En fazla <strong>${this.maxAddImageCount}</strong> resim yükleyebilirsiniz!`,
                        confirmButtonText: 'Tamam'
                    });
                }
            } else { // Birden fazla resim seçildiyse
                if(this.allowedMultipleSelection === true && files.length <= (this.maxAddImageCount - this.addedImages.length)) {
                    for(let i = 0; i < files.length; i++) {
                        var file = files[i];
                        var fileType = this.getMimeType(file, file.type);

                        if(file.size > this.maxImageUploadSize) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Hata',
                                html: `En fazla <strong>${this.returnFileSize(this.maxImageUploadSize)}</strong> boyutuna kadar resim yükleyebilirsiniz!`,
                                confirmButtonText: 'Tamam'
                            });
                        } else if(!this.allowedImageFormats.split(', ').includes(fileType)) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Hata',
                                html: `Yalnızca <strong>${this.allowedImageFormats.split('image/').join('')}</strong> formatlı resimleri yükleyebilirsiniz!`,
                                confirmButtonText: 'Tamam'
                            });
                        } else {
                            this.modals.modalImageCropper.visible = true;

                            // Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
                            if (this.modals.modalImageCropper.image.src) URL.revokeObjectURL(this.modals.modalImageCropper.image.src);

                            const fileReader = new FileReader();

                            fileReader.onload = async (e) => {
                                this.modals.modalImageCropper.image = {
                                    src: URL.createObjectURL(file),
                                    type: fileType,
                                    fileName: file.name,
                                    size: 0,
                                    orjSize: this.returnFileSize(this.modals.modalImageCropper.image.orjSize)
                                }
                            };

                            fileReader.readAsDataURL(file);

                            while(this.modals.modalImageCropper.visible === true) {
                                await this.sleep(100);
                                //console.log(i + '. resim kesiliyor.');
                            }

                            //console.log(i + '. resim kesildi.');
                        }
                    }

                    // Çoklu resim seçme aktif ise tüm resimlerin kırpma işlemi sonunda inputImage elementin değerini sıfırlıyoruz.
                    if(this.allowedMultipleSelection === true) document.getElementById('inputImage').value = '';
                    
                    //console.log('Tüm resimlerin kırpma işlemi bitti.');
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Hata',
                        html: `En fazla <strong>${this.maxAddImageCount}</strong> resim yükleyebilirsiniz!`,
                        confirmButtonText: 'Tamam'
                    });
                }
            }
        },
        deleteImage(i) {
            this.addedImages.splice(i, 1);
        },
        croppedImage() {
            const { canvas } = this.$refs.cropper.getResult();
            
			canvas.toBlob((blob) => {
				this.addedImages.push({
                    src: URL.createObjectURL(blob),
                    blob: blob,
                    type: blob.type,
                    fileName: this.modals.modalImageCropper.image.fileName,
                    size: this.returnFileSize(blob.size),
                    orjSize: this.modals.modalImageCropper.image.orjSize,
                    progress: 0,
                    uploadFailed: false,
                    uploadedFileNameThumb: '',
                    uploadedFileName: ''
                });

                this.modals.modalImageCropper.image = {
                    src: null,
                    type: null,
                    fileName: '',
                    size: 0,
                    orjSize: 0
                };

                // Çoklu resim seçme aktif değilse tek resim kırpma işlemi sonunda inputImage elementin değerini sıfırlıyoruz.
                if(this.allowedMultipleSelection === false) document.getElementById('inputImage').value = '';

                this.modals.modalImageCropper.visible = false;
			}, this.modals.modalImageCropper.image.type);
        },
        async uploadImages() {
            var result = undefined;

            //console.log('[IMAGE UPLOADER]', 'Yükleme başladı.');

            if(this.addedImages.length > 0) {
                this.isUploading = true;
                
                result = await new Promise(async (resolve, reject) => {
                    var i = 0;

                    while (true) {
                        if(i !== this.addedImages.length) {
                            if(this.addedImages[i].blob) {
                                var formData = new FormData();

                                formData.append('file', this.addedImages[i].blob);
                                formData.append('thumbnail', this.createAndUploadThumbnail);
                                
                                var response = await axios.post(
                                    this.axiosURL, 
                                    formData, 
                                    {
                                        headers: {
                                            'Content-Type': false
                                        },
                                        onUploadProgress: progressEvent => {
                                            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                                            this.addedImages[i].progress = percentCompleted;
                                        }
                                    }
                                );

                                if(response.data.result === 'success') {
                                    this.addedImages[i].uploadFailed = false;
                                    if(response.data.fileNameThumb !== '') this.addedImages[i].uploadedFileNameThumb = response.data.fileNameThumb;
                                    this.addedImages[i].uploadedFileName = response.data.fileName;
                                } else {
                                    this.addedImages[i].uploadFailed = true;
                                }
                            }

                            i++;
                        } else {
                            //console.log([IMAGE UPLOADER]', 'Yükleme bitti.');
                            break;
                        }
                    }

                    resolve(this.addedImages);
                });
            }

            return result;
        },
        setUploading(val) {
            this.isUploading = val;
        },
        getAddedImages() {
            return this.addedImages;
        },
        setAddedImages(imageFiles) {
            this.addedImages = imageFiles;
        }
    }
};
</script>

<style lang="scss">
.blankImage {
    background-color: #ececec;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;

    &:hover {
        background-color: #d4d4d4;
        cursor: pointer;
    }

    div:nth-child(1) {
        width: 100px;
        height: 100px;
    }
    div:nth-child(2) {
        width: 100px;
        height: 100px;
    }
}
.thumbImage {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
}
</style>
