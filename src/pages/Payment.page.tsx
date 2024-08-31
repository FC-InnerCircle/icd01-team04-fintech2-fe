import { Graph } from "@/components/payment/Graph";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ActivityIcon, BanknoteIcon, CreditCardIcon } from "lucide-react";

export function PaymentPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                총 결제 금액
              </CardTitle>
              <BanknoteIcon />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">145,231원</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                총 결제 건수
              </CardTitle>
              <ActivityIcon />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">무엇을</CardTitle>
              <CreditCardIcon />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">넣을까요</CardTitle>
              <ActivityIcon />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>월별 결제 그래프</CardTitle>
              <CardDescription>
                <Graph />
              </CardDescription>
            </CardHeader>

            <CardContent className="pl-2">{/* chart */}</CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>최근 결제 내역</CardTitle>
              <CardDescription>table</CardDescription>
            </CardHeader>
            <CardContent>{/* table */}</CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
