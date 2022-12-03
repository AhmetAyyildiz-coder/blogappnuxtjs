<template>
  <div>
    <v-expansion-panels
      focusable
      active-class="">
      <v-expansion-panel
        v-for="aut in authors"
        :key="aut.id">
        <v-expansion-panel-header>
          {{aut.name}}
          {{aut.id}}
        </v-expansion-panel-header>
        <v-expansion-panel-content
          color="grey darken-2">
          <br>
          <p>Email  =>   {{aut.email}} </p>
          <p>Address :  {{aut.address.street}} {{aut.address.suite}} {{aut.address.city}}</p>
          <!--          <nuxt-link class="v-btn text&#45;&#45;primary" :to="{ name:'Post-AllPostForAuthor' , params:{ authId : aut.id} }">-->
          <!--            Bu yazarın bütün bloglarına git !-->
          <!--          </nuxt-link>-->


          <nuxt-link
            class="v-btn text--primary"
            :to="localePath({name:'post-AllPostForAuthor' ,  params:{ id : aut.id}})"
          >
            Bu yazarın bütün bloglarına git !
          </nuxt-link>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <br>
    <v-row   class="d-flex justify-center  mb-6">
      <v-col>
        <nuxt-link
          class="v-btn primary"
          to="/post">
          Bütün Blog Yazılarına Git
        </nuxt-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "index",

  async fetch(){
    await this.$store.dispatch('author/fetchAuthors')
  },

  computed:{
    ...mapState('author' , ["authors"])
  }
}
</script>

<style scoped>

</style>
