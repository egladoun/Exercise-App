<template>
    <aside class="menu" style="float:left; border-color: black; border-style: none solid none none;">
        <ul class="menu-list">
            <li>
                <router-link to="/" active-class="is-active" exact>
                    Home
                </router-link>
            </li>
            <li>
                <router-link to="/AppInfo" active-class="is-active">
                    App Info
                </router-link>
            </li>
            <li>
                <router-link to="/Profile" active-class="is-active">
                    Profile Management
                </router-link>
            </li>
            <li>
                <router-link to="/ExerciseLog" active-class="is-active">
                    Exercise Log
                </router-link>
            </li>
            <li>
                <router-link to="/Schedule" active-class="is-active">
                    Weekly Schedule
                </router-link>
            </li>
            <li>
                <router-link to="/Sharing" active-class="is-active">
                    Sharing With Friends
                </router-link>
            </li>
        </ul>
    </aside>
</template>

<script>
export default {
    data(){
        return {
            isActive: false
        }
    }
}
</script>

<style>
</style>