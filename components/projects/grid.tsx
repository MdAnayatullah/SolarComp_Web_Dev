import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Residential Solar Installation",
    location: "Brooklyn, NY",
    systemSize: "12kW",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    completion: "2023"
  },
  {
    id: 2,
    title: "Commercial Office Complex",
    location: "Manhattan, NY",
    systemSize: "75kW",
    type: "Commercial",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    completion: "2023"
  }
];

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <Link key={project.id} href={`/projects/${project.id}`}>
          <Card className="hover:shadow-lg transition-shadow h-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <Badge>{project.type}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Location</dt>
                  <dd className="font-medium">{project.location}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">System Size</dt>
                  <dd className="font-medium">{project.systemSize}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Completion</dt>
                  <dd className="font-medium">{project.completion}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}