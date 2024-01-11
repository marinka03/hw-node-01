const fs = require('fs/promises');
const { randomId } = require('./helpers/createId');

const path = require('path');
const contactsPath = path.join(__dirname, 'db', 'contacts.json');

const listContacts = async () => {
  const data = await fs.readFile(contactsPath, 'utf-8');
  return await JSON.parse(data);
};

const getContactById = async contactId => {
  const id = String(contactId);
  const contacts = await listContacts();
  const result = await contacts.find(contact => contact.id === id);
  return result || null;
};

const removeContact = async contactId => {
  const id = String(contactId);
  const contacts = await listContacts();
  const idx = contacts.findIndex(item => item.id === id);
  if (idx === -1) {
    return null;
  }
  const [result] = contacts.splice(idx, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
};

const addContact = async data => {
  const contacts = await listContacts();
  const newObj = {
    id: randomId(27),
    ...data,
  };

  contacts.push(newObj);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newObj;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
