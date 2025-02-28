import React from "react";

const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className="bg-dark text-white text-center py-4 mt-auto">
      <p className="mb-0">
        Copyright &copy; {currYear}, Made with ❤️ by <strong>Nagbhushan</strong>
      </p>
    </footer>
  );
};

export default Footer;
