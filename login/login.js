
const form = document.querySelector('#login-form')
const guest_url = 'http://localhost:3000/guests'

form.addEventListener('submit', createUser)

function createUser(event){
    event.preventDefault()

    const formData = new FormData(event.target)
    const username = formData.get('username')
    const party_size = formData.get('party_size')
    const password = formData.get('password') 

    const guest ={
        username,
        party_size,
        password
    }

    fetch (guest_url, {
        method: 'POST',
        headers: { 
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            username: username,
            party_size: party_size,
            password: password
        })
    })

    console.log(username,party_size,password)

 

}
