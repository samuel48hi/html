import"./Mobile.css"

// import pict1 from "../assets/download.jpeg"
function Mobile(props){
    return(
        <div className="Box">
            <img src={props.image}/>
            <h1 className="font">mobile phones:{props.name}</h1> 
            <h2>amount:{props.amount}</h2>
            <h3>discount:{props.discount}</h3>
            
        </div>
        
    )

}
export default Mobile;