const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require('./contacts.js');

const argv = require('yargs').argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const listContact = await listContacts();
      return console.log(listContact);

    case 'get':
      const getContact = await getContactById(id);
      return console.log(getContact);

    case 'add':
      const newContact = await addContact({ name, email, phone });
      return console.log(newContact);

    case 'remove':
      const deleteContact = await removeContact(id);
      return console.log(deleteContact);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction({ action: 'list' });
invokeAction({ action: 'get', id: 'rsKkOQUi80UsgVPCcLZZW' });
invokeAction({
  action: 'add',
  name: 'Nika Livington',
  email: 'wejf_27dun@gmail.com',
  phone: '(048) 478-3868',
});
invokeAction({ action: 'remove', id: 'ngb0tagibzm' });
