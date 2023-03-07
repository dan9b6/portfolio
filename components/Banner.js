import Image from "next/image";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-grid">
          <div className="banner-text">
            <h1>Hello.</h1>
            <h1>I{`'`}m Dan. I am a Web Developer.</h1>
            <h1>This is why you should hire me at</h1>
            <h1>
              <span className="highlight">
                Jun<span className="highlight-bounce">i</span>per Educat
                <span className="highlight-bounce">i</span>on
              </span>
            </h1>
          </div>
          <Image
            src={`/images/gif/wave.gif`}
            alt={`Waving gif`}
            width={300}
            height={250}
            className="banner-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
