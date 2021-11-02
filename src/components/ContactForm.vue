<template>
  <div>
    <label>Name:</label>
    <input type="text" v-model="contact.name" />

    <label>Email:</label>
    <input type="email" v-model="contact.email" />

    <button @click="submit">Submit</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Contact } from '@/clients/types/Contact';
import { submitContactInformation } from '@/clients/ContactClient';
import { namespace } from 'vuex-class';

const contactStore = namespace('contact');

@Component
export default class ContactForm extends Vue {
  private contact: Contact = {
    name: '',
    email: '',
  }

  @contactStore.Mutation('setContact')
  private setContact!: (contact: Contact) => void;

  async submit(): Promise<void> {
    try {
      await submitContactInformation(this.contact);

      this.setContact(this.contact);
    } catch (error) {
      console.log(error)
      console.log('error');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #d62029;
}
</style>
