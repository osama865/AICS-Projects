import React, { useState } from "react";
import Title from "./components/Title";
import UploadFile from "./components/UploadFile/UploadFile.js";
import ImageGrid from "./components/ImageGrid/ImageGrid.js";
import Modal from "./components/Modal/Modal";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadFile />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
