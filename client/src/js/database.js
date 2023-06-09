import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

//Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const db = await initdb();
  const transaction = db.transaction('jate', 'readwrite');
  const store = transaction.objectStore('jate');
  const request = store.add(content);
  request.onsuccess = () => {
    console.log('Content added to database');
    };
}

//  Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const db = await initdb();
  const transaction = db.transaction('jate', 'readwrite');
  const store = transaction.objectStore('jate');
  const request = store.getAll();
  request.onsuccess = () => {
    
    console.log('Content fetched from database', result.value);
    return result.value;
    }
}

initdb();
