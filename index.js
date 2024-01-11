const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require('./contacts.js');

const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const arr = hideBin(process.argv);
const { argv } = yargs(arr);

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

invokeAction(argv);
