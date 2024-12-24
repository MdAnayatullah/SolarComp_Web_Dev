import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, FileText, Folder, MessageSquare } from "lucide-react";
import AdminStats from "@/components/admin/stats";
import RecentInquiries from "@/components/admin/recent-inquiries";
import RecentOrders from "@/components/admin/recent-orders";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      
      <AdminStats />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentInquiries />
        <RecentOrders />
      </div>
    </div>
  );
}