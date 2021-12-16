<template>
    <form class="card" style="margin-left: 20%; margin-right: 20%; border-color: black;
    border-style: none none solid none;" @submit.prevent="$emit('add')">
        <div class="card-content">
            <div class="content">
                <div class="field">
                    <label class="label">Picture</label>
                    <div class="control">
                        <input class="input is-rounded" type="url" placeholder="Input a URL to a picture" v-model="post.src" />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Alt</label>
                    <div class="control">
                        <input class="input is-rounded" type="text" placeholder="Some alternate text for this picture" v-model="post.alt" />
                    </div>
                </div>

                <div class="field">
                    <label class="label">Caption</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Some text to explain this picture" v-model="post.caption"></textarea>
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <label class="radio">
                            <input type="radio" name="question" v-model="post.isPublic" :value="true" />
                            Public
                        </label>
                        <label class="radio">
                            <input type="radio" name="question" v-model="post.isPublic" :value="false" />
                            Private
                        </label>
                    </div>
                </div>





                <section>
                    <p class="content"><b>Selected:</b> {{ selected }}</p>
                    <o-field label="Find a friend">
                        <o-autocomplete rounded expanded v-model="name" :data="filteredDataArray" placeholder="Enter friend name here" icon="search" clearable @select="option => selected = option">
                            <template v-slot:empty>No results found</template>
                        </o-autocomplete>
                    </o-field>
                </section>








            </div>
        </div>
        <footer class="card-footer">
            <button class="button is-link is-rounded card-footer-item " type="submit">Submit</button>
            <button class="button is-link is-rounded is-light card-footer-item" type="reset">Cancel</button>
        </footer>
    </form>
</template>

<script>
import session from "../services/session";

export default {
    props: {
        newPost: Object
    },
    data(){
        return {
            post: this.newPost,
            //data: ['Angular', 'Angular 2', 'Aurelia', 'Backbone', 'Ember', 'jQuery', 'Meteor', 'Node.js', 'Polymer', 'React', 'RxJS', 'Vue.js'],
            data: [session.user.firstName],
            name: '',
            selected: null
        }
    },
    computed: {
      filteredDataArray() {
        return this.data.filter(option => {
          return (
            option
              .toString()
              .toLowerCase()
              .indexOf(this.name.toLowerCase()) >= 0
          )
        })
      }
    },
    watch: {
        newPost(){
            this.post = this.newPost;
        }
    }
}
</script>

<style>
</style>