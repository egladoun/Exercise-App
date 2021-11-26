<template>
  <div class="Sharing">
    <div class="container">
        <div class="column">

            <postInput :new-post="newPost" />

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
import postInput from "../components/postInput.vue";

const newPost = ()=> ({ user: session.user, user_handle: session.user.handle })

export default {
  components: {
    Post,
    postInput
    },
    data: ()=> ({
        posts: [],
        newPost: newPost()
    }),
    async mounted(){
        this.posts = await GetFeed(session.user.handle)
    },
    /*methods: {
      async add(){
        console.log("Adding new post at " + new Date())
        const response = await Add(this.newPost);
        console.log({ response });

        if(response){
          this.posts.unshift(response);
            this.newPost = newPost();
        }
      }
    }*/
}
</script>