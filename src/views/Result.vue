<template>
  <div>
    <h1>Submitted Contact Info</h1>

    <div>
      {{ getContact.name }}: <a :href="'mailto:' + getContact.email">{{ getContact.email }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Contact } from '@/clients/types/Contact';
import { namespace } from 'vuex-class';

const contactStore = namespace('contact');

@Component
export default class Result extends Vue {
  private contact: Contact = {
    name: '',
    email: '',
  }

  @contactStore.Getter('getContact')
  private getContact!: () => Contact;

}
</script>
