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
    <p>Soy <strong>Carlos Barnés</strong>, joven investigador, recién graduado de Ingeniería Informática como segunda carrera. Un resumen de mi trayectoria:</p>
    <p><strong>Premio CITMA – National Young Researcher Award:</strong> reconocimiento nacional concedido por contribuciones científicas sobresalientes al desarrollo e investigación tecnológica. Este premio destaca el impacto de la investigación en el diseño de modelos de Inteligencia Artificial, el procesamiento de lenguaje natural (NLP) y el desarrollo de arquitecturas de software modulares aplicadas a la lingüística computacional.</p>
    <p><strong>Caribbean Regional Finalist – ICPC 2023:</strong> clasifiqué a las finales regionales del Caribe tras superar las rondas eliminatorias locales. La competencia evalúa la resolución de problemas de alto nivel mediante diseño avanzado de algoritmos, optimización de código a nivel de microsegundos y gestión eficiente de estructuras de datos bajo estrictas restricciones de tiempo.</p>
    <p><strong>Caribbean Regional Finalist – ICPC 2024:</strong> clasifiqué a las finales regionales del Caribe por segundo ciclo consecutivo. Este logro consolida mi experiencia en optimización algorítmica de alto nivel, resolución de problemas matemáticos aplicados a las ciencias de la computación y el diseño de soluciones de software eficientes.</p>
    <p>También obtuve el <strong>premio nacional científico estudiantil de computación (CNCEC)</strong>.</p>
    <p>Con más de 10 años de experiencia en el mundo de la tecnología y el diseño gráfico, desarrollo {{ site.app_name }} de forma abierta y gratuita.</p>
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
