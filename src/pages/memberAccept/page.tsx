import TableRowBox from "./components/tableRowBox";
import type { TableRowBoxType } from "./types/memberAcceptType";

const data = [
  {
    email: "이메일1",
    shopName: "상점1",
    businessRegistrationImageUrl:
      "https://cdn.imweb.me/upload/S20221115b16951b3df56c/565d5940dfa30.png",
    createdAt: "2024.11.03",
  },
  {
    email: "이메일2",
    shopName: "상점2",
    businessRegistrationImageUrl:
      "https://cdn.imweb.me/upload/S20221115b16951b3df56c/565d5940dfa30.png",
    createdAt: "2024.10.03",
  },
  {
    email: "이메일3",
    shopName: "상점3",
    businessRegistrationImageUrl:
      "https://cdn.imweb.me/upload/S20221115b16951b3df56c/565d5940dfa30.png",
    createdAt: "2024.12.03",
  },
];
export function MemberAccept() {
  return (
    <div className="p-8 min-w-[360px]">
      <h1 className="text-2xl font-handwritten mb-6">고객 관리</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="font-handwritten text-left border-b-2 pb-2">
              이메일
            </th>
            <th className="font-handwritten text-left border-b-2 pb-2">
              상표명
            </th>
            <th className="font-handwritten text-left border-b-2 pb-2">
              사업자등록증
            </th>
            <th className="font-handwritten text-left hidden lg:table-cell border-b-2 pb-2">
              생성일
            </th>
            <th className="font-handwritten text-center border-b-2 pb-2">
              승인 상태
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: TableRowBoxType, key: number) => {
            return <TableRowBox item={item} key={item.email} />;
          })}
          {/* <tr className="h-12">
            <td className="font-handwritten">이메일1</td>
            <td className="font-handwritten">상표명1</td>
            <td className="font-handwritten  ">
              <a
                href="https://cdn.imweb.me/upload/S20221115b16951b3df56c/565d5940dfa30.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                사업자 등록증
              </a>
            </td>

            <td className="font-handwritten hidden lg:table-cell">
              2024.11.03
            </td>

            <td className="text-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="font-handwritten border-2 border-black">
                    Actions ▼
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
          <tr className="h-12">
            <td className="font-handwritten">이메일2</td>
            <td className="font-handwritten">상표명2</td>
            <td className="font-handwritten  ">
              <a
                href="https://cdn.imweb.me/upload/S20221115b16951b3df56c/565d5940dfa30.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                사업자 등록증
              </a>
            </td>

            <td className="font-handwritten hidden lg:table-cell">
              2024.02.03{" "}
            </td>
            <td className="text-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="font-handwritten border-2 border-black">
                    Actions ▼
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
          <tr className="h-12">
            <td className="font-handwritten">이메일1</td>
            <td className="font-handwritten">상표명2</td>
            <td className="font-handwritten  ">
              <a
                href="https://cdn.imweb.me/upload/S20221115b16951b3df56c/565d5940dfa30.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                사업자 등록증
              </a>
            </td>

            <td className="font-handwritten hidden lg:table-cell">
              2024.02.03{" "}
            </td>
            <td className="text-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="font-handwritten border-2 border-black">
                    Actions ▼
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                  <DropdownMenuItem>승인</DropdownMenuItem>
                  <DropdownMenuItem>대기</DropdownMenuItem>
                  <DropdownMenuItem>거부</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default MemberAccept;
