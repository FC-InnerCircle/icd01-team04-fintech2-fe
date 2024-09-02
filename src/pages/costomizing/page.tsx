import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const BANKS = [
  "농협",
  "신한",
  "국민",
  "하나",
  "롯데",
  "현대",
  "광주",
  "전북",
  "은련",
  "MG새마을",
  "수협",
  "우체국",
  "신협",
  "제주",
  "KDB산업",
  "저축",
  "하나BC",
  "KB증권(현대증권)",
  "카카오뱅크",
  "케이백크",
  "미래에셋대우",
  "하나PAY",
  "토스뱅크",
  "우리비씨",
  "삼섬앱카드",
];
const PAY_METHODS = [
  "신용·체크카드",
  "네이버",
  "카아오",
  "토스",
  "페이코",
  "계좌이체",
  "휴대폰",
];

function CheckBoxWithLabel({ id, checked }: { id: string; checked: boolean }) {
  return (
    <div className="flex items-center gap-1">
      <Checkbox id={id} checked={checked} />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {id}
      </label>
    </div>
  );
}
export function Costomizing() {
  const [payMethods, setPayMethods] = useState(["네이버", "토스"]);
  const [banks, setBanks] = useState(["농협"]);

  const isChecked = (arr: string[], id: string) =>
    arr.findIndex((payMethods) => payMethods === id) !== -1;

  const onClickCheckBox = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const id = (e.target as HTMLElement).id;
    if (!id) return;
    setState((oldState) => {
      if (isChecked(oldState, id)) {
        return oldState.filter((payMethod) => payMethod !== id);
      } else {
        return [...oldState, id];
      }
    });
  };
  return (
    <div className="flex">
      <div className="p-4">
        <div className="mb-8">
          <h3 className="mb-4 text-2xl font-semibold tracking-tight scroll-m-20">
            결제방식
          </h3>
          <div
            onClick={(e) => onClickCheckBox(e, setPayMethods)}
            className="flex flex-wrap gap-4"
          >
            {PAY_METHODS.map((payMethod) => (
              <CheckBoxWithLabel
                key={payMethod}
                id={payMethod}
                checked={isChecked(payMethods, payMethod)}
              />
            ))}
          </div>
        </div>
        <div className="mb-10">
          <h3 className="mb-4 text-2xl font-semibold tracking-tight scroll-m-20">
            카드사
          </h3>
          <div
            onClick={(e) => onClickCheckBox(e, setBanks)}
            className="flex flex-wrap gap-4"
          >
            {BANKS.map((bank) => (
              <CheckBoxWithLabel
                key={bank}
                id={bank}
                checked={isChecked(banks, bank)}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <Button>완료</Button>
        </div>
      </div>
      <div className="w-2/5 border-l-2 miri">미리보기</div>
    </div>
  );
}
