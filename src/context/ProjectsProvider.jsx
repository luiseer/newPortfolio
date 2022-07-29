import { useState, useEffect, createContext } from 'react';

const ProjectsContext = createContext();

const ProjectsProvider = ({ children }) => {
  return (
    <projectsContext.Provider value={{

    }}>{children}</projectsContext.Provider>
  );
};

export { ProjectsProvider };
export default ProjectsContext;
