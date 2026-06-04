import { Link } from "react-router-dom";

export function ItemCardSummary(props) {
  return (
    <>
      {" "}
      {props.ItemDetails.has_availability === true ? (
        <article className="listing-card">
          <div className="listing-image">
            <img
              src={props.ItemDetails.picture_url}
              alt={props.ItemDetails.name}
            />
          </div>

          <div className="listing-body">
            <h2>{props.ItemDetails.name}</h2>

            <h4 className="location">{props.ItemDetails.host_location}</h4>

            <p className="price">{props.ItemDetails.price}</p>

            <p className="meta">
              {props.ItemDetails.property_type} — {props.ItemDetails.bedrooms}{" "}
              bd · {props.ItemDetails.bathrooms} ba
            </p>

            <p className="review">
              Review: {props.ItemDetails.review_scores_value} ★
            </p>

            <div className="listing-actions">
              <button
                className="delete-btn"
                onClick={() => {
                  props.onDelete(props.ItemDetails.id);
                }}
              >
                Delete
              </button>

              <Link to={`/details/${props.ItemDetails.id}`}>
                <button className="secondary">More Details</button>
              </Link>

              <Link to={`/edit/${props.ItemDetails.id}`}>
                <button className="secondary">Edit</button>
              </Link>
            </div>
          </div>
        </article>
      ) : null}
    </>
  );
}
