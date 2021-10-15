<template>
    <aside class="menu" style="float:left; border-color: black; border-style: none solid none none;">
        <ul class="menu-list">
            <li><a href="/">Home</a></li>
            <li><a href="/AppInfo">App Info</a></li>
            <li><a href="#">Profile Management</a></li>
            <li><a href="#">Exercise Log</a></li>
            <li><a href="#">Weekly Schedule</a></li>
            <li><a href="#">Sharing With Friends</a></li>
            <li><a href="#">Logout</a></li>
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