import { AlignJustify } from "lucide-react";
import { Outlet } from "react-router-dom";
import { LNB } from "./lnb";

export function DefaultLayout() {
  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-[200px_1fr]">
      <LNB />
      <div className="h-full">
        <header className="min-w-[360px]  relative px-4 py-2 border-b flex flex-row items-center justify-between">
          <div className=" flex flex-row h-9  items-center justify-center ">
            <AlignJustify
              size={20}
              className="max-md:block cursor-pointer  hidden"
            />
          </div>
          <div className="w-fit absolute mx-auto h-9  left-0 right-0  flex items-center justify-center  text-center">
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
