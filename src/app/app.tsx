import { Board } from "@/features/board";
import { queryClient } from "@/shared/api/query-client";
import { store } from "@/shared/lib/redux";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Board />
        </Provider>
      </QueryClientProvider>
    </>
  );
}
