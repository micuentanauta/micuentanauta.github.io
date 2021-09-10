---
layout: page
title: Registro de cambios
include_in_header: true
---

# Registro de cambios

<br>

### `Latest`
# **Version 2.0**
This is the first update to our app. Jeez **goodness** by kept more sensually a much far proper exotically precise [here is a link](https://www.google.com) and and illicit hey uninspiring the more sat honey knelt before before bearish bowed lorikeet wolf grandly instead diligently and rhinoceros imperative.

#### What's New
- Much far proper exotically precise unaccountable.
- [Changes to Privacy Policy](/privacypolicy)

#### Bug Fixes
- Much far proper exotically precise unaccountable.
- [Changes to Privacy Policy](/privacypolicy)

<br>

## **Version 2.0.2021.0705 alpha**

### ¿Qué hay de nuevo?

**General**
+ ¡Nuevo logo! (Posible evento futuro sobre diseño gráfico en nuestro grupo oficial de Telegram https://t.me/@micuentanauta)
+ Completa transformación de la interfaz gráfica.
    * Se dividió la acción de modificar el temporizador y las opciones en botones diferentes.
    * El botón de abrir los ajustes del temporizador se movió para el lado izquierdo del botón
        de iniciar sesión para mayor visibilidad.
    * Se rediseñó la sección de captura del "Captcha".
    * Se agregó un nuevo algoritmo para detectar cuando la ventana de sesión está fuera de la pantalla
        y así evitar que se pierda.
+ Mejora sustancial en los algoritmos de seguridad.
	
	**Sección: Ventana principal**:
	+ Agregada una opción para autocompletar cuentas previamente guardadas.
	+ Agregada una opción para mostrar todas las cuentas guardadas directamente desde la ventana principal.
	+ Agregado un botón para limpiar los ajustes del temporizador directamente desde la ventana principal.
	
	**Sección: Cuenta abierta**:
	+ Se rediseñó la interfaz para hacerla escalable.
	+ Ahora es posible redimensionar la ventana.
	+ Ahora se muestra una etiqueta cuando hay un temporizador activo.
	+ Ahora es posible arrastrar la ventana.
	+ Ahora es posible cambiar la transparencia de la ventana.
	+ Ahora es posible alternar la visibilidad de la ventana para permitir que esté siempre visible o no.
	+ Se mejoró el algoritmo para cerrar cuentas haciéndolo más estable y funcional ante distintos posibles
	  errores de red.
	* 2 bugs potenciales corregidos (Véase sección de bugs)
	
	
	**Sección: Opciones**:
	+ Se creó una nueva sección: Opciones 
		+ Opciones generales como cambiar el tema, guardar la posición y opacidad de la ventana de sesión.
		+ Se reconstruyó la sección de cuentas para incluirse como categoría.
	
		**Sección: Gestión de cuentas**:
		+ Rediseñada la interfaz de agregar cuentas.
		
		+ Se agregó una opción para editar cuentas previamente guardadas.
		
		**Opciones: Sección de ajustes generales**:
		+ Ahora puedes escoger entre dos temas (Oscuro y claro)
		+ Agregada una opción para detectar automáticamente el tema del sistema operativo y cambiarlo
		  automáticamente (Solo Windows 10 o superior).
		  
		  
		**Opciones: Sección de ajustes de red**:
		+ Ahora puedes cambiar el tiempo de espera por una respuesta http.
		
	**Sección: Portal Nauta**:
	+ Se agregó una nueva función para actualizar dinámicamente los datos del portal Nauta.
	* Rediseño de la interfaz gráfica.
	* Mejoras al detectar el precio de las horas.
	
	**Sección: Acerca de.../EULA**:
	+ Se unificaron ambas ventanas en una que cumple la misma función de forma más efectiva.
	* Cambios pequeños en la interfaz.
	
#### Bugs corregidos.
**Sección: Sesión abierta**:
* Se corrigió el siguiente bug:
    Al iniciar sesión la aplicación necesita obtener la variable del tiempo restante de 
    la cuenta para que así la ventana se cierre cuando el tiempo se acabe, cuando el tiempo 
    del temporizador se acabe o cuando se cierre manualmente la cuenta desde el botón. 

    Sin embargo, si en el momento en el cual la aplicación intenta obtener el tiempo restante 
    el servidor no responde u ocurre un problema en la red, pues la ventana de sesión enviará 
    un error y posiblemente la cuenta permanecería abierta.
    
* Se corrigió el siguiente bug:
    Habian ocasiones en que la ventana de sesión desaparecía de la pantalla, gracias al nuevo
    algoritmo es posible que este bug quede solucionado.

<br>

## Version 1.2.2021.08b
Se espera que sea la versión más estable hasta el momento así que esta versión pasa a fase RC.

#### ¿Qué hay de nuevo?
- Mejora en los protocolos de seguridad.
- Simplificación de las peticiones al servidor de Etecsa.

<br>

## Version 1.2.2021.07b

#### ¿Qué hay de nuevo?
- Agregada la posibilidad de añadir y guardar cuentas de acceso nacional (nauta.co.cu).
- Agregada la opción de cerrar la ventana de sesión aunque la cuenta aún esté abierta y por algún motivo no se pueda cerrar.
* Revisión del algoritmo de cambio de contraseña y optimización de los patrones para Regex.
* Mejoras en el código.

#### Bugs corregidos.
- Corregido un bug que no permitía mostrar el tiempo de la cuenta cuando se tenía más de 23 horas en la cuenta.

<br>

## Version 1.2.2021.06b

#### ¿Qué hay de nuevo?
- Agregado un contenedor criptográfico avanzado derivado de AES para proteger las contraseñas almacenadas en su computador.
* Mejoras en el código.

#### Bugs corregidos.
- Corregido un bug que no permitía cerrar la ventana de sesión cuando se usaba más de un monitor.
- Corregido un bug que no permitía cerrar la ventana de sesión cuando se usaba un escalado de pantalla diferente.

<br>

## Version 1.2.2021.05b

#### ¿Qué hay de nuevo?
- Optimización y refactorización del código relacionado con la interfaz gráfica.

<br>

### `Primera versión registrada`
## Version 1.2.2021.04b

#### ¿Qué hay de nuevo?
- Corrección de bugs.

#### Corrección de bugs
- Corregidos los problemas de inicio de sesión y cierre de sesión. 
- Optimización de animaciones.

<br>