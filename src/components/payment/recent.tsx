export function Recent() {
  return (
    <div className="grid gap-8">
      <div className="flex items-center gap-4">
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">상품명1</p>
          <p className="text-sm text-muted-foreground">2024-09-01 12:00</p>
        </div>
        <div className="ml-auto font-medium">+81,000원</div>
      </div>
      <div className="flex items-center gap-4">
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">Jackson Lee</p>
          <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$39.00</div>
      </div>
      <div className="flex items-center gap-4">
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
          <p className="text-sm text-muted-foreground">
            isabella.nguyen@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+$299.00</div>
      </div>
      <div className="flex items-center gap-4">
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">William Kim</p>
          <p className="text-sm text-muted-foreground">will@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$99.00</div>
      </div>
    </div>
  );
}
