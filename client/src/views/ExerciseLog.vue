<template>
  <div class="ExerciseLog">
    <div class="container">
        <div class="column">

            <!--<logInput :new-logItem="newLogItem" @add="add()" />-->
            <logInput new-post="newlogInput" @add="add()" />

            <div class="logItem" v-for="(l, i) in logItems" :key="l.caption">
                <logItem :logItem="l" @remove="remove(l, i)" />
            </div>


        </div>
      </div>
  </div>
</template>

<script>
import logItem from '../components/logItem.vue';
import session from "../services/session";
import { Add, Delete, GetFeed } from "../services/logItems";
import logInput from "../components/logInput.vue";

const newPost = ()=> ({ user: session.user, user_handle: session.user.handle })

export default {
  components: {
        logItem,
        logInput
    },
    data: ()=> ({
        logItems: [],
        newPost: newPost()
    }),
    async mounted(){
        this.logItems = await GetFeed(session.user.handle)
    },
    methods: {
      async add(){
        const response = await Add(this.newPost);
        console.log({ response });

        if(response){
          this.logItems.unshift(response);
            this.newLogItem = newPost();
        }
      },
      async remove(logItem, i){
        console.log({logItem})
        const response = await Delete(logItem._id)

        if(response.deleted){
          this.logItems.splice(i, 1)
        }
      }
    }
}
</script>