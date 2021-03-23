import { handleSubmit } from './js/formHandler'

import './styles/style.scss'

window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        handleSubmit()
    })
})
