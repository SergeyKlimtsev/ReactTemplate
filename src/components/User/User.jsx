import React from 'react';
import {connect} from 'react-redux';
import {Row, Col, Label} from 'react-bootstrap';
import './User.css';

class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {firstName, lastName, name, prof, hobbies, skills} = this.props;
        return <div>
            <Row>
                <Col mdOffset={2} md={8} lgOffset={3} lg={6}>
                    <Col sm={12}>
                        <Col xs={12} sm={8}>
                            <h2>{`${firstName} ${lastName}`}</h2>
                            <p><strong>About: </strong>{prof}</p>
                            <p><strong>Hobbies: </strong>{hobbies.join(', ')}</p>
                            <p><strong>Skills: </strong>{skills.map(skill =>
                                <span className="hobbie">
                                    <Label bsStyle="default">{skill}</Label>
                                </span>
                            )}
                            </p>
                        </Col>
                    </Col>
                </Col>

            </Row>
        </div>
    }
}

const mapStateToProps = (state, ownProps) => state.users.users.find(user => user.id === ownProps.match.params.id);

export default connect(mapStateToProps)(User);