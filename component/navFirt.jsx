import styles from "@/styles/Home.module.css"
import Image from "next/image"
export default function NavFirst(){
    return(
        <section className={styles.navbar}>
            
                <h3>MInistério Ailton Santos e Valter</h3>
            
            <div className={styles.icoNavbarRedes}>
                <a href="https://www.facebook.com/tamireseailtonsantos" target="_blank" rel="noopener noreferrer">
                <Image
                src="/facebookbr.png"
                width={30}
                height={30}
                alt="icone facebook"
                className={styles.iconeNavbarFacebook}
                />
                </a>
                <a href="https://www.instagram.com/ailtonsantosevalter/" target="_blank" rel="noopener noreferrer">
                <Image
                src="/inst.png"
                width={30}
                height={30}
                alt="icone instagram"
                className={styles.iconeNavbarInstagram}
                />
                </a>
                <a href="https://www.youtube.com/@ailtonsantosevaltercanalof5218" target="_blank" rel="noopener noreferrer">
                <Image
                src="/logoYouBr.png"
                width={30}
                height={30}
                alt="icone Youtube"
                className={styles.iconeNavbarYouTube}
                />
                </a>
               
            </div>


        </section>
    )
}