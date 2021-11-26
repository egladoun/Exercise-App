<template>
  <div class="Sharing">
    <div class="container">
        <div class="column">

            <postInput :new-post="newPost" @add="add()" />

            <div class="post" v-for="(p, i) in posts" :key="p.src">
                <post :post="p" @remove="remove(p, i)" />
            </div>


        </div>
      </div>
  </div>
</template>

<script>
import Post from '../components/Post.vue';
import session from "../services/session";
import { Add, Delete, GetFeed } from "../services/posts";
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
    methods: {
      async add(){
        const response = await Add(this.newPost);
        console.log({ response });

        if(response){
          this.posts.unshift(response);
            this.newPost = newPost();
        }
      },
      async remove(post, i){
        console.log({post})
        const response = await Delete(post._id)
        if(response.deleted){
          this.posts.splice(i, 1)
        }
      }
    }
}
</script>