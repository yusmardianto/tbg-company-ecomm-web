// import React, { Component } from 'react';
// import Masonry from 'react-masonry-component';
// import Link from 'next/link';

// const masonryOptions = {
//     transitionDuration: 0
// };
 
// export class Projects extends Component {
//     render() {
//         const images = this.props.images.map((image, idx) => {
//             return (
//                 <div className="col-lg-4 col-sm-6 item" key={idx}>
//                     <div className="single-latest-projects">
//                         <img src={image.image} alt="portfolio-image" />

//                         <div className="content">
//                             <span>{image.category}</span>
//                             <h3>{image.title}</h3>
//                         </div>

//                         <Link href="/project-details">
//                             <a className="link-btn"></a>
//                         </Link>
//                     </div>
//                 </div>
//             )
//         })
//         return (
//             <div className="our-latest-projects ptb-80">
//                 <div className="container">
//                     <div className="section-title text-left">
//                         <h2>Our Latest <span>Projects</span></h2>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                     </div>
                 
//                     <Masonry
//                         className={'row'} // default ''
//                         elementType={'div'} // default 'div'
//                         options={masonryOptions} // default {}
//                         disableImagesLoaded={false} // default false
//                         updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
//                     >
//                         {images}
//                     </Masonry>
//                 </div>
//             </div>
//         );
//     }
// }

// Projects.defaultProps = {
//     images: [
//         { 
//             image: "/images/Home/gallery/1.jpg",
//             category: "Marketing",
//             title: "Marketing & Reporting"
//         },
//         { 
//             image: "/images/Home/gallery/2.jpg",
//             category: "Marketing",
//             title: "Marketing & Reporting"
//         },
//         { 
//             image: "/images/Home/gallery/3.jpg",
//             category: "Marketing",
//             title: "Marketing & Reporting"
//         },
//         { 
//             image: "/images/Home/gallery/4.jpg",
//             category: "Marketing",
//             title: "Marketing & Reporting"
//         },
//         { 
//             image: "/images/Home/gallery/5.jpg",
//             category: "Marketing",
//             title: "Marketing & Reporting"
//         },
//         { 
//             image: "/images/Home/gallery/6.jpg",
//             category: "Marketing",
//             title: "Marketing & Reporting"
//         },
//         { 
//             image: "/images/Home/gallery/7.jpg",
//             category: "Marketing",
//             title: "Marketing & Reporting"
//         },
//         { 
//             image: "/images/Home/gallery/8.jpg",
//             category: "Marketing",
//             title: "Marketing & Reporting"
//         },
//         { 
//             image: "/images/Home/gallery/9.jpg",
//             category: "Marketing",
//             title: "Marketing & Reporting"
//         },
//     ]
// }

// export default Projects;

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    margin: 30,
    autoplayTimeout: 5000,
    responsive: {
        0:{
            items: 1,
        },
        576:{
            items: 2,
        },
        768:{
            items: 2,
        },
        1024:{
            items: 3,
        },
        1200:{
            items: 4,
        }
    },
}

const Projects = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    
    return (
        <div id="gallery" className="ml-projects-area pt-0 ptb-80">
            <div className="container">
                <div className="section-title st-fs-28">
                    <h2>Thamrin Group Gallery</h2>
                    <div className="bar"></div>
                </div>
            </div>

            <div className="container-fluid">
                {display ? <OwlCarousel 
                    className="ml-projects-slides owl-carousel owl-theme"
                    {...options}
                >  
                    <div className="single-ml-projects-box">
                        <img src="/images/Home/gallery/1.jpg" alt="image" />
                    </div>

                    <div className="single-ml-projects-box">
                        <img src="/images/Home/gallery/2.jpg" alt="image" />
                    </div>

                    <div className="single-ml-projects-box">
                        <img src="/images/Home/gallery/3.jpg" alt="image" />
                    </div>

                    <div className="single-ml-projects-box">
                        <img src="/images/Home/gallery/4.jpg" alt="image" />
                    </div>

                    <div className="single-ml-projects-box">
                        <img src="/images/Home/gallery/5.jpg" alt="image" />
                    </div>
                    
                    <div className="single-ml-projects-box">
                        <img src="/images/Home/gallery/6.jpg" alt="image" />
                    </div>

                    <div className="single-ml-projects-box">
                        <img src="/images/Home/gallery/7.jpg" alt="image" />
                    </div>

                    <div className="single-ml-projects-box">
                        <img src="/images/Home/gallery/8.jpg" alt="image" />
                    </div>

                    <div className="single-ml-projects-box">
                        <img src="/images/Home/gallery/9.jpg" alt="image" />
                    </div>
                </OwlCarousel> : ''}
            </div>

            {/* Shape Images */}
            <div className="shape1">
                <img src="/images/shape1.png" alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape3">
                <img src="/images/shape3.svg" alt="shape" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape7">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
        </div>
    );
}

export default Projects;