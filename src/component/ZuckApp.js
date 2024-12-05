import React from 'react';
import Stories from 'react-insta-stories';

const InstagramStoriesApp = () => {
  const stories = [
    {
      url: 'https://images.pexels.com/photos/29086857/pexels-photo-29086857/free-photo-of-young-graduate-celebrating-achievement-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      header: {
        heading: 'John Doe',
        subheading: '5 mins ago',
        profileImage: 'https://images.pexels.com/photos/28704748/pexels-photo-28704748/free-photo-of-capturing-a-beautiful-matcha-latte-art-on-mobile.jpeg?auto=compress&cs=tinysrgb&w=1200'
      },
      duration: 5000, // Duration in milliseconds for each story item
      autoplay: true,
      muted: true,  // Ensure the video is muted
      seeMoreLink: 'https://www.example.com/full-story/john-doe', // Link to the full story
    },
    {
      url: 'https://videos.pexels.com/video-files/8448263/8448263-hd_1080_1920_24fps.mp4',
      type: 'video', // Can be 'image' or 'video'
      header: {
        heading: 'Jane Smith',
        subheading: '10 mins ago',
        profileImage: 'https://images.pexels.com/photos/4996772/pexels-photo-4996772.jpeg?auto=compress&cs=tinysrgb&w=1200'
      },
      duration: 7000, // Video duration in milliseconds
      autoplay: true,
      muted: true,  // Ensure the video is muted
      seeMoreLink: 'https://www.example.com/full-story/jane-smith', // Link to the full story
    },
    // Add more stories as needed
  ];

  // Callback when the user proceeds to the next story
  const handleNext = () => {
    console.log('Next story');
  };

  // Callback when the user goes back to the previous story
  const handlePrevious = () => {
    console.log('Previous story');
  };

  // Callback for the "See More" button click
  const handleSeeMore = (link) => {
    window.open(link, '_blank'); // Open the full story in a new tab
  };

  return (
    <div>
      <h1>Instagram Stories</h1>

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
                cursor: 'pointer' 
              }}
              onClick={() => handleSeeMore(story.seeMoreLink)}
            >
              See More
            </div>
          ),  // Function to return "See More" button
        }))}
        defaultInterval={1500}
        width={432}
        height={768}
        onNext={handleNext}      // Passing the handleNext callback
        onPrevious={handlePrevious}  // Passing the handlePrevious callback
      />
    </div>
  );
}

export default InstagramStoriesApp;
