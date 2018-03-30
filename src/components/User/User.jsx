import React from 'react';
import {connect} from 'react-redux';
import {Row, Col, Label} from 'react-bootstrap';
import PropsTypes from 'prop-types';
import './User.css';

export const User = props => {
    const {firstName, lastName, name, prof, hobbies, skills} = props;
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
};

User.propTypes = {
    firstName: PropsTypes.string,
    lastName: PropsTypes.string,
    name: PropsTypes.string,
    prof: PropsTypes.string,
    hobbies: PropsTypes.array,
    skills: PropsTypes.array
};
export const mapStateToProps = (state, ownProps) => state.users.users.find(user => user.id === ownProps.match.params.id);

export default connect(mapStateToProps)(User);