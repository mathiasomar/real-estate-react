import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContext from "./context/AuthContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <AuthContext>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </AuthContext>
);
