import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_CAPSULE } from "../../utils/mutations";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const CapsuleDetails = () => {
  const [createCapsule] = useMutation(CREATE_CAPSULE);
  const [fileList, setFileList] = useState([]);
  const [showLetter, setShowLetter] = useState(false); // State to control letter visibility

  const handleFileChange = (info) => {
    if (info.file.status === "done" || info.file.status === "error") {
      setFileList(info.fileList);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const openDate = new Date(event.target.openDate.value); // Convert openDate to a Date object
    const letter = event.target.letter.value;
    const userId = "6519b1d6725c738da5c597dd"

    // Extract file URLs from fileList
    const photoUrls = fileList.map((file) => file.response.url);

    console.log("Title:", title);
    console.log("Open Date:", openDate);
    console.log("Letter:", letter);
    console.log("Photo URLs:", photoUrls);

    try {
      const response = await createCapsule({
        variables: { input: { title, openDate, letter, photoURLs: photoUrls } },
      });

      console.log("Server Response:", response);

      // Check if the openDate is in the future, and if so, set showLetter to true
      const currentDate = new Date();
      if (openDate > currentDate) {
        setShowLetter(true);
      }
    } catch (error) {
      console.error("Error creating capsule:", error);
    }
  };

  return (
    <div>
      <h1>Create New Capsule</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" required />
        </div>
        <div>
          <label>Open Date:</label>
          <input type="date" name="openDate" required />
        </div>
        <div>
          <label>Letter:</label>
          <textarea name="letter" rows="10" required></textarea>{" "}
          {/* Text area for the letter */}
        </div>
        {showLetter && (
          <div>
            <h2>Letter Content</h2>
            <p>{letter}</p>
          </div>
        )}
        <div>
          <label>Upload Photo:</label>
          <Upload
            customRequest={({ file, onSuccess }) => {
              // Handle file upload logic here (e.g., send the file to the server)
              const formData = new FormData();
              formData.append("file", file);

              // Send the formData to the server for file handling
              fetch("/graphql", {
                method: "POST",
                body: formData,
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log("File uploaded:", data); // Data should contain the file URL
                  onSuccess();
                })
                .catch((error) => {
                  // console.error("File upload error:", error);
                  onSuccess(error);
                });
            }}
            onChange={handleFileChange}
            fileList={fileList}
            listType="picture"
            name="photoURLs"
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CapsuleDetails;