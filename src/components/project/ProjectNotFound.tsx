
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

interface ProjectNotFoundProps {
  language: "pt-BR" | "en";
}

const ProjectNotFound = ({ language }: ProjectNotFoundProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            {language === "pt-BR" ? "Projeto não encontrado" : "Project not found"}
          </h2>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2" size={16} />
              {language === "pt-BR" ? "Voltar para a página inicial" : "Back to home"}
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ProjectNotFound;
