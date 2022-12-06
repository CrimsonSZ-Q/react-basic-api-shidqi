import logo from '../../assets/logo.svg';
import '../Header/style.css';
import Search from '../Search/Search';



function Header(prop) {
  const menu = ["Home", "Feature", "Produk", "Akun"];
  const navigation = () => {
    return menu.map((item, idx) => {
      return <button onClick={() => prop.onClick(idx+1)} >{item}</button>
    }) 
  }

    return (
      <div className='header-content'>
        <header className='header-wrapper'>
          <img src={logo} alt="logo" />
          <h1 className='header-title'>
            BeliKuy
          </h1>
          
          <nav className='navigation'>{navigation()}</nav>
        </header>
      </div>
    );
  }
  
  export default Header;