<template>
  <div>
    <v-expansion-panels focusable>
      <v-expansion-panel
        v-for="comment in comments"
        :key="comment.id">
        <v-expansion-panel-header>
          {{comment.name}}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          {{comment.body}}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "index",
  async fetch() {
    await  this.$store.dispatch('comment/fetchComments')
  },
  computed:{
    ...mapState('comment' , ['comments'])

  }
}
</script>

<style scoped>

</style>
