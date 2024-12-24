import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const recentInquiries = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    subject: "Solar Panel Installation",
    status: "new",
    date: "2024-03-15"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    subject: "Quote Request",
    status: "pending",
    date: "2024-03-14"
  }
];

export default function RecentInquiries() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Inquiries</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentInquiries.map((inquiry) => (
            <div
              key={inquiry.id}
              className="flex items-center justify-between border-b last:border-0 pb-4 last:pb-0"
            >
              <div>
                <p className="font-medium">{inquiry.name}</p>
                <p className="text-sm text-muted-foreground">{inquiry.subject}</p>
                <p className="text-sm text-muted-foreground">{inquiry.email}</p>
              </div>
              <div className="text-right">
                <Badge
                  variant={inquiry.status === "new" ? "default" : "secondary"}
                >
                  {inquiry.status}
                </Badge>
                <p className="text-sm text-muted-foreground mt-1">
                  {new Date(inquiry.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}