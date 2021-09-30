<template>
    <v-card class="mx-auto" max-width="500" outlined>
        <v-card-title>
            Login
        </v-card-title>

        <v-form v-model="formValid">
            <v-text-field
                v-for="(field) in fields" :key="field.name"
                class="mx-3"
                :label="field.label"
                :type="field.type"
                :v-model="field.model"
                :rules="[...field.rules]"
            ></v-text-field>

            <v-card-actions>
                <v-row>
                    <v-col cols="12">
                        <v-btn
                            class="mb-1"
                            rounded
                            block
                            color="primary"
                            :loading="loading"
                            :disabled="disabledBtn"
                            @click="submitForm"
                        >
                            Login
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-form>
    </v-card>
</template>

<script>
import { checkEmail, required, min8 } from '../validation/index';
export default {
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
            loading: false,
            formValid: false,
            fields:[
                {name:'email',type:'email',label:'Email',model:form.email,rules:[required,checkEmail]},
                {name:'password',type:'password',label:'Password',model:form.password,rules:[required,min8]},
            ]
        };
    },
    computed: {
        disabledBtn() {
            return this.loading || !this.formValid;
        },
    },
    methods: {
        submitForm() {
            if (this.formValid) {
                this.loading = true;
                localStorage.setItem('user', JSON.stringify(this.form));
                setTimeout(() => {
                    this.loading = false;
                    this.$router.push({ name: 'Dashboard' });
                }, 2000);
            }
        },
    },
};
</script>
