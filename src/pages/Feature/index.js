import './style.css';
import Content from './fragments/content';
import logo from '../../assets/logo.svg';

function Feature() {
  let data = "ini adalah isi feature";

  return (
    <div>
      <section className='content-feature-container'>
        <Content data={data} />
        <img src={logo} className='logo'  alt="logo" />
      </section>
    </div>
  );
}

export default Feature;