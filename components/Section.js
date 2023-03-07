const Section = ({ children, className }) => {
  const addClass = className !== undefined ? "section--" + className : "";

  return <section className={`section ${addClass}`}>{children}</section>;
};

export default Section;
