// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
import 'babel-polyfill'
import { handleSubmit } from '../js/formHandler'

describe('Client Test', () => {
    test('function is defined or not', () => {
        expect(handleSubmit).toBeDefined()
    })
})
