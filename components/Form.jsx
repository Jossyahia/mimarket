import { useState } from "react";
import { IoIosImages } from "react-icons/io";
import { BiTrash } from "react-icons/bi";

import categories from "./data/categories";
import "./styles/Form.scss";

const Form = ({ type, initialWork, onSubmit }) => {
  const [work, setWork] = useState(initialWork);

  const handleUploadPhotos = (e) => {
    const newPhotos = e.target.files;

    setWork((prevWork) => ({
      ...prevWork,
      photos: [...prevWork.photos, ...newPhotos],
    }));
  };

  const handleRemovePhoto = (index) => {
    setWork((prevWork) => ({
      ...prevWork,
      photos: prevWork.photos.filter((_, i) => i !== index),
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setWork((prevWork) => ({
      ...prevWork,
      [name]: value,
    }));
  };

  return (
    <div className="form">
      <h1>{type} Your Work</h1>

      <form onSubmit={onSubmit}>
        <h3>Which category describes your work?</h3>

        <div className="category-list">
          {categories.map((item, index) => (
            <p
              key={index}
              className={work.category === item ? "selected" : ""}
              onClick={() => setWork({ ...work, category: item })}
            >
              {item}
            </p>
          ))}
        </div>

        <h3>Add photos of your work</h3>

        {work.photos.length < 1 && (
          <div className="photos">
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleUploadPhotos}
              multiple
              style={{ display: "none" }}
            />

            <label htmlFor="image" className="alone">
              <div className="icon">
                <IoIosImages />
              </div>
              <p>Upload from your device</p>
            </label>
          </div>
        )}

        {work.photos.length > 0 && (
          <div className="photos">
            {work.photos.map((photo, index) => (
              <div key={index} className="photo">
                {photo instanceof Object ? (
                  <img src={URL.createObjectURL(photo)} alt="work" />
                ) : (
                  <img src={photo} alt="work" />
                )}

                <button type="button" onClick={() => handleRemovePhoto(index)}>
                  <BiTrash />
                </button>
              </div>
            ))}

            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleUploadPhotos}
              multiple
              style={{ display: "none" }}
            />

            <label htmlFor="image" className="together">
              <div className="icon">
                <IoIosImages />
              </div>
              <p>Upload from your device</p>
            </label>
          </div>
        )}

        <h3>What makes your work attractive?</h3>

        <div className="description">
          <p>Title</p>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={work.title}
            onChange={handleChange}
            required
          />

          <p>Description</p>
          <textarea
            placeholder="Description"
            name="description"
            value={work.description}
            onChange={handleChange}
            required
          />

          <p>Set your price</p>
          <span>#</span>
          <input
            type="number"
            placeholder="Price"
            name="price"
            value={work.price}
            onChange={handleChange}
            className="price"
            required
          />
        </div>

        <button type="submit" className="submit_btn">
          Publish Your Work
        </button>
      </form>
    </div>
  );
};

export default Form;
