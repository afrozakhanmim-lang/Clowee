const Footer = () => (
  <footer className="py-8 px-4 border-t border-border">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded gradient-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-xs">C</div>
        <span className="font-heading font-semibold text-foreground">Clowee</span>
        <span>by i3 Technologies</span>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <a href="tel:+8801234567890" className="hover:text-primary transition-colors">
          +880 1234 567890
        </a>
        <span className="hidden md:inline">|</span>
        <a href="https://example.com/contact" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
          Contact Us
        </a>
      </div>
      <p>© {new Date().getFullYear()} i3 Technologies, Dhaka, Bangladesh. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
