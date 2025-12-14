/**
 * Untuk membuat link bisa dicopy
 */

const actionLink = document.querySelectorAll(".link-card .link-action");

actionLink.forEach((action) => {
   action.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(action.parentElement.getAttribute("href"));

/**
 * Untuk memunculkan toast notification
 */

    document.getElementById("toast").innerHTML = `
        <div class="toast-container">
            <p>✅ Link berhasil disalin!</p>
        </div>   
    `;

/**
 * Untuk menghilangkan toast notification
 */

    setTimeout(() => {
        document.querySelector("#toast .toast-container").classList.add("toast-gone")
    }, 300)

    setTimeout(() => {
        document.querySelector("#toast .toast-container").remove()
    }, 2000);

   });
});

/**
 * Untuk ganti icon sosmed saat hover
 */

document.querySelectorAll(".sosmed i").forEach((sosmed) => {
    sosmed.addEventListener("mouseenter", (e) => {
        sosmed.classList.remove("ph");
        sosmed.classList.add("ph-fill");
    })

    sosmed.addEventListener("mouseleave", (e) => {
        sosmed.classList.remove("ph-fill");
        sosmed.classList.add("ph");
    })

});

/**
 * Animasi text bergeral saat scroll
 */

document.addEventListener("scroll", (e) => {
    document.querySelector(".bg-animation-text").style.transform = `translateX(${window.scrollY / 5}px)`;
});