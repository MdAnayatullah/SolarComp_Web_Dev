import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, FileText, Folder, MessageSquare } from "lucide-react";

const stats = [
  {
    title: "Total Products",
    value: "24",
    icon: Package,
    trend: "+12%"
  },
  {
    title: "Blog Posts",
    value: "15",
    icon: FileText,
    trend: "+5%"
  },
  {
    title: "Projects",
    value: "8",
    icon: Folder,
    trend: "+2%"
  },
  {
    title: "New Inquiries",
    value: "32",
    icon: MessageSquare,
    trend: "+18%"
  }
];

export default function AdminStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">{stat.trend}</span> from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}