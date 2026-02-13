function openCaptchaModal() {
    document.getElementById('captchaModal').style.display = 'block';
}

function toggleSelect(img) {
    img.classList.toggle('selected');
}

function verifyCaptcha() {
    // Aquí no ocupamos validar si eligió las correctas, solo queremos que pase
    document.getElementById('captchaModal').style.display = 'none';
const checkBot = document.getElementById('not-a-robot');
    if(checkBot) {
        checkBot.checked = true;
        checkBot.disabled = true;
    }

    // 3. Redirección inmediata a la página de las flores
    // Asegurate de que el archivo se llame exactamente flower.html
    window.location.href = "flowers.html";
    
    // Mostramos el botón de "Click Aquí" que tenías oculto o deshabilitado
    document.querySelector('.button').style.display = 'block';
    alert("¡Verificación completada! Eres mi persona favorita :)");
}