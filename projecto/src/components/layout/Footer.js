import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import style from './Footer.module.css'

function Footer() {
  return(
    <footer >
      <ul className={style.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram/>
        </li>
        <li>
          <FaLinkedin/>
        </li>
      </ul>
      <p>Rodapé</p>
    </footer>

  ) 
}
export default Footer
