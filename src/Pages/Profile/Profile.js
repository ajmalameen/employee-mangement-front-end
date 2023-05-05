import React from 'react'
import './Profile.css'
import { Card, Row } from 'react-bootstrap'



function Profile() {
  return (
    <>
    
    <div className="container">
      <Card className='shadow col-lg-6 mx-auto mt-5'>

        <Card.Body>
           <Row>
            <div className="col">
              <div className="profile_img p-1 d-flex justify-content-center">
                <img className='border p-1 rounded-circle' width={'200px'} height={'200px'} src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
              </div>
            </div>
           </Row>

           <div className="text-center mt-3">
            <h3>Ajmal</h3>
            <h4><i className='fa-solid fa-envelope'></i> <span>ajml@gmail.com</span> </h4>
            <h4><i className='fa-solid fa-mobile'></i> <span>7012535190</span> </h4>
            <h4><i className='fa-solid fa-venus-mars'></i> <span>Male</span> </h4>
            <h4><i className='fa-solid fa-location-dot'></i> <span>Calicut</span> </h4>
            <h4><i className='fa-solid fa-chart-line'></i> <span>Active</span> </h4>





           </div>



        </Card.Body>

      </Card>
      
    </div>
    
    </>
  )
}

export default Profile