import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectGallery from "@/components/project/ProjectGallery";
import ProjectAbout from "@/components/project/ProjectAbout";
import ProjectTechDecisions from "@/components/project/ProjectTechDecisions";
import ProjectChallenges from "@/components/project/ProjectChallenges";
import ProjectSidebar from "@/components/project/ProjectSidebar";
import ProjectNotFound from "@/components/project/ProjectNotFound";
import {
  projectsData,
  projectsDataEnglish,
  ProjectDetail as ProjectDetailType,
} from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectDetailType | null>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const { language } = useLanguage();

  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (!id) return;

    if (language === "en") {
      const foundProject = projectsDataEnglish.find(
        (p) => p.id === parseInt(id)
      );
      if (foundProject) {
        setProject(foundProject);
        
        // Reset image index when project changes
        setCurrentImage(0);
      }
    } else {
      const foundProject = projectsData.find((p) => p.id === parseInt(id));
      if (foundProject) {
        setProject(foundProject);
        // Reset image index when project changes
        setCurrentImage(0);
      }
    }
  }, [id, language]);

  if (!project) {
    return <ProjectNotFound language={language} />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <ProjectHero project={project} currentImage={0} language={language} />

        {/* Content area */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content - 2/3 width on large screens */}
            <div className="lg:col-span-2 space-y-10">
              <ProjectGallery
                project={project}
                currentImage={currentImage}
                setCurrentImage={setCurrentImage}
                isZoomed={isZoomed}
                setIsZoomed={setIsZoomed}
                language={language}
              />

              <ProjectAbout project={project} language={language} />

              <ProjectTechDecisions project={project} language={language} />

              <ProjectChallenges project={project} language={language} />
            </div>

            {/* Sidebar - 1/3 width on large screens */}
            <div>
              <ProjectSidebar
                project={project}
                otherProjects={projectsData}
                language={language}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
