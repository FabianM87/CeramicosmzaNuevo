import '../main.css'
import facebook from '../../img/facebook.png'
import instagram from '../../img/instagram.png'


export default function Footer() {
  return (
    <footer className=' pie flex flex-col'>
	
	<nav className='footer_nav flex justify-center'>
		<a href="" className="pie__enlace--sm flex" target="_blank"><img src={instagram} alt="instagram"/><p>Instagram</p></a>
		<a href="" className="pie__enlace--sm flex" target="_blank"><img src={facebook} alt="facebook"/><p>Facebook</p></a>
	</nav>
    </footer>
  )
}
