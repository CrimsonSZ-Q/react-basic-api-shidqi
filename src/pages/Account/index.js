import './style.css';
import Content from './fragments/content';
import logo from '../../assets/logo.svg';

function Account() {
  let data = "ini adalah isi doc";

  return (
    <div>
      <section className='content-index-container'>
        <Content data={data} />
        <img src={logo} className='logo'  alt="logo" />
    
      </section>
    </div>
  );
}

export default Account;