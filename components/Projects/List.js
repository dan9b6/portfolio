import { useEffect } from "react";

const List = ({ children, title }) => {
  useEffect(() => {
    let projectPanes = document.querySelectorAll(".project-pane");

    let options = { rootMargin: "200px" };

    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, options);

    function initAnimation(elements) {
      elements.forEach((element) => {
        intersectionObserver.observe(element);
      });
    }

    initAnimation(projectPanes);

    window.addEventListener("scroll", initAnimation(projectPanes));
  }, []);

  return (
    <div className="project-list">
      <div className="container">
        <h2>{title}</h2>
        <div className="grid grid-3">{children}</div>
      </div>
    </div>
  );
};

export default List;
