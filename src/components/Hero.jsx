// // import { useEffect } from "react";
// // import AOS from "aos";
// // import "aos/dist/aos.css";  // Make sure this is imported
// // import {Link} from "react-router-dom"
// // const Hero = () => {
// //   useEffect(() => {
// //     AOS.init({
// //       duration: 1000,
// //       once: true,
// //       // disable: "mobile",  // comment out for testing on mobile or viewport less than 768px
// //       offset: 100,
// //       easing: "ease-in-out",
// //     });
// //   }, []);

// //   return (
// //     <section
// //       className="h-[700px] bg-hero bg-no-repeat bg-cover bg-center py-10 px-4"
// //       style={{ backgroundImage: "url('/src/img/clothe3.jpg')" }}
// //     >
// //       <div className="container mx-auto flex justify-around h-full">
// //         {/* text */}
// //         <div className="flex flex-col justify-center">
// //           <div
// //             className="font-semibold flex items-center text-white text-xl uppercase"
// //             data-aos="fade-right"
// //           >
// //             <div className="w-[30px] h-[2px] mr-3 bg-cyan-500"></div>Hot Trend
// //           </div>
// //           <div data-aos="flip-left">

// //           <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4  text-yellow-100  hover:-offset-4   hover:scale-105                     
// //       transition-transform duration-200 ease-in
// // "  >
// //             Fresh Fashion Finds
// //             <br />
// //             <span
// //               className="font-light text-white text-shadow-black"
// //               data-aos="fade-up"
// //             >
// //               new collection
// //             </span>
// //           </h1>




    
  




// //           </div>
// //           <Link
// //             to={"/"}
// //             className="self-start uppercase font-semibold border-b-2 border-primary bg-black rounded-md px-6 py-4 text-white hover:bg-blue-500 hover:text-black hover:font-semibold"
// //             data-aos="fade-up"
// //           >
// //             Discover More
// //           </Link>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;



// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Link } from "react-router-dom";
// import clothe3 from '../img/clothe3.jpg';

// const Hero = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       offset: 100,
//       easing: "ease-in-out",
//     });
//   }, []);

//   return (
//     <section
//       className="h-[550px] sm:h-[650px] md:h-[700px] lg:h-[800px] bg-no-repeat bg-cover bg-center relative px-4 flex items-center"
//       style={{
//         backgroundImage: {clothe3}, 
//       }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-0" />
//       <div className="container mx-auto z-10 relative flex flex-col md:flex-row h-full justify-between items-center">
//         {/* Text Section */}
//         <div className="text-white max-w-xl space-y-6 md:space-y-8 pt-6 md:pt-0">
//           <div
//             className="font-semibold flex items-center text-lg md:text-xl uppercase tracking-widest"
//             data-aos="fade-right"
//           >
//             <div className="w-8 h-1 rounded-full mr-4 bg-cyan-500" />
//             Hot Trend
//           </div>
//           <h1
//             className="uppercase text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-extrabold mb-2 leading-none drop-shadow-xl"
//             data-aos="fade-down"
//           >
//             Fresh Fashion Finds
//             <br />
//             <span className="font-light text-yellow-300 md:text-white md:opacity-90 block" data-aos="fade-up">
//               new collection
//             </span>
//           </h1>
//           <p
//             className="text-white/90 text-lg md:text-xl font-medium max-w-md"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             Discover the season’s hottest clothes, books, shoes, and accessories—handpicked for style and comfort.
//           </p>
//           <div data-aos="fade-up" data-aos-delay="400">
//             <Link
//               to="/products"
//               className="inline-block px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 font-semibold uppercase text-lg transition-all tracking-wider shadow-md shadow-black/20"
//             >
//               Explore More
//             </Link>
//           </div>
//         </div>
//         {/* Optional hero image or illustration can go here */}
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
// Local import for background image (adjust path as needed)
import clothe3 from "../img/clothe3.jpg";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      // Responsive height and background image
      className="relative min-h-[400px] h-[550px] sm:h-[650px] md:h-[700px] lg:h-[800px] flex items-center px-4"
      style={{
        backgroundImage: `url(${clothe3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Gradient Overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-0" />

      <div className="container mx-auto relative z-10 flex flex-col md:flex-row h-full justify-between items-center">
        {/* Text Section */}
        <div className="text-white max-w-xl space-y-6 md:space-y-8 py-8 md:py-0">
          <div
            className="font-semibold flex items-center text-lg md:text-xl uppercase tracking-widest"
            data-aos="fade-right"
          >
            <div className="w-8 h-1 rounded-full mr-4 bg-cyan-500" />
            Hot Trend
          </div>
          <h1
            className="uppercase text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-extrabold mb-2 leading-none drop-shadow-xl"
            data-aos="fade-down"
          >
            Fresh Fashion Finds
            <br />
            <span className="font-light text-yellow-300 md:text-white md:opacity-90 block" data-aos="fade-up">
              new collection
            </span>
          </h1>
          <p
            className="text-white/90 text-lg md:text-xl font-medium max-w-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Discover the season’s hottest clothes, books, shoes, and accessories—handpicked for style and comfort.
          </p>
          <div data-aos="fade-up" data-aos-delay="300">
            <Link
              to="/"
              className="inline-block px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 font-semibold uppercase text-lg transition-all tracking-wider shadow-md shadow-black/20"
            >
              Explore More
            </Link>
          </div>
        </div>
        {/* Optional hero image/illustration for large screens */}
        {/* <img src={clothe3} alt="Fashion" className="hidden md:block md:max-w-md rounded-xl shadow-lg" /> */}
      </div>
    </section>
  );
};

export default Hero;
