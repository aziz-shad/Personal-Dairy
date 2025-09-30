import { useState } from "react";
import { addEntryToDB } from "../context/DbContext";

const AddEntry = ({ entries }) => {
  
  const [data, setData] = useState({
    id: "",
    title: "",
    date: new Date().toISOString().split("T")[0],
    imageUrl: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // # Basic validation
    if (!data.title || !data.date || !data.content) {
      alert("Please fill in all required fields.");
      return;
    }

    // # Check for duplicate date entry
    if(entries.some(entry => entry.date === data.date)) {
      alert("An entry on this date already exists. one entry per day allowed.");
      return;
    }


    // # Generate unique ID for the entry
    const id = crypto.randomUUID();

    const newEntry = { ...data, id: id };
    setData(newEntry);

    // # Save to "database" (localStorage in this case)
    addEntryToDB(newEntry);

    // # Update entries state in parent component
    entries.unshift(newEntry);

    // # Reset form data
    setData({});
    document.getElementById("modal_form").close();
  };

  return (
    <>
      <button
        className=" mt-5 px-4 py-2 bg-[#4F342F] text-white rounded hover:bg-[#3e2723]"
        onClick={() => document.getElementById("modal_form").showModal()}
      >
        Add Entry
      </button>
      <dialog id="modal_form" className="modal">
        <div className="modal-box max-w-xl mx-auto">
          <h3 className="font-semibold text-lg mb-3 bg-[#D6C2A7] pt-2 pb-2 rounded text-[#4F342F]">
            Add new entry
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-left" htmlFor="title">
                Title:
              </label>
              <input
                name="title"
                id="title"
                type="text"
                onChange={(e) => setData({ ...data, title: e.target.value })}
                className="input input-bordered w-full"
                placeholder="Title of your thoughts"
              />
            </div>

            <div>
              <label className="block text-left" htmlFor="date">
                Date:
              </label>
              <input
                name="date"
                id="date"
                type="date"
                onChange={(e) => setData({ ...data, date: e.target.value })}
                //value={new Date().toISOString().split("T")[0]}
                className="input input-bordered w-full"
              />
            </div>

            <div className="text-left">
              <label className="block text-left" htmlFor="imageUrl">
                Upload Image:
              </label>
              <input
                type="file"
                id="imageUrl"
                name="imageUrl"
                className="btn"
                onChange={(e) =>
                  setData({
                    ...data,
                    imageUrl: e.target.files[0]
                      ? URL.createObjectURL(e.target.files[0])
                      : "",
                  })
                }
              />
            </div>

            <div>
              <label className="block text-left" htmlFor="content">
                Content
              </label>
              <textarea
                className="w-full border-2 border-gray-300 p-2 rounded-md"
                name="content"
                id="content"
                rows={10}
                placeholder="Write your thoughts here..."
                onChange={(e) => setData({ ...data, content: e.target.value })}
              ></textarea>
            </div>
            <div className="flex justify-between items-center gap-2">
              <span className="text-red-700">Press escape to cancel</span>
              <button className="mt-5 px-4 py-2 bg-[#4F342F] text-white rounded hover:bg-[#3e2723]">
                Save
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default AddEntry;
