import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// Header Component
const Header = ({ title }) => (
  <div className='col-12 header-container'>
    <div className='header-content' style={{ backgroundImage: `url('https://wallpapers.com/images/featured/nasa-w0a0am5efb7l6nuw.jpg')`,width:"1910px", padding: '80px', marginLeft: "-35px",borderRadius: '10px'}}>
      <h2 style={{ color: 'white', marginTop: '3.5cm', textAlign: 'center' }}>{title}</h2>
    </div>
  </div>
);


// Footer Component
const Footer = () => (
  <div className='col-12' style={{ backgroundColor: 'black', padding: '60px', width: "1955px", marginLeft: "-80px", marginTop: "80px" }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <a href="https://www.nasa.gov/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/800px-NASA_logo.svg.png" alt="NASA Logo" style={{ width: '100px', marginLeft: '150px', borderRadius: '10px' }} />
        </a>
        <span style={{ color: "white", fontSize: "18px" }}>National Aeronautics and Space Administration </span>
      </div>
      <div style={{ marginLeft: '2cm' }}>
        <a href="https://www.nasa.gov/nasa-brand-center/images-and-media/">USAGE GUIDELINES</a> |
        <a href="https://www.nasa.gov/privacy/">PRIVACY</a> |
        <a href="https://www.nasa.gov/foia/">FOIA</a> |
        <a href="https://www.nasa.gov/contact/">CONTACT NASA</a> |
        <a href="https://www.nasa.gov/general/accessibility/">ACCESSIBILITY</a>
      </div>
    </div>
  </div>
);



// Body Component
const Body = ({ imageDetails, handleKeywordClick }) => (
  <div className='row'>
    <br></br>
    <div className='col-6'>
      {imageDetails.href && <img src={imageDetails.href} alt={imageDetails.title} style={{ borderRadius: '10px', marginLeft: '4cm', marginTop: '2.7cm' }} />}
    </div>
    <div className='col-6'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p><strong><span style={{ color: 'black' }}>NASA ID:</span></strong> <span style={{ color: 'black' }}>{imageDetails.nasa_id}</span></p>
      <p><strong><span style={{ color: 'black' }}>Center:</span></strong> <span style={{ color: 'black' }}>{imageDetails.center}</span></p>
      <p><strong><span style={{ color: 'black' }}>Date Created:</span></strong> <span style={{ color: 'black' }}>{imageDetails.date_created}</span></p>
      <p><strong><span style={{ color: 'black' }}>Description:</span></strong> <span style={{ color: 'black' }}>{imageDetails.description}</span></p>
      <p><strong><span style={{ color: 'black' }}>Albums: </span></strong><span style={{ color: 'black' }}>{imageDetails.album}</span></p>
      <p><strong><span style={{ color: 'black' }}>Location: </span></strong><span style={{ color: 'black' }}>{imageDetails.location}</span></p>
      <p><strong><span style={{ color: 'black' }}>Photographer: </span></strong><span style={{ color: 'black' }}>{imageDetails.photographer}</span></p>
      <p><strong><span style={{ color: 'black' }}>Keywords: </span></strong>
        {imageDetails.keywords ? (
          imageDetails.keywords.map((keyword, index) => (
            <span
              key={index}
              style={{ cursor: 'pointer', color: 'black' }}
              onClick={() => handleKeywordClick(keyword)}
            >
              {keyword}
              {index !== imageDetails.keywords.length - 1 && ', '}
            </span>
          ))
        ) : (
          <span style={{ color: 'black' }}> No keywords available</span>
        )}
      </p>
    </div>
  </div>
);


// Main ImageDetails Component
const ImageDetails = () => {
  const { id } = useParams();
  const [imageDetails, setImageDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImageDetails = async () => {
      try {
        const response = await axios.get(`https://images-api.nasa.gov/search?q=${id}&media_type=image`);
        const imageData = response.data.collection.items[0];
        const { data, links } = imageData;
        const imageDetails = { ...data[0], href: links[0].href };
        setImageDetails(imageDetails);
        setError(null);
      } catch (error) {
        console.error('Error fetching image details:', error);
        setError('Error fetching image details');
      }
    };

    fetchImageDetails();
  }, [id]);

  const handleKeywordClick = (keyword) => {
    window.location.href = `/ImageLibrary?search=${encodeURIComponent(keyword)}`;
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: "Arial, sans-serif", backgroundColor: "white", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: "center", padding: '20px'}}>
      <div className='container-fluid text-white'>
        <Header title={imageDetails ? imageDetails.title : 'Loading...'} />
        {imageDetails && <Body imageDetails={imageDetails} handleKeywordClick={handleKeywordClick} />}
        <Footer />
      </div>
    </div>
  );
};

export default ImageDetails;
