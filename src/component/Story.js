// import React, { useEffect } from 'react';
// import * as Zuck from 'zuck.js'; // Import the library
// import 'zuck.js/dist/zuck.min.css'; // Import the CSS for styling

// const StoryComponent = () => {
//   useEffect(() => {
//     // Initialize Zuck.js
//     const zuckInstance = new Zuck('#story', {
//       backButton: true, // Enable back button
//       story: [
//         {
//           id: 1,
//           photo: 'https://placeimg.com/640/640/people', // Example photo URL
//           name: 'John Doe',
//           link: 'https://www.example.com',
//           stories: [
//             {
//               id: 1,
//               photo: 'https://placeimg.com/640/640/nature', // Example story photo URL
//               time: 10, // Story duration in seconds
//             },
//           ],
//         },
//         {
//           id: 2,
//           photo: 'https://placeimg.com/640/640/tech', // Another photo URL
//           name: 'Jane Smith',
//           link: 'https://www.example.com',
//           stories: [
//             {
//               id: 1,
//               photo: 'https://placeimg.com/640/640/business', // Another story image
//               time: 10,
//             },
//           ],
//         },
//       ],
//     });

//     // Cleanup on unmount
//     return () => {
//       zuckInstance.destroy();
//     };
//   }, []);

//   return (
//     <div id="story" style={{ width: '100%', height: '500px' }}>
//       {/* The story component will be rendered here by Zuck.js */}
//     </div>
//   );
// };

// export default StoryComponent;
