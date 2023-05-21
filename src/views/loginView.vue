<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useSession } from '../store/useSession';

const sessionFunction = useSession();

const username = ref('');
const password = ref('');
const router = useRouter();

const submitForm = async () => {
    const formData = {
        username: username.value,
        password: password.value
    };

    try {
        const res = await axios.post('http://localhost:3000/login', formData);
        if (res.data === true) {
            sessionFunction.active = true;
            router.push('/dashboard');
        } else {
            session.active = false;
            router.push('/login');
        }
    } catch (error) {
        console.error(error);
    }
};

</script>

<template>
    <div class="uk-container uk-container-xsmall">
        <div class="uk-flex uk-flex-center">
            <div class="uk-card uk-card-primary uk-margin-xlarge-top">
                <div class="uk-card-media-left uk-cover-container">
                    <img src="images/light.jpg" alt="" uk-cover>
                </div>
                <div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Dashboard adminstrador</h3>
                        <form @submit.prevent="submitForm">
                            <div class="uk-margin">
                                <div class="uk-inline">
                                    <span class="uk-form-icon" uk-icon="icon: user"></span>
                                    <input class="uk-input" v-model="username" type="text" aria-label="Not clickable icon">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <div class="uk-inline">
                                    <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                                    <input class="uk-input" v-model="password" type="password"
                                        aria-label="Not clickable icon">
                                </div>
                            </div>
                            <button type="submit" class="uk-button uk-button-default">Iniciar sesion</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>