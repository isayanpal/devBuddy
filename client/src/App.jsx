import "./App.css";
import SearchUser from "./components/SearchUser";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <div className="font-bold text-5xl text-[#30d545]">Dev Buddy</div>
        <div className="font-medium m-3 text-[#9dd5a5]">
          Connect with your Dev friends nearby you!
        </div>
        <SearchUser />
      </div>
    </QueryClientProvider>
  );
}

export default App;
