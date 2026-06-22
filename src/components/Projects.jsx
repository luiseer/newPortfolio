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
    url: 'https://taskluis.netlify.app/',
    wip: false,
  },
  {
    title: 'Pokédex API',
    img: poke,
    tags: ['React', 'API REST'],
    url: null,
    wip: false,
  },
  {
    title: 'Rick & Morty API',
    img: rym,
    tags: ['React', 'API REST'],
    url: null,
    wip: false,
  },
  {
    title: 'Torres de Hanói',
    img: hanoi,
    tags: ['JavaScript', 'Lógica'],
    url: null,
    wip: false,
  },
  {
    title: 'Front Store',
    img: fStore,
    tags: ['React', 'CSS'],
    url: null,
    wip: false,
  },
  {
    title: 'Random Quotes',
    img: quotes,
    tags: ['React', 'API REST'],
    url: null,
    wip: false,
  },
  {
    title: 'Mini Report',
    img: task,
    tags: ['Flask', 'PostgreSQL', 'Docker'],
    url: null,
    wip: true,
  },
  {
    title: 'Deco Network Monitor',
    img: rym,
    tags: ['Python', 'SNMP', 'Docker'],
    url: null,
    wip: true,
  },
];

const Projects = () => {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <p
        className="text-accent font-mono text-xs mb-2"
        data-aos="fade-up"
      >
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
          <a
            key={index}
            href={project.url || '#'}
            target={project.url ? '_blank' : undefined}
            rel={project.url ? 'noopener noreferrer' : undefined}
            className="group bg-surface border border-border-subtle rounded-xl overflow-hidden hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={100 * index}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
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
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
