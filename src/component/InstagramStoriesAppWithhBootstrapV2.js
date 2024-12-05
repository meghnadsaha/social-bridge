import React, { useState, useEffect } from 'react';
import Stories from 'react-insta-stories';
import GLightbox from 'glightbox';
import { Row, Col, Card } from 'react-bootstrap';

const InstagramStoriesApp = () => {
  const [lightbox, setLightbox] = useState(null); // To store GLightbox instance

  const stories = [
    {
      url: 'https://images.pexels.com/photos/29086857/pexels-photo-29086857/free-photo-of-young-graduate-celebrating-achievement-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      header: {
        heading: 'John Doe',
        subheading: '5 mins ago',
        profileImage: 'https://images.pexels.com/photos/28704748/pexels-photo-28704748/free-photo-of-capturing-a-beautiful-matcha-latte-art-on-mobile.jpeg?auto=compress&cs=tinysrgb&w=1200'
      },
      duration: 5000,
      autoplay: true,
      muted: true,
      seeMoreLink: 'https://www.example.com/full-story/john-doe',
    },
    {
      url: 'https://videos.pexels.com/video-files/8448263/8448263-hd_1080_1920_24fps.mp4',
      type: 'video',
      header: {
        heading: 'Jane Smith',
        subheading: '10 mins ago',
        profileImage: 'https://images.pexels.com/photos/4996772/pexels-photo-4996772.jpeg?auto=compress&cs=tinysrgb&w=1200'
      },
      duration: 7000,
      autoplay: true,
      muted: true,
      seeMoreLink: 'https://www.example.com/full-story/jane-smith',
    },
    // Add more stories as needed
  ];

  // Initialize GLightbox only once
  useEffect(() => {
    const lightboxInstance = GLightbox({
      selector: '.glightbox',
      openEffect: 'zoom',
      closeEffect: 'fade',
      width: '80%',
    });
    setLightbox(lightboxInstance); // Store the GLightbox instance in state
  }, []);

  const handleProfileClick = (index) => {
    if (lightbox) {
      const story = stories[index];
      const lightboxContent = `
        <div class="glightbox">
          <div class="story-header">
            <h5>${story.header.heading}</h5>
            <small>${story.header.subheading}</small>
          </div>
          <img src="${story.url}" alt="Story Image" />
          <div class="story-footer">
            <a href="${story.seeMoreLink}" target="_blank" class="btn btn-link">See More</a>
          </div>
        </div>
      `;
      lightbox.open({ content: lightboxContent });
    }
  };

  return (
    <div>
      <h1 className="text-center my-4">Instagram Stories</h1>
      <Row>
        {stories.map((story, index) => (
          <Col key={index} sm={6} md={4} lg={3} className="mb-4">
            <Card className="profile-card" onClick={() => handleProfileClick(index)}>
              <Card.Img variant="top" src={story.header.profileImage} alt="Profile" />
              <Card.Body>
                <Card.Title>{story.header.heading}</Card.Title>
                <Card.Text>{story.header.subheading}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Stories Section */}
      <div className="stories-container mt-4">
        <Stories
          stories={stories.map((story) => ({
            ...story,
            seeMore: () => (
              <div
                style={{
                  position: 'absolute',
                  bottom: 10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#000',
                  color: '#fff',
                  padding: '10px 20px',
                  borderRadius: '20px',
                  cursor: 'pointer',
                }}
                onClick={() => window.open(story.seeMoreLink, '_blank')}
              >
                See More
              </div>
            ),
          }))}
          defaultInterval={1500}
          width={432}
          height={768}
        />
      </div>
    </div>
  );
};

export default InstagramStoriesApp;
