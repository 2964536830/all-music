<template>
  <v-app>
    <v-app-bar app color="white">
      <div class="com-width v-toolbar__content">

        <div class="d-flex align-center" v-font="30">
          ALL - Music
        </div>
        <v-spacer/>
        <v-text-field class="no-field header-search" filled solo label="请输入要搜索的音乐" prepend-inner-icon="search"/>
        <div class="userinfo ml-5">
          <v-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="你的头像"/>
          </v-avatar>
        </div>
      </div>
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer>
      <div class="com-width am-footer">
        <img class="music-cover" src="https://cdn.vuetifyjs.com/images/john.jpg" alt="">
        <div class="music-controls-bar"></div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
  import HelloWorld from './components/HelloWorld';

  export default {
    name: 'App',

    components: {
      HelloWorld,
    },

    data: () => ({
      //
    }),
  };
</script>
<style lang="less">
  @import "assets/styles/common";
  @import "assets/styles/overwrite";
  @import "assets/styles/app";
</style>
