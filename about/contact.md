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
    <p><strong>Carlos Barnés</strong> es un joven investigador y desarrollador, recién graduado de Ingeniería Informática como segunda carrera, con más de 10 años de experiencia en el mundo de la tecnología y el diseño gráfico. Es quien está detrás de {{ site.app_name }}, que desarrolla de forma abierta y gratuita.</p>
    <p>Durante su trayectoria ha recibido algunos reconocimientos, como el premio CITMA National Young Researcher Award, ser Caribbean Regional Finalist en el ICPC 2023 y 2024, y el premio nacional científico estudiantil de computación (CNCEC).</p>
</div>

## Mis redes

Sígueme y mantente al día con las novedades del proyecto:

<div class="contactSocial">
    {% if site.github_username %}
    <a class="socialCard" href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener noreferrer">
        <svg class="svg-icon" width="1em" height="1em" style="fill:currentColor" aria-hidden="true"><use href="#i-github"/></svg>
        <span class="socialCard-name">GitHub</span>
        <span class="socialCard-handle">@{{ site.github_username }}</span>
    </a>
    {% endif %}
    {% if site.linkedin_username %}
    <a class="socialCard" href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank" rel="noopener noreferrer">
        <svg class="svg-icon" width="1em" height="1em" style="fill:currentColor" aria-hidden="true"><use href="#i-linkedin"/></svg>
        <span class="socialCard-name">LinkedIn</span>
        <span class="socialCard-handle">linkedin.com/in/{{ site.linkedin_username }}</span>
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

## El Proyecto en Telegram

Únete al canal oficial y a los grupos de la comunidad para seguir el proyecto y compartir la aplicación:

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
