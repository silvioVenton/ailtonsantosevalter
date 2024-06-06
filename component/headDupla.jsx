import styles from "@/styles/Home.module.css"
import Image from "next/image";
import NavFirst from "@/component/navFirt"
import ContadorYoutube from "./ContadorYoutube";
import ContadorFacebook from "./ContadorFacebook";
import ContadorInstagram from "./ContadorInstagram";
import VideoTrabalho from "./VideoTrabalho";


import YouTubeVideos from "./youtubeVideo";
import VideoPage from "./VideoTrabalho";

export default function HeadDupla(){
    return(
        
        <section className={styles.HeadDuplaGeral}>
            <div><NavFirst /> </div>
        <div className={styles.HeadDuplaContainer}>
       
            <div className={styles.HeadDuplaLogo}>
            
                <Image 
                    src='/logo1.png'
                    width={200}
                    height={200}
                    alt="logotipo "
                    className={styles.logoImg}
                    priority
                 />
            </div>
            <div className={styles.HeadDuplaTexto}>
                    <div>
                        <span>Ailton Santos & Valter</span>
                        <h4>Ousa agora mesmo nas plataformas.</h4>
                    </div>
                    <div className={styles.iconPlataforma}>
                        <a href="https://music.apple.com/br/search?term=ailton%20santos%20e%20valter" target="_blank"><img src="/appleMusicBr.png" alt="appleMusic" /></a>
                        <a href="https://music.amazon.com.br/search/ailton+santos+e+valter" target="_blank"><img src="/amazonMusic.png" alt="amazonMusic" /></a>
                        <a href="https://open.spotify.com/intl-pt/artist/0r2jSy5QUG94IMniEOP7dS" target="_blank"><img src="/spotify.png" alt="spotify" /></a>
                        <a href="https://www.deezer.com/search/ailton%20santos%20e%20valter" target="_blank"><img src="/deez.png" alt="deezer" /></a>
                    </div>
            </div>
     
     </div >
     <div className={styles.contadorRede}>
        
        <ContadorYoutube />
        <ContadorFacebook />
        <ContadorInstagram />
    </div>

    <div className={styles.linkVideoContainer}>
        <VideoPage />
    </div>
    <div>
   
    </div>
     </section>
     
    )
}