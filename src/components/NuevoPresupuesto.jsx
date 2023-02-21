import { useState } from 'react'
import Mensaje from './Mensaje'
function NuevoPresupuesto({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto
}) {
  const [mensaje, setMensaje] = useState('')
  const hadlePresupuesto = (e)=>{
    e.preventDefault()
    
    if(!presupuesto || presupuesto < 0){
      setMensaje("no es un presupuesto valido")
      return
    }
    setMensaje('')
    setIsValidPresupuesto(true)

  }
  return (
    <>
      <div className="contenedor contenedor-sombra sombra">
        <form onSubmit={hadlePresupuesto} action="" className='formulario'>
          <div className='campo'>
            <label htmlFor="">Definir presupuesto</label>
            <input 
              className='nuevo-presupuesto'
              placeholder='Añade tu presupuesto'
              type="number"
              value={presupuesto}
              onChange={ e => setPresupuesto(Number(e.target.value))}
            />
          </div>
          <input type="submit" value="Añadir" />
          {mensaje && <Mensaje tipo="error">{mensaje }</Mensaje>}
        </form>
      </div>
    </>
  )
}

export default NuevoPresupuesto
