import styles from "@/styles/Home.module.css";
import Image from "next/image";
import NavFirst from "@/component/navFirt";
import ContadorYoutube from "./ContadorYoutube";
import ContadorFacebook from "./ContadorFacebook";
import ContadorInstagram from "./ContadorInstagram";
import VideoPage from "./VideoTrabalho";
import Dupla from "./Dupla";
import Footer from "./Footer";

export default function HeadDupla() {
  return (
    <section className={styles.HeadDuplaGeral}>
      <div>
        <NavFirst />
      </div>
      <div className={styles.HeadDuplaContainer}>
        <div className={styles.HeadDuplaLogo}>
          <Image
            src='/logo1.png'
            width={200}
            height={200}
            alt="logotipo"
            className={styles.logoImg}
            priority
          />
        </div>
        <div className={styles.HeadDuplaTexto}>
          <div>
            <span>Ailton Santos & Valter</span>
            <h4>Ouça agora mesmo nas plataformas.</h4>
          </div>
          <div className={styles.iconPlataforma}>
            <a
              href="https://music.apple.com/br/search?term=ailton%20santos%20e%20valter"
              target="_blank"
              rel="noopener noreferrer" // Adicionado para segurança
            >
              <Image
               src="/appleMusicBr.png"
               width={300}
               height={100}
               alt="appleMusic" 
               className="icoPlataf"
              />
            </a>
            <a
              href="https://music.amazon.com.br/search/ailton+santos+e+valter"
              target="_blank"
              rel="noopener noreferrer" // Adicionado para segurança
            >
              <Image
               src="/amazonMusic.png"
               width={300}
               height={100}
               alt="amazonMusic"
               className="icoPlataf"
              />
              
            </a>
            <a
              href="https://open.spotify.com/intl-pt/artist/0r2jSy5QUG94IMniEOP7dS"
              target="_blank"
              rel="noopener noreferrer" // Adicionado para segurança
            >
              <Image
               src="/spotify.png"
               width={300}
               height={100}
               alt="spotify"
               className="icoPlataf"
              />
              
            </a>
            <a
              href="https://www.deezer.com/search/ailton%20santos%20e%20valter"
              target="_blank"
              rel="noopener noreferrer" // Adicionado para segurança
            >
              <Image
               src="/deez.png"
               width={300}
               height={100}
               alt="deezer"
               className="icoPlataf"
              />
              
            </a>
          </div>
        </div>
      </div>
      <div className={styles.contadorRede}>
        <ContadorYoutube />
        <ContadorFacebook />
        <ContadorInstagram />
      </div>
      <div className={styles.linkVideoContainer}>
        <VideoPage />
      </div>
      <div>
        <Dupla />
      </div>
      <div>
      <Footer />
      </div>
    </section>
  );
}

