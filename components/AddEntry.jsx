import React from "react";

const AddEntry = () => {
  return (
    <>
      <button
        className=" mt-5 px-4 py-2 bg-[#4F342F] text-white rounded hover:bg-[#3e2723]"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Add Entry
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-semibold text-lg mb-3 bg-[#D6C2A7] pt-2 pb-2 rounded text-[#4F342F]">
            Add new entry
          </h3>
          <div className="p-4">
            <form className="mx-auto space-y-3">
              <div className="text-left">
                <label htmlFor="title">Title:</label>
                <input
                  name="title"
                  id="title"
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  placeholder="Title of your thoughts"
                />
              </div>

              <div className="text-left">
                <label htmlFor="date">Date:</label>
                <input
                  name="date"
                  id="date"
                  type="date"
                  value={new Date().toISOString().split("T")[0]}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>

              <div className="text-left">
                <label htmlFor="imageUrl">Upload Image:</label>
                <input
                  type="file"
                  id="imageUrl"
                  name="imageUrl"
                  className="btn"
                />
              </div>

              <div className="text-left">
                <label htmlFor="content">Content</label>
                <textarea
                  className="w-full border-2 border-gray-300 p-2 rounded-md"
                  name="content"
                  id="content"
                  rows={10}
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
              <div className="flex justify-between items-center gap-2">
                <span className="text-red-700">Press esc to cancel</span>
                <button className="mt-5 px-4 py-2 bg-[#4F342F] text-white rounded hover:bg-[#3e2723]">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default AddEntry;
