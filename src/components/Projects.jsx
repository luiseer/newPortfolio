import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faXmark } from '@fortawesome/free-solid-svg-icons';
import {
  task,
  poke,
  rym,
  hanoi,
  fStore,
  quotes,
} from '../assets/img';

const projects = [
  {
    title: 'Uptask',
    img: task,
    tags: ['React', 'Node.js', 'MongoDB'],
    github: ['https://github.com/luiseer/TodoList', 'https://github.com/luiseer/todoList_Frontend'],
    demo: 'https://taskluis.netlify.app',
    wip: false,
  },
  {
    title: 'Pokédex API',
    img: poke,
    tags: ['React', 'API REST'],
    github: 'https://github.com/luiseer/entregable5',
    demo: 'https://pokedexluismex.netlify.app',
    wip: false,
  },
  {
    title: 'Rick & Morty API',
    img: rym,
    tags: ['React', 'API REST'],
    github: 'https://github.com/luiseer/entregable-3',
    demo: 'https://rymluisestrada.netlify.app',
    wip: false,
  },
  {
    title: 'Veterinaria',
    img: task,
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/luiseer/citas-react',
    demo: 'https://veterinarialuiseer.netlify.app',
    wip: false,
  },
  {
    title: 'Torres de Hanói',
    img: hanoi,
    tags: ['JavaScript', 'Lógica'],
    github: 'https://github.com/luiseer/hanoi_project-master',
    demo: 'https://hanoitowersluisestrada.netlify.app',
    wip: false,
  },
  {
    title: 'Front Store',
    img: fStore,
    tags: ['React', 'CSS'],
    github: null,
    demo: 'https://store-frontend-luis.netlify.app',
    wip: false,
  },
  {
    title: 'Random Quotes',
    img: quotes,
    tags: ['React', 'API REST'],
    github: null,
    demo: null,
    wip: false,
  },
  {
    title: 'Mini Report',
    img: task,
    tags: ['Flask', 'PostgreSQL', 'Docker'],
    github: null,
    demo: null,
    wip: true,
  },
  {
    title: 'Deco Network Monitor',
    img: rym,
    tags: ['Python', 'SNMP', 'Docker'],
    github: null,
    demo: null,
    wip: true,
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <p className="text-accent font-mono text-xs mb-2" data-aos="fade-up">
        // proyectos
      </p>
      <h2
        className="text-3xl md:text-4xl font-bold text-text-primary mb-16"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <span className="text-accent">.</span> Mis Proyectos
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <button
            key={index}
            onClick={() => setSelected(project)}
            className="group bg-surface border border-border-subtle rounded-xl overflow-hidden hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 text-left"
            data-aos="fade-up"
            data-aos-delay={100 * index}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-all duration-300" />
              {project.wip && (
                <span className="absolute top-3 right-3 bg-accent/20 text-accent text-xs font-mono px-2 py-1 rounded">
                  En desarrollo
                </span>
              )}
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-text-primary font-semibold text-lg group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <span className="text-text-secondary text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver más &rarr;
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-accent-dim text-accent text-xs font-mono px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-surface border border-border-subtle rounded-xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-text-primary">
                {selected.title}
              </h3>
              <button
                onClick={() => setSelected(null)}
                className="text-text-secondary hover:text-accent transition-colors text-xl"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {selected.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-accent-dim text-accent text-xs font-mono px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              {selected.demo && (
                <a
                  href={selected.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-accent text-background font-semibold px-5 py-3 rounded hover:shadow-lg hover:shadow-accent/30 transition-all"
                >
                  <FontAwesomeIcon icon={faGlobe} />
                  <span>Ver demo</span>
                </a>
              )}
              {selected.github && Array.isArray(selected.github) ? (
                selected.github.map((url, i) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 border border-accent text-accent px-5 py-3 rounded hover:bg-accent-dim transition-all font-mono text-sm"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    <span>GitHub {i === 0 ? 'Backend' : 'Frontend'}</span>
                  </a>
                ))
              ) : selected.github ? (
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 border border-accent text-accent px-5 py-3 rounded hover:bg-accent-dim transition-all font-mono text-sm"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <span>Ver código</span>
                </a>
              ) : null}
            </div>

            {!selected.demo && !selected.github && (
              <p className="text-text-secondary text-sm text-center">
                Enlaces próximamente
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
