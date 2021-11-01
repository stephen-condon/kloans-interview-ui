import {
  Module, Mutation, VuexModule,
} from 'vuex-module-decorators';
import { Contact } from '@/clients/types/Contact';

@Module({
  namespaced: true,
})
export default class LoanModule extends VuexModule {
  private contact: Contact = {
    name: '',
    email: '',
  };

  get getContact(): Contact {
    return this.contact;
  }

  @Mutation
  setContact(contact: Contact): void {
    this.contact = contact;
  }
}
