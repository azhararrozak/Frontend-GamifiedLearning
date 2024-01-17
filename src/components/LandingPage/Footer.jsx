const Footer = () => {
  const currentYear = new Date().getFullYear();
    return (
      <footer className="bg-primary text-fontPrimary py-4">
        <div className="container mx-auto text-center">
          <p>Gamified Learn &copy; {currentYear} - Azhar Arrozak - All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;