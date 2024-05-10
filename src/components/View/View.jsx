import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { getData } from '../../Helper/helper';
import custom from'../../assets/No face mask no entry-bro.svg'

function View() {

    const [viewData, setViewData] = useState(getData());
    const navigate = useNavigate();

    const handleDelete = (id) => {

        let datas = getData();
        let deletedData = datas.filter((data) => {

            return id !== data.id;
        })
        setViewData(deletedData);

        localStorage.setItem("myData", JSON.stringify(deletedData));


    }


    const handleEdit = (id) => {

        let datas = viewData;

        let singleRecord = datas.filter((data) => {

            return data.id == id;

        })

        navigate('/editData', { state: singleRecord[0] });




    }


    return (
        <>
        {
            viewData.length > 0 ?
            <Container style={{marginTop:'50px'}}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Phone No.</th>
                            <th>E-mail</th>
                            <th>Age</th>
                            <th>Number Of People</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            viewData.map((data) => {

                                return (
                                    <tr key={data.id}>
                                        <td>
                                            {
                                                data.id
                                            }
                                        </td>
                                        <td>
                                            {
                                                data.fname
                                            }
                                        </td>
                                        <td>
                                            {
                                                data.lname
                                            }
                                        </td>
                                        <td>
                                            {
                                                data.addr
                                            }
                                        </td>
                                        <td>
                                            {
                                                data.phone
                                            }
                                        </td>
                                        <td>
                                            {
                                                data.email
                                            }
                                        </td>
                                        <td>
                                            {
                                                data.age
                                            }
                                        </td>
                                        <td>
                                            {
                                                data.people
                                            }
                                        </td>
                                        <td>
                                            <Button style={{marginRight:'20px',marginLeft:'50px'}} variant='danger' onClick={() => handleDelete(data.id)}>Delete</Button>
                                            
                                            <Button variant='primary' onClick={() => handleEdit(data.id)}>Edit</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
            :
            <Container className='mt-5'>
            <div className='row'>
                <div className='col-xxl-12 d-flex justify-content-center'>
                    <h3>No Customer Today.</h3>
                </div>
                <div className='col-xxl-12 d-flex justify-content-center'>
                    <div className='col-xxl-4'>
                        <img src={custom} />
                    </div>
                </div>
            </div>
        </Container>
        }
        </>
    )
}

export default View