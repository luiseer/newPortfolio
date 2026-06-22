import { me } from '../assets/img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faServer, faCode, faAward } from '@fortawesome/free-solid-svg-icons';

const quickFacts = [
  { icon: faAward, label: '10+ años', desc: 'Experiencia en IT' },
  { icon: faCode, label: 'Full Stack', desc: 'Desarrollo web' },
  { icon: faServer, label: 'SysAdmin', desc: 'Infraestructura y servidores' },
  { icon: faBriefcase, label: 'Freelance', desc: 'Disponible para proyectos' },
];

const AboutMe = () => {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <p
        className="text-accent font-mono text-xs mb-2"
        data-aos="fade-up"
      >
        // acerca de mí
      </p>
      <h2
        className="text-3xl md:text-4xl font-bold text-text-primary mb-16"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <span className="text-accent">.</span> Acerca de Mí
      </h2>

      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3" data-aos="fade-right">
          <p className="text-text-secondary text-base leading-relaxed mb-6">
            Ingeniero en Sistemas Computacionales con más de 10 años de experiencia en
            soporte empresarial, infraestructura IT y atención a usuarios. En los últimos
            años he enfocado mi carrera hacia el desarrollo backend y la administración de
            sistemas, combinando mi experiencia en entornos corporativos con tecnologías
            modernas.
          </p>
          <p className="text-text-secondary text-base leading-relaxed mb-6">
            Actualmente me especializo en construir APIs robustas con Python y Node.js,
            gestionar servidores Linux en producción, y desplegar aplicaciones con Docker.
            Disfruto resolver problemas complejos y optimizar procesos IT para equipos de
            trabajo.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="bg-surface border border-border-subtle rounded-lg p-4 text-center"
              >
                <FontAwesomeIcon
                  icon={fact.icon}
                  className="text-accent text-xl mb-2"
                />
                <p className="text-text-primary font-semibold text-sm">{fact.label}</p>
                <p className="text-text-secondary text-xs mt-1">{fact.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 flex justify-center" data-aos="fade-left">
          <div className="relative">
            <div className="w-64 h-64 rounded-full overflow-hidden ring-2 ring-accent ring-offset-4 ring-offset-background">
              <img
                src={me}
                alt="Luis Emmanuel Estrada Rodríguez"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
