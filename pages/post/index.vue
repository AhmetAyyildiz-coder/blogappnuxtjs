<template>
  <div>
    <PostListCard  :posts="posts"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PostListCard from '~/components/PostListCard.vue'


export default {
  name: "index",
  components:{
    PostListCard
  },
  async fetch() {
    await this.$store.dispatch('post/fetchPosts')
  },
  computed: {
    ...mapState('post' , ['posts'])
  }
}
</script>

<style scoped>

</style>
