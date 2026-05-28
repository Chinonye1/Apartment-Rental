export function ItemCardSummary(props) {
    
   
   
    return (
        <> {props.ItemDetails.has_availability === true ? 
            <div>
                <h2>{props.ItemDetails.name}</h2>

                <img src={props.ItemDetails.picture_url} alt="" />

                <h4>{props.ItemDetails.host_location}</h4>

                <div className="content">
                  <p>{props.ItemDetails.description}</p>
                </div>
                

                
            </div>
             
             : null}
        
        </>


    )

    
}





{/* <div>
            {element.has_availability === true ? (
              <div>
                <h2>{element.name}</h2>

                <img src={element.picture_url} alt="" />

                <h4>{element.host_location}</h4>

                <div className="content">
                  <p>{element.description}</p>
                </div>
                <button
                  onClick={() => {
                    handleDeleteItem(element.id);
                  }}
                >
                  delete
                </button>
              </div>
            ) : null}
          </div> */}