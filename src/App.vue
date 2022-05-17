<template>
    <the-header/>
    <router-view/>
    <the-footer/>
</template>

<script>
// Design https://projects.invisionapp.com/share/FT12O2SKYS9A#/screens/466686552

import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
export default {
    components: {
        TheHeader,
        TheFooter,
    },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500&display=swap");
@import "src/scss/variables.scss";

* {
    box-sizing: border-box;
}

html {
    font-family: "Roboto", sans-serif;
}

body,
p,
h1,
h2,
h3,
ul {
    margin: 0;
}

.main-container {
    max-width: 790px;
    margin: auto;
}
</style>
