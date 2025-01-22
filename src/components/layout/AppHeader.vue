<style>
#id_logo_531_header {
  width: 40px;
  height: 40px;
  margin-left: 10px;
}

</style>

<script>

//import { createApp } from 'vue';
//import lang from '../../lang.js';

//const app = createApp(this);

//app.use(lang);
//app.mount('#app');

export default {

  name: "AppHeader",
  methods: {
    changeLanguage(lang) {
      //alert(lang);
      this.$i18n.locale = lang;
    },
  }
}
</script>

<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">
        <img id="id_logo_531_header" src="../../assets/logo_531.png"/>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/about">{{ $t('about') }}</b-nav-item>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown :text="$t('lang')" right>
            <b-dropdown-item @click="changeLanguage('en')">ENGLISH🇺🇸🇬🇧</b-dropdown-item>
            <b-dropdown-item @click="changeLanguage('ko')">한국어🇰🇷</b-dropdown-item>
            <!-- Add more languages as needed -->
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
