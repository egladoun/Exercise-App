<template>
  <div class="Sharing">
    <div class="container">
        <div class="column">

            <div class="logItem" v-for="l in logItems" :key="l.caption">
                <logItem :logItem="l" />
            </div>


        </div>
      </div>
  </div>
</template>

<script>
import logItem from '../components/logItem.vue';
import session from "../services/session";
import { GetFeed } from "../services/logItems";

export default {
  components: {
        logItem
    },
    data: ()=> ({
        logItems: []
    }),
    async mounted(){
        this.logItems = await GetFeed(session.user.handle)
    }
}
</script>