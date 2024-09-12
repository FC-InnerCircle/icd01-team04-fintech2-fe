import { useState } from "react";
import { Button } from "../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import type { TableRowBoxType } from "../types/memberAcceptType";

// type itemType = {
//   email: string;
//   shopName: string;
//   businessRegistrationImageUrl: string;
//   createdAt: string;
// };
// type TableRowBoxType = {
//   item: itemType;
// };

const data = [
  { code: "ST0001", name: "대기" },
  { code: "ST0002", name: "승인" },
  { code: "ST0003", name: "거절" },
];
const TableRowBox = ({ item }: TableRowBoxType) => {
  const [status, useStatus] = useState(data[0]);
  return (
    <tr className="h-12">
      <td className="font-handwritten">{item.email}</td>
      <td className="font-handwritten">{item.shopName}</td>
      <td className="font-handwritten  ">
        <a
          href={item.businessRegistrationImageUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          사업자 등록증
        </a>
      </td>

      <td className="font-handwritten hidden lg:table-cell">
        {item.createdAt}
      </td>

      <td className="text-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="font-handwritten border-2 border-black">
              {status.name}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            <DropdownMenuItem>승인</DropdownMenuItem>
            <DropdownMenuItem>대기</DropdownMenuItem>
            <DropdownMenuItem>거부</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </td>
    </tr>
  );
};

export default TableRowBox;
