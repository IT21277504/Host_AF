import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/homePageStyle.css";

const HomePage = () => {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">

        <div className="col d-flex p-0">
          <div className='text-white w-100' style={{ backgroundImage: 'url("https://apod.nasa.gov/apod/image/2302/Rosette_Insley_3424.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "140vh" }}>
            <div className="m-auto">
            <br></br>
              <h2 className="m-3">Astronomy Picture of the Day</h2>
              <br></br>              
              <p className="m-3" style={{ textAlign: "justify" }}>Embark on a celestial odyssey with NASA's Image of the Day, where each click unfurls the boundless wonders of the cosmos. From captivating snapshots depicting the ethereal dance of distant galaxies to mesmerizing vistas offering glimpses of our neighboring celestial bodies, every day unveils a new chapter in the never-ending saga of space exploration. Join us as we venture into the farthest reaches of the universe, delving into the breathtaking beauty and enigmatic mysteries that adorn the cosmic canvas. Through the lens of NASA's state-of-the-art imaging technology, immerse yourself in the awe-inspiring sights that transcend human imagination, capturing the essence of celestial marvels in stunning detail.</p>
              <br></br>
              <p className="m-3" style={{ textAlign: "justify" }}>Let your imagination soar as you traverse the celestial expanse, discovering the intricate tapestry of stars, planets, and nebulae that adorn the cosmic stage. With each image, delve deeper into the mysteries of the cosmos, unraveling the secrets of distant worlds and unlocking the mysteries of the universe. Immerse yourself in the wonders of space exploration, igniting a sense of wonder and curiosity that transcends the boundaries of time and space. Join us on this cosmic voyage, as we chart a course through the infinite expanse of the cosmos, revealing the boundless wonders that await beyond the twinkling stars.</p>
              <br></br>
              <br></br>
              <Link to={`/ImageOfTheDay`} className="btn btn-outline-light m-3" role="button"> View Image <i className="bi bi-arrow-right-circle-fill"></i></Link>
            </div>
          </div>
        </div>

        <div className="col d-flex p-0">
        <div className='text-white w-100 ' style={{ backgroundImage: 'url("https://media.cnn.com/api/v1/images/stellar/prod/230614113409-curiosity-marker-band-valley.jpg?q=w_3000,c_fill")', backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "140vh" }}>
            <div className="m-auto">
            <br></br>
              <h2 className="m-3">NASA Image and Video Library</h2>
              <br></br>
              <p className="m-3" style={{ textAlign: "justify" }}>Embark on an odyssey through NASA's expansive Image and Video Library, where every click opens the door to a treasure trove of captivating visuals from the forefront of space exploration. From awe-inspiring photographs unveiling distant celestial wonders to mesmerizing videos chronicling the majesty of rocket launches and planetary landscapes, immerse yourself in the vastness of the cosmos. Join us on an enthralling voyage of discovery as we unlock the beauty and intrigue of the universe, revealing its secrets one image and video at a time. Let us guide you on a journey of wonder and fascination, igniting a passion for exploration with each breathtaking view. Explore the boundless expanse of space, igniting curiosity and awe with every discovery, as we unveil the wonders of the cosmos, inspiring a deeper appreciation for the marvels of the universe.</p>
              <br></br>
              <p className="m-3" style={{ textAlign: "justify" }}>In the depths of NASA's digital archive, a world of cosmic exploration awaits. Journey through a realm where stunning imagery and captivating videos transport you to the far reaches of the universe. Delve into the celestial wonders captured by the lenses of space telescopes, revealing the intricate beauty of distant galaxies and nebulae. Witness the raw power and elegance of rocket launches as they pierce the Earth's atmosphere, carrying humanity's dreams and aspirations into the unknown. Traverse the rugged terrains of distant planets and moons, where the footprints of rovers uncover the secrets of alien landscapes. Each click is a doorway to discovery, inviting you to partake in the grand adventure of cosmic exploration.</p>
              <br></br>
              <Link to={`/ImageLibrary`} className="btn btn-outline-light m-3" role="button">Browse Image & Video Library <i className="bi bi-arrow-right-circle-fill"></i></Link>
            </div>
          </div>
        </div>

        <div className="col d-flex p-0">
          <div className='text-white w-100 ' style={{ backgroundImage: 'url("https://images1.wionews.com/images/wion/900x1600/2023/11/9/1699500247175_PIA14156large.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "140vh" }}>
            <div className="m-auto">
            <br></br>
              <h2 className="m-3">Mars Rover Photos</h2>
              <br></br>
              <p className="m-3" style={{ textAlign: "justify" }}>Embark on a captivating visual odyssey across the enigmatic terrain of the Red Planet with Mars Rover Photos. Immerse yourself in the Martian landscape through the lens of NASA's intrepid rovers, capturing panoramic vistas, intriguing rock formations, and tantalizing evidence of ancient environments.</p>
              <br></br>
              <p className="m-3" style={{ textAlign: "justify" }}>Embark on a captivating visual odyssey across the enigmatic terrain of the Red Planet with Mars Rover Photos. Immerse yourself in the Martian landscape through the lens of NASA's intrepid rovers, capturing panoramic vistas, intriguing rock formations, and tantalizing evidence of ancient environments.</p>
              <br></br>
              <p className="m-3" style={{ textAlign: "justify" }}>Embark on a captivating visual odyssey across the enigmatic terrain of the Red Planet with Mars Rover Photos. Immerse yourself in the Martian landscape through the lens of NASA's intrepid rovers, capturing panoramic vistas, intriguing rock formations, and tantalizing evidence of ancient environments.</p>
              <br></br>
              <br></br>
              <Link to={`/MarsRoverPage`} className="btn btn-outline-light m-3" role="button">Start Exploring <i className="bi bi-arrow-right-circle-fill"></i></Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
