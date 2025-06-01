---
layout: page
title: Registro de cambios
include_in_header: true
---

## Registro de cambios

### **Version 3.0.0.1b** (`Última versión disponible`)

**Cambios**

General:
- Nuevo logo y rediseño de la aplicación
- Simplificación en las interacciones con la interfaz.

Ventana de sesión abierta
- Nueva ventana de sesión abierta totalmente reescalable y adaptable.

Notificación de Actualizaciones
- Mejoras en el servicio de notificación de actualizaciones.

Sistema de guardado
- Sistema de guardado de ajustes mejorado.

Fin del vencimiento de la aplicación
- Eliminación del límite local de vencimiento de las versiones beta.

Refactorización
- La aplicación ha sido refactorizada a detalle para permitir una mejor escalabilidad en futuras actualizaciones.

Versionado
- El versionado cambia del formato v{major}.{minor}.{year}.{month-day} a v{major}.{minor}.{build}.{revision}.
—> major aumentará cuando se introduzcan cambios incompatibles con versiones anteriores.
—> minor nuevas funcionalidades manteniéndose compatible con versiones anteriores.
—> build cuando se hagan parches, mejoras de rendimiento o correcciones de bugs.
—> revision para correcciones críticos urgentes o hotfixes.

Bugs corregidos
- Ahora los ajustes de la aplicación se mantienen con una nueva versión.
- El control de tiempo de la sesión no convertía apropiadamente las horas.
- En entornos de conectividad limitada, la comprobación de actualizaciones fallaba con un mensaje genérico.
- El cierre de sesión presentaba fallos en la petición.
- La ventana de sesión abierta no se cerraba luego de cerrar sesión.
- El temporizador no guardaba los ajustes en caso de querer reiniciarlo a 0.

### **Version 2.0.2024.0923b**

**Cambios**

- Añadido un nuevo certificado de seguridad para las cuentas.
- Servicio de notificación de actualizaciones habilitado.

### Version 2.0.2024.0623b

**Cambios**

- Mejoras en el cálculo del tiempo restante.
- Corrección de errores y optimización del código.

### Version 2.0.2024.0423b

**Cambios**

- Actualización de las librerías internas (preparación para nuevos servicios).
- Corrección de errores y optimización del código.

### Version 2.0.2023.0425b

**Cambios**

- Añadida la compatibilidad con cuentas Nauta Plus.
- Cambios necesarios en la infraestructura relacionados con los nuevos servidores de ETECSA.
- Corrección de errores y optimización del código.

### Version 2.0.2022.0418b

**Cambios**

- Añadidas animaciones de entrada de ventanas.
- Añadido un botón de donaciones a la ventana principal.
- Mejoras en la detección de los servicios de ETECSA.
- Mayor compatibilidad con nuevas versiones de Windows 11.
- Cambios necesarios en la infraestructura de detección de actualizaciones de la aplicación.
- Corrección de errores y optimización del código.

**Bugs corregidos**

- Corrección de un bug que cerraba de forma inesperada la aplicación al comprobar actualizaciones.

### Version 2.0.2021.1006b

**Cambios**

- Solución de un bug que no permitía iniciar sesión y no mostraba el tiempo restante.

### Version 2.0.2021.1005b

**Cambios**

- Agregada una opción para omitir la verificación de los certificados.
- Agregada la sección de donaciones en la ventana "Acerca de...".
- Agregado el nuevo vínculo de contacto del sitio oficial.
- Ajustes mínimos en la interfaz gráfica.

### Version 2.0.2021.0819b

**Cambios**

- Implementada una función para detectar la existencia de nuevas versiones de la aplicación.
- Cambios en la interfaz gráfica.
- Modificación de íconos para una señalización más apropiada de la funcionalidad de cada sección.

**Bugs corregidos**

- Corrección de un bug que no permitía cerrar apropiadamente la aplicación en el primer inicio.
- Corrección de un bug que asignaba de forma no apropiada los temas al inicio de la aplicación.

### Version 2.0.2021.0718b

**Cambios**

- Primeras pruebas para implementar un instalador automatizado.
- Mejora en la detección de errores relacionados con los archivos de configuración.

**Bugs corregidos**

- Corrección de un bug que no permitía usar cuentas cuyo nombre de usuario y/o contraseña tuvieran caracteres no válidos para peticiones web.

### Version 2.0.2021.0715b

**Cambios**

- Implementación de diálogos personalizados preparados para combinar con el tema actual de la aplicación.
- Implementación de conexiones a través de proxy y posibilidad de configurar sus ajustes.
- Ahora la aplicación carga automáticamente los ajustes de versiones antiguas.
- Implementación de detección de certificados de ETECSA _(Se evita iniciar sesión en portales cautivos falsos y relacionados con el robo de cuentas)_.
- Mejorados los diálogos de respuesta ante errores, algunos se les añadió la posibilidad de reintentar la operación.
- Deprecación del comando ping.
- Cambios sustanciales en las [políticas de privacidad](/privacypolicy).
- Refactorización de los últimos componentes.
- Corrección de bugs con la animación de ocultar la ventana de sesión.
- Fase beta del proyecto.

**Bugs corregidos**

- Corrección de bugs relacionados con la forma que se mostraba el tiempo restante. **(Aún en pruebas)**

### Version 2.0.2021.0708a

**Bugs corregidos**

- Solución de un bug al calcular el saldo diponible en la cuenta luego de recargar.
- Solución de un bug relacionado con el cierre la ventana de sesión abierta.

### Version 2.0.2021.0707a

**Cambios**

- Solución de varios bugs relacionados con el inicio de sesión.

### Version 2.0.2021.0705a

**Cambios**

- ¡Nuevo logo! (Posible evento futuro sobre diseño gráfico en nuestro grupo oficial de Telegram [Mi Cuenta Nauta Chat](https://t.me/micuentanautachat))
- Completa transformación de la interfaz gráfica.

  - Se dividió la acción de modificar el temporizador y las opciones en botones diferentes.
  - El botón de abrir los ajustes del temporizador se movió para el lado izquierdo del botón
    de iniciar sesión para mayor visibilidad.
  - Se rediseñó la sección de captura del "Captcha".
  - Se agregó un nuevo algoritmo para detectar cuando la ventana de sesión está fuera de la pantalla
    y así evitar que se pierda.

- Mejora sustancial en los algoritmos de seguridad.

  **Sección: Ventana principal**:

  - Agregada una opción para autocompletar cuentas previamente guardadas.
  - Agregada una opción para mostrar todas las cuentas guardadas directamente desde la ventana principal.
  - Agregado un botón para limpiar los ajustes del temporizador directamente desde la ventana principal.

  **Sección: Cuenta abierta**:

  - Se rediseñó la interfaz para hacerla escalable.
  - Ahora es posible redimensionar la ventana.
  - Ahora se muestra una etiqueta cuando hay un temporizador activo.
  - Ahora es posible arrastrar la ventana.
  - Ahora es posible cambiar la transparencia de la ventana.
  - Ahora es posible alternar la visibilidad de la ventana para permitir que esté siempre visible o no.
  - Se mejoró el algoritmo para cerrar cuentas haciéndolo más estable y funcional ante distintos posibles
    errores de red.
  - 2 bugs potenciales corregidos (Véase sección de bugs)

  **Sección: Opciones**:

  - Se creó una nueva sección: Opciones

    - Opciones generales como cambiar el tema, guardar la posición y opacidad de la ventana de sesión.
    - Se reconstruyó la sección de cuentas para incluirse como categoría.

    **Sección: Gestión de cuentas**:

    - Rediseñada la interfaz de agregar cuentas.
    - Se agregó una opción para editar cuentas previamente guardadas.

    **Opciones: Sección de ajustes generales**:

    - Ahora puedes escoger entre dos temas (Oscuro y claro)
    - Agregada una opción para detectar automáticamente el tema del sistema operativo y cambiarlo
      automáticamente (Solo Windows 10 o superior).

    **Opciones: Sección de ajustes de red**:

    - Ahora puedes cambiar el tiempo de espera por una respuesta http.

  **Sección: Portal Nauta**:

  - Se agregó una nueva función para actualizar dinámicamente los datos del portal Nauta.
  - Rediseño de la interfaz gráfica.
  - Cambios al detectar el precio de las horas.

  **Sección: Acerca de.../EULA**:

  - Se unificaron ambas ventanas en una que cumple la misma función de forma más efectiva.
  - Cambios pequeños en la interfaz.

**Bugs corregidos**

**Sección: Sesión abierta**:

- Se corrigió el siguiente bug:
  Al iniciar sesión la aplicación necesita obtener la variable del tiempo restante de
  la cuenta para que así la ventana se cierre cuando el tiempo se acabe, cuando el tiempo
  del temporizador se acabe o cuando se cierre manualmente la cuenta desde el botón.

  Sin embargo, si en el momento en el cual la aplicación intenta obtener el tiempo restante
  el servidor no responde u ocurre un problema en la red, pues la ventana de sesión enviará
  un error y posiblemente la cuenta permanecería abierta.

- Se corrigió el siguiente bug:
  Habian ocasiones en que la ventana de sesión desaparecía de la pantalla, gracias al nuevo
  algoritmo es posible que este bug quede solucionado.

### Version 1.2.2021.08b

Se espera que sea la versión más estable hasta el momento así que esta versión pasa a fase RC.

**Cambios**

- Mejora en los protocolos de seguridad.
- Simplificación de las peticiones al servidor de Etecsa.

### Version 1.2.2021.07b

**Cambios**

- Agregada la posibilidad de añadir y guardar cuentas de acceso nacional (nauta.co.cu).
- Agregada la opción de cerrar la ventana de sesión aunque la cuenta aún esté abierta y por algún motivo no se pueda cerrar.
- Revisión del algoritmo de cambio de contraseña y optimización de los patrones para Regex.
- Cambios en el código.

**Bugs corregidos**

- Corregido un bug que no permitía mostrar el tiempo de la cuenta cuando se tenía más de 23 horas en la cuenta.

### Version 1.2.2021.06b

**Cambios**

- Agregado un contenedor criptográfico avanzado derivado de AES para proteger las contraseñas almacenadas en su computador.
- Cambios en el código.

**Bugs corregidos**

- Corregido un bug que no permitía cerrar la ventana de sesión cuando se usaba más de un monitor.
- Corregido un bug que no permitía cerrar la ventana de sesión cuando se usaba un escalado de pantalla diferente.

### Version 1.2.2021.05b

**Cambios**

- Optimización y refactorización del código relacionado con la interfaz gráfica.

### Version 1.2.2021.04b (`Primera versión registrada`)

**Cambios**

- Corrección de bugs.

**Corrección de bugs**

- Corregidos los problemas de inicio de sesión y cierre de sesión.
- Optimización de animaciones.
