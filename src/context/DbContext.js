 let DB = [];

// # Add entry
const addEntryToDB = (entry) => {
  if (localStorage.getItem("entries")) {
    const existingEntries = localStorage.getItem("entries");
    const parseEntries = existingEntries ? JSON.parse(existingEntries) : [];
    DB = [...parseEntries];
  }
  DB.push(entry);
  localStorage.setItem("entries", JSON.stringify(DB));
  
};

// # Get all entries
const getEntriesFromDB = () => {
  let entriesInDB = [];
  if (localStorage.getItem("entries")) {
    entriesInDB = localStorage.getItem("entries");
     return JSON.parse(entriesInDB);
  }
  return entriesInDB;
};

// # Get entry by ID
const getEntryById = (id) => {
  if (localStorage.getItem("entries")) {
   
    const parseEntries = JSON.parse(localStorage.getItem("entries"));
    const entry = parseEntries.find((entry) => entry.id === id);
    return entry || null;
  }
};

// # Delete entry by ID
const deleteEntryById = (id) => {
  if (localStorage.getItem("entries")) {

    const existingEntries = JSON.parse(localStorage.getItem("entries")) || [];
    
    const entryArray = existingEntries.filter((entry) => entry.id !== id);
    
    localStorage.setItem("entries", JSON.stringify(entryArray));
  }
};

export { addEntryToDB, getEntriesFromDB, getEntryById, deleteEntryById };
