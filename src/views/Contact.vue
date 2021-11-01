<template>
  <div>
    <h1>Contact</h1>

    <div>
      <ContactForm />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContactForm from "@/components/ContactForm.vue";

@Component({
  components: {
    ContactForm,
  }
})
export default class Contact extends Vue {

}
</script>
