import React, { useState, useEffect } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addUser, editUser } from '../JS/actions/actionUser'

const AddUser = () => {

    const [newUser, setNewUser] = useState({
        name: "", email: "", phone: ""
    })

    const userId = useSelector(state => state.userId)
    const isEdit = useSelector(state => state.isEdit)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isEdit) {
            setNewUser(userId)
        } else {
            setNewUser({ name: "", email: "", phone: "" })
        }
    }, [userId, isEdit])



    const handelChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value })
    }


    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Card
                style={{
                    width: "22rem",
                    height: "25rem",
                    marginRight: "30px",
                    marginBottom: "20px",
                    marginTop: "30px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "transparent",
                    boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)",
                }}
            >
                <Card.Header
                    style={{
                        borderTopRightRadius: "8px",
                        borderTopLeftRadius: "8px",
                        backgroundColor: "#277fa5",
                        color: "white",
                    }}
                >
                    {isEdit ? "Edit User" : "Add New User"}
                </Card.Header>

                <Card.Body>
                    <Card.Text>
                        <Form>
                            <Form.Group controlId="formBasicEmail" style={{ textAlign: "left" }}>
                                <Form.Label >name :</Form.Label>
                                <Form.Control type="text" name="name" value={newUser.name} onChange={handelChange} placeholder="Enter your name" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail" style={{ textAlign: "left" }}>
                                <Form.Label >email :</Form.Label>
                                <Form.Control type="email" name="email" value={newUser.email} onChange={handelChange} placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail" style={{ textAlign: "left" }}>
                                <Form.Label >phone :</Form.Label>
                                <Form.Control type="text" name="phone" value={newUser.phone} onChange={handelChange} placeholder="Enter your phone" />
                            </Form.Group>
                        </Form>
                    </Card.Text>
                </Card.Body>
                <div className="buttons">
                    <Link to='/Users_List'>
                        <Button variant="outline-primary edit-button" onClick={() => { isEdit ? dispatch(editUser(newUser._id, newUser)) : dispatch(addUser(newUser)) }}>
                            {isEdit ? "Save" : "Add"}
                        </Button>
                    </Link>
                    <Button variant="outline-danger edit-button">Cancel</Button>
                </div>
            </Card>
        </div>

    )
}

export default AddUser