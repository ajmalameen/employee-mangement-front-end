import React from 'react';
import './Edit.css'
import {Card,Form,Row,Button} from 'react-bootstrap'
import Select from 'react-select'



function Edit() {

  const option=[
    {value:'Active',label:'Active'},
    {value:'InActive',label:'InActive'},
  
  ]
  
    return (
      <>
      <div className="container mt-5">
        <h2 className="text-center mt-3">Update Employee Details</h2>
        <Card className='shadow mt-3 p-3'>
          <div className="text-center">
        <img className='border p-1 rounded-circle' width={'50px'} height={'50px'} src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
        </div>
  <Form>
  <Row>
  <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name='fname' placeholder="First Name" />
         
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name='lname' placeholder="Last Name" />
         
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="Email" name='email' placeholder="Email Address" />
         
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicmobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="text" name='mobile'  placeholder="Mobile" />
         
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicgender">
          <Form.Label>Select Gender</Form.Label>
          <Form.Check
              type={"radio"}
              label={"Male"}
              name='gender'
              value={'male'}
             
            />
               <Form.Check
              type={"radio"}
              label={"Female"}
              name='gender'
              value={'female'}
             
            />
         
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicStatus">
          <Form.Label>Select Employee status</Form.Label>
          <Select options={option} ></Select>
         
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicpic">
          <Form.Label>Choose Profile picture</Form.Label>
          <Form.Control type="file" name='user_profile'  />
         
        </Form.Group>
  
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicLoc">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" name='location'  placeholder='Location' />
         
        </Form.Group>
  
        <Button className='mt-3'  variant='primary' type='submit' >Submit</Button>
  </Row>
  
  
  </Form>
        </Card>
      </div>
      </>
    )
  }
 


export default Edit