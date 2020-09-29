console.log("getsome")
const guest_url = ('http://localhost:3000/guests')
const form = document.querySelector('form')

form.addEventListener('submit',createUser)

function createUser(event){
    event.prevent.default()

    const formData = new FormData(event.target)
    const username = formdata.get('username')
    const party_size = formdata.get('partysize')
    const password = formdata.get('password')

    fetch(guest_url, {
        method:'Post',
        headers
    }

}
