const Footer = () => {
  return (
    <footer className="py-8 border-t border-border-subtle">
      <p className="font-mono text-text-secondary text-xs text-center">
        &copy; {new Date().getFullYear()} Luis Emmanuel &middot; Hecho con React + Tailwind
      </p>
    </footer>
  );
};

export default Footer;
