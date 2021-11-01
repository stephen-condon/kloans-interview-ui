<template>
  <div class="home">
    <h1>Interview</h1>

    <p>Follow the tasks instructions in the repository readme.</p>

    <VueLinks />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import VueLinks from '@/components/VueLinks.vue'; // @ is an alias to /src

@Component({
  components: {
    VueLinks,
  },
})
export default class Home extends Vue {

}
</script>
