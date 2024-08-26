import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export function App() {
  return (
    <div className="h-full bg-background">
      <RouterProvider router={router} />
    </div>
  );
}
