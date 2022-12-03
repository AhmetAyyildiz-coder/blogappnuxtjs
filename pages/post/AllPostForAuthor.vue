<template>
  <div>
    <PostListCard  :posts="posts"/>
  </div>
</template>

<script>
export default {
  name: "AllPostForAuthor",
  data(){
    return {
      posts:[]
    }
  }
  ,
  async fetch(){
    const {id : authorId} = this.$route.params;
    console.log(authorId);
    await this.$axios.get(`posts?userId=${authorId}`).then(
      (res)=>{
        this.posts = res.data;
      }
    )
  }
}
</script>

<style scoped>

</style>
