import React, { useContext, useState, useEffect, lazy, Suspense } from "react";
import { Context } from "../../utils/context";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS
import "./SingleProduct.scss";

const RelatedProducts = lazy(() => import("./RelatedProducts/RelatedProducts"));

const SingleProduct = () => {
  const quantity = 1;
  const { id } = useParams();
  const { handleAddToCart } = useContext(Context);
  const { data } = useFetch(`/api/products/${id}`);
  const [loading, setLoading] = useState(true);
  const [showRelated, setShowRelated] = useState(false);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      const relatedSection = document.getElementById("related-products");
      if (relatedSection) {
        const rect = relatedSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setShowRelated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const notify = () => {
    toast.success("Product added to cart!", {
      position: "top-right", // Corrected position value
      autoClose: 2000,
    });
  };

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            {loading ? (
              <div className="skeleton skeleton-image"></div>
            ) : (
              <img src={data?.image} alt={data?.product_name} />
            )}
          </div>
          <div className="right">
            {loading ? (
              <>
                <div className="skeleton skeleton-name"></div>
                <div className="skeleton skeleton-price"></div>
                <div className="skeleton skeleton-desc"></div>
                <div className="skeleton skeleton-cart-buttons"></div>
                <div className="skeleton skeleton-divider"></div>
                <div className="skeleton skeleton-info"></div>
              </>
            ) : (
              <>
                <span className="name">{data?.product_name}</span>
                <span className="price">&#8377;{data?.price}</span>
                <span className="desc">{data?.desc}</span>

                <div className="cart-buttons">
                  <button
                    className="add-to-cart-button"
                    onClick={() => {
                      handleAddToCart(data, quantity);
                      notify(); // Trigger the toast
                    }}
                  >
                    <FaCartPlus size={20} />
                    ADD TO CART
                  </button>
                </div>

                <span className="divider" />
                <div className="info-item">
                  <span className="text-bold">
                    Category: <span>{data?.category}</span>
                  </span>
                  <span className="text-bold">
                    Share:
                    <span className="social-icons">
                      <FaFacebookF size={16} />
                      <FaTwitter size={16} />
                      <FaInstagram size={16} />
                      <FaLinkedinIn size={16} />
                      <FaPinterest size={16} />
                    </span>
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
        <div id="related-products">
          {showRelated && (
            <Suspense
              fallback={
                <div className="related-products-loading">
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className="skeleton-product">
                      <div className="skeleton skeleton-image"></div>
                      <div className="skeleton-details">
                        <div className="skeleton skeleton-name"></div>
                        <div className="skeleton skeleton-price"></div>
                      </div>
                    </div>
                  ))}
                </div>
              }
            >
              <RelatedProducts productId={id} categoryName={data?.category} />
            </Suspense>
          )}
        </div>
      </div>
      <ToastContainer />{" "}
      {/* ToastContainer must be included in the component */}
    </div>
  );
};

export default SingleProduct;
