import React, { useState } from 'react';
import Stories from 'react-insta-stories';
import { Modal, Row, Col, Button } from 'react-bootstrap';
import 'animate.css'; // Import Animate.css if you installed it via npm

const InstagramStoriesAppWithBootstrap = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(null); // Track the selected profile index
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0); // Track the current slide index for a profile

  // Stories array with multiple slides for each user
  //2. Modify the Modal to Handle Multiple Slides for a Single Story
  const stories = [
    {
      header: {
        heading: 'John Doe',
        subheading: '5 mins ago',
        profileImage: 'https://images.pexels.com/photos/28704748/pexels-photo-28704748/free-photo-of-capturing-a-beautiful-matcha-latte-art-on-mobile.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
      slides: [
        {
          url: 'https://images.pexels.com/photos/29086857/pexels-photo-29086857/free-photo-of-young-graduate-celebrating-achievement-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          duration: 5000,
          autoplay: true,
          muted: true,
        },
        {
          url: 'https://images.pexels.com/photos/3932864/pexels-photo-3932864.jpeg?auto=compress&cs=tinysrgb&w=1200',
          duration: 5000,
          autoplay: true,
          muted: true,
        },
        {
          url: 'https://images.pexels.com/photos/6968892/pexels-photo-6968892.jpeg?auto=compress&cs=tinysrgb&w=1200',
          duration: 5000,
          autoplay: true,
          muted: true,
        }
      ],
      seeMoreLink: 'https://www.example.com/full-story/john-doe',
    },
    {
      header: {
        heading: 'Jane Smith',
        subheading: '10 mins ago',
        profileImage: 'https://images.pexels.com/photos/4996772/pexels-photo-4996772.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
      slides: [
        {
          url: 'https://images.pexels.com/photos/7951623/pexels-photo-7951623.jpeg?auto=compress&cs=tinysrgb&w=1200',
          duration: 6000,
          autoplay: true,
          muted: true,
        },
        {
          url: 'https://videos.pexels.com/video-files/8448263/8448263-hd_1080_1920_24fps.mp4',
          type: 'video',
          duration: 7000,
          autoplay: true,
          muted: true,
        }
      ],
      seeMoreLink: 'https://www.example.com/full-story/jane-smith',
    },
    {
      header: {
        heading: 'John  Doe',
        subheading: '10 mins ago',
        profileImage: 'https://images.pexels.com/photos/5262903/pexels-photo-5262903.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
      slides: [
        {
          url: 'https://images.pexels.com/photos/7679888/pexels-photo-7679888.jpeg?auto=compress&cs=tinysrgb&w=1200',
          duration: 6000,
          autoplay: true,
          muted: true,
        },
        {
          url: 'https://images.pexels.com/photos/698922/pexels-photo-698922.jpeg?auto=compress&cs=tinysrgb&w=1200',
          duration: 6000,
          autoplay: true,
          muted: true,
        },
        {
          url: 'https://videos.pexels.com/video-files/8448263/8448263-hd_1080_1920_24fps.mp4',
          type: 'video',
          duration: 7000,
          autoplay: true,
          muted: true,
        }
      ],
      seeMoreLink: 'https://www.example.com/full-story/john-doe',
    },
    // Add more stories here...
  ];

  const handleNextProfile = () => {
    // Loop back to the first profile when you go beyond the last one
    const nextProfileIndex = (selectedStoryIndex + 1) % stories.length;
    setSelectedStoryIndex(nextProfileIndex);
    setCurrentSlideIndex(0); // Reset slide index when moving to next profile
  };

  const handlePreviousProfile = () => {
    // Loop back to the last profile when you go before the first one
    const prevProfileIndex = (selectedStoryIndex - 1 + stories.length) % stories.length;
    setSelectedStoryIndex(prevProfileIndex);
    setCurrentSlideIndex(0); // Reset slide index when moving to previous profile
  };

  const handleSeeMore = (link) => {
    window.open(link, '_blank');
  };

  const handleProfileImageClick = (index) => {
    setSelectedStoryIndex(index); // Set the selected profile index
    setCurrentSlideIndex(0); // Reset slide index when opening a profile
    setShowModal(true); // Show the modal
  };

  // Called when a story ends (last slide of the profile)
  const handleStoryEnd = () => {
    // Check if we are at the last slide of the current profile
    if (currentSlideIndex === stories[selectedStoryIndex].slides.length - 1) {
      // Close the modal after the last slide of the last story
      setShowModal(false);

      // After closing, move to the next profile's story
      setTimeout(() => {
        handleNextProfile(); // Loop to the next profile (with wraparound)
        setShowModal(true); // Open the modal again for the next profile
      }, 300); // Delay before opening the next profile's story
    } else {
      // Otherwise, just go to the next slide in the current profile
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  // Handle closing the modal when the close button is clicked (on the last story)
  const handleCloseModal = () => {
    setShowModal(false);
  };

   // Custom onStoryEnd logic
   const customOnStoryEnd = (isLastSlide) => {
    // If it's the last slide of the last story
    if (isLastSlide) {
      setShowModal(false); // Close the modal
      setTimeout(() => {
        // handleNextProfile(); // Go to the next profile after a short delay
        // setShowModal(true); // Open the modal for the next profile
      }, 300);
    } else {
      // If it's not the last slide, just move to the next slide
      // setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  return (
    <div className="container">
      <h1 className="my-4 text-center">Instagram Stories Gallery with Bootstrap</h1>

      <Row className="g-4 justify-content-center">
        {stories.map((story, index) => (
          <Col key={index} md={2} sm={3} xs={4}>
            <div
              className="card shadow-sm"
              style={{
                cursor: 'pointer',
                borderRadius: '50%',
                overflow: 'hidden',
                width: '80px',
                height: '80px',
                margin: 'auto',
              }}
              onClick={() => handleProfileImageClick(index)} // Pass index to handle click
            >
              <img
                src={story.header.profileImage}
                alt={story.header.heading}
                className="card-img-top"
                style={{
                  borderRadius: '50%',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  border: '4px solid #fff',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                }}
              />
            </div>
            <div className="text-center mt-2">
              <h6 className="mb-0">{story.header.heading}</h6>
            </div>
          </Col>
        ))}
      </Row>

      {/* Modal to show selected Instagram story */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}  // Use the custom close function
        animation={true}  // Enable animation
        size="lg"
        centered
        fullscreen="xl-down"  // Fullscreen below the 'sm' breakpoint (576px)
        backdrop="true"  // Enables the backdrop (will close the modal when clicked)
        className="animate__animated animate__zoomIn modalCss"  // Add animate__zoomIn class
      >
        <Modal.Header closeButton />
        <Modal.Body style={{ height: '100vh', position: 'relative' }} scrollable={false}>
          <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
            {selectedStoryIndex !== null && (
              <Stories
                stories={stories[selectedStoryIndex]?.slides.map((slide) => ({
                  ...slide,
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
                      onClick={() => handleSeeMore(stories[selectedStoryIndex].seeMoreLink)}
                    >
                      See More
                    </div>
                  ),
                }))}
                defaultInterval={1500}
                width="100%"  // Make width 100% of the modal
                height="100%" // Ensure full height of the parent container
                currentSlideIndex={currentSlideIndex} // Pass currentSlideIndex to the Stories component
                // onStoryEnd={handleStoryEnd} // Trigger when a story ends
                onStoryEnd={(isLastSlide) => customOnStoryEnd(isLastSlide)} // Use the custom handler
              />
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePreviousProfile}>Previous Profile</Button>
          <Button variant="primary" onClick={handleNextProfile}>Next Profile</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default InstagramStoriesAppWithBootstrap;
