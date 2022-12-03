<template>
  <v-item-group >
    <v-spacer />
    <v-container >
      <br>
      <v-row>
        <v-col
          cols="12"
          md="4">
          <v-item >
            <v-card
              color='pink darken-1'
              class="d-flex align-center rounded-xl"
              dark
              height="200">
              <v-scroll-y-transition>
                <div class="pa-md-5 flex-grow-1 text-center">
                  <h2>{{$t('dashboard.TotalPostNumber')}}</h2>
                  <br>
                  <h3>{{posts.length}}</h3>
                  <br>
                  <NuxtLink class="white--text v-btn  blue-grey" to="/post">
                    <i class="mdi mdi-rename-box pr-3"></i>
                    <small class="pr-3">{{$t('dashboard.SeeAllPosts')}}  ! </small>
                  </NuxtLink>
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
        <v-col
          cols="12"
          md="4">
          <v-item>
            <v-card
              color='primary'
              class="d-flex align-center rounded-xl"
              dark
              height="200">
              <v-scroll-y-transition>
                <div class=" flex-grow-1 text-center pa-md-5">
                  <h2>{{$t('dashboard.TotalAuthorNumber')}}</h2>
                  <h3>{{authors.length}}</h3>
                  <br>
                  <NuxtLink class="white--text v-btn  blue-grey" to="/author" >
                    <i class="mdi mdi-account-box pr-3"></i>
                    <small class="pr-3">{{$t('dashboard.SeeAllAuthors')}} !</small>
                  </NuxtLink>
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
        <v-col cols="12" md="4">
          <v-item>
            <v-card
              color='primary'
              class="d-flex align-center rounded-xl"
              dark
              height="200"
            >
              <v-scroll-y-transition>
                <div
                  class=" flex-grow-1 text-center pa-md-5">
                  <h2>  {{$t('dashboard.TotalCommentNumber')}}
                  </h2>
                  <h3>{{comments.length}}</h3>
                  <br>
                  <NuxtLink class="white--text blue-grey v-btn" to="/comments" >
                    <i class="mdi mdi-tooltip-text pr-3"></i>
                    <small class="pr-3">{{$t('dashboard.SeeAllComments')}} !
                    </small>
                  </NuxtLink>
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'IndexPage',
  async fetch() {
    // önce post'ları api'dan çekicek action'u tetikleriz.
    // ardından bu action kendi içerisinde commit ile mutation'u tetikler.
    // çektiği datayı mutations ile getters'a atar.
    await this.$store.dispatch('post/fetchPosts')
    await  this.$store.dispatch('author/fetchAuthors')
    await  this.$store.dispatch('comment/fetchComments')
  },
  computed: {
    // artık post içerisindeki getters'ı post değişkeni olarak ekranda kullanabiliriz.
    ...mapState('post', ['posts']),
    ...mapState('author' , ['authors']),
    ...mapState('comment' , ['comments']),
  },
  methods : {
  },

}
</script>
