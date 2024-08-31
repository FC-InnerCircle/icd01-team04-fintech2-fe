import { useState } from "react";
import { Button } from "../../components/ui/button";

export function KeyIssuance() {
  // 초기 키 상태를 설정합니다. 실제로는 API 요청 등을 통해 키를 받아올 수 있습니다.
  const [testKey, setTestKey] = useState("test-abc123"); // 이미 발급된 테스트 키 예시
  const [liveKey, setLiveKey] = useState("live-abc001"); // 아직 발급되지 않은 라이브 키 예시

  const handleKeyGeneration = (type: string) => {
    if (type === "test") {
      setTestKey("test-xyz456"); // 테스트 키를 재발급하는 로직 예시
      alert("새로운 테스트 키가 발급되었습니다.");
    } else if (type === "live") {
      setLiveKey("live-abc123"); // 라이브 키를 발급하는 로직 예시
      alert("라이브 키가 발급되었습니다.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-handwritten mb-6">키 관리</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <p className="text-lg font-handwritten mb-4 text-center">
          발급된 키를 확인하거나, 필요하면 재발급하세요.
        </p>
        <div className="mb-6">
          <h2 className="font-handwritten text-xl mb-2">테스트 키</h2>
          {testKey ? (
            <div className="bg-gray-200 p-3 rounded-lg text-center text-black">
              {testKey}
            </div>
          ) : (
            <Button
              className="w-full mt-2 border-2 border-black bg-blue-500 text-white hover:bg-blue-600 font-handwritten"
              onClick={() => handleKeyGeneration("test")}
            >
              테스트 키 발급
            </Button>
          )}
          <Button
            className="w-full mt-2 border-2 border-black bg-blue-500 text-white hover:bg-blue-600 font-handwritten"
            onClick={() => handleKeyGeneration("test")}
          >
            테스트 키 재발급
          </Button>
        </div>
        <div>
          <h2 className="font-handwritten text-xl mb-2">라이브 키</h2>
          {liveKey ? (
            <div className="bg-gray-200 p-3 rounded-lg text-center text-black">
              {liveKey}
            </div>
          ) : (
            <Button
              className="w-full mt-2 border-2 border-black bg-green-500 text-white hover:bg-green-600 font-handwritten"
              onClick={() => handleKeyGeneration("live")}
            >
              라이브 키 발급
            </Button>
          )}
          {liveKey && (
            <Button
              className="w-full mt-2 border-2 border-black bg-green-500 text-white hover:bg-green-600 font-handwritten"
              onClick={() => handleKeyGeneration("live")}
            >
              라이브 키 재발급
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default KeyIssuance;
