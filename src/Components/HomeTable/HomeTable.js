import React from 'react'
import './HomeTable.css'

import {Row,Card,Table,Dropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function HomeTable() {
  return (
    <>
            <div className="container mt-5">
                <Row>
                <div className="col">
                    <Card className="shadow">
                             <Table className='align-item-center' responsive='sm'>
                             <thead className='thead-dark'>
                                <tr className='table-primary'>
                                        <th>ID</th>
                                       <th>Full Name</th>
                                      <th>Email</th>
                                         <th>Gender</th>
                                         <th>Status</th>
                                         <th>Profile</th>
                                         <th>Action</th>
                                        </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Ajmal</td>
                                                    <td>ajmal@gmail.com</td>
                                                    <td>M</td>
                                                    <td>  
                                                    <Dropdown>
                              <Dropdown.Toggle  id="dropdown-basic">
                                     Active
                                        </Dropdown.Toggle>

                                  <Dropdown.Menu>
                                   <Dropdown.Item >Action</Dropdown.Item>
                                   <Dropdown.Item >InAction</Dropdown.Item>                           
                                   </Dropdown.Menu>

                                               </Dropdown>
                                                    </td>
                                                    <td>
                                                        <img width={'50px'} height={'50px'} src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
                                                    </td>
                                                    <td>  
                                                    <Dropdown>
                              <Dropdown.Toggle  variant='light' id="dropdown-1">
                              <i class="fa-solid fa-ellipsis-vertical"></i>
                                        </Dropdown.Toggle>

                                  <Dropdown.Menu>
                                   <Dropdown.Item > 
                                    <Link to={'/profile/1'} className='text-decoration-none' > <i className="fa-solid fa-eye me-2 fs-5"></i>  <span className='fs-5 text-dark'>View</span> </Link>
                                   </Dropdown.Item>
                                   <Dropdown.Item >   
                                   <Link to={'/edit/1'} className='text-decoration-none' > <i className="fa-solid fa-pen me-2 fs-5"></i>  <span className='fs-5 text-dark'>Edit</span> </Link>

                                   </Dropdown.Item>
                                   <Dropdown.Item >
                                    <i className="fa-solid fa-trash me-2 fs-5"></i>
                                    <span className='fs-5 text-dark'>Delete</span>
                                    </Dropdown.Item>                           

                                   </Dropdown.Menu>

                                               </Dropdown>
                                                    </td>
                                                </tr>
                                            </tbody>

                             </Table>
                    </Card>

                </div>
                </Row>
            </div>
    </>
  )
}

export default HomeTable