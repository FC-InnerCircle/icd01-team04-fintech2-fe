import { Outlet } from "react-router-dom";
import { LNB } from "./lnb";

export function DefaultLayout() {
  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-[200px_1fr]">
      <LNB />
      <div className="h-full">
        <header>여기가 헤더</header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
