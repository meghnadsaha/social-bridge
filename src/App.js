import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BiHome, BiCog } from "react-icons/bi";
import MyComponent from "./component/MyComponent";
import "tiny-slider/dist/tiny-slider.css";
import MySlider from "./component/MySlider";
import ChoicesComponent from "./component/ChoicesComponent";
import MyForm from "./component/MyForm";
import MyGallery from "./component/MyGallery";
import "dropzone/dist/dropzone.css";
import FileUpload from "./component/FileUpload";
import "flatpickr/dist/flatpickr.css"; // Import the CSS for flatpickr
import DatePicker from "./component/DatePicker";
// In src/index.js or src/App.js
import "plyr/dist/plyr.css"; // Import Plyr's CSS
import VideoPlayer from "./component/VideoPlayer";
import InstagramStoriesAppWithhBootstrap from "./component/InstagramStoriesAppWithhBootstrap";
import InstagramStoriesApp from "./component/InstagramStoriesApp";
import InstagramStoriesAppWithhGlightbox from "./component/InstagramStoriesAppWithhGlightbox";

function App() {
  return (
    <div className="container">
      <hr />
      {/* <InstagramStoriesApp /> */}
      <hr />
      <InstagramStoriesAppWithhBootstrap />
      <hr />
      {/* <InstagramStoriesAppWithhGlightbox /> */}
      <hr />
      <h1 className="text-center mt-5">Hello, Bootstrap 5.3.3 in React!</h1>
      <hr />
      <p className="containerFonts">Hello, world!</p>
      <button className="btn btn-primary">Click Me</button>

      <hr />
      <i className="fas fa-camera"></i>
      <i className="fab fa-react"></i>
      <br />

      <div>
        <FontAwesomeIcon icon={faCamera} />
        <FontAwesomeIcon icon={faReact} />
      </div>

      <hr />
      <div>
        <i className="bi bi-house-door"></i> {/* Home icon */}
        <i className="bi bi-gear"></i> {/* Gear icon */}
      </div>

      <hr />
      <div>
        <BiHome /> {/* Home icon */}
        <BiCog /> {/* Gear icon */}
      </div>

      <hr />
      <MyComponent />

      <hr />
      <MySlider />
      <hr />
      <ChoicesComponent />
      <hr />

      <MyForm />

      <hr />
      {/* <MyGallery /> */}

      <hr />

      {/* <FileUpload/> */}
      <DatePicker />

      <hr />
      <VideoPlayer />
      {/* 
      <hr />
      <InstagramStoriesApp /> */}
    </div>
  );
}

export default App;
