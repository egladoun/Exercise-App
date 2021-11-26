<template>
  <div class="home">
        <pre>
            Welcome to Purposeful Fitness

            Purposeful Fitness is an application that is meant to help you in your exercise routine
        </pre>

      <div class="container">
        <div class="field" style="margin-left: 15%;">
        <router-link class="button is-link is-light is-rounded is-normal"
        to="/AppInfo">Click here for more information</router-link>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    
  }
}
</script>