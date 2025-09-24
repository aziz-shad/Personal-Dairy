import EntriesList from "../components/EntriesList";
import AddEntry from "../components/AddEntry";
function App() {
  return (
    <main className="w-1/3 text-center mx-auto p-4 min-h-screen border-1 border-[#4F342F] shadow-lg shadow-[#4F342F] rounded-lg">
      <h1 className="text-6xl font-sans text-[#4F342F]">Personal Dairy</h1>
      <div className="flex justify-start">
        <AddEntry />
      </div>

      <div className="border-1 border-[#4F342F] mt-3 mb-5 w-full mx-auto"></div>

      <EntriesList />
      <EntriesList />
      <EntriesList />
      <EntriesList />
      <EntriesList />
    </main>
  );
}

export default App;
//<!--  #4F342F -->
