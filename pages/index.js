import ProjectList from "../components/Projects/List";
import ProjectPane from "../components/Projects/Pane";
import Section from "../components/Section";
import Banner from "../components/Banner";
import Image from "next/image";
import TimeLineItem from "../components/Timeline/Item";
import TimeLineList from "../components/Timeline/List";
import { useEffect } from "react";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    let sections = document.querySelectorAll(".section");

    let options = { rootMargin: "200px" };

    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    });

    function initAnimation(elements) {
      elements.forEach((element) => {
        intersectionObserver.observe(element);
      });
    }

    initAnimation(sections);

    window.addEventListener("scroll", initAnimation(sections));
  }, []);

  const offer = [
    {
      img: {
        src: "/images/gif/sign.gif",
        alt: "Sign guy gif",
      },
      title: "I'm a great communicator!",
      desc: "I really enjoy working amongst a team of motivated people. I consider myself to be a team player and always have time for my fellow professional - whether that is tackling a problem together or learning from them.",
    },
    {
      img: {
        src: "/images/gif/enthusiasm.gif",
        alt: "Enthusastic guy gif",
      },
      title: "I'm enthusiastic!",
      desc: "I am always willing to take on new challenges and give it my all. This is something I am incredibly passionate about. The learning curve in this industry is never ending, which is why this sector excites me.",
    },
    {
      img: {
        src: "/images/gif/bulb.gif",
        alt: "Lightbulb guy gif",
      },
      title: "I love problem solving!",
      desc: "Nothing is more rewarding then solving a problem. Day to day - I enjoy tackling these problems and have a good eye for identifying the underlying issue.",
    },
  ];

  return (
    <>
      <Head>
        <title>danburts</title>
        <meta name="title" content="danburts" />
        <meta
          name="description"
          content="Check out my personal CV site if you are looking for your next developer!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.danburts.co.uk/" />
        <meta property="og:title" content="danburts" />
        <meta
          property="og:description"
          content="Check out my personal CV site if you are looking for your next developer!"
        />
        <meta
          property="og:image"
          content="https://www.danburts.co.uk/images/wave.gif"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.danburts.co.uk/" />
        <meta property="twitter:title" content="danburts - CV website" />
        <meta
          property="twitter:description"
          content="Check out my personal CV site if you are looking for your next developer!"
        />
        <meta
          property="twitter:image"
          content="https://www.danburts.co.uk/images/wave.gif"
        />
      </Head>
      <Banner />
      <Section className="offer">
        <div className="container">
          <h2>What can I offer to Talk Think Do?</h2>
          <div className="grid grid-3">
            {offer.map((item, index) => (
              <div className="grid-item" key={index}>
                <Image
                  src={item.img.src}
                  alt={item.img.alt}
                  width={250}
                  height={250}
                />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section className="dark">
        <ProjectList title={`Check out the projects I have worked on!`}>
          <ProjectPane
            href="https://junipereducation.org/"
            alt="Juniper Education Logo"
            src="junip.svg"
            className="theme--jp"
          />
          <ProjectPane
            href="https://www.tenantshub.co.uk/"
            alt="Tenants Hub Logo"
            src="th.png"
            className="theme--th"
          />
          <ProjectPane
            href="https://www.paymentshield.co.uk/"
            alt="Payment Shield Logo"
            src="ps.svg"
            className="theme--ps"
          />
          <ProjectPane
            href="https://www.bridewell.com/"
            alt="Bridewell Logo"
            src="bw.svg"
            className="theme--bw"
          />
          <ProjectPane
            href="https://www.furnessbs.co.uk/"
            alt="Furness Logo"
            src="fs.svg"
            className="theme--fs"
          />
          <ProjectPane
            href="https://www.lifesearch.com/"
            alt="Lifesearch Logo"
            src="lfs.svg"
            className="theme--lfs"
          />
          <ProjectPane
            href="https://www.hoyavision.com/en-us/"
            alt="Hoya Logo"
            src="hoy.svg"
            className="theme--hoy"
          />
          <ProjectPane
            href="https://www.jodarleyandco.com/"
            alt="Jo Darley Logo"
            src="jd.svg"
            className="theme--jd"
          />
          <ProjectPane
            href="https://www.hoyavision.com/en-us/"
            alt="Seiko Logo"
            src="seik.svg"
            className="theme--seik"
          />
          <ProjectPane
            href="https://www.animalfriends.co.uk/"
            alt="Animal Friends Logo"
            src="afi.svg"
            className="theme--afi"
          />
          <ProjectPane
            href="https://www.atlantagroup.co.uk/"
            alt="Atlanta Group Logo"
            src="atg.png"
            className="theme--atg"
          />
          <ProjectPane
            href="https://victorydentures.co.uk/"
            alt="Victory Dentures Logo"
            src="vic.png"
            className="theme--afi"
          />
          <ProjectPane
            href="https://marisolcorona.com/"
            alt="Marisol Corona Logo"
            src="ms.png"
            className="theme--ms"
          />
          <ProjectPane
            href="https://www.carolenash.com/"
            alt="Carole Nash Logo"
            src="cn.svg"
            className="theme--cn"
          />
          <ProjectPane
            href="https://www.swinton.co.uk/"
            alt="Swinton Logo"
            src="swi.png"
            className="theme--swi"
          />
        </ProjectList>
      </Section>
      <Section className="about">
        <div className="container">
          <h2>More about me!</h2>
          <div className="grid grid-2">
            <div className="grid-item">
              <h3>My Tech Stack</h3>
              <ul>
                <li>
                  <Image
                    src={`/images/icons/html5.svg`}
                    alt={`html5 logo`}
                    width={80}
                    height={80}
                  />
                </li>
                <li>
                  <Image
                    src={`/images/icons/css3.svg`}
                    alt={`css logo`}
                    width={80}
                    height={80}
                  />
                </li>
                <li>
                  <Image
                    src={`/images/icons/sass.svg`}
                    alt={`scss logo`}
                    width={80}
                    height={80}
                  />
                </li>
                <li>
                  <Image
                    src={`/images/icons/react.svg`}
                    alt={`react logo`}
                    width={80}
                    height={80}
                  />
                </li>
                <li>
                  <Image
                    src={`/images/icons/next-js.svg`}
                    alt={`next js logo`}
                    width={80}
                    height={80}
                  />
                </li>
                <li>
                  <Image
                    src={`/images/icons/vue.svg`}
                    alt={`vue js logo`}
                    width={80}
                    height={80}
                  />
                </li>
                <li>
                  <Image
                    src={`/images/icons/js.svg`}
                    alt={`vanilla js logo`}
                    width={80}
                    height={80}
                  />
                </li>
                <li>
                  <Image
                    src={`/images/icons/greem-github.svg`}
                    alt={`github logo`}
                    width={80}
                    height={80}
                  />
                </li>
                <li>
                  <Image
                    src={`/images/icons/bootstrap.svg`}
                    alt={`bootstrap logo`}
                    width={80}
                    height={80}
                  />
                </li>
              </ul>
            </div>
            <div className="grid-item">
              <Image
                src={`/images/icons/ironhack-1.svg`}
                alt={`Ironhack Logo`}
                width={100}
                height={100}
                className="icon-ironhack"
              />
              <h3>My Education</h3>
              <h4>Ironhack Lisbon</h4>
              <h5>Top 3 Global Tech Academy</h5>
              <p>
                I didn{`'`}t take the most conventional route into Software
                Engineering. I completed a Web Development Bootcamp set in the
                heart of Lisbon, Portugal. During my time on the course I
                covered a wide range of skills and coding languages. By the end
                of the course, I had created three web applications.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section className="dark">
        <TimeLineList>
          <TimeLineItem
            src={`/images/timeline/1.jpg`}
            alt={`Me as a baby`}
            title={"1996"}
          >
            <p>
              The year I was born. The year Take That separated and the year
              {`'`}Dolly{`'`} the sheep was born. What a time to be alive!
            </p>
          </TimeLineItem>
          <TimeLineItem
            src={`/images/timeline/2.jpg`}
            alt={`Me as a school boy`}
            title={"2000"}
          >
            <p>
              My first day at school was at Lilliput Primary School. Who could
              of known I would end up here coding and programming my way into
              the world of tech.
            </p>
          </TimeLineItem>
          <TimeLineItem
            src={`/images/timeline/3.jpg`}
            alt={`Highbury`}
            title={"2002"}
          >
            <p>
              I went to my first ever football match - Arsenal vs Southampton.
              Since my trip to this beautiful stadium, being an Arsenal fan has
              definitely become more and more painful over the years. I hope
              that being a fan of this club won{`'`}t be a dealbreaker!
            </p>
          </TimeLineItem>
          <TimeLineItem
            src={`/images/timeline/4.jpg`}
            alt={`Paper boy bag`}
            title={"2010"}
          >
            <p>
              My first job was landed. I became a paperboy! Monday to Saturday
              at 6:30am I would make my way down to my local newsagents to
              collect my round and get underway. Wasn{`'`}t the dream role - but
              that £25 a week went a long way back then.
            </p>
          </TimeLineItem>
          <TimeLineItem
            src={`/images/timeline/5.png`}
            alt={`Yeovil FC Badge`}
            title={"2011"}
            contain
          >
            <p>
              I was (and still am) obsessed with football. Fortunately, I had
              the opportunity to play for Yeovil FC Academy. During this time I
              played against a number of academy teams at the highest level.
              However, I didn{`'`}t quite make the cut.
            </p>
          </TimeLineItem>
          <TimeLineItem
            src={`/images/timeline/6.jpg`}
            alt={`Me with crazy glasses on`}
            title={"2012"}
          >
            <p>
              I had finished my GCSE{`'`}s! I managed to get 11 GCSE{`'`}s all
              A-C - including an A in Maths, Biology and P.E. So to celebrate my
              exams, me and a few friends went to Cardiff for the Olympic Games
              to watch GB take on South Korea. Unfortunately, like most penalty
              shootouts England are involved in, they lost 5-4 on penalties.
            </p>
          </TimeLineItem>
          <TimeLineItem
            src={`/images/timeline/7.png`}
            alt={`The Training Room Logo`}
            title={"2015"}
            contain
          >
            <p>
              I began my first job in Educational Sales at The Training Room.
              This was my first exposure to the world of tech. Originallly I
              began selling Personal Training courses. However, I then moved
              into selling Software & Web Development training courses. Whilst
              working at The Training Room I worked with a team of Sales
              Executives trying to help people change their career{`'`}s and
              enter into the world of IT. It was during this time that I started
              to look into these areas myself and my interest in the sector
              began to increase.
            </p>
          </TimeLineItem>
          <TimeLineItem
            src={`/images/timeline/8.png`}
            alt={`Thailand`}
            title={"2019"}
          >
            <p>
              At the start of 2019, I decided to go travelling in Thailand. It
              was a truly incredible experience and during my time I visited
              many islands, met people from around the world, many adventure
              days and of course - went to many bars. However, during my time in
              Asia, it gave me a real chance to reflect on what I wanted to do
              when I got back home - which is when I started looking into roles
              in tech.
            </p>
          </TimeLineItem>
          <TimeLineItem
            src={`/images/timeline/9.png`}
            alt={`Code Academy Logo`}
            title={"2019"}
          >
            <p>
              I started learning how to code. I became a regular at CodeAcademy
              and Stack OverFlow. First of all, I started to learn HTML and CSS.
              I found it incredibly rewarding building something from nothing
              and having it appear in front of me. I was creating a number of
              static web pages and trialling different effects and animations
              that I could use for future websites. I then moved onto basic
              Javascript. This is when I knew I wanted become a Web Developer
              and get some professional training and qualifications.
            </p>
          </TimeLineItem>
          <TimeLineItem
            src={`/images/timeline/10.png`}
            alt={`Ironhack Logo`}
            title={"2020"}
            contain
          >
            <p>
              I graduated as a Web Developer through Ironhack Tech Bootcamp -
              Lisbon. During the course I covered a number of technologies and
              languages. Such as: HTML CSS/SASS Javascript React JS Node Express
              Mongo DB and many other skills which you can find on this link.
              This whole experience was a real eye-opener for me. I never
              thought it would be possible to learn as much as I did during this
              bootcamp and leave with three fully functional projects.
            </p>
          </TimeLineItem>
          <TimeLineItem
            src={`/images/timeline/11.png`}
            alt={`Bendando Logo`}
            title={"2021"}
            contain
          >
            <p>
              I began an apprenticeship with BenDando. Currently, most of the
              work I am doing involves using React and Next JS. I am heavily
              involved in the front-end development to - where I am using HTML,
              CSS/SASS, JS and other Web Design tools such as MDB Bootstrap. I
              have also had a little exposure to Shopify and Sanity - which is a
              headless CMS software.
            </p>
          </TimeLineItem>
          <TimeLineItem
            src={`/images/timeline/appius-logo.svg`}
            alt={`Appius Logo`}
            title={"2021 - 2023"}
            contain
          >
            <p>
              I started my first web agency role at Appius. During my time at
              Appius, I was exposed to a number of projects. During my time
              there, my tech stack mainly consisted of HTML, SCSS, Javascript
              and Vue.js.
            </p>
          </TimeLineItem>
          <TimeLineItem
            src={`/images/timeline/jp-logo.svg`}
            alt={`Juniper Logo`}
            title={"2023 - Current"}
            contain
          >
            <p>
              During my time at Juniper, I have been working on an application
              that is provided to teachers, parents and stakeholders. My tech
              stack at Juniper is HTML, CSS, Vue JS, Ruby on Rails, Stimulus JS
              etc. A huge focus on my time here is around making the application
              mobile responsive with high levels of accessibility. I also liase
              and work with the design team using Figma, work with Product
              Owners and other developers.
            </p>
          </TimeLineItem>
        </TimeLineList>
      </Section>
    </>
  );
}
