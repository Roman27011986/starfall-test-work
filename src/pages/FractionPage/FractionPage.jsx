import { useRef } from "react";
import  {  Carousel  }  from  'react-responsive-carousel';

import Fraction from "../../components/Fracton/Fraction";

import styles from "./FractionPage.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function FractionPage() {
    const slider = useRef(null);
    
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Fraction</h1>
            <p className={styles.text}>Choose your Fraction</p>

            <Carousel 
                ref={slider} 
                showThumbs={false}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                >
                <div className={styles.fractionWrapper}>
                    <Fraction />
                    <Fraction />
                </div>
                <div className={styles.fractionWrapper}>
                    <Fraction />
                    <Fraction />
                </div>
            </Carousel>
            
            <button 
                className={styles.btnNext} 
                onClick={() => slider?.current?.onClickNext()}
            >
                Next
            <span className={styles.carouselText}>
                Battleship
            </span>
            </button>
            <button 
                className={styles.btnPrev} 
                onClick={() => slider?.current?.onClickPrev()}
            >
                Prev
            <span className={styles.carouselText}>
                Battleship
            </span>
            </button>
        </div>
    )
}