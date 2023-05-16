import '../estilos/Display.css';

const Display = ({ contador })=>{
    return (
      <div>
        <div className='display_content'>
          <p>{ contador }</p>
        </div>
      </div>
    )
}

export default Display;