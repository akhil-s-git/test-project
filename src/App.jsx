import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./Routes";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1 * 60 * 60 * 1000,
      staleTime: 1 * 60 * 60 * 1000,
    },
  },
});

axios.defaults.baseURL = "http://makeup-api.herokuapp.com/api/v1/products.json";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
              <Layout/>
    </QueryClientProvider>
  );
}

export default App;
