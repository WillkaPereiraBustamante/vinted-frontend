import { useState } from "react";
import axios from "axios";

function Publish({ token }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);

  return (
    <div className="form-container">
      <form
        className="publish-form container"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", description);
            formData.append("brand", brand);
            formData.append("size", size);
            formData.append("color", color);
            formData.append("condition", condition);
            formData.append("city", city);
            formData.append("price", price);
            formData.append("picture", file);

            // Display the key/value pairs
            // for (let pair of formData.entries()) {
            //   console.log(pair[0] + ", " + pair[1]);
            // }
            const response = await axios.post(
              "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
              formData,
              {
                headers: {
                  authorization: `Bearer ${token}`,
                  "Content-Type": "multipart/form-data",
                },
              }
            );
            console.log(response.data);
          } catch (error) {
            console.log(error.response);
          }
        }}
      >
        <h2>Vends ton article</h2>
        <div className="form-file-select">
          <div>
            <label htmlFor="file" className="label-file">
              <span>+</span>
              <span>Ajoute une photo</span>
            </label>
            {/* IL N'Y A PAS DE VALUE POUR UN INPUT DE TYPE FILE ! */}
            <input
              className="input-file"
              type="file"
              id="file"
              onChange={(event) => {
                setFile(event.target.files[0]);
              }}
            />
          </div>
        </div>
        <div className="text-input-section">
          <div className="text-input">
            <h4>Titre</h4>
            <input
              type="text"
              placeholder="ex: Chemise Sézane verte"
              id="title"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div className="text-input">
            <h4>Décris ton article</h4>
            <input
              type="text"
              placeholder="ex: porté quelquefois, taille correctement"
              id="description"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="text-input-section">
          <div className="text-input">
            <h4>Marque</h4>
            <input
              type="text"
              placeholder="ex: Zara"
              id="brand"
              value={brand}
              onChange={(event) => {
                setBrand(event.target.value);
              }}
            />
          </div>
          <div className="text-input">
            <h4>Taille</h4>
            <input
              type="text"
              placeholder="ex: L / 40 / 12"
              id="size"
              value={size}
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />
          </div>
          <div className="text-input">
            <h4>Couleur</h4>
            <input
              type="text"
              placeholder="ex: Fushia"
              id="color"
              value={color}
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
          </div>
          <div className="text-input">
            <h4>État</h4>
            <input
              type="text"
              placeholder="ex: Neuf avec étiquette"
              id="condition"
              value={condition}
              onChange={(event) => {
                setCondition(event.target.value);
              }}
            />
          </div>
          <div className="text-input">
            <h4>Lieu</h4>
            <input
              type="text"
              placeholder="ex: Paris"
              id="city"
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="text-input-section">
          <div className="text-input-price">
            <h4>Prix</h4>
            <div>
              <input
                type="text"
                placeholder="0,00 €"
                id="price"
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
              <div className="text-input-checkbox">
                <input type="checkbox" />
                <span>Je suis intéressé(e) par les échanges</span>
              </div>
            </div>
          </div>
        </div>
        <div className="form-button-section">
          <button>Ajouter</button>
        </div>
      </form>
    </div>
  );
}

export default Publish;
