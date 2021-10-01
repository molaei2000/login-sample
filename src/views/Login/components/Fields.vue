<template>
    <v-form v-model="formValid">
        <v-row class="mx-10">
            <v-col cols="12" v-for="field in fields" :key="field.name">
                <label class=""
                    >{{ field.label }}
                    <v-text-field
                        class="bg-gray pt-5"
                        color="red"
                        background-color="grey lighten-3"
                        v-model="field.value"
                        solo
                        :placeholder="field.placeholder"
                        :type="field.type"
                        :rules="[...field.rules]"
                    ></v-text-field>
                </label>
            </v-col>
            <v-col cols="12">
                <v-btn
                    class="py-4"
                    block
                    dark
                    color="#00573f"
                    :loading="loading"
                    @click="submitForm"
                >
                    Login
                </v-btn>
            </v-col>
            <v-col cols="12 text-center mb-9">
                <router-link to="/forgetpass" class="text-decoration-none text--primary"
                    >Forget Password!</router-link
                >
            </v-col>
        </v-row>
    </v-form>
</template>
<script>
import {loginFields} from '../schema/schema'

export default {
    data() {
        return {
            formValid: false,
            loading: false,
            fields:loginFields
        };
    },
    methods: {
        submitForm() {
            if (this.formValid) {
                this.loading = true;
                localStorage.setItem('user', JSON.stringify(this.form));
                setTimeout(() => {
                    this.loading = false;
                }, 2000);
            }
        }
    }
};
</script>
