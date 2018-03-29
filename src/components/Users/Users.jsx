import React from 'react'
import {Table, Row, Col, Form, ControlLabel, FormControl, Checkbox, Button} from 'react-bootstrap';
import PropsTypes from 'prop-types';
import {setSearch, enableDisableUser} from '../../actions/UserActions';
import {searchInLines} from '../../utils/SearchUtils'
import {connect} from 'react-redux';

import './Users.css';


class Users extends React.Component {
    constructor(props) {
        super(props);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onChangeActive = this.onChangeActive.bind(this);
    }

    onSearchChange(e) {
        const {value} = e.target;
        this.props.setSearch(value);
    }

    onChangeActive(userId, e) {
        this.props.enableDisableUser(userId, e.target.checked);
    }

    render() {
        const {search, users} = this.props;
        return <div>
            <Row>
                <Form inline className="search">
                    <ControlLabel>Name</ControlLabel>{' '}
                    <FormControl value={search} onChange={this.onSearchChange} type="text" placeholder="search"/>
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
                    {users.map(user => <tr key={'user_' + user.id}>
                        <td>{user.id}</td>
                        <td><Button bsStyle="link" href={`#user/${user.id}`}>{user.firstName}</Button></td>
                        <td>{user.lastName}</td>
                        <td>{user.name}</td>
                        <td><Checkbox checked={user.active}
                                      onChange={e => this.onChangeActive(user.id, e)}/></td>
                    </tr>)}
                    </tbody>
                </Table>
            </Row>
        </div>
    }
}

Users.propTypes = {
    search: PropsTypes.string,
    users: PropsTypes.array
};

const mapStateToProps = state => {
    const {users: usersRaw, search} = state.users;
    const users = usersRaw.filter(user => !search ||
        searchInLines(search, user.firstName, user.lastName, user.name)
    );
    return {
        search,
        users
    }
};


export default connect(mapStateToProps, {setSearch, enableDisableUser})(Users);