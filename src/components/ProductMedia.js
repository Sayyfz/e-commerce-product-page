import { NextIcon, PreviousIcon } from '../components-svg/Icons'
import {useEffect, useRef} from 'react'
import '../css/ProductMedia.css'

const ProductMedia = () => {


    const thumbArr = [useRef(null),useRef(null),useRef(null),useRef(null)]
    const myCarousel= useRef(null) 

    

    useEffect(() => {

        const onSlid = (event) => {
            thumbArr[event.from].current.classList.remove('active')
            thumbArr[event.to].current.classList.add('active')
        }
    
        myCarousel.current.addEventListener('slide.bs.carousel', onSlid)

    }, [])

    return (
        
            <div className="product-media col-md-6  ">
                <div id="carouselFade" className="carousel slide carousel-fade" data-bs-interval="false"  ref={myCarousel}>
                    
                    <div className="carousel-inner">
                        <div className="carousel-item active d-flex justify-content-center">
                            <img  src={process.env.PUBLIC_URL + '/image-product-1.jpg'} className="d-block w-100" alt=""/>
                        </div>
                        <div className="carousel-item d-flex justify-content-center">
                            <img  src={process.env.PUBLIC_URL + '/image-product-2.jpg'} className="d-block w-100" alt=""/>
                        </div>
                        <div className="carousel-item d-flex justify-content-center">
                            <img src={process.env.PUBLIC_URL + '/image-product-3.jpg'} className="d-block w-100" alt=""/>
                        </div>
                        <div className="carousel-item d-flex justify-content-center">
                            <img src={process.env.PUBLIC_URL + '/image-product-4.jpg'} className="d-block w-100" alt=""/>
                        </div>
                    </div>
                    
                    <button className="carousel-control-prev ms-3" type="button" data-bs-target="#carouselFade" data-bs-slide="prev">
                        <PreviousIcon />
                    </button>

                    <button className="carousel-control-next me-3" type="button" data-bs-target="#carouselFade" data-bs-slide="next">
                        <NextIcon />
                    </button>
                </div>

                <div className="indicators d-flex justify-content-center align-items-center mx-auto">
                    <button  ref={thumbArr[0]} type="button" data-bs-target="#carouselFade" data-bs-slide-to="0" 
                    className='active' aria-current="true" aria-label="Slide 1">
                        <img src={process.env.PUBLIC_URL + "/image-product-1-thumbnail.jpg"} alt="" />
                    </button>
                    <button  ref={thumbArr[1]} type="button" data-bs-target="#carouselFade" data-bs-slide-to="1" aria-label="Slide 2">
                        <img src={process.env.PUBLIC_URL + '/image-product-2-thumbnail.jpg'} alt="" />
                    </button>
                    <button  ref={thumbArr[2]} type="button" data-bs-target="#carouselFade" data-bs-slide-to="2" aria-label="Slide 3">
                        <img src={process.env.PUBLIC_URL + '/image-product-3-thumbnail.jpg'} alt="" />
                    </button>
                    <button  ref={thumbArr[3]} type="button" data-bs-target="#carouselFade" data-bs-slide-to="3" aria-label="Slide 4">
                        <img src={process.env.PUBLIC_URL + '/image-product-4-thumbnail.jpg'} alt="" />
                    </button>
                </div>
               
            </div>
        
        
            
    )
}

export default ProductMedia