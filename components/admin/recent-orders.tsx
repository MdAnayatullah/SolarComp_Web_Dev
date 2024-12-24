import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const recentOrders = [
  {
    id: 1,
    customer: "Michael Chen",
    product: "Premium Solar Panel X1",
    amount: "$599",
    status: "processing",
    date: "2024-03-15"
  },
  {
    id: 2,
    customer: "Emma Wilson",
    product: "Home Battery System",
    amount: "$1,299",
    status: "completed",
    date: "2024-03-14"
  }
];

export default function RecentOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentOrders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between border-b last:border-0 pb-4 last:pb-0"
            >
              <div>
                <p className="font-medium">{order.customer}</p>
                <p className="text-sm text-muted-foreground">{order.product}</p>
                <p className="text-sm font-medium">{order.amount}</p>
              </div>
              <div className="text-right">
                <Badge
                  variant={order.status === "completed" ? "default" : "secondary"}
                >
                  {order.status}
                </Badge>
                <p className="text-sm text-muted-foreground mt-1">
                  {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}