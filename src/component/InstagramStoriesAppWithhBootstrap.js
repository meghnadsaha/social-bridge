import React, { useState } from 'react';
import Stories from 'react-insta-stories';
import { Modal, Row, Col, Button } from 'react-bootstrap';

const InstagramStoriesAppWithBootstrap = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Stories array with multiple slides for each user
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
        heading: 'John Doe',
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
          url: 'https://videos.pexels.com/video-files/9943181/9943181-sd_506_960_25fps.mp4',
          type: 'video',
          duration: 7000,
          autoplay: true,
          muted: true,
        }
      ],
      seeMoreLink: 'https://www.example.com/full-story/john-doe',
    },
  ];

  // Handle the selection of a story
  const handleProfileImageClick = (index) => {
    setSelectedStoryIndex(index);
    setCurrentSlideIndex(0); // Reset to the first slide of the selected story
    setShowModal(true);
  };

  // Handle the Next Slide
  const handleNext = () => {
    if (selectedStoryIndex === null) return; // Ensure a story is selected
    const story = stories[selectedStoryIndex];
    const nextSlideIndex = (currentSlideIndex + 1) % story.slides.length;
    setCurrentSlideIndex(nextSlideIndex);
  };

  // Handle the Previous Slide
  const handlePrevious = () => {
    if (selectedStoryIndex === null) return; // Ensure a story is selected
    const story = stories[selectedStoryIndex];
    const prevSlideIndex = (currentSlideIndex - 1 + story.slides.length) % story.slides.length;
    setCurrentSlideIndex(prevSlideIndex);
  };

  // Handle the 'See More' click
  const handleSeeMore = (link) => {
    window.open(link, '_blank');
  };

  // Handle the story change (Next/Previous Story)
  const handleChangeStory = (direction) => {
    if (direction === 'next') {
      setSelectedStoryIndex((prevIndex) => (prevIndex + 1) % stories.length);
      setCurrentSlideIndex(0); // Reset to the first slide of the next story
    } else if (direction === 'prev') {
      setSelectedStoryIndex((prevIndex) =>
        prevIndex === 0 ? stories.length - 1 : prevIndex - 1
      );
      setCurrentSlideIndex(0); // Reset to the first slide of the previous story
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
              onClick={() => handleProfileImageClick(index)}
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
        onHide={() => setShowModal(false)}
        animation={true}  // Enable animation
        size="lg"
        centered
        fullscreen="xl-down"  // Fullscreen below the 'sm' breakpoint (576px)
        backdrop="true"  // Enables the backdrop (will close the modal when clicked)
      >
        <Modal.Header closeButton />
        <Modal.Body style={{ height: '100vh', position: 'relative' }} scrollable={false}>
          <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
            {/* Ensure the selected story and its slides exist before rendering */}
            {selectedStoryIndex !== null && stories[selectedStoryIndex] && (
              <Stories
                stories={stories[selectedStoryIndex].slides.map((slide, index) => ({
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
                defaultInterval={1500}  // Duration between slides
                width="100%"  // Make width 100% of the modal
                height="100%" // Ensure full height of the parent container
                onNext={handleNext}
                onPrevious={handlePrevious}
                onEnd={() => {
                  // Close the modal after the last slide of the last story
                  setShowModal(false);
                }}
              />
            )}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default InstagramStoriesAppWithBootstrap;
