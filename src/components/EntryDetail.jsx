import { useState, useEffect } from "react";
import { deleteEntryById, getEntryById } from "../context/DbContext";

const EntryDetail = ({ id }) => {
  const [entry, setEntry] = useState(null);


   useEffect(() => {
     const fetchedEntry = getEntryById(id);
     setEntry(fetchedEntry);

   }, []);

  const handleDelete = (e) => {
    
    deleteEntryById(id);

    alert("Entry Deleted.");
    document.getElementById("modal_entry_detail").close();
  };

  if (!entry) {
    return <p className="text-red-500">Entry not found.</p>;
  }

  return (
    <>
      <button
        className=" mt-5 p-2 bg-[#4F342F] text-[#ECE2D1] rounded hover:bg-[#3e2723]"
        onClick={() =>
          document.getElementById("modal_entry_detail").showModal()
        }
      >
        View Details
      </button>
      <dialog id="modal_entry_detail" className="modal">
        <div className="modal-box">
          <h3 className="font-semibold text-lg mb-3 px-2 bg-[#D6C2A7] pt-2 pb-2 rounded text-[#4F342F]">
            {entry.title}
          </h3>
          <p>Dated : {entry.date}</p>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-2">
              <img
                src={entry.imageUrl}
                alt={entry.title}
                className="border-1 border-gray-300 shadow-2xs rounded-lg h-full w-full object-cover"
              />
              <div className="col-span-1 text-left">
                <p className="mt-2 text-[#4F342F]">{entry.content}</p>
              </div>
            </div>

            <div className="flex justify-between items-center gap-2">
              <span className="text-red-700">Press escape to go back</span>
              <button
                className="mt-5 px-4 py-2 bg-[#4F342F] text-white rounded hover:bg-[#3e2723]"
                onClick={handleDelete}
              >
                Delete Entry
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default EntryDetail;
