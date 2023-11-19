import React, { Component } from "react";

const img = new Array("/img/img01.jpg", "/img/img02.jpg", "/img/img3.jpg", "/img/img4.jpg");

class Catalogo extends Component {
  render() {
    return (
<html lang="en">
	<head>
		<title>Joyeria Illanmi</title>
	</head>
	<body>
		<div class="contenedor">
			<header class="header">
				
				<nav class="header__menu">
					<a href="./Productos" class="header__link">Categorias</a>
					<a href="./compras" class="header__link" data-accion="abrir-carrito">Mi Carrito</a>
					<a href="#" class="header__link">Mi Cuenta</a>
				</nav>
			</header>
			<main>
				<div class="breadcrumbs">
					<a href="/Home" class="breadcrumbs__link">Inicio</a>
					<div class="breadcrumbs__separador">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 16 16"
							class="breadcrumbs__svg"
						>
							<path
								fill-rule="evenodd"
								d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
							/>
						</svg>
					</div>
					<a href="./Anillos" class="breadcrumbs__link">Catalogo anillo</a>
					<div class="breadcrumbs__separador">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 16 16"
							class="breadcrumbs__svg"
						>
							<path
								fill-rule="evenodd"
								d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
							/>
						</svg>
					</div>
					<p href="/" class="breadcrumbs__active">Anillos gama alta</p>
				</div>

				<div class="producto" id="producto" data-producto-id="1">
					<div class="producto__thumbs">
						<img src="./img/img10.jpg" alt="" class="producto__thumb-img" />
						<img src="./img/img09jpg" alt="" class="producto__thumb-img" />
						<img src="./img/anillo-1.jpeg" alt="" class="producto__thumb-img" />
						<img src="./img/img07.jpg" alt="" class="producto__thumb-img" />
						<img src="./img/img06.jpg" alt="" class="producto__thumb-img" />
					</div>
					<div class="producto__contenedor-imagen">
						<img src="./img/anillo-prin.jpeg" alt="" class="producto__imagen" />
					</div>
					<div class="producto__contenedor-info">
						<div class="producto__estrellas">
							<div class="producto__estrella">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									class="bi bi-star-fill"
									viewBox="0 0 16 16"
								>
									<path
										d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
									/>
								</svg>
							</div>
							<div class="producto__estrella">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									class="bi bi-star-fill"
									viewBox="0 0 16 16"
								>
									<path
										d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
									/>
								</svg>
							</div>
							<div class="producto__estrella">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									class="bi bi-star-fill"
									viewBox="0 0 16 16"
								>
									<path
										d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
									/>
								</svg>
							</div>
							<div class="producto__estrella">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									class="bi bi-star-fill"
									viewBox="0 0 16 16"
								>
									<path
										d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
									/>
								</svg>
							</div>
							<div class="producto__estrella">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									class="bi bi-star-fill"
									viewBox="0 0 16 16"
								>
									<path
										d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
									/>
								</svg>
							</div>
						</div>
						<h1 class="producto__nombre">Glamira Anillo Jesasia</h1>
						<p class="producto__descripcion">Hermoso anillo primaveral de 10k para lucir un hermoso brillo en las manos.</p>
						<div class="producto__contenedor-propiedad">
							<p class="producto__propiedad">Precio</p>
							<p class="producto__precio">PEN S/2200.00</p>
						</div>
						<div class="producto__contenedor-propiedad" id="propiedad-color">
							<p class="producto__propiedad">Color</p>
							<div class="producto__contenedor-radios">
								<label for="negro">
									<input
										type="radio"
										class="producto__radio-input"
										name="color"
										id="negro"
										value="negro"
										checked
									/>
									<p
										class="producto__radio-texto producto__radio-texto--color producto__radio-texto--negro"
									>
										Negro
									</p>
								</label>
								<label for="rojo">
									<input
										type="radio"
										class="producto__radio-input"
										name="color"
										id="rojo"
										value="rojo"
									/>
									<p
										class="producto__radio-texto producto__radio-texto--color producto__radio-texto--rojo"
									>
										Rojo
									</p>
								</label>
								<label for="amarillo">
									<input
										type="radio"
										class="producto__radio-input"
										name="color"
										id="amarillo"
										value="amarillo"
									/>
									<p
										class="producto__radio-texto producto__radio-texto--color producto__radio-texto--amarillo"
									>
										Amarillo
									</p>
								</label>
							</div>
						</div>
						<div class="producto__contenedor-propiedad" id="propiedad-tamaño">
							<p class="producto__propiedad">Tamaño</p>
							<div class="producto__contenedor-radios">
								<label for="1,5">
									<input
										type="radio"
										class="producto__radio-input"
										name="tamaño"
										id="1,5"
										value="1,5"
										checked
									/>
									<p class="producto__radio-texto">1,5</p>
								</label>
								<label for="2">
									<input type="radio" class="producto__radio-input" name="tamaño" id="2" value="2" />
									<p class="producto__radio-texto">2</p>
								</label>
								<label for="2,5">
									<input
										type="radio"
										class="producto__radio-input"
										name="tamaño"
										id="2,5"
										value="2,5"
									/>
									<p class="producto__radio-texto">2,5</p>
								</label>
								<label for="3">
									<input type="radio" class="producto__radio-input" name="tamaño" id="3" value="3" />
									<p class="producto__radio-texto">3</p>
								</label>
								<label for="3,5">
									<input
										type="radio"
										class="producto__radio-input"
										name="tamaño"
										id="3,5"
										value="3,5"
									/>
									<p class="producto__radio-texto">3,5</p>
								</label>
								<label for="4">
									<input type="radio" class="producto__radio-input" name="tamaño" id="4" value="4" />
									<p class="producto__radio-texto">4</p>
								</label>
							</div>
						</div>
						<div class="producto__contenedor-propiedad">
							<p class="producto__propiedad">Cantidad</p>
							<button class="producto__btn-cantidad" id="disminuir-cantidad">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									viewBox="0 0 16 16"
								>
									<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
								</svg>
							</button>
							<input type="text" id="cantidad" value="1" class="producto__cantidad" />
							<button class="producto__btn-cantidad" id="incrementar-cantidad">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									viewBox="0 0 16 16"
								>
									<path
										d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
									/>
								</svg>
							</button>
						</div>
						<button type="submit" class="producto__btn-carrito" id="agregar-al-carrito">
							Agregar al carrito
						</button>
					</div>
				</div>

				<div class="mas-informacion" id="mas-informacion">
					<div class="tabs">
						<button class="tabs__button tabs__button--active" data-tab="caracteristicas">
							Caracteristicas
						</button>
						<button class="tabs__button" data-tab="reseñas">Reseñas</button>
						<button class="tabs__button" data-tab="envio">Envio</button>
					</div>
					<div class="tab tab--active" id="caracteristicas">
						<h3 class="tab__titulo">Caracteristicas</h3>
						<ul class="tab__lista">
							<li>Piedras preciosas con diamantes negros.</li>
							<li>Piedras semipreciosas con diamantes azules.</li>
						</ul>
					</div>
					<div class="tab" id="reseñas">
						<h3 class="tab__titulo">Reseñas</h3>
						<div class="reseña">
							<img src="./img/perfil-4.jpg" class="reseña__foto" alt="" />
							<div class="reseña__info">
								<div class="reseña__estrellas">
									<div class="reseña__estrella">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
											<path
												d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
											/>
										</svg>
									</div>
									<div class="reseña__estrella">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
											<path
												d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
											/>
										</svg>
									</div>
									<div class="reseña__estrella">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
											<path
												d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
											/>
										</svg>
									</div>
									<div class="reseña__estrella">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
											<path
												d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
											/>
										</svg>
									</div>
									<div class="reseña__estrella">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
											<path
												d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
											/>
										</svg>
									</div>
								</div>
								<p class="reseña__fecha">31 de Mayo de 2022</p>
								<p class="reseña__texto">
									Metal/Aleación: El metal hace referencia al material base empleado para producir joyas. 
									El color se determina por la combinación de este metal con otras aleaciones
								</p>
							</div>
						</div>
						<div class="reseña">
							<img src="./img/perfil-5.png" alt="" class="reseña__foto" />
							<div class="reseña__info">
								<div class="reseña__estrellas">
									<div class="reseña__estrella">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
											<path
												d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
											/>
										</svg>
									</div>
									<div class="reseña__estrella">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
											<path
												d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
											/>
										</svg>
									</div>
									<div class="reseña__estrella">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
											<path
												d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
											/>
										</svg>
									</div>
									<div class="reseña__estrella">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
											<path
												d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
											/>
										</svg>
									</div>
									<div class="reseña__estrella">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
											<path
												d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
											/>
										</svg>
									</div>
								</div>
								<p class="reseña__fecha">31 de Mayo de 2022</p>
								<p class="reseña__texto">Gabriela: Me ha llegado hoy mi anillo, un día antes de la fecha prevista, y es perfecto!! Super bonito, sencillo, lo que buscaba. La talla perfecta, por suerte no he tenido que cambiarlo. 
								La única pega que puedo poner es la inscripción, que es muy pequeña, pero porque el anillo es muy finito y no se puede hacer más grande. Me encanta!!</p>
							</div>
						</div>
						<div class="reseña">
							<img src="./img/perfil-6.webp" alt="" class="reseña__foto" />
							<div class="reseña__info">
								<div class="reseña__estrellas">
									<div class="reseña__estrella">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
											<path
												d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
											/>
										</svg>
									</div>
									<div class="reseña__estrella">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
											<path
												d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
											/>
										</svg>
									</div>
									<div class="reseña__estrella">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
											<path
												d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
											/>
										</svg>
									</div>
									<div class="reseña__estrella">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
											<path
												d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
											/>
										</svg>
									</div>
									<div class="reseña__estrella">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
											<path
												d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
											/>
										</svg>
									</div>
								</div>
								<p class="reseña__fecha">31 de Mayo de 2022</p>
								<p class="reseña__texto">
									Anya: Estaba tan feliz cuando abrí la caja del anillo! El proceso de compra fue muy fácil y el equipo de servicio al cliente fue muy útil 
									cuando tuve que cambiar el tamaño del anillo 2 días después de realizar el pedido. Es un anillo precioso y estoy muy feliz.
								</p>
							</div>
						</div>
					</div>
					<div class="tab" id="envio">
						<h3 class="tab__titulo">Envio</h3>
						<p class="tab__parrafo">
						Entrega gratuita y segura
						Tiempo estimado de entrega: 29 a 30 nov.
						Devolución en el plazo de 60 días
						</p>
						<p class="tab__parrafo">
						Plan de protección de 3 año
						EXTENDIDO : PEN S/.737.00
						EXTENDIDO +: PEN S/.1,264.00
						Ver planes.
						</p>
					</div>
				</div>
			</main>
		</div>

		<div class="notificacion" id="notificacion">
			<p class="notificacion__titulo">Agregado al carrito</p>
			<img src="./img/thumbs/1.jpg" alt="" class="notificacion__thumb" />
			<a href="#" class="notificacion__link" data-accion="abrir-carrito">Ver carrito</a>
		</div>

		
	</body>
</html>
        )
    };
}
export default Catalogo;