const placeOrders = async(event) => {
    event.preventDefault();

    const exColor = document.querySelector('input[name="color-choice"]:checked').value
    const intColor = document.querySelector('input[name="color-choice"]:checked').value
    const wheels = document.querySelector('input[name="wheels"]:checked').value

    console.log(exColor, intColor, wheels)
}


document.querySelector('#place-order').addEventListener('submit', placeOrders);