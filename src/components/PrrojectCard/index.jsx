import { motion } from 'framer-motion';

function ProjectCard({ title, description, image, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="project-card"
    >
      <div className="card-content">
        {/* Image Section */}
        <div className="image-wrapper">
          <img 
            src={image} 
            alt={title} 
            className="card-image"
          />
        </div>

        {/* Text Section */}
        <div className="text-wrapper">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <button className="card-button">
            Read More
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
