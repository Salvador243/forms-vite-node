<script setup>
const props = defineProps({
    id: Number,
    name: String,
    phone: String
});

const downloadAll = (id) => {
    const fileUrl = `http://localhost:3000/d/${id}`;
    window.open(fileUrl, "_blank");
}
</script>
<template>
    <tr>
        <td>{{ props.name }}</td>
        <td>{{ props.phone }}</td>
        <td><button class="uk-button uk-button-danger" type="button" @click="downloadAll(props.id)">Descargar
                multimedia</button></td>
    </tr>
</template>