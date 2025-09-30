import EntryDetail from "./EntryDetail";

const Entry = ({ entry }) => {
  return (
    <section className="mt-4 p-2 text-left border-1 border-[#4F342F] shadow-sm shadow-[#4F342F] rounded-lg  bg-[#FBF4E8]">
      <div className="grid grid-cols-4 gap-2">
        <img
          src={entry?.imageUrl??""}
          alt={entry.title}
          className="border-1 border-gray-300 shadow-2xs rounded-lg h-full w-full object-cover"
        />
        <div className="col-span-3">
          <h2 className="text-2xl font-semibold text-[#4F342F]">
            {entry.title}
          </h2>
          <p className="mt-2 text-[#4F342F]">{entry.content}</p>
          <div className="flex justify-end">
            <EntryDetail key={entry.id} id={entry.id} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entry;
