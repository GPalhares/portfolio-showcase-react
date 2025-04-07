import { ProjectDetail } from '@/data/projects';

interface ProjectGalleryProps {
  project: ProjectDetail;
  currentImage: number;
  setCurrentImage: (index: number) => void;
  language: 'pt-BR' | 'en';
}

const ProjectGallery = ({
  project,
  currentImage,
  setCurrentImage,
  language,
}: ProjectGalleryProps) => {
  console.log(currentImage, project.images);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">
        {language === 'pt-BR' ? 'Galeria' : 'Gallery'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {project.images.map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-lg cursor-pointer border-2 transition-all ${
              currentImage === index
                ? 'border-primary scale-[1.02]'
                : 'border-transparent hover:border-primary/30'
            }`}
            onClick={() => setCurrentImage(index)}
          >
            <img
              src={`../${image}`}
              alt={`${project.title} - imagem ${index + 1}`}
              className="w-full h-48 object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
