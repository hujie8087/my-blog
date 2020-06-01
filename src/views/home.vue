<template>
  <div class="home"></div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import Nav from "@/components/Nav.vue";

@Component({
  components: {
    Nav
  }
})
export default class Home extends Vue {}
</script>
