const GUEST_URL = 'http://localhost:3000/reservations'
const form = document.querySelector('form')

form.addEventListener('submit', createReservation)
getReservations()

function createReservation(event){
    event.preventDefault()

    const formData = new FormData(event.target)
    const guest = formData.get('guest')
    const room = formData.get('room')
    const checkin_date = formData.get('checkin_data')
    const checkout_date = formData.get('checkout_date')

    fetch(GUEST_URL, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/JSON'
        },
        body:JSON.stringify({guest,room,checkin_date,checkout_date})
    }).then(response => response.json())
    .then(console.log)
}

function getReservations(){
    fetch(GUEST_URL)
    .then(response => response.json())
    .then(displayReservations)
}
function displayReservations(reservations) {
    const ReservationContainer = document.querySelector('#reservations')

    reservations.forEach(reservation => {
        const card = document.createElement('div')
        const guestName = document.createElement('p')
        const roomName = document.createElement('p')
        const price = document.createElement('p')
        const checkin = document.createElement('p')
        const checkout = document.createElement('p')

        card.className = 'card'
        guestName.innerText = reservation.guest.username
        roomName.innerText = reservation.room.name
        price.innerText = reservation.room.price
        checkin.innerText = reservation.checkin_date
        checkout.innerText = reservation.checkout_date


        card.append(guestName,roomName,price,checkin,checkout)
        ReservationContainer.appendChild(card)


    })
}
