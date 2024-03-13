// // import ScrollIndicator from 'components/ScrollIndicator/ScrollIndicator';
// import { useApp } from 'context/AppContext';
// import { useEffect } from 'react';
// import { useRef } from 'react';
// import { useState } from 'react';
// // import { HiOutlineMenuAlt2 } from 'react-icons/hi';
// // import { IoMdClose } from 'react-icons/io';
// // import { Container, Nav } from 'styles/GlobalStyles';
// import { gsap } from 'gsap';

// const Navbar = () => {
//   const { state, dispatch } = useApp();
//   const { theme } = state;
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const mobileMenuRef = useRef();
//   const [bgBlur, setBgBlur] = useState(false);

//   const handleThemeToggle = () => {
//     dispatch({
//       type: 'TOGGLE_THEME',
//       payload: theme === 'light' ? 'dark' : 'light',
//     });
//   };

//   useEffect(() => {
//     const animation = gsap.fromTo(
//       mobileMenuRef.current.children,
//       { x: -300 },
//       {
//         x: 0,
//         stagger: 0.02,
//       }
//     );

//     return () => {
//       animation.kill();
//     };
//   });

//   useEffect(() => {
//     function scrollCheker() {
//       if (window.scrollY > 100) {
//         setBgBlur(true);
//       } else {
//         setBgBlur(false);
//       }
//     }
//     document.addEventListener('scroll', scrollCheker);

//     return () => window.removeEventListener('scroll', scrollCheker);
//   }, []);

//   //   return (
//   //     <Header mobile={mobileMenuOpen} bgBlur={bgBlur} theme={theme}>
//   //       <ScrollIndicator />
//   //       <Container>
//   //         <Nav>
//   //           <BurgerMenu onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//   //             {mobileMenuOpen ? <IoMdClose /> : <HiOutlineMenuAlt2 />}
//   //           </BurgerMenu>
//   //         </Nav>
//   //       </Container>
//   //     </Header>
//   //   );
// };
