<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="post in posts" :key="post.id"
             style="max-height: 650px">
        <v-card class="mx-auto my-12" max-width="400" min-height="250">
          <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
          <v-card-title class="mh100">{{ post.title }}</v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-text
            class="minh13rem"
          >
            <p>
              {{ post.body }}
            </p>
          </v-card-text>
          <v-card-actions
            class="d-flex justify-center"
          >
            <nuxt-link
              class="v-btn v-btn--rounded primary pa-2  mb-6 "
              :to="localePath({ name: 'post-postdetail', params: { post: post }})">
              Post Detayı Göster
            </nuxt-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "PostListCard",
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>


.mh100{
  min-height: 100px;
}
.minh13rem{
  min-height: 10rem;
}

</style>
