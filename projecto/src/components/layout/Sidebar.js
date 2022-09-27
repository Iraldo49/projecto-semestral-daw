import { Link } from 'react-router-dom'
import styles from './Sidebar.module.css'
import { TiUser } from "react-icons/ti";
import { RiLogoutCircleFill , RiLogoutCircleRFill} from "react-icons/ri";
import { MdDashboardCustomize } from "react-icons/md";

function Sidebar() {
  return (

    <div className={styles.sidebar_responsive}>
      <div className={styles.list}>
        <div className={styles.sidebar_menu}><h2><MdDashboardCustomize/> Gestão</h2></div>
        <ul className={styles.item}>
          <li><Link className={styles.item} to="/">Dashboard  </Link></li>
          <li><Link className={styles.item} to="/colaboradores">Funcionarios</Link></li>
          <li><Link className={styles.item} to="/contas">Contas</Link></li>
        </ul>
        <div className={styles.social_list}>
          <a class="nav-link dropdown-toggle" href="#" role="button" 
          data-bs-toggle="dropdown" aria-expanded="false">
            <TiUser  />Entrar
          </a>
          <ul className="dropdown-menu">
            <li className="dropdown-item" ><RiLogoutCircleFill/> Iniciar Sessão </li>
            <li className ="dropdown-item" ><RiLogoutCircleRFill/>Terminar Sessão </li>
          </ul>
        </div>
      </div>
    </div>
    // <div >
    //   <div >
    //     <div >
    //       
    //     </div>
    //       <button ><Link to="/">Dashboard  </Link></button>
    //       <button className={styles.item}><Link to="/colaboradores">Funcionarios</Link></button>
    //       <button className={styles.item}> <Link to="/contas">Contas</Link></button>
    //       <ul >
    //       <li >
    //         
    //       </li>
    //   </ul>
    //   </div>
    // </div>
  )
}

export default Sidebar
