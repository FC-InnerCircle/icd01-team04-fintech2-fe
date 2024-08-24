import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"; // ShadCN에서 제공하는 컴포넌트들
export function MemberAccept() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-handwritten mb-6">회원승인</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="font-handwritten text-left border-b-2 pb-2">
              Header
            </th>
            <th className="font-handwritten text-left border-b-2 pb-2">
              Header
            </th>
            <th className="font-handwritten text-left border-b-2 pb-2">
              {" "}
              상태
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-12">
            <td className="font-handwritten">Item 1</td>
            <td className="font-handwritten">Item 1</td>
            <td>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="font-handwritten border-2 border-black">
                    Actions ▼
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="!bg-red-200 w-full"
                  align="center"
                >
                  <DropdownMenuItem className="!text-red-500 focus:!bg-red-100">
                    Approve2
                  </DropdownMenuItem>
                  <DropdownMenuItem>Deny</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </td>
          </tr>
          <tr className="h-12">
            <td className="font-handwritten">Item 2</td>
            <td className="font-handwritten">Item 2</td>
            <td>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="font-handwritten border-2 border-black ">
                    Actions ▼
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={""} align="center">
                  <DropdownMenuItem>Approve</DropdownMenuItem>
                  <DropdownMenuItem>Deny</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </td>
          </tr>
          <tr className="h-12">
            <td className="font-handwritten">Item 3</td>
            <td className="font-handwritten">Item 3</td>
            <td>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="font-handwritten border-2 border-black">
                    Actions ▼
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                  <DropdownMenuItem>Approve</DropdownMenuItem>
                  <DropdownMenuItem>Deny</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
