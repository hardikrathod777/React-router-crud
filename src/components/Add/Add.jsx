import React, {  useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import generateUniqueId from 'generate-unique-id';
import { getData } from '../../Helper/helper';
import logo from'../../assets/catchabreak.65b115fe8b8dc3.01177570.png'

function Add() {

    const [inputText, setInputText] = useState({
        id:'',
        fname:'',
        lname:'',
        addr:'',
        phone:'',
        email:'',
        age:'',
        people:''
    });

    let viewData = getData();

    const navigate = useNavigate();

    const handleInput = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        setInputText({ ...inputText, [name]: value });
    }

    const handleSubmit = (e) => {

        e.preventDefault();


        let obj = {
            ...inputText
        }

        obj.id = generateUniqueId({ length: 4 });

        console.log("OBJ", obj);

        viewData = [...viewData, obj];


        setInputText({
            id:'',
            fname:'',
            lname:'',
            addr:'',
            phone:'',
            email:'',
            age:'',
            people:''
        })

        console.log("viewData", viewData);
        localStorage.setItem('myData', JSON.stringify(viewData));
        navigate('/viewData');
    }



    return (
        <>
            <Container className="mt-5 mb-5">
                <div className="row">
                    <div className="col-xxl-12 d-flex justify-content-center">
                        <div className="col-xxl-7">
                            <img src={logo}/>
                        </div>
                    </div>
                    <div className="col-xxl-12">
                        <h3 className="text-center">Hotel Reservation Form</h3>
                        <p className="text-center">Please complete the form below.</p>
                        <p className="text-center mt-4 mb-5">Your registration will be verified prior to your arrival.</p>
                    </div>
                    <div className="col-xxl-12 d-flex justify-content-center">
                        <div className="col-xxl-7">
                            <Form onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="text" placeholder="Enter ID" name='id' value={inputText.id} hidden />
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name" name="fname" value={inputText.fname} onChange={handleInput}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Last Name" name="lname" value={inputText.lname} onChange={handleInput}/>
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="1234 Main St" name="addr" value={inputText.addr} onChange={handleInput}/>
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Phone No.</Form.Label>
                                    <Form.Control type="number" placeholder="99999 99999" name="phone" value={inputText.phone} onChange={handleInput}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email" value={inputText.email} onChange={handleInput}/>
                                    </Form.Group>
                                </Row>
                                
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control type="number" placeholder="20" name="age" value={inputText.age} onChange={handleInput}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Number Of People</Form.Label>
                                    <Form.Control type="number" placeholder="4" name="people" value={inputText.people} onChange={handleInput}/>
                                    </Form.Group>
                                </Row>
                                <div className="d-flex  justify-content-center mt-5">
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Add