<template>
  <div id="app" class="app">
    <NavBar />
    <ImagemPrincipal />
    <InfosCards />
    <ItensCards />
    <InfosContato />
    <GoogleMap />
    <InfosFooter />
    <!-- <nav>
     <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    -->
    <router-view />
  </div>
</template>
<script>
import NavBar from "./components/NavBar";
import ImagemPrincipal from "./components/ImagemPrincipal";
import InfosCards from "./components/InfosCards";
import ItensCards from "./components/ItensCards";
import InfosContato from "./components/InfosContato";
import GoogleMap from "./components/GoogleMap";
import InfosFooter from "./components/InfosFooter";

export default {
  name: "app",
  components: {
    NavBar,
    ImagemPrincipal,
    InfosCards,
    ItensCards,
    InfosContato,
    GoogleMap,
    InfosFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.app {
  background-color: #eeeeeed9;
}
</style>
