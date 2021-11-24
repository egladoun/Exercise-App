<template>
  <div class="Sharing">
    <div class="container">
        <div class="column">
            
            <div class="post" v-for="p in posts" :key="p.src">
                <post :post="p" />
            </div>


        </div>
      </div>
  </div>
</template>

<script>
import Post from '../components/Post.vue';
import session from "../services/session";
import { GetFeed } from "../services/posts";
//import { GetWall } from "../services/posts";
export default {
  components: {
    Post
    },
    data: ()=> ({
        posts: []
        //posts: GetWall(session.user.handle)
    }),
    async mounted(){
        this.posts = await GetFeed(session.user.handle)
    }
}
</script>