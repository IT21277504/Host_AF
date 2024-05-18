import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/imageOfTheDay.css";

const Header = ({ title }) => (
  <div className='col-12 header-container'>
    <div className='header-content' style={{ backgroundImage: `url('https://i.pinimg.com/originals/bd/f7/b5/bdf7b5af05d31bcdf6c1b29466b15a1d.jpg')`, width: "1579px", padding: '60px', marginLeft: "-35px", borderRadius: '10px' }}>
    <img src="https://static.displate.com/380x270/displate/2018-10-05/3d0bed4c15c897827abbac5a4e816e5f_1fe2fbd2755921fac40b6013add2d0bc.jpg" alt="Amazon" style={{ position: 'absolute', top: '60px', right: '3cm', width: '140px',height:"120px", borderRadius: '10px' }} />
      <h2 style={{ color: 'white', marginTop: '2.5cm', textAlign: 'center' }}>{title}</h2>
    </div>
  </div>
);

const Footer = () => (
  <div className='col-12' style={{ backgroundColor: 'black', padding: '60px', width: "1624px", marginLeft: "-80px", marginTop: "80px" }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <a href="https://www.nasa.gov/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/800px-NASA_logo.svg.png" alt="NASA Logo" style={{ width: '100px', marginLeft: '150px', borderRadius: '10px' }} />
        </a>
        <span style={{ color: "white", fontSize: "18px" }}>National Aeronautics and Space Administration </span>
      </div>
      <div style={{ marginRight: '2cm' }}>
        <a href="https://www.nasa.gov/nasa-brand-center/images-and-media/">USAGE GUIDELINES</a> |
        <a href="https://www.nasa.gov/privacy/">PRIVACY</a> |
        <a href="https://www.nasa.gov/foia/">FOIA</a> |
        <a href="https://www.nasa.gov/contact/">CONTACT NASA</a> |
        <a href="https://www.nasa.gov/general/accessibility/">ACCESSIBILITY</a>
      </div>
    </div>
  </div>
);

function ImageOfTheDay() {
  const [photoData, setPhotoData] = useState(null);
  const [previousPhotos, setPreviousPhotos] = useState([]);

  useEffect(() => {
    fetchPhoto();
    fetchPreviousPhotos();

    async function fetchPhoto() {
      try {
        const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=Z5A5dcFOEepXKtB6VOBr3IVCDMEd1elr3HfLuwaa`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch photo");
        }
        const data = await res.json();
        setPhotoData(data);
      } catch (error) {
        console.error("Error fetching photo:", error);
      }
    }

    async function fetchPreviousPhotos() {
      try {
        const currentDate = new Date();
        const previousDates = [];
        for (let i = 1; i <= 10; i++) {
          const date = new Date(currentDate);
          date.setDate(date.getDate() - i);
          previousDates.push(date.toISOString().split('T')[0]);
        }

        const requests = previousDates.map(date =>
          fetch(`https://api.nasa.gov/planetary/apod?api_key=Z5A5dcFOEepXKtB6VOBr3IVCDMEd1elr3HfLuwaa&date=${date}`)
        );
        const responses = await Promise.all(requests);
        const data = await Promise.all(responses.map(res => res.json()));
        setPreviousPhotos(data);
      } catch (error) {
        console.error("Error fetching previous photos:", error);
      }
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  if (!photoData) return null;

  return (
    <>
      <Header title={photoData.title} />
      <div className="container-fluid">
        <br></br>
        <div className="container-fluid">
          <br></br>
          <div className="row">
            <div className="col-md-6">
              <h1>{photoData.title}</h1>
              <p className="date">{photoData.date}</p>
              <p className="explanation">{photoData.explanation}</p>
              <p className="copyright">&copy; {photoData.title}</p>
              <br></br>
              <button 
                className="btn btn-primary"
                style={{
                    fontSize: '16px',
                    padding: '1em 3.3em',
                    cursor: 'pointer',
                    transform: 'perspective(200px) rotateX(8deg)',
                    color: 'white',
                    fontWeight: '900',
                    border: 'none',
                    borderRadius: '5px',
                    background: 'linear-gradient(0deg, rgba(51, 51, 51, 1) 0%, rgba(51, 51, 51, 1) 100%)',
                    boxShadow: 'rgba(255, 255, 255, 0.2) 0px 40px 29px 0px',
                    willChange: 'transform',
                    transition: 'all 0.3s',
                    borderBottom: 'black'
                }}
                onClick={() => window.open(photoData.media_type === 'image' ? photoData.hdurl : photoData.url, '_blank')}
                >
                <u>View {photoData.media_type === 'image' ? 'Full Image' : 'Full Video'}</u>
            </button>


            </div>
            <div className="col-md-6">
              {photoData.media_type === "image" ? (
                <img src={photoData.url} alt={photoData.title} className="img-fluid" style={{ maxWidth: "100%", height: "500px", objectFit: "cover", borderRadius: "10px" }} />
              ) : (
                <iframe
                  title="space-video"
                  src={photoData.url}
                  frameBorder="0"
                  gesture="media"
                  allow="encrypted-media"
                  allowFullScreen
                  className="img-fluid mx-auto d-block"
                  style={{ maxWidth: "200%", height: "100%" }}
                />
              )}
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="row">
          <Slider {...settings}>
            {previousPhotos.map((photo, index) => (
              <div className="col-md-12" key={index}>
                <div className="row">
                  <div className="col-md-6">
                    {photo.media_type === "image" ? (
                      <img src={photo.url} alt={photo.title} className="img-fluid" style={{ minWidth: "90%", height: "650px", objectFit: "cover", borderRadius: "10px" }} />
                    ) : (
                      <iframe
                        title={`space-video-${index}`}
                        src={photo.url}
                        frameBorder="0"
                        gesture="media"
                        allow="encrypted-media"
                        allowFullScreen
                        className="img-fluid mx-auto d-block"
                        style={{ maxWidth: "100%", height: "100%" }}
                      />
                    )}
                  </div>
                  <div className="col-md-6">
                    <h2>{photo.title}</h2>
                    <p>{photo.date}</p>
                    <br></br>
                    <p>{photo.explanation}</p>

                    <br></br>
                    <button 
                    className="btn btn-primary"
                    style={{
                        fontSize: '16px',
                        padding: '1em 3.3em',
                        cursor: 'pointer',
                        transform: 'perspective(200px) rotateX(8deg)',
                        color: 'white',
                        fontWeight: '900',
                        border: 'none',
                        borderRadius: '5px',
                        background: 'linear-gradient(0deg, rgba(51, 51, 51, 1) 0%, rgba(51, 51, 51, 1) 100%)',
                        boxShadow: 'rgba(255, 255, 255, 0.2) 0px 40px 29px 0px',
                        willChange: 'transform',
                        transition: 'all 0.3s',
                        borderBottom: 'black'
                    }}
                    onClick={() => window.open(photo.hdurl || photo.url, '_blank')}
                    >
                    <u>View {photo.media_type === 'image' ? 'Full Image' : 'Full Video'}</u>
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ImageOfTheDay;
