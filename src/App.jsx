import { useState, useEffect } from "react";
import Entry from "./components/Entry";
import AddEntry from "./components/AddEntry";
import { getEntriesFromDB} from "./context/DbContext";

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    try {
      // # Fetch entries from "database" (from localStorage)
      const entriesFromDB = getEntriesFromDB();

      // # Sort entries by date in descending order (most recent first)
      entriesFromDB.sort((a, b) => new Date(b.date) - new Date(a.date));

      // # Set State
      setEntries(entriesFromDB);

    } catch (error) {
      console.error("Error fetching entries from DB:", error);
    }
  }, []);

  return (
    <main className="w-1/3 text-center mx-auto p-4 min-h-screen border-1 border-[#4F342F] shadow-lg shadow-[#4F342F] rounded-lg overflow-auto">
      <h1 className="text-6xl font-sans text-[#4F342F]">Personal Diary</h1>
      <div className="flex justify-start">
        <AddEntry entries={entries} setEntries={setEntries}/>
      </div>

      <div className="border-1 border-[#4F342F] mt-3 mb-5 w-full mx-auto"></div>
      {(entries.length === 0) ? "Enter your first memory." :  entries.map((entry) => (
        <Entry key={entry.id} entry={entry} />
      ))}
    </main>
  );
}

export default App;


