import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
      {/* {console.log(data)} */}
      <div className="home">
        <img
          src="https://static.vinted.com/assets/seller-promotion/other/banner-wide-9b45d0aa9a311c4ff6013e9cf3bc2b6646468be3d2f553192c63598685fcc177.jpg"
          alt=""
        />
        <div className="home-hero-ready">
          Prêts à faire du tri dans vos placards ?
          <button>Commencez à vendre</button>
        </div>
      </div>
      <div className="container">
        <div className="home-card-wrapper container">
          {data.offers.map((offer) => {
            return (
              <Link className="link" to={`/offer/${offer._id}`} key={offer._id}>
                <div className="card">
                  <div className="card-avatar-username">
                    <img src={offer.owner.account?.avatar?.url} alt="" />

                    <span>{offer.owner.account.username}</span>
                  </div>
                  <div>
                    <img
                      className="card-img"
                      src={offer.product_image.secure_url}
                      alt=""
                    />
                    <div className="card-price-size-brand">
                      <span>{offer.product_price.toFixed(2)} €</span>
                      <span>
                        {offer.product_details[1].TAILLE
                          ? offer.product_details[1].TAILLE
                          : ""}
                      </span>
                      <span>{offer.product_details[0].MARQUE}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
