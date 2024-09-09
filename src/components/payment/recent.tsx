const data = [
  {
    id: 1,
    name: "상품명1",
    date: "2024-09-02T13:48:15.520406+09:00",
    price: 81000,
  },
  {
    id: 2,
    name: "상품명2",
    date: "2024-09-01T10:11:15.510106+09:00",
    price: 101000,
  },
  {
    id: 3,
    name: "상품명3",
    date: "2024-08-30T01:00:00.510106+09:00",
    price: 12000,
  },
];

const locale = "ko-KR";
export function Recent() {
  return (
    <div className="grid gap-8">
      {data.map(({ id, name, date, price }) => (
        <div key={id} className="flex items-center gap-4">
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-sm text-muted-foreground">
              {new Intl.DateTimeFormat(locale, {
                dateStyle: "long",
                timeStyle: "medium",
              }).format(new Date(date))}
            </p>
          </div>
          <div className="ml-auto font-medium">
            {`${price.toLocaleString(locale)}원`}
          </div>
        </div>
      ))}
    </div>
  );
}
