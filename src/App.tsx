import "./App.css";
import Router from "./routes/Router";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from "./routes/Routes"

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'


const App = () => {
  const queryClient = new QueryClient()
  return (

    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>

  );
};

export default App;