<template>
<nav class="main-nav navbar is-white is-radiusless has-border-top-primary2 has-shadow" :class="{'is-fixed-top':fixed}" style="z-index:1000" role="navigation" aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand" style="margin-left:-0.80rem">
      <router-link class="navbar-item" to="/" :key="$route.fullPath"><i id="psp-logo" class="psp-icons psp-logo has-text-primary2"></i></router-link>
      <a role="button" class="navbar-burger burger" :class="{'is-active': isActive}" aria-label="menu" aria-expanded="false" data-target="mainNavbarMenu" @click="toggleMobileNav()">
         <span aria-hidden="true"></span>
         <span aria-hidden="true"></span>
         <span aria-hidden="true"></span>
       </a>
    </div>
    <div class="navbar-menu" :class="{'is-active': isActive}" id="mainNavbarMenu"   style="margin-right:-0.80rem">
      <div class="navbar-start">
        <!-- navbar items -->
      </div>

      <div class="navbar-end">
          <router-link class="navbar-item" to="/" :key="$route.fullPath">Home</router-link>
          <a class="navbar-item" href="/docs">Docs</a>

        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <div class="navbar-link">About</div>
          <div class="navbar-dropdown"> <a class="navbar-item">Vision, Mission, and Values</a> <a class="navbar-item">Course Overview</a> <a class="navbar-item">History and Vision</a> </div>
        </div>
        <a class="navbar-item " href="/FindAClass.aspx">Classes</a>
        <router-link class="navbar-item " to="/">Alumni</router-link>
        <router-link class="navbar-item active" to="/login">Sign In</router-link>
        <br><br>
      </div>
    </div>
</nav>
</template>

<script>

export default {
  name: "topnav",
  data: function() {
    return {
      isActive: false
    };
  },

  props: {
    fixed: { default: true }
  },
  methods: {
    toggleMobileNav() {
      this.isActive = !this.isActive;
    }
  }
};
</script>
