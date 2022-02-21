// 1. IMPORTACIONES



// 2. FUNCIÓN
function Footer (props) {

    console.log(props)

	return (
		<footer>
			<p>Este es el footer</p>
            <p>Hola {props.nombre}</p>
		</footer>
	)

}



// 3. EXPORTACIÓN
export default Footer