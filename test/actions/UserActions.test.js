import React from 'react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import moxios from 'moxios'
import {fetchUsers, SET_USERS} from '../../src/actions/UserActions'


const response = [{
    id: 1,
    firstName: "John",
    lastName: "Doe",
    name: "JohnnyD",
    about: "Nice guy",
    hobby: "Likes drinking wine",
    skills: ["html", "javascript", "redux"],
    active: false
}, {
    id: 2,
    firstName: "Mary",
    lastName: "Moe",
    name: "BloodyMary",
    about: "Cute girl",
    hobby: "Likes playing xbox whole days long",
    skills: ["Fortran", "Lua", "R#"],
    active: false
}, {
    id: 3,
    firstName: "Peter",
    lastName: "Griffin",
    name: "JustPeter",
    about: "Awesome Developer",
    hobby: "He is the author of React.js",
    skills: ["Lisp", "Om", "JS"],
    active: true
}];

describe('Users action test', () => {
    beforeEach(function () {
        moxios.install()
    });

    afterEach(function () {
        moxios.uninstall()
    });
    it('Fetch test', done => {
        const spyDispatch = sinon.spy();
        fetchUsers()(spyDispatch);

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response
            }).then(function () {
                const action = spyDispatch.args[0][0];
                expect(action.type).to.be.equal(SET_USERS);
                expect(action.users).to.be.equal(response);
                done()
            })
        });
    });
});