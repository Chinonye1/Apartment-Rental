export function ItemCardSummary(props) {
    
   
   
    return (
        <> {props.ItemDetails.has_availability === true ? 
            <article className="listing-card">
                <h2>{props.ItemDetails.name}</h2>

                <img src={props.ItemDetails.picture_url} alt="" />

                <h4 className="location">{props.ItemDetails.host_location}</h4>

                <div className="content">
                  <p>{props.ItemDetails.description}</p>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => {
                    props.onDelete(props.ItemDetails.id);
                  }}
                >
                  delete
                </button>
                

                
            </article>
             
             : null}
        
        </>


    )

    
}





