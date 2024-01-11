const fs = require('fs').promises;
const contactsPath = './db/contacts.json';

const { randomId } = require('./helpers/createId');
function listContacts() {
  return fs
    .readFile(contactsPath, { encoding: 'utf-8' })
    .then(data => console.log(JSON.parse(data)))
    .catch(err => console.log(err));
}

function getContactById(contactId) {
  return fs
    .readFile(contactsPath, { encoding: 'utf-8' })
    .then(data => {
      const formatData = JSON.parse(data);
      const el = formatData.find(contact => contact.id === contactId);
      return console.log(el !== undefined ? el : null);
    })
    .catch(err => console.log(err));
}

function removeContact(contactId) {
  return fs
    .readFile(contactsPath, { encoding: 'utf-8' })
    .then(data => {
      const formatData = JSON.parse(data);
      const deleteEl = formatData.find(item => item.id === contactId);
      formatData.filter(el => el !== deleteEl);
      return console.log(deleteEl !== undefined ? deleteEl : null);
    })
    .catch(err => console.log(err));
}

function addContact(name, email, phone) {
  return fs
    .readFile(contactsPath, { encoding: 'utf-8' })
    .then(data => {
      const formatData = JSON.parse(data);
      const newObj = {
        id: randomId(27),
        name,
        email,
        phone,
      };
      return console.log(
        (name && email && phone) !== undefined
          ? newObj
          : 'Incomplete information. Please enter the following data: name, email, phone!'
      );
    })
    .catch(err => console.log(err));
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
