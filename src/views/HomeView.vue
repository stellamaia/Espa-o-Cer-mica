<template>
  <div>
   

    <EspacoCeramica msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import EspacoCeramica from "@/components/EspacoCeramica.vue";

export default {
  name: "HomeView",
  components: {
    EspacoCeramica,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

</style>