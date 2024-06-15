import Contador from "@/component/contador"
import Image from "next/image";
import styles from "@/styles/Home.module.css"
export default function ContadorFacebook(valor){
    return(
        <>
        <div className={styles.sessaoFacebook}>
            <div className={styles.containerSessaoFacebook}>
            
            <Image
                src="/facebook-color.png"
                width={80}
                height={80}
                alt="youtube"
                className={styles.imgSessaoFacebook}
            />
            
            <div className={styles.conteudoTxtContador}>
            <div className={styles.valorContador}>
                    <span><Contador valor = "1300" /></span>
                    <h4>Seguidores</h4>
                </div>
                
                
            </div>
            </div>
        </div>
        </>
    )
}