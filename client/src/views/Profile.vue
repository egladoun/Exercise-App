<template>
    <div class="Profile">
        <div class="block" style="margin:">
            <p style="margin-left: 15%;">Name: {{name}}</p>
        </div>
        <div class="block" style="margin:">
            <p style="margin-left: 15%;">Handle: {{this.Session.user.handle}}</p>
        </div>
    </div>
</template>

<script>
import Session from "../services/session";

export default {
    data(){
        return ({
            Session
        })
    },
    methods: {
        login(){
            this.$router.push('/login');
        }
    },
    computed:{
        name(){
            return this.Session.user.firstName + ' ' + this.Session.user.lastName;
        }
    }
}
</script>
