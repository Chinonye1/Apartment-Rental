import { useParams } from "react-router-dom";

export function ItemDetailsPage(props) {
  const { detailId } = useParams();
  const item = props.ItemArr?.find((element) => {
    return element.id === parseInt(detailId);
  });

  if (!item) {
    return (
      <>
        <p>Item not found.</p>
      </>
    );
  }

  return (
    <>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <div className="detailsGrid">
        <div>
          <img src={item.picture_url} alt="" />
        </div>
        <div>
          <h3>Amenities</h3>
          <div className="details">
            {
              // Accept either an array or a comma-separated string of amenities
              (() => {
                if (Array.isArray(item.amenities)) {
                  return item.amenities.map((amenity, idx) => (
                    <p key={idx}> {amenity}</p>
                  ));
                }

                if (
                  typeof item.amenities === "string" &&
                  item.amenities.trim().length > 0
                ) {
                  return item.amenities
                    .split(",")
                    .map((a) => a.trim())
                    .filter(Boolean)
                    .map((amenity, idx) => <li key={idx}>{amenity}</li>);
                }

                return <li>No amenities listed.</li>;
              })()
            }
          </div>
        </div>
      </div>
    </>
  );
}
