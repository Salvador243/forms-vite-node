<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';

const type_event = ref('');
const attende_name = ref('');
const event_date = ref('');
const religious_ceremony_time = ref('');
const reception_time = ref('');
const religious_ceremony_address = ref('');
const reception_address = ref('');
const religious_ceremony_message = ref('');
const reception_message = ref('');
const whatsapp_phone = ref('');
const gallery_photo_1 = ref('');
const gallery_photo_2 = ref('');
const gallery_photo_3 = ref('');
const gallery_photo_4 = ref('');
const gallery_photo_5 = ref('');
const gallery_photo_6 = ref('');
const main_photo = ref('');
const video = ref('');
const song = ref('');

const images = ref({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
});

const submitForm = async (event) => {
    event.preventDefault();
    if (isRequiredFieldEmpty.value) {
        // Crea el objeto de datos para enviar al servidor
        const formData = new FormData();
        formData.append('type_event', type_event.value);
        formData.append('attende_name', attende_name.value);
        formData.append('event_date', event_date.value);
        formData.append('religious_ceremony_time', religious_ceremony_time.value);
        formData.append('reception_time', reception_time.value);
        formData.append('religious_ceremony_address', religious_ceremony_address.value);
        formData.append('reception_address', reception_address.value);
        formData.append('religious_ceremony_message', religious_ceremony_message.value);
        formData.append('reception_message', reception_message.value);
        formData.append('whatsapp_phone', whatsapp_phone.value);
        formData.append('gallery_photo_1', gallery_photo_1.value.files ? gallery_photo_1.value.files[0] : '');
        formData.append('gallery_photo_2', gallery_photo_2.value.files ? gallery_photo_2.value.files[0] : '');
        formData.append('gallery_photo_3', gallery_photo_3.value.files ? gallery_photo_3.value.files[0] : '');
        formData.append('gallery_photo_4', gallery_photo_4.value.files ? gallery_photo_4.value.files[0] : '');
        formData.append('gallery_photo_5', gallery_photo_5.value.files ? gallery_photo_5.value.files[0] : '');
        formData.append('gallery_photo_6', gallery_photo_6.value.files ? gallery_photo_6.value.files[0] : '');
        formData.append('main_photo', main_photo.value.files ? main_photo.value.files[0] : '');
        formData.append('video', video.value.files ? video.value.files[0] : '');
        formData.append('song', song.value.files ? song.value.files[0] : '');

        try {
            // Realiza la solicitud HTTP POST a la API de Node.js usando Axios
            const response = await axios.post('http://localhost:3000/register', formData);
            console.log(response.data); // Maneja la respuesta del servidor
        } catch (error) {
            console.error(error); // Maneja los errores
        }
    } else {
        alert(2)
    }
};

const handleFileChange = (event, id) => {
    const [file] = event.target.files;
    if (file) {
        const allowedExtensions = ['image/png', 'image/jpeg'];
        if (allowedExtensions.includes(file.type)) {
            images.value[id] = URL.createObjectURL(file);
        } else {
            alert('Solo se permiten imágenes en formato PNG o JPG.');
        }
    }
};

// Función computada para verificar si al menos uno de los campos requeridos está vacío
const isRequiredFieldEmpty = computed(() => {
    return type_event.value &&
        attende_name.value &&
        event_date.value &&
        religious_ceremony_time.value &&
        reception_time.value &&
        religious_ceremony_address.value &&
        reception_address.value &&
        religious_ceremony_message.value &&
        reception_message.value &&
        whatsapp_phone.value &&
        images.value[1] &&
        images.value[2] &&
        images.value[3] &&
        images.value[4] &&
        images.value[5] &&
        images.value[6] &&
        images.value[7]
});

</script>

<template>
    <div class="uk-container uk-container-xsmall">
        <div class="uk-text-center" uk-parallax="start: 100%; end: 100%; stroke: 100%;">
            <img src="../assets/images/banner.webp">
        </div>
        <form @submit.prevent="submitForm" class="uk-form-stacked uk-margin-top uk-margin-large-bottom">
            <div>
                <div>
                    <div class="uk-card uk-card-default uk-card-body">
                        <h3 class="uk-card-title">Tipo de evento</h3>
                        <div class="uk-form-controls">
                            <label class="uk-margin-medium-right"><input class="uk-radio color-orange" type="radio"
                                    v-model="type_event" value="1">
                                XV años
                            </label>
                            <label class="uk-margin-medium-right"><input class="uk-radio" type="radio" v-model="type_event"
                                    value="2">
                                Boda
                            </label>
                            <label class="uk-margin-medium-right"><input class="uk-radio" type="radio" v-model="type_event"
                                    value="3">
                                Cumpleaños
                            </label>
                            <label class="uk-margin-medium-right"><input class="uk-radio" type="radio" v-model="type_event"
                                    value="4">
                                Bautizo
                            </label>
                            <label class="uk-margin-medium-right"><input class="uk-radio" type="radio" v-model="type_event"
                                    value="5">
                                Revelación
                            </label>
                            <label class="uk-margin-medium-right"><input class="uk-radio" type="radio" v-model="type_event"
                                    value="6">
                                Graduación
                            </label>
                            <label class="uk-margin-medium-right"><input class="uk-radio" type="radio" v-model="type_event"
                                    value="7">
                                Posada
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-top">
                        <h3 class="uk-card-title">Nombre del festajad@</h3>
                        <input type="text" class="uk-input" v-model="attende_name">
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-top">
                        <h3 class="uk-card-title">Fecha del evento</h3>
                        <input type="date" class="uk-input" v-model="event_date">
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-top">
                        <h3 class="uk-card-title">Hora de ceremonia religiosa</h3>
                        <input type="time" class="uk-input" v-model="religious_ceremony_time">
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-top">
                        <h3 class="uk-card-title">Hora de la recepción</h3>
                        <input type="time" class="uk-input" v-model="reception_time">
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-top">
                        <h3 class="uk-card-title">Dirección Ceremonia religiosa</h3>
                        <input type="text" class="uk-input" v-model="religious_ceremony_address">
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-top">
                        <h3 class="uk-card-title">Dirección recepción</h3>
                        <input type="text" class="uk-input" v-model="reception_address">
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-top">
                        <h3 class="uk-card-title">Mensaje especial para ceremonia religiosa</h3>
                        <input type="text" class="uk-input" v-model="religious_ceremony_message">
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-top">
                        <h3 class="uk-card-title">Mensaje especial para la recepción</h3>
                        <input type="text" class="uk-input" v-model="reception_message">
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-top">
                        <h3 class="uk-card-title">Foto principal Formato JPG, PNG</h3>
                        <div uk-form-custom>
                            <input accept="image/*" type="file" aria-label="Custom controls"
                                @change="(event) => handleFileChange(event, 7)" ref="main_photo">
                            <button class="uk-button uk-button-primary" type="button" tabindex="-1">Foto principal
                                Formato
                                JPG, PNG</button>
                        </div>
                        <img class="image-prev" :style="images[7] ? 'display:block;' : 'display:none'" :src="images[7]" />
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-top">
                        <h3 class="uk-card-title">Foto Galeria 1 Formato JPG, PNG</h3>
                        <div uk-form-custom>
                            <input accept="image/*" type="file" aria-label="Custom controls"
                                @change="(event) => handleFileChange(event, 1)" ref="gallery_photo_1">
                            <button class="uk-button uk-button-primary" type="button" tabindex="-1">Foto Galeria 1
                                Formato
                                JPG, PNG</button>
                        </div>
                        <img class="image-prev" :style="images[1] ? 'display:block;' : 'display:none'" :src="images[1]" />

                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-top">
                        <h3 class="uk-card-title">Foto Galeria 2 Formato JPG, PNG</h3>
                        <div uk-form-custom>
                            <input accept="image/*" type="file" aria-label="Custom controls"
                                @change="(event) => handleFileChange(event, 2)" ref="gallery_photo_2">
                            <button class="uk-button uk-button-primary" type="button" tabindex="-1">Foto Galeria 2
                                Formato
                                JPG, PNG</button>
                        </div>
                        <img class="image-prev" :style="images[2] ? 'display:block;' : 'display:none'" :src="images[2]" />
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-top">
                        <h3 class="uk-card-title">Foto Galeria 3 Formato JPG, PNG</h3>
                        <div uk-form-custom>
                            <input accept="image/*" type="file" aria-label="Custom controls"
                                @change="(event) => handleFileChange(event, 3)" ref="gallery_photo_3">
                            <button class="uk-button uk-button-primary" type="button" tabindex="-1">Foto Galeria 3
                                Formato
                                JPG, PNG</button>
                        </div>
                        <img class="image-prev" :style="images[3] ? 'display:block;' : 'display:none'" :src="images[3]" />

                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-top">
                        <h3 class="uk-card-title">Foto Galeria 4 Formato JPG, PNG</h3>
                        <div uk-form-custom>
                            <input accept="image/*" type="file" aria-label="Custom controls"
                                @change="(event) => handleFileChange(event, 4)" ref="gallery_photo_4">
                            <button class="uk-button uk-button-primary" type="button" tabindex="-1">Foto Galeria 4
                                Formato
                                JPG, PNG</button>
                        </div>
                        <img class="image-prev" :style="images[4] ? 'display:block;' : 'display:none'" :src="images[4]" />
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-top">
                        <h3 class="uk-card-title">Foto Galeria 5 Formato JPG, PNG</h3>
                        <div uk-form-custom>
                            <input accept="image/*" type="file" aria-label="Custom controls"
                                @change="(event) => handleFileChange(event, 5)" ref="gallery_photo_5">
                            <button class="uk-button uk-button-primary" type="button" tabindex="-1">Foto Galeria 5
                                Formato
                                JPG, PNG</button>
                        </div>
                        <img class="image-prev" :style="images[5] ? 'display:block;' : 'display:none'" :src="images[5]" />
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-top">
                        <h3 class="uk-card-title">Foto Galeria 6 Formato JPG, PNG</h3>
                        <div uk-form-custom>
                            <input accept="image/*" type="file" aria-label="Custom controls"
                                @change="(event) => handleFileChange(event, 6)" ref="gallery_photo_6">
                            <button class="uk-button uk-button-primary" type="button" tabindex="-1">Foto Galeria 6
                                Formato
                                JPG, PNG</button>
                        </div>
                        <img class="image-prev" :style="images[6] ? 'display:block;' : 'display:none'" :src="images[6]" />
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-top">
                        <h3 class="uk-card-title">Video corta duración Formato MP4 (opcional)</h3>
                        <div uk-form-custom>
                            <input type="file" aria-label="Custom controls" accept="video/mp4" ref="video">
                            <button class="uk-button uk-button-primary" type="button" tabindex="-1">Video corto
                                .MP4</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-top">
                        <h3 class="uk-card-title">Canción Formato MP3 (opcional)</h3>
                        <div uk-form-custom>
                            <input type="file" aria-label="Custom controls" accept="audio/mp3" ref="song">
                            <button class="uk-button uk-button-primary" type="button" tabindex="-1">Canción
                                .MP3</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-top">
                        <h3 class="uk-card-title">Teléfono con whatsapp para confirmar asistencia.</h3>
                        <input type="text" class="uk-input" v-model="whatsapp_phone">
                    </div>
                </div>
                <button class="uk-button uk-button-primary uk-margin-top" type="submit"
                    :disabled="!isRequiredFieldEmpty">Enviar</button>
            </div>
        </form>
    </div>
</template>