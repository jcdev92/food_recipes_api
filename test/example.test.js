const {it, expect} = require('mocha');
const {assert} = require('chai');
const {getAllUsers} = require("../src/users/users.controllers");

const sum = (a, b) => a + b;

describe('Test of sum function', () => {

    it('should return 12', (done) => {
        const response = sum(8, 4);
        assert.equal(response, 12);
        done();
    });

    it('should return 2', (done) => {
        assert.equal(sum(1, 1), 2);
        done();
    });
    describe('Test user controller', () =>{
        it('It should return all the users', async(done) => {
            try {
                const data = await getAllUsers()
                assert.typeOf(data, 'array')
                done()
            } catch (error) {
                console.log(error)
            }
        })
    });
});

