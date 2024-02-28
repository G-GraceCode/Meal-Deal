function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-4 bg-[#fefecc] text-center">
      <div>
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
