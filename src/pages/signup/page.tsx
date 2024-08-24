import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export function Signup() {
  return (
    <div className="flex h-screen justify-center items-center bg-sketch">
      <div className="p-8 rounded-lg shadow-lg bg-white/90 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h1 className="text-center text-2xl font-handwritten mb-6">Signup</h1>
        <form>
          <div className="mb-4">
            <label className="font-handwritten text-lg mb-2 block">Label</label>
            <Input
              type="text"
              placeholder="Input Field Text"
              className="w-full border-2 border-black text-black bg-transparent focus:ring-0 font-handwritten"
            />
          </div>
          <div className="mb-4">
            <label className="font-handwritten text-lg mb-2 block">Label</label>
            <Input
              type="text"
              placeholder="Input Field Text"
              className="w-full border-2 border-black text-black bg-transparent focus:ring-0 font-handwritten"
            />
          </div>
          <div className="mb-4">
            <label className="font-handwritten text-lg mb-2 block">Label</label>
            <Input
              type="text"
              placeholder="Input Field Text"
              className="w-full border-2 border-black text-black bg-transparent focus:ring-0 font-handwritten"
            />
          </div>
          <div className="mb-4">
            <div className="w-full h-40 border-2 border-black bg-gray-100 flex justify-center items-center">
              {/* 이미지 업로드 영역을 표시 */}
              <span className="font-handwritten text-lg text-black">
                Image Upload
              </span>
            </div>
          </div>
          <div className="text-center mt-6">
            <Button className="w-full border-2 border-black bg-green-200 hover:bg-green-300 font-handwritten">
              Primary
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
