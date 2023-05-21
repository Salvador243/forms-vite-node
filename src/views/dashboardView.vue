<script setup>
import RowForm from '../components/rowForm.vue';
import { api } from '../composables/apiConnection';
import { useRouter } from 'vue-router';
import { useSession } from '../store/useSession';

const sessionFunction = useSession();

const router = useRouter();
const logout = () => {
    sessionFunction.active = false;
    router.push('/');
};
const { getForm, forms, error } = api();

getForm();

const downloadFile = () => {
    const fileUrl = "http://localhost:3000/getreport";
    window.open(fileUrl, "_blank");
};
</script>

<template>
    <div class="uk-container uk-container-xsmall">
        <p uk-margin>
            <button class="uk-button uk-button-danger uk-margin-right" type="button" @click="downloadFile">Descargar
                todos en XLSX</button>
            <router-link class="uk-button uk-button-danger uk-margin-right" to="/">home</router-link>
            <button class="uk-button uk-button-danger" @click="logout">Cerrar sesión</button>
        </p>
        <table class="uk-table uk-table-middle uk-table-divider">
            <thead>
                <tr>
                    <th>Nombre festejado</th>
                    <th>Número de contacto</th>
                    <th>Descargar contenido</th>
                </tr>
            </thead>
            <tbody>
                <RowForm v-for="form in forms " :id="form.id" :name="form.attendee_name" :phone="form.whatsapp_phone" />
            </tbody>
        </table>
    </div>
</template>