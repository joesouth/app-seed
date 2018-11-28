<template>
    <div id="netlify-login"></div>
</template>

<script>

export default {
  name: "netlify",
  data: function() {
    return {
      isActive: true
    };
  },

  props: {
    fixed: { default: true }
  },
  methods: {
  },
  mounted(){
    this.$nextTick(function () {
        let NetlifyLogin = document.createElement('script');
        NetlifyLogin.setAttribute('src',"https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js");
        document.getElementById('netlify-login').appendChild(NetlifyLogin);
    })
  }
};


</script>
