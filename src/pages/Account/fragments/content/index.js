import './style.css';

function Content (prop) {
  
  return(
    <section>
      <h1 className='content-wrapper'>Doc</h1>
      <p>{prop.data}</p>
    </section>
  );
}

export default Content;