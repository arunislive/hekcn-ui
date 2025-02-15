import CommunityPosts from "./components/CommunityPosts";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        🚜 Smart Farm Monitoring
      </h1>
      <div className="max-w-4xl mx-auto space-y-8">
        <Dashboard />

        <CommunityPosts />
      </div>
    </div>
  );
};

export default App;
