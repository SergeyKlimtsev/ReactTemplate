import React from 'react'
import {Table, Row, Col, Form, ControlLabel, FormControl, Checkbox} from 'react-bootstrap';
import './Users.css';

class Users extends React.Component {
    render() {
        return <div>
            <Row>
                <Form inline className="search">
                    <ControlLabel>Name</ControlLabel>{' '}
                    <FormControl type="text" placeholder="Jane Doe"/>
                </Form>
            </Row>
            <Row>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Active</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td><Checkbox checked/></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td><Checkbox checked/></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        <td><Checkbox checked/></td>
                    </tr>
                    </tbody>
                </Table>
            </Row>
        </div>
    }
}

export default Users;