import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Carmen from "../Images/Carmen_Kesho_HighRes_CropSmall.jpg";

function Bio () {
    return(
      <div className='Bio'>     
        
        <Card>
          <Card.Img variant="top" class="images1" src={Carmen} />
            <Card.Body>
              <Card.Title>Carmen Kesho</Card.Title>
                <Card.Text><h6>Carmen Kesho is a full-time Technical Project Manager and is currently enrolled in the Kennesaw State/Digital Crafts part-time FullStack Bootcamp. After completion in December, she plans to seek a more hands on technical role.
                In her free time, she enjoys having adventures with her family and watching Cocomelon with her husband and two year old son.  </h6>
                <a href="https://www.linkedin.com/in/carmenvkesho/">LinkedIn</a>
                <br></br>
                <a href="https://github.com/CVKesho82?tab=repositories">Github</a>
                   </Card.Text>
            </Card.Body>
        </Card>
        
        
      </div>
    );  
}
export default Bio