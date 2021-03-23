const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

export const handleSubmit = async () => {
    const urlInput = document.getElementById('basic-url')
    const url = urlInput.value
    if (checkURL(url)) {
        console.log('url is valid')
        post('http://localhost:8081/add-url', { url }).then((data) => {
            updateUI(data)
        })
    } else {
        alert('Invalid URL')
    }
}
function updateUI(data) {
    document.getElementById('score_tag').textContent = data.score_tag
    document.getElementById('agreement').textContent = data.agreement
    document.getElementById('subjectivity').textContent = data.subjectivity
    document.getElementById('confidence').textContent = data.confidence
    document.getElementById('irony').textContent = data.irony
    document.getElementById('text').textContent = data.sentence_list[0].text
}

import { checkURL } from './checkURL'
