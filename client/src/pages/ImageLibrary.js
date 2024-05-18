import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';


const ImageLibrary = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryFromURL = queryParams.get('search') || '';

  useEffect(() => {
    setSearchQuery(queryFromURL);
  }, [queryFromURL]);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://images-api.nasa.gov/search?q=${searchQuery}&media_type=image`
        );
        setImages(response.data.collection.items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchImages();
  }, [searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <div className='col-12 header-container'>
        <div className='header-content' style={{ backgroundImage: `url('https://i.pinimg.com/originals/bd/f7/b5/bdf7b5af05d31bcdf6c1b29466b15a1d.jpg')`, width: "1600px", padding: '50px', marginLeft: "-35px", borderRadius: '10px', position: 'relative' }}>
          <h2 style={{ color: 'white', marginTop: '3.5cm', textAlign: 'center', fontSize: "40px" }}>NASA Image and Video Library</h2>
          <input
            type="text"
            placeholder="Search images..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            style={{ width: '350px', marginTop: '20px', padding: '10px', fontSize: '16px', borderRadius: '5px', border: 'none' }}
          />
          
          <img src="https://static.displate.com/380x270/displate/2018-10-05/3d0bed4c15c897827abbac5a4e816e5f_1fe2fbd2755921fac40b6013add2d0bc.jpg" alt="Amazon" style={{ position: 'absolute', top: '60px', right: '3cm', width: '140px',height:"120px", borderRadius: '10px' }} />
        </div>
      </div>

      <div className="container-fluid" style={{ backgroundColor: "black", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: "center" }}>
        <div className="row mt-5" style={{ display: "flex", flexWrap: "wrap", padding: "0 4px" }}>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error fetching images. Please try again later.</p>
          ) : (
            images.length > 0 ? (
              images.map((image, index) => (
                <div key={index} className="col" style={{ flex: "25%", maxWidth: "25%", padding: "0 4px" }}>
                  <Link to={`/image/${image.data[0].nasa_id}`}>
                    <img
                      src={image.links[0].href}
                      alt={image.data[0].title}
                      style={{ verticalAlign: "middle", marginTop: "8px", width: "100%" }}
                    />
                  </Link>
                </div>
              ))
            ) : (
              <p>No images found.</p>
            )
          )}
        </div>
      </div>

      <div className='col-12' style={{ backgroundColor: 'black', padding: '60px', width: "1600px", marginLeft: "-80px", marginTop: "80px" }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <a href="https://www.nasa.gov/">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/800px-NASA_logo.svg.png" alt="NASA Logo" style={{ width: '100px', marginLeft: '150px', borderRadius: '10px' }} />
            </a>
            <span style={{ color: "white", fontSize: "18px" }}>National Aeronautics and Space Administration </span>
          </div>
          <div style={{ marginRight: '1cm' }}>
            <a href="https://www.nasa.gov/nasa-brand-center/images-and-media/">USAGE GUIDELINES</a> |
            <a href="https://www.nasa.gov/privacy/">PRIVACY</a> |
            <a href="https://www.nasa.gov/foia/">FOIA</a> |
            <a href="https://www.nasa.gov/contact/">CONTACT NASA</a> |
            <a href="https://www.nasa.gov/general/accessibility/">ACCESSIBILITY</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLibrary;
