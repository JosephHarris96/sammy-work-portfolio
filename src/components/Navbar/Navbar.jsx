// import { useState } from 'react'
// import React from 'react'
// import './Navbar.css'

// const Navbar = () => {

//     // to change burger classes
//     const [burgerClass, setBurgerClass] = useState("burger-bar unclicked")
//     const [menuClass, setMenuClass] = useState("menu hidden")
//     const [isMenuClicked, setIsMenuClicked] = useState(false)

// // toggle burger menu change

// const updateMenu = () => {
//     if(!isMenuClicked) {
//         setBurgerClass("burger-bar clicked")
//         setMenuClass("menu visible")
//     }
//     setIsMenuClicked(!isMenuClicked)
// }


//     return (
//     <div className="navbar">
//       <nav>
//         <div className="burger-menu" onClick={updateMenu}>
//             <div className={burgerClass}></div>
//             <div className={burgerClass}></div>
//             <div className={burgerClass}></div>
//         </div>
//       </nav>

//       <div className={menuClass}></div>
//     </div>
//   )
// }

// export default Navbar
