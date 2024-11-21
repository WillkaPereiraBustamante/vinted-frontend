import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/v2/offers/${id}`
        );
        // console.log(response.data);
        setData(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <>
      <main>
        <div className="offer-container container">
          <div className="offer-picture">
            <img src={data.product_image.secure_url} alt="" />
          </div>

          <div className="offer-infos">
            <div className="offer-details">
              <span className="offer-price">{data.product_price} €</span>
              {data.product_details.map((detail, index) => {
                const keysInObj = Object.keys(detail);
                const keyInObj = keysInObj[0];
                return (
                  <ul key={index}>
                    <li>
                      <span>{keyInObj}</span>
                      <span>{detail[keyInObj]}</span>
                    </li>
                  </ul>
                );
              })}
            </div>

            <div className="divider"></div>

            <div className="offer-content">
              <p className="offer-name">{data.product_name}</p>
              <p className="offer-description">{data.product_description}</p>
              <div className="offer-avatar-username">
                {data.owner.account.avatar && (
                  <img src={data.owner.account.avatar.secure_url} alt="" />
                )}
                <span>{data.owner.account.username}</span>
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
