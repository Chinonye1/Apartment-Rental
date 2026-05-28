import { useParams } from "react-router-dom"

export function ItemDetailsPage(props) {
     const {detailId} = useParams()
     const item = props.ItemArr?.find((element)=>{
         return element.id === parseInt(detailId)
     })





    if (!item) {
        return <><p>Item not found.</p></>
    }

    return (
        <>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <h3>Amenities</h3>
            <ul>
                {
                    // Accept either an array or a comma-separated string of amenities
                    (() => {
                        if (Array.isArray(item.amenities)) {
                            return item.amenities.map((amenity, idx) => (
                                <li key={idx}>{amenity}</li>
                            ));
                        }

                        if (typeof item.amenities === "string" && item.amenities.trim().length > 0) {
                            return item.amenities
                                .split(',')
                                .map((a) => a.trim())
                                .filter(Boolean)
                                .map((amenity, idx) => <li key={idx}>{amenity}</li>);
                        }

                        return <li>No amenities listed.</li>;
                    })()
                }
            </ul>
        </>
    )

}