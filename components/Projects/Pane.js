import Link from "next/link";
import Image from "next/image";

const Pane = ({ href, alt, className, src }) => {
  const addClass = className !== undefined ? className : "";

  return (
    <Link className={`project-pane ${addClass}`} href={href} target={"_blank"}>
      <Image
        src={`/images/projects/logos/${src}`}
        alt={alt}
        width={200}
        height={100}
      />
      <div className="project-pane-overlay">
        <span>View Project</span>
      </div>
    </Link>
  );
};

export default Pane;
