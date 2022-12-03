<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list dense nav>
        <v-list-item
          v-for="(item, index) in menuItems()"
          :key="index"
          :to="item.to"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar v-if="this.$fire.auth.currentUser" :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-spacer />
      <v-spacer />
      <v-toolbar-title>
        <v-btn to="/">
          {{ title }}
        </v-btn>
      </v-toolbar-title>
      <v-spacer />
      <v-spacer />

      <!--         <nuxt-link-->
      <!--           class="v-btn v-btn&#45;&#45;round "-->
      <!--           v-for="locale in availableLocales"-->
      <!--           :key="locale.code"-->
      <!--           :to="switchLocalePath(locale.code)">{{ locale.name }}-->
      <!--         </nuxt-link>-->
      <v-btn
        class="v-btn v-btn--round"
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        text
        color="primary"
      >{{ locale.name }}
      </v-btn>
      <v-spacer style="width: 20px" />

      <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark"
             style="margin-right: 20px">
        <v-icon>
          {{
            $vuetify.theme.dark ? icons.mdiWeatherNight : icons.mdiWhiteBalanceSunny
          }}
        </v-icon>
      </v-btn>
      <v-menu
        bottom
        min-width="200px"
        rounded
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            x-large
            v-on="on"
          >
            <v-avatar
              color="brown"
              size="48"
            >
              <span class="white--text text-h5">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar
                color="brown"
              >
                <span class="white--text text-h5">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ this.$fire.auth.name }}</h3>
              <p class="text-caption mt-1">
                {{ this.$fire.auth.currentUser.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Edit Account
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                @click="logout"
                depressed
                rounded
                text
              >
                Logout
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Cookie from "js-cookie";

import { mdiWeatherNight, mdiWhiteBalanceSunny, mdiGithub } from '@mdi/js'

export default {
  name: 'DefaultLayout',
  data() {
    return {
      user: {
        initials: 'JD',
        fullName: 'John Doe',
        email: 'john.doe@doe.com',
      },
      icons: { mdiWeatherNight, mdiWhiteBalanceSunny, mdiGithub },
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Nuxt Js Blog App',
      menuItems() {
        return [
          {
            text:this.$t('menuItems.home'),
            to:this.localePath('/')
          },
          {
            text: this.$t('menuItems.author'),
            to: this.localePath('/author')
          },
          {
            text: this.$t('menuItems.Post'),
            to: this.localePath('/post')
          }
        ]
      }

    }
  },
  methods : {
    logout(){
      this.drawer=false;
      this.$fire.auth.signOut()
      Cookie.remove('bloguser');
    }
  },
  computed:{
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
    items(){
      return this.$t('items');
    }
  }
}
</script>
