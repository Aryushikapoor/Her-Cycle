import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';
import "../App.css";

const PeriodInfoVideos = () => {
  return (
    <section id="videos">
      <div className="period-info-videos pt-4">
        {/* Container for the carousel */}
        <div className="carousel-container mx-auto p-6 border-2 border-gray-300 rounded-lg shadow-lg">
          <h2 className="text-center text-2xl font-bold my-8 pb-4 pt-4">Related Videos</h2>
          <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showIndicators={true}
            interval={5000}
            className="video-carousel"
          >
            {/* Embed YouTube Videos Here */}
            <div className="video-item">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/zcvo9VLVHWc"
                title="YouTube video player 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              {/* Credit for this video */}
              <div className="text-center ">
                <p className="text-xs text-gray-600">
                  Video courtesy of: 
                  <a href="https://www.youtube.com/@dr.paulinemoyaert" target="_blank" rel="noopener noreferrer" className="custom-purple-link mx-1">Dr. Pauline Moyaert</a>
                </p>
              </div>
            </div>

            <div className="video-item">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/TPzJaXMJcS8?si=haKdoIIa3GJhTYCG"
                title="YouTube video player 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              {/* Credit for this video */}
              <div className="text-center ">
                <p className="text-xs text-gray-600">
                  Video courtesy of: 
                  <a href="https://www.youtube.com/@amazeorg" target="_blank" rel="noopener noreferrer" className="custom-purple-link mx-1">Amaze Org</a>
                </p>
              </div>
            </div>

            {/* Add more videos as needed */}
            <div className="video-item">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/xPI-eKZcbXo?si=SKJj29xK9B2kL0p1"
                title="YouTube video player 3"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              {/* Credit for this video */}
              <div className="text-center ">
                <p className="text-xs text-gray-600">
                  Video courtesy of: 
                  <a href="https://www.youtube.com/@HealthyWomenVideos" target="_blank" rel="noopener noreferrer" className="custom-purple-link mx-1">Healthy Women Videos</a>
                </p>
              </div>
            </div>

            <div className="video-item">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/WOi2Bwvp6hw?si=4gDQOgPmSOz21BF-"
                title="YouTube video player 4"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              {/* Credit for this video */}
              <div className="text-center ">
                <p className="text-xs text-gray-600 pb-2">
                  Video courtesy of: 
                  <a href="https://www.youtube.com/@glamour" target="_blank" rel="noopener noreferrer" className="custom-purple-link mx-1">Glamour</a>
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PeriodInfoVideos;
