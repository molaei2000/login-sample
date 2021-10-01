<template>
    
    <v-card class="mx-auto rounded-lg" max-width="400" outlined>
        <v-card-title class="justify-center font-weight-bold">
            <h2 class="py-5">Login</h2>
        </v-card-title>
        <Fields/>
    </v-card>
</template>

<script>
import Fields from './components/Fields.vue'
export default {
    components:{
        Fields,
    },
};
</script>

