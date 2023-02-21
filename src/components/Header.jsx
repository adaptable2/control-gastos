import { useState } from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
function Header({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto}) {

  return (
    <header className="App">
      <h1>Nuevo Presupuesto</h1>
      {
        isValidPresupuesto ? (
          <p>Control presupuesto</p>
        ):(
          <NuevoPresupuesto
            presupuesto= {presupuesto}
            setPresupuesto= {setPresupuesto}
            setIsValidPresupuesto= {setIsValidPresupuesto}
          />
        )
      }
    </header>
  )
}

export default Header
