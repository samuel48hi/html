import Mobile from "./Mobile/Mobile";
import pict1 from "./assets/download.jpg";
import pict2 from "./assets/download.jpg";
import pict3 from "./assets/eagle.jpg";
import pict4 from "./assets/download.jpg"
import {useState} from "react";
function App(){
    
  const [inputvalue,updatevalue]=useState("name?");
    const detail=(event)=>{
      updatevalue(event.target.value);

}
  return (
<div> 
  <Mobile  image={pict1} name="vivo" amount="40,000" discount="23%"/>
  <Mobile  image={pict2} name="nokia" amount="60,000" discount="43%"/> 
  <Mobile  image={pict3} name="samsung" amount="45,000" discount="13%"/> 
  <Mobile  image={pict4} name="realme" amount="30,000" discount="23%"/>
  {<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> }
<h1>input name:{inputvalue}</h1>
<input type="text" onChange={detail}/>
   </div>

  )
  
}

export default App;



