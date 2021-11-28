<template>
    <div class="Profile">
        <div class="block" style="margin:">
            <p style="margin-left: 15%;">Name: {{name}}</p>
        </div>
        <div class="block" style="margin:">
            <p style="margin-left: 15%;">Handle: {{handle}}</p>
        </div>
        <div class="card" style="margin-left: 15%;">
            <p>Profile picture:</p><br>
            <figure>
                <img :src=picture :alt=user_handle>
            </figure>

            <p>Following: {{following}}</p>
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
    computed: {
        name(){
            return this.Session.user.firstName + ' ' + this.Session.user.lastName;
        },
        handle(){
            return this.Session.user.handle;
        },
        picture(){
            return this.Session.user.pic;
        },
        following(){
            return this.Session.user.following;
        }
        
    }
}
</script>
