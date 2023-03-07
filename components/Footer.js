import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-icons">
            <ul>
              <li>
                <Link href="mailto:danbh7296@gmail.com" aria-label="Email Link">
                  <Image
                    src={`/images/icons/envelope-regular.svg`}
                    alt="mail icon"
                    width={35}
                    height={25}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/dan9b6"
                  aria-label="Github Link"
                  target="_blank"
                >
                  <Image
                    src={`/images/icons/github.svg`}
                    alt="mail icon"
                    width={35}
                    height={25}
                    aria-label="Email Link"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/dan-burton-654ba4180/"
                  aria-label="Linkedin Link"
                  target="_blank"
                >
                  <Image
                    src={`/images/icons/linkedin-in.svg`}
                    alt="mail icon"
                    width={35}
                    height={25}
                    aria-label="Email Link"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <small>Copyright 2023 - Dan Burton</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
