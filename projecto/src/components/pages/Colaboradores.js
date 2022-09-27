import Sidebar from '../layout/Sidebar'
import Table from '../layout/Table/Teble'
import styles from './Colaboradores.module.css'
import { Link } from 'react-router-dom'
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import SearchBar from '../layout/SearchBar/SearchBar';
function Colaboradores() {
  return (
    
    <div className={styles.table}>
      <Sidebar/>
      <h2>Funcionarios</h2>
      <SearchBar/>
      <button className={styles.btn}><AiOutlineUsergroupAdd/>AddUser </button>
      <Table/>
    </div>
  )
}

export default Colaboradores
