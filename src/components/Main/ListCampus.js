// 1. IMPORTACIONES
import ReactPlayer from 'react-player' 



// 2. FUNCIÓN + EXPORTACIÓN
export default function ListCampus(props) {

	console.log("props:", props)

  return (
	<div>
		<ul>
		{
			props.list.map((element) => {
				return (
					<li>{element}</li>		
				)
			})
		}
		</ul>

		<ul>
		{
			props.students.map((element) => {
				return (
					<li>El estudiante es {element.name} y su campus es {element.campus}</li>
				)
			})
		}
		</ul>

		<div className="actions">
			<i className="far fa-comment"></i>
			<i className="fas fa-retweet"></i>
			<i className="far fa-heart"></i>
			<i className="fas fa-share"></i>
    	</div>

		<ReactPlayer url="https://vimeo.com/channels/top/22439234" />

	</div>
  )
}