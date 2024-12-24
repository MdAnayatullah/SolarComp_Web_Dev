import ProjectGrid from "@/components/projects/grid";
import ProjectFilters from "@/components/projects/filters";

export default function ProjectsPage() {
  return (
    <div className="bg-background min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Our Projects</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our successful solar installations
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <ProjectFilters />
          <div className="lg:col-span-3">
            <ProjectGrid />
          </div>
        </div>
      </div>
    </div>
  );
}