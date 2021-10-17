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
            <li><a href="/ProfileManagement">Profile Management</a></li>
            <li><a href="#">Exercise Log</a></li>
            <li><a href="#">Weekly Schedule</a></li>
            <li><a href="#">Sharing With Friends</a></li>
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