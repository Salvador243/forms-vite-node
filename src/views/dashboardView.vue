<script setup>
import RowForm from '../components/rowForm.vue';
import { api } from '../composables/apiConnection';


const { getForm, forms, error } = api();

getForm();

const downloadFile = () => {
    const fileUrl = "http://localhost:3000/getreport";
    window.open(fileUrl, "_blank");
}
</script>
<template>
    <div class="uk-container uk-container-xsmall">
        <button class="uk-button uk-button-danger" type="button" @click="downloadFile">Descargar todos en XLSX</button>
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