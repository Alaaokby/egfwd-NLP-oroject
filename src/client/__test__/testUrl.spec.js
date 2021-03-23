import { checkURL } from '../js/checkURL'

describe('Test check url functionality', () => {
    test('Testing the checkUrl function defined or not', () => {
        expect(checkURL).toBeDefined()
    })

    test('Testing the checkUrl function return false for invalid url', () => {
        expect(checkURL('okby')).toBeFalsy()
    })

    test('Testing the checkUrl function return true for valid url', () => {
        expect(checkURL('http://www.google.com')).toBeTruthy()
    })
})
