import React, { useEffect } from 'react';
import Dropzone from 'dropzone';

const FileUpload = () => {
  useEffect(() => {
    new Dropzone('#myDropzone', {
      url: '/upload', // Your upload URL
    });
  }, []);

  return (
    <div>
      <form action="/upload" className="dropzone" id="myDropzone" />
    </div>
  );
};

export default FileUpload;
