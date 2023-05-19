import { ref } from 'vue';
import axios from 'axios';

const error = ref(null);
export const api = () => {
    const forms = ref(null);

    const getForm = async () => {
        try {
            const res = await axios.get("http://localhost:3000/getforms");
            forms.value = res.data;
        } catch (e) {
            error.value = 'Error en la petición';
        } finally {

        }
    }

    return {
        getForm,
        forms,
        error,
    }
};