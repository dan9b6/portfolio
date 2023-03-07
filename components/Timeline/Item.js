import React from "react";
import Image from "next/image";

const TimeLineItem = ({ src, alt, title, contain, children }) => {
  return (
    <div className="timeline-item">
      <Image
        src={src}
        alt={alt}
        width={150}
        height={150}
        className={
          contain ? "timeline-image timeline-image--contain" : "timeline-image"
        }
      />
      <div className="timeline-text">
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default TimeLineItem;
