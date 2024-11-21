import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Offer = () => {
  const params = useParams();
  // console.log(params);

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/v2/offers"
        );
        // console.log(response.data);
        setData(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <>
      <main>
        <div className="offer-container container">
          <div className="offer-picture">
            <img src="src/assets/imgs/sn9idggm58yuxw1omvsi.jpg" alt="" />
          </div>

          <div className="offer-infos">
            <div className="offer-details">
              <span>5.9 €</span>
              <ul>
                <li>
                  <span>MARQUE</span>
                  <span></span>
                </li>
                <li>
                  <span>TAILLE</span>
                  <span></span>
                </li>
                <li>
                  <span>ÉTAT</span>
                  <span></span>
                </li>
                <li>
                  <span>COULEUR</span>
                  <span></span>
                </li>
                <li>
                  <span>EMPLACEMENT</span>
                  <span></span>
                </li>
              </ul>
            </div>

            <div className="offer-content">
              <p className="offer-name"></p>
              <p className="offer-description"></p>
              <div className="offer-avatar-username">
                <img src="" alt="" />
                <span></span>
              </div>
            </div>
            <button>Acheter</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Offer;
