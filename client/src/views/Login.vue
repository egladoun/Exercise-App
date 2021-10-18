<template>
    <form class="box" style="margin-left: 30%; margin-right: 30%;" @submit.prevent="login()">
        <div class="field">
            <div class="field">
                <label class="label">Email</label>
                <input class="input is-rounded" type="text" placeholder="Email" v-model="email">
            </div>
            <div class="field">
                <label class="label">Password</label>
                <input class="input is-rounded" type="password" placeholder="Password" v-model="password">
            </div>
        </div>
        <div class="field">
            <button class="button is-link is-rounded is-large">
                Login
            </button>
        </div>
    </form>
</template>

<script>
import Session from "../services/session";
export default {
    data: ()=>({
        email: null,
        password: null,
        Session
    }),
    methods: {
        login(){
            this.Session.Login(this.email, this.password);
        }
    }
}
</script>
