import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assets/resume.json";

const Certificates = () => {
  return (
    <div id="work">
      <h2>MY Certificates</h2>
      <section>
        <article>
          <Carousel 
          // showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          interval={2000}
          infiniteLoop={true}
          autoPlay={true}
          >
            {data.certificate.map((i) => (
              <div key={i.title} className="workItem">
                <img src={i.imgSrc} alt={i.title} />

                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <a target={"blank"} href={i.url}>
                    {" "}
                    View Certificate
                  </a>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Certificates;
