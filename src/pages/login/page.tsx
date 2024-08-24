import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export function Login() {
  return (
    <div className="flex h-screen justify-center items-center bg-sketch">
      <div className="p-8 rounded-lg shadow-lg bg-white/90 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h1 className="text-center text-2xl font-handwritten mb-6">Login</h1>
        <form>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Username"
              className="w-full border-2 border-black text-black bg-transparent focus:ring-0 font-handwritten"
            />
          </div>
          <div className="mb-4">
            <Input
              type="password"
              placeholder="Password"
              className="w-full border-2 border-black text-black bg-transparent focus:ring-0 font-handwritten"
            />
          </div>
          <div className="text-center">
            <Button className="w-full border-2 border-black bg-green-200 hover:bg-green-300 font-handwritten">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
