import React from 'react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';
import {User, mapStateToProps as userMPTP} from '../src/components/User/User.jsx';


const userProps =
    {
        firstName: 'firstName',
        lastName: 'lastName',
        name: 'name',
        prof: 'prof',
        hobbies: ['h1,h2'],
        skills: ['s1,s2']
    };
const storeState = {
    users: {
        users: [{
            id: '1',
            firstName: 'firstName1',
            lastName: 'lastName1',
            name: 'name1',
            prof: 'prof1',
            hobbies: ['h1,h2'],
            skills: ['s1,s2']
        },
            {
                id: '2',
                firstName: 'firstName2',
                lastName: 'lastName2',
                name: 'name2',
                prof: 'prof2',
                hobbies: ['h1,h2'],
                skills: ['s1,s2']
            }]
    }
};
describe('User test', () => {
    it('Snapshot test', () => {
        const wrapper = shallow(<User {...userProps}/>);
        expect(wrapper).to.matchSnapshot();
    });
    it('Map state to props test', () => {
        const ownProps = {
            match: {
                params: {
                    id: '1'
                }
            }
        };
        const user = userMPTP(storeState, ownProps);
        expect(user).to.be.equal(storeState.users.users[0])
    })
});