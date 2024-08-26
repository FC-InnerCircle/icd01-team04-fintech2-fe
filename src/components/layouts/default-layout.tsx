import { Outlet } from "react-router-dom";
import { LNB } from "./lnb";

export function DefaultLayout() {
  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-[200px_1fr]">
      <LNB />
      <div className="h-full">
        <header className="px-4 py-2 border-b">
          <div className=" h-9">
            <h1 className="text-lg font-semibold">IncerPay Admin</h1>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
