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
import {mapState} from 'vuex'
export default {
    data() {
        return {
            formValid: false,
            fields:loginFields,
        };
    },
    computed:mapState(['loading'])
    ,
    methods: {
        submitForm() {
            if (this.formValid) {
                this.$store.state.loading = true;
                console.log(this.$store.state.loading);
                const form = {
                    usrname:loginFields[0].value,
                    password:loginFields[1].value
                }
                this.$store.dispatch('submitLogin',form)
            }else{
                alert('please fill the fields...')
            }
        }
    }
};
</script>
