import styles from "@/styles/Home.module.css";
export default function Footer(){
    return(
        <section className={styles.containerFooter}>
            <div className={styles.localizacao}>
                <h2>Cidade de Várzea Paulista</h2><br />
                <h3>São Paulo</h3>
            </div>
            <div className={styles.contatos}>
                <h2>Contatos para Eventos</h2><br />
                <h5>de segunda a sexta-feira</h5><br />
                <h5>das 9:00 as 17:00 hrs</h5><br />
                <h3>(11) 97672-8051</h3>
            </div>
        
        </section>
    )
}