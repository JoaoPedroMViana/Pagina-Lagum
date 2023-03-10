const modal = document.querySelector(".modal");
const botaoModal = document.querySelector(".botaoModal");
const fecharModal = document.querySelector(".fecharModal");
const body = document.querySelector(".corpo")


function alternarModal() {
    modal.classList.toggle("visivel");
}
function alternarHidden() {
    body.classList.toggle("noScroll")
}

botaoModal.addEventListener("click", () => {
    alternarModal();
    alternarHidden();
});

fecharModal.addEventListener("click", () => {
    alternarModal();
    alternarHidden();
});