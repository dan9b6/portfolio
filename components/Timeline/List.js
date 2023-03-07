import { useEffect } from "react";

const TimeLineList = ({ children }) => {
  useEffect(() => {
    let timelineItems = document.querySelectorAll(".timeline-item");

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

    initAnimation(timelineItems);

    window.addEventListener("scroll", initAnimation(timelineItems));
  }, []);
  return (
    <div className="container">
      <h2 className="timeline-title">My Timeline!</h2>
      <div className="timeline">{children}</div>
    </div>
  );
};

export default TimeLineList;
