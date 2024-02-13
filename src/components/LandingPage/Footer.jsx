const Footer = () => {
  const currentYear = new Date().getFullYear();
    return (
      <footer className="bg-primary text-secondary dark:bg-secondary dark:text-primary py-4">
        <div className="container mx-auto text-center font-bold">
          <p>Gamified Learn &copy; {currentYear} - Azhar Arrozak</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;