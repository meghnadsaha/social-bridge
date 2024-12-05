import React, { useState, useEffect, useRef } from "react";
import { Modal, Row, Col, Button, Carousel } from "react-bootstrap";
import "animate.css"; // Import Animate.css if you installed it via npm

const InstagramStoriesAppWithBootstrapCarousel = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(null); // Track the selected profile index
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0); // Track the current slide index for a profile
  const [isLastSlide, setIsLastSlide] = useState(false); // Track if we are at the last slide
  const [isLastProfile, setIsLastProfile] = useState(false); // Track if we are at the last profile

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const slideCount = 3; // Total number of slides
  const progressIntervalRef = useRef(null);
  // Function to open the modal
  const handleShowModal = () => setShowModal(true);

  // Handle slide change
  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
    setProgress(0); // Reset progress when slide changes
  };

  // Progress bar update function
  const updateProgress = () => {
    setProgress((prevProgress) => {
      if (prevProgress < 100) {
        return prevProgress + 0.5; // Increment progress by 1%
      }
      clearInterval(progressIntervalRef.current); // Stop the interval when progress reaches 100
      return 100;
    });
  };

  // Start updating progress when carousel slide starts
  useEffect(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current); // Clear any existing interval before starting a new one
    }

    // Start the interval when activeIndex changes (slide starts)
    progressIntervalRef.current = setInterval(updateProgress, 50); // Update every 50ms

    return () => {
      // Clean up on component unmount
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [activeIndex]); // This effect runs whenever the activeIndex changes

  // Stories array with multiple slides for each user
  const stories = [
    {
      header: {
        heading: "John Doe",
        subheading: "5 mins ago",
        profileImage:
          "https://images.pexels.com/photos/28704748/pexels-photo-28704748/free-photo-of-capturing-a-beautiful-matcha-latte-art-on-mobile.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      slides: [
        {
          url: "https://images.pexels.com/photos/29086857/pexels-photo-29086857/free-photo-of-young-graduate-celebrating-achievement-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          url: "https://images.pexels.com/photos/3932864/pexels-photo-3932864.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
        {
          url: "https://images.pexels.com/photos/6968892/pexels-photo-6968892.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
      ],
      seeMoreLink: "https://www.example.com/full-story/john-doe",
    },
    {
      header: {
        heading: "Jane Smith",
        subheading: "10 mins ago",
        profileImage:
          "https://images.pexels.com/photos/4996772/pexels-photo-4996772.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      slides: [
        {
          url: "https://images.pexels.com/photos/7951623/pexels-photo-7951623.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
        {
          url: "https://videos.pexels.com/video-files/8448263/8448263-hd_1080_1920_24fps.mp4",
          type: "video",
        },
      ],
      seeMoreLink: "https://www.example.com/full-story/jane-smith",
    },
    {
      header: {
        heading: "John Doe",
        subheading: "10 mins ago",
        profileImage:
          "https://images.pexels.com/photos/5262903/pexels-photo-5262903.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      slides: [
        {
          url: "https://images.pexels.com/photos/7679888/pexels-photo-7679888.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
        {
          url: "https://images.pexels.com/photos/698922/pexels-photo-698922.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
        {
          url: "https://videos.pexels.com/video-files/8448263/8448263-hd_1080_1920_24fps.mp4",
          type: "video",
        },
      ],
      seeMoreLink: "https://www.example.com/full-story/john-doe",
    },
    // Add more stories here...
  ];

  const handleNextProfile = () => {
    const nextProfileIndex = (selectedStoryIndex + 1) % stories.length;
    setSelectedStoryIndex(nextProfileIndex);
    setCurrentSlideIndex(0);
  };

  const handlePreviousProfile = () => {
    const prevProfileIndex =
      (selectedStoryIndex - 1 + stories.length) % stories.length;
    setSelectedStoryIndex(prevProfileIndex);
    setCurrentSlideIndex(0);
  };

  const handleSeeMore = (link) => {
    window.open(link, "_blank");
  };

  const handleProfileImageClick = (index) => {
    setSelectedStoryIndex(index);
    setCurrentSlideIndex(0);
    setShowModal(true);
  };

  // Handle closing the modal when the close button is clicked (on the last story)
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <h1 className="my-4 text-center">
        Instagram Stories Gallery with Bootstrap
      </h1>

      <Row className="g-4 justify-content-center">
        {stories.map((story, index) => (
          <Col key={index} md={2} sm={3} xs={4}>
            <div
              className="card shadow-sm"
              style={{
                cursor: "pointer",
                borderRadius: "50%",
                overflow: "hidden",
                width: "80px",
                height: "80px",
                margin: "auto",
              }}
              onClick={() => handleProfileImageClick(index)}
            >
              <img
                src={story.header.profileImage}
                alt={story.header.heading}
                className="card-img-top"
                style={{
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  border: "4px solid #fff",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
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
        fullscreen={true}
        show={showModal}
        onHide={handleCloseModal}
        animation={true}
        size="lg"
        centered
        // fullscreen="xl-down"
        backdrop="true"
        className="animate__animated animate__zoomIn modalCss "
      >
        <div className="carousel-progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <Modal.Header closeButton></Modal.Header>

        <Modal.Body
          //  style={{ height: '100vh', position: 'relative' }}
          scrollable={false}
          className="modal-body-px"
        >
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            {selectedStoryIndex !== null && (
              <>
                <Carousel
                  // activeIndex={currentSlideIndex}
                  // onSelect={(index) => setCurrentSlideIndex(index)}
                  interval={11000} // Disable automatic sliding
                  // indicators={true} // Disable indicators
                  controls={true} // Disable controls
                  activeIndex={activeIndex}
                  onSelect={handleSelect}
                  indicators={false}
                  onSlide={() => setProgress(0)} // Reset progress when a slide transition starts
                >
                  {stories[selectedStoryIndex].slides.map((slide, index) => (
                    <Carousel.Item key={index}>
                      {slide.type === "video" ? (
                        <video
                          src={slide.url}
                          controls
                          // style={{ width: '100%', height: '100%' }}
                          className="custom-image"
                        />
                      ) : (
                        <img
                          src={slide.url}
                          alt={`Slide ${index + 1}`}
                          // className="d-block w-100"
                          // style={{ height: '100%' }}
                          className="custom-image"
                        />
                      )}
                      {slide.type !== "video" && (
                        <div
                          style={{
                            position: "absolute",
                            bottom: 10,
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "#000",
                            color: "#fff",
                            padding: "10px 20px",
                            borderRadius: "20px",
                            cursor: "pointer",
                          }}
                          className="custom-image"
                          onClick={() =>
                            handleSeeMore(
                              stories[selectedStoryIndex].seeMoreLink
                            )
                          }
                        >
                          See More
                        </div>
                      )}
                    </Carousel.Item>
                  ))}
                </Carousel>
              </>
            )}
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handlePreviousProfile}>Previous Profile</Button>
          <Button variant="primary" onClick={handleNextProfile}>Next Profile</Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default InstagramStoriesAppWithBootstrapCarousel;
