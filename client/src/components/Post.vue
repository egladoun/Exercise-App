<template>
  <div class="card" style="margin-top: 2%; margin-left: 20%; margin-right: 20%; 
  border-color: black; border-style: none none solid none;">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="post.src" :alt="post.alt">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="post.user.pic" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4"> {{post.user.firstName}} {{post.user.lastName}} </p>
          <p class="subtitle is-6">{{post.user.handle}}</p>
          <time datetime="datetime">{{post.time}}</time>
        </div>
      </div>

      <div class="content">
        {{post.caption}}      
      </div>
    </div>

    <div class="card-footer">
      <button class="button is-link is-rounded is-danger card-footer-item" 
        @click="$emit('remove')">
          Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        post: Object
    }
}
</script>

<style>
</style>