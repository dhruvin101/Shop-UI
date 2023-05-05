import React from 'react'

const Navbar = ({ filterItem , menuList }) => {
  return (
    <>
      <nav className='navbar'>
        <div className='btn-group'>
            {menuList.map((curELem) => {
                return(
                    <button className='btn-group__item' onClick={() => filterItem(curELem)} > {curELem} </button>
                );
            })}
        </div>
      </nav>
    </>
  )
}

export default Navbar
