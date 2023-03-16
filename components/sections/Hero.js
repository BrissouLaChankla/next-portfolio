import styles from '../../styles/Hero.module.scss';
import Lottie from "react-lottie";
import animationData from "../../public/lotties/8167-simple-scroll-down-icon.json";
import ThreeDButtons from '../ThreeDButtons';
import Image from 'next/image';
import Avatar from '@/public/photos/avatar.jpg';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


function Hero() {
    

    return (
        <div className="vh-100 bg-dark d-flex align-items-center justify-content-center">
            <div className="text-white text-center">
                <Image src={Avatar} width={110} height={110} className='rounded-circle' />
                <h1 className="mt-4">Brice Eliasse</h1>
                <p>I'm a Web Developer</p>
                <div className="d-flex justify-content-evenly fs-4">
                    <a href="#" className="text-white">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="text-white">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="#" className="text-white">
                        <i class="bi bi-file-earmark-person-fill"></i>
                    </a>

                </div>
                <div className="mt-4">
                    <ThreeDButtons text="Me contacter"></ThreeDButtons>
                </div>
            </div>
                <a href="#" className={styles.lottieSection}>
                    <small className="text-white">Scroll Down</small>
                    <Lottie options={defaultOptions} height={40} width={40} />
                </a>
        </div>
    );
}

export default Hero;
