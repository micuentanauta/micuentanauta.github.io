---
layout: page
title: Contacto
include_in_header: false
theme_color: "#121212"
---

## Contacto

¿Tienes dudas, sugerencias o necesitas soporte? Escríbenos y te responderemos lo antes posible.

<form id="contactForm" class="contact-form" action="{{ site.contact_form }}" method="POST">
    <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" id="name" name="name" required autocomplete="name" placeholder="Tu nombre">
    </div>

    <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" name="email" required autocomplete="email" placeholder="tu@correo.com">
    </div>

    <div class="form-group">
        <label for="subject">Asunto</label>
        <select id="subject" name="subject" required>
            <option value="">Selecciona un tema</option>
            <option value="soporte">Soporte técnico</option>
            <option value="sugerencia">Sugerencia</option>
            <option value="colaboracion">Colaboración</option>
            <option value="otro">Otro</option>
        </select>
    </div>

    <div class="form-group">
        <label for="message">Mensaje</label>
        <textarea id="message" name="message" rows="5" required placeholder="Cuéntanos en qué podemos ayudarte..."></textarea>
    </div>

    <button type="submit" class="submit-btn">
        <svg class="svg-icon" width="1em" height="1em" style="fill:currentColor" aria-hidden="true"><use href="#i-send"/></svg>
        Enviar mensaje
    </button>

    <p class="form-note">Al enviar aceptas nuestra <a href="{{ '/privacypolicy' | relative_url }}">política de privacidad</a>.</p>
</form>

<div id="formStatus" class="form-status" aria-live="polite"></div>

<script>
(function () {
    var form = document.getElementById('contactForm');
    var status = document.getElementById('formStatus');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var submitBtn = form.querySelector('.submit-btn');
        var originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<svg class="svg-icon spinner" width="1em" height="1em" style="fill:currentColor; animation: spin 1s linear infinite;" aria-hidden="true"><use href="#i-loader"/></svg> Enviando...';
        status.textContent = '';
        status.className = 'form-status';

        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        }).then(function (response) {
            if (response.ok) {
                status.textContent = '¡Mensaje enviado! Te responderemos pronto.';
                status.className = 'form-status success';
                form.reset();
            } else {
                response.json().then(function (data) {
                    status.textContent = data.errors ? data.errors.map(function (e) { return e.message; }).join(', ') : 'Error al enviar. Inténtalo de nuevo.';
                    status.className = 'form-status error';
                });
            }
        }).catch(function () {
            status.textContent = 'Error de conexión. Verifica tu internet e inténtalo de nuevo.';
            status.className = 'form-status error';
        }).finally(function () {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        });
    });
})();
</script>

<style>
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
</script>