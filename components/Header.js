import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-grid">
          <Link href="/" className="header-logo">
            <div className="header-letter">
              D<span>D</span>
            </div>
            <div className="header-letter">
              B<span>B</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
