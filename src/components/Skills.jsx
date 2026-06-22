const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    skills: ['Python', 'Node.js', 'Flask', 'Express', 'REST APIs', 'Django'],
  },
  {
    category: 'Infraestructura / DevOps',
    skills: ['Docker', 'Linux/Ubuntu Server', 'Proxmox', 'Git', 'Nginx', 'Bash'],
  },
  {
    category: 'Bases de Datos',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite'],
  },
];

const Skills = () => {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <p
        className="text-accent font-mono text-xs mb-2"
        data-aos="fade-up"
      >
        // habilidades
      </p>
      <h2
        className="text-3xl md:text-4xl font-bold text-text-primary mb-16"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <span className="text-accent">.</span> Mis Habilidades
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {skillGroups.map((group) => (
          <div key={group.category} data-aos="fade-up" data-aos-delay={150}>
            <h3 className="font-mono text-accent text-sm mb-4">
              {'// ' + group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-surface border border-border-subtle text-text-secondary text-sm px-3 py-1.5 rounded-full hover:border-accent/50 hover:text-accent transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
