

document.getElementById("button-cta").addEventListener('click', () => {
    console.log("click")

    //  --display--
    const overlay = document.getElementById("black-overlay")
    // main.classList.add("hidden")
    overlay.classList.add("active")

    // --wsp--
    const lines = ["5491162696275, 5491168500281, 5491164567789"]
    const lineR = lines[Math.floor(Math.random() * lines.length)]
    const msg = "Hola CrediGo! Quiero mas información..."
    const URL = `https://wa.me/${lineR}?text=${encodeURIComponent(msg)}`
    window.location.href = URL
})