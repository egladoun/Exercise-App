<template>
    <form class="card" style="margin-left: 20%; margin-right: 20%; border-color: black;
    border-style: none none solid none;" @submit.prevent="$emit('add')">
        <div class="card-content">
            <div class="content">

                <div class="field">
                    <label class="label">Caption</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Some text to explain this picture" v-model="post.caption"></textarea>
                    </div>
                </div>

            </div>
        </div>
        <footer class="card-footer">
            <button class="button is-link is-rounded card-footer-item " type="submit">Submit</button>
            <button class="button is-link is-rounded is-light card-footer-item" type="reset">Cancel</button>
        </footer>
    </form>
</template>

<script>
export default {
    props: {
        newPost: Object
    },
    data(){
        return {
            post: this.newPost
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