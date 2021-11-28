<template>
  <div class="card" style="margin-top: 2%; margin-left: 20%; margin-right: 20%; 
  border-color: black; border-style: none none solid none;">

    <div class="card-content">
      <div class="content">
        <p>{{logItem.user.handle}}</p>
        <p>{{logItem.caption}}</p>
      </div>
    </div>

    <div class="card-footer">
      <!--<button class="button is-link is-rounded is-danger card-footer-item" 
        @click="$emit('remove')">-->
        <button class="button is-link is-rounded is-danger card-footer-itesm">
          Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        logItem: Object
    }
}
</script>

<style>
</style>