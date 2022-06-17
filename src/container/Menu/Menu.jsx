
import React,{useState} from 'react'
import BeveragesMenu from './BeveragesMenu'
import MainCourseMenu from './MainCourseMenu'
import './Menu.css'

const Menu = () => {
    
    const [menu, setMenu] = useState(true)
  return (
    <div>
        {menu ? <BeveragesMenu />:<MainCourseMenu />}
        <div className='app__menu-container'>
            <button 
                onClick={()=>setMenu(false)}
                type="button" 
                className="custom__button app__menu-item" 
                style={{ marginTop: '2rem' }}>View Main Course Menu
            </button>
            <button 
                onClick={()=>setMenu(true)}
                type="button" 
                className="custom__button app__menu-item" 
                style={{ marginTop: '2rem' }}>View Beverages Menu
            </button>
        </div>
        
    </div>
    
  )
}

export default Menu