import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"; // ShadCN에서 제공하는 컴포넌트들

export function MemberAccept() {
  return (
    <div className="p-8 min-w-[360px]">
      <h1 className="text-2xl font-handwritten mb-6">회원승인</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="font-handwritten text-left border-b-2 pb-2">
              아이디
            </th>
            <th className="font-handwritten text-left border-b-2 pb-2">
              생성일
            </th>
            <th className="font-handwritten text-center border-b-2 pb-2">
              승인 상태
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-12">
            <td className="font-handwritten">닉네임1</td>
            <td className="font-handwritten">2024.02.03 </td>
            <td className="text-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="font-handwritten border-2 border-black">
                    Actions ▼
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                  <DropdownMenuItem>승인</DropdownMenuItem>
                  <DropdownMenuItem>거부</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </td>
          </tr>
          <tr className="h-12">
            <td className="font-handwritten">닉네임2</td>
            <td className="font-handwritten">2024.08.03 </td>
            <td className="text-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="font-handwritten border-2 border-black">
                    Actions ▼
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                  <DropdownMenuItem>승인</DropdownMenuItem>
                  <DropdownMenuItem>거부</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </td>
          </tr>
          <tr className="h-12">
            <td className="font-handwritten">닉네임3</td>
            <td className="font-handwritten">2024.08.03 </td>
            <td className="text-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="font-handwritten border-2 border-black">
                    Actions ▼
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                  <DropdownMenuItem>승인</DropdownMenuItem>
                  <DropdownMenuItem>거부</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MemberAccept;
