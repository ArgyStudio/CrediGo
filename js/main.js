

document.getElementById("button-cta").addEventListener('click', () => {
    console.log("click")

    //  --display--
    const overlay = document.getElementById("black-overlay")
    // main.classList.add("hidden")
    overlay.classList.add("active")

    // --wsp--
    const lines = [
        "5491125050882",
        "5491125050972",
        "5491124973143",
        "5491162430169",
        "5491125052261",
        "5491164567789",
        "5491125052196",
        "5491125050729"
    ]
    const lineR = lines[Math.floor(Math.random() * lines.length)]
    const msg = "Hola CrediGo! Quiero mas información..."
    const URL = `https://wa.me/${lineR}?text=${encodeURIComponent(msg)}`
    window.location.href = URL
})