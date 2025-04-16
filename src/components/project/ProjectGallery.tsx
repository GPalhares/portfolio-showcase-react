import { ProjectDetail } from "@/data/projects";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ProjectGalleryProps {
  project: ProjectDetail;
  currentImage: number;
  setCurrentImage: (index: number) => void;
  isZoomed: boolean;
  setIsZoomed: (zoom: boolean) => void;
  language: "pt-BR" | "en";
}

const ProjectGallery = ({
  project,
  currentImage,
  setCurrentImage,
  isZoomed,
  setIsZoomed,
  language,
}: ProjectGalleryProps) => {
  const nextImage = () => {
    const next = currentImage === project.images.length - 1 ? 0 : currentImage + 1;
    setCurrentImage(next);
  };
  
  const prevImage = () => {
    const prev = currentImage === 0 ? project.images.length - 1 : currentImage - 1;
    setCurrentImage(prev);
  };
 

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">
        {language === "pt-BR" ? "Galeria" : "Gallery"}
      </h2>

      {/* Galeria de miniaturas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {project.images.map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-lg cursor-pointer border-2 transition-all ${
              currentImage === index
                ? "border-primary scale-[1.02]"
                : "border-transparent hover:border-primary/30"
            }`}
            onClick={() => {
              setCurrentImage(index);
              setIsZoomed(true);
            }}
          >
            <img
              src={`${image}`}
              alt={`${project.title} - imagem ${index + 1}`}
              className="w-full h-32 object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>

      {/* Modal fullscreen */}
      {isZoomed && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
            onClick={() => setIsZoomed(false)}
          >
            <X className="w-6 h-6" />
          </button>

          <button
            className="absolute left-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
            onClick={prevImage}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <img
            src={`${project.images[currentImage]}`}
            alt={`${project.title} - imagem ampliada`}
            className="max-w-full max-h-[90vh] object-contain"
          />

          <button
            className="absolute right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
            onClick={nextImage}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectGallery;
