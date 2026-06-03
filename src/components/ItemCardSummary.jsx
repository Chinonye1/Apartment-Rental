import { Link } from "react-router-dom";

export function ItemCardSummary(props) {
  return (
    <>
      {" "}
      {props.ItemDetails.has_availability === true ? (
        <article className="listing-card">
          <h2>{props.ItemDetails.name}</h2>

          <img src={props.ItemDetails.picture_url} alt="" />

          <h4 className="location">{props.ItemDetails.host_location}</h4>

          <h4>{props.ItemDetails.price}</h4>
          <h5>
            Only{props.ItemDetails.host_listings_count} left at this price on
            Holiday Comfort Homes
          </h5>
          <h4>
            {props.ItemDetails.property_type}- {props.ItemDetails.bedrooms}{" "}
            bedroom. {props.ItemDetails.bathrooms} bathroom
          </h4>
          <h5></h5>

          <h5>Review:{props.ItemDetails.review_scores_value} Star</h5>

          <button
            className="delete-btn"
            onClick={() => {
              props.onDelete(props.ItemDetails.id);
            }}
          >
            delete
          </button>

          <Link to={`/details/${props.ItemDetails.id}`}>
            <button>More Details</button>
          </Link>

          <Link to={`/edit/${props.ItemDetails.id}`}>
            <button>Edit</button>
          </Link>
        </article>
      ) : null}
    </>
  );
}
