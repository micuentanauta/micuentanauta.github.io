---
layout: page
title: Contacto
include_in_header: true
theme_color: "#121212"
permalink: /about/contact/
---

## Contacto

¿Tienes dudas, sugerencias o quieres apoyar el proyecto? Aquí encontrarás todo lo necesario para contactar conmigo, seguir mi trabajo, compartir la aplicación y hacer una donación.

## Quién soy

<div class="contactBio">
    <p>{{ site.app_name }} es un proyecto independiente que creo y mantengo yo, <strong>{{ site.your_name }}</strong>, desarrollador desde {{ site.your_city }}. La aplicación nació para resolver un problema cotidiano: gestionar las cuentas Nauta de forma más cómoda, rápida y segura en Windows.</p>
    <p>Cada actualización, cada arreglo y cada nueva funcionalidad que ves aquí se desarrolla y publica de forma abierta, sin costo para ti.</p>
</div>

## Mis redes

Sígueme y mantente al día con las novedades del proyecto:

<div class="contactSocial">
    {% if site.telegram_channel %}
    <a class="socialCard" href="https://t.me/{{ site.telegram_channel }}" target="_blank" rel="noopener noreferrer">
        <svg class="svg-icon" width="1em" height="1em" style="fill:currentColor" aria-hidden="true"><use href="#i-telegram-plane"/></svg>
        <span class="socialCard-name">Canal de Telegram</span>
        <span class="socialCard-handle">t.me/{{ site.telegram_channel }}</span>
    </a>
    {% endif %}
    {% if site.github_username %}
    <a class="socialCard" href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener noreferrer">
        <svg class="svg-icon" width="1em" height="1em" style="fill:currentColor" aria-hidden="true"><use href="#i-github"/></svg>
        <span class="socialCard-name">GitHub</span>
        <span class="socialCard-handle">@{{ site.github_username }}</span>
    </a>
    {% endif %}
    {% if site.email_address %}
    <a class="socialCard" href="mailto:{{ site.email_address }}">
        <svg class="svg-icon" width="1em" height="1em" style="fill:currentColor" aria-hidden="true"><use href="#i-envelope"/></svg>
        <span class="socialCard-name">Correo electrónico</span>
        <span class="socialCard-handle">{{ site.email_address }}</span>
    </a>
    {% endif %}
    {% if site.blog_link %}
    <a class="socialCard" href="{{ site.blog_link }}" target="_blank" rel="noopener noreferrer">
        <svg class="svg-icon" width="1em" height="1em" style="fill:currentColor" aria-hidden="true"><use href="#i-blogger-b"/></svg>
        <span class="socialCard-name">Blog</span>
        <span class="socialCard-handle">{{ site.blog_link }}</span>
    </a>
    {% endif %}
    {% if site.facebook_username %}
    <a class="socialCard" href="https://facebook.com/{{ site.facebook_username }}" target="_blank" rel="noopener noreferrer">
        <svg class="svg-icon" width="1em" height="1em" style="fill:currentColor" aria-hidden="true"><use href="#i-facebook-f"/></svg>
        <span class="socialCard-name">Facebook</span>
        <span class="socialCard-handle">facebook.com/{{ site.facebook_username }}</span>
    </a>
    {% endif %}
    {% if site.instagram_username %}
    <a class="socialCard" href="https://instagram.com/{{ site.instagram_username }}" target="_blank" rel="noopener noreferrer">
        <svg class="svg-icon" width="1em" height="1em" style="fill:currentColor" aria-hidden="true"><use href="#i-instagram"/></svg>
        <span class="socialCard-name">Instagram</span>
        <span class="socialCard-handle">instagram.com/{{ site.instagram_username }}</span>
    </a>
    {% endif %}
    {% if site.twitter_username %}
    <a class="socialCard" href="https://twitter.com/{{ site.twitter_username }}" target="_blank" rel="noopener noreferrer">
        <svg class="svg-icon" width="1em" height="1em" style="fill:currentColor" aria-hidden="true"><use href="#i-twitter"/></svg>
        <span class="socialCard-name">Twitter / X</span>
        <span class="socialCard-handle">twitter.com/{{ site.twitter_username }}</span>
    </a>
    {% endif %}
</div>

## Vías para donar

Si {{ site.app_name }} te ha sido útil, puedes apoyar su desarrollo de cualquiera de estas formas. Cada aporte, por pequeño que sea, ayuda a mantener la aplicación gratuita y en constante mejora.

<div class="donateCards">
    <div class="donateCard">
        <h3>Por saldo</h3>
        <img src="{{ '/assets/movile-qr.png' | relative_url }}" alt="Código QR para donar por saldo" loading="lazy" draggable="false" />
        <p>{{ site.phone_number }}</p>
    </div>
    <div class="donateCard">
        <h3>Por transferencia</h3>
        <img src="{{ '/assets/enzona-qr.png' | relative_url }}" alt="Código QR para donar por transferencia" loading="lazy" draggable="false" />
        <p>{{ site.bank_iban }}</p>
    </div>
</div>

## Grupos de Telegram para compartir

Ayuda a crecer la comunidad compartiendo la aplicación en estos grupos:

<div class="telegramGroups">
    {% for group in site.telegram_groups %}
    <a class="telegramGroup" href="{{ group.url }}" target="_blank" rel="noopener noreferrer">
        <svg class="svg-icon" width="1em" height="1em" style="fill:currentColor" aria-hidden="true"><use href="#i-telegram-plane"/></svg>
        <span>
            <strong>{{ group.name }}</strong>
            {% if group.description %}<span class="telegramGroup-description">{{ group.description }}</span>{% endif %}
        </span>
    </a>
    {% endfor %}
</div>

{% include contact.html %}
