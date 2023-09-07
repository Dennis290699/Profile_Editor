// JavaScript utilizando el DOM
const userImage = document.querySelector(".user-image");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");
const uploadLabel = document.getElementById("uploadLabel");
const uploadImage = document.getElementById("uploadImage");
const saveButton = document.getElementById("saveButton");
const changeImageButton = document.getElementById("changeImageButton");

// Función para mostrar el modal con la imagen del usuario al hacer clic en "Cambiar Imagen"
changeImageButton.addEventListener("click", () => {
    modalImage.src = userImage.src;
    imageModal.style.display = "block";
});

// Función para cerrar el modal de cambio de imagen
closeModal.addEventListener("click", () => {
    imageModal.style.display = "none";
});

// Función para abrir el diálogo de selección de archivo al hacer clic en "Seleccionar Imagen"
uploadLabel.addEventListener("click", (event) => {
    event.preventDefault(); // Previene la acción predeterminada del clic en el enlace
    uploadImage.click();
});

// Función para manejar la selección de archivo
uploadImage.addEventListener("change", (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
        modalImage.src = URL.createObjectURL(selectedFile);
    }
    uploadImage.value = ""; // Limpia el valor del input para evitar duplicaciones
});

// Función para guardar la imagen seleccionada al hacer clic en "Guardar"
saveButton.addEventListener("click", () => {
    const imageUrl = modalImage.src;
    userImage.src = imageUrl;
    imageModal.style.display = "none";
});


const changeNameButton = document.getElementById("changeNameButton");
const nameModal = document.getElementById("nameModal");
const closeNameModal = document.getElementById("closeNameModal");
const newUsernameInput = document.getElementById("newUsername");
const saveNameButton = document.getElementById("saveNameButton");
const userNameElement = document.querySelector(".user-name");

// Abre el modal para cambiar el nombre de usuario
changeNameButton.addEventListener("click", () => {
    newUsernameInput.value = ""; // Limpia el campo de entrada de nombre de usuario
    nameModal.style.display = "block";
});

// Cierra el modal de cambio de nombre de usuario
closeNameModal.addEventListener("click", () => {
    nameModal.style.display = "none";
});

// Guarda el nuevo nombre de usuario
saveNameButton.addEventListener("click", () => {
    const newUsername = newUsernameInput.value;
    
    // Verifica si se ingresó un nombre de usuario válido (no está vacío)
    if (newUsername.trim() !== "") {
        userNameElement.textContent = newUsername;
        nameModal.style.display = "none";
    } else {
        alert("Por favor, ingrese un nombre de usuario válido.");
    }
});
