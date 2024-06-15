import Contador from "@/component/contador"
import Image from "next/image";
import styles from "@/styles/Home.module.css"
export default function ContadorYoutube(valor){
    return(
        <>
        <section className={styles.sessaoYouTube}>
            <div className={styles.containerSessaoYouTube}>
            
            <Image
                src="/logoYouVerm.png"
                width={80}
                height={80}
                alt=" canal do youtube"
                className={styles.imgSessaoYouTube}

            />
            
            <div className={styles.conteudoTxtContador}>
                    <div className={styles.valorContador}>
                            <span><Contador valor="4000"/></span>
                            <h4>Inscritos</h4>
                    </div>
                   
            
                
            </div>
            </div>
        </section>
        </>
    )
}