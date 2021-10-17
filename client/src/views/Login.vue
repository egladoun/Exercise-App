<template>
    <div class="Login">
        <form class="box" style="margin-left: 30%; margin-right: 30%;">
            <div class="field">
                <label class="label">Email</label>
                    <input class="input is-rounded" type="email" placeholder="Text input">
            </div>
            <div class="field">
                <label class="label">Password</label>
                    <input class="input is-rounded" type="password" placeholder="Text input">
            </div>
            <div class="field">
                <router-link class="button is-link is-rounded is-large" to="/">
                    Login
                </router-link>
            </div>
        </form>
    </div>
</template>