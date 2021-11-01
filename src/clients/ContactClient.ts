import { Contact } from '@/clients/types/Contact';

const submitContactInformation = async (contact: Contact): Promise<void> => {
  // Fake HTTP client
  console.log('Submitting contact info to API');
  console.log(contact);
  return new Promise(resolve => resolve());
}

export {
  submitContactInformation,
}
