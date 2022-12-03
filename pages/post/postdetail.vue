<template>
  <div>
    <v-container>
      <v-row
        align="center"
        no-gutters
      >
        <v-col
        >
          <v-card class="mx-auto  mw700" >
            <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
            <v-card-title>{{ postValue.title }}</v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
              <p>{{ postValue.body }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row
        align="center"
        no-gutters>
        <v-col>
        </v-col>
        <v-col>
          <h2 class="text-center">Bütün yorumlar </h2>
        </v-col>
        <v-col>
        </v-col>

      </v-row>
    </v-container>
    <v-container>
      <v-row
        align="center"
        no-gutters>
        <v-col>

        </v-col>
        <v-col>
          <v-expansion-panels focusable
                              style="width: 600px"
          >
            <v-expansion-panel
              v-for="comment in comments"
              :key="comment.id"
            >
              <v-expansion-panel-header>
                {{ comment.name }}
              </v-expansion-panel-header>
              <v-expansion-panel-content
                class="pt-3">
                {{ comment.body }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "post-detail",
  data() {
    return {
      postValue: null,
      comments: []
    }
  },
  async fetch() {
    const {post: postValue} = this.$route.params
    console.log("params ")
    console.log( this.$route.params)

    console.log("post value")
    console.log(postValue)
    this.postValue = postValue;

    await this.$store.dispatch('post/fetchPost', postValue.id)
    this.comments = await this.$axios.$get(`/posts/${postValue.id}/comments`)
    console.log("comment")
    console.log(this.comments)
  },
}
</script>

<style scoped>
.mw700{
  max-width: 600px;
}
</style>
