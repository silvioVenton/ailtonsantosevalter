import Contador from "@/component/contador"
import Image from "next/image";
import styles from "@/styles/Home.module.css"
export default function ContadorInstagram(valor){
    return(
        <>
        <section className={styles.sessaoInstagram}>
            <div className={styles.containerSessaoInstagram}>
            
            <Image
                src="/instagran-color.png"
                width={80}
                height={80}
                alt="youtube"
                className={styles.imgSessaoInstagram}
            />
            
            <div className={styles.conteudoTxtContador}>
            <div  className={styles.valorContador}>
                    <span><Contador valor="1927"/></span>
                    <h4>Seguidores</h4>
                </div>
                
                
            </div>
            </div>
        </section>
        </>
    )
}