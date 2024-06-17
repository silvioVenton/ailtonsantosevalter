import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Dupla() {
    return (
        <section className={styles.biografias}>
            <div className={styles.bioAilton}>
                <section>
                    <h1 className={styles.textBio}>Ailton Santos</h1> <br />
                    <p>
                        Cantor, compositor, músico e empresário.
                        Nascido em 27 de abril de 1988 na cidade de Pescador, no estado de Minas Gerais.
                        Em 1991, vim com meus pais, José Santos e Maria Santos, para Várzea Paulista,
                        cidade onde hoje estou com meus 6 irmãos e onde Deus me concedeu minha esposa Tamires
                        e meus filhos Lorany e Lohan.
                        Em 1999, ganhei meu primeiro violão e, a partir de então, a música passou a ser metade de mim.
                    </p>
                </section>
                <Image
                    src="/imgAilton.png"
                    width={400}
                    height={450}
                    alt="Foto de Ailton Santos"
                    className={styles.imageAilton}
                />
            </div>

            <div className={styles.bioValter}>
                <Image
                    src="/imgValter.png"
                    width={400}
                    height={450}
                    alt="Foto de Valter"
                    className={styles.imageValter}  // Corrigi o alt de "Foto de Ailton Santos" para "Foto de Valter"
                />
                <section>
                    <h1 className={styles.textBio}>Valter</h1> <br />
                    <p>
                    Nascido na cidade de Assis Brasil no estado do Acre, família humilde de momentos muito difíceis, filho de 
                    José Ramos e Raquel Ramos e em 2001 vim para São Paulo na cidade de Várzea Paulista em busca de uma vida melhor,
                    e Deus cumprindo seus planos em minha vida onde no mesmo ano conheci o irmão Ailton Santos e desde então temos
                    levado a palavra de Deus através do louvor.
                    Hoje, sou cantor, compositor e empresário, abençoado por Deus que me concedeu minha esposa Maiara Guimalhães e meus filhos
                    Kauan, Nicóle e Samira e meus 7 irmão.
                    </p>
                </section>
                
            </div>

            <div className={styles.bioDupla}>
                {/* Corrigi a tag de image para Image */}
                <Image
                    src="/imgDupl.png"  // Adicione o caminho correto da imagem
                    width={350}
                    height={400}
                    alt="foto da dupla"
                    className={styles.imagemDupla}
                />
                <section className={styles.containerDupla}>
                    <p>23 anos compondo e glorificando as maravilhas de Deus </p>
            
                    <section className={styles.clipes}>
                            <a href="https://youtu.be/kMXRrcNWZPI?si=rvqaId_xzVgVHH6o" target="_blank" rel="noopener noreferrer">
                            <Image
                            src="/tudoporele.jpg"
                            width={250}
                            height={200}
                            alt="album Dependente"
                            className={styles.capaDependente}
                            />
                            </a>
                            <a href="https://youtu.be/wQG9BNrsLDs" target="_blank" rel="noopener noreferrer">
                            <Image
                            src="/duasIgrejas.jpg"
                            width={250}
                            height={200}
                            alt="album Dependente"
                            className={styles.capaDependente}
                            />
                            </a>
                             
                            <a href="https://youtu.be/Gi8Mj69W2dI?si=wgwMnGy68HV9TskE"  target="_blank" rel="noopener noreferrer"> 
                            <Image
                            src="/evitePecado.jpg"
                            width={250}
                            height={200}
                            alt="album Dependente"
                            className={styles.capaDependente}
                            />
                            </a>

                            <a href="https://youtu.be/-hfyk0ArqfE"  target="_blank" rel="noopener noreferrer"> 
                            <Image
                            src="/orasoueternidade.jpg"
                            width={250}
                            height={200}
                            alt="album Dependente"
                            className={styles.capaDependente}
                            />
                            </a>

                            <a href="https://youtu.be/odPE4Y156RY"  target="_blank" rel="noopener noreferrer"> 
                            <Image
                            src="/porquenasci.jpg"
                            width={250}
                            height={200}
                            alt="album Dependente"
                            className={styles.capaDependente}
                            />
                            </a>

                            <a href="https://youtu.be/76ksFiu5W2c"  target="_blank" rel="noopener noreferrer"> 
                            <Image
                            src="/meulouvor.jpg"
                            width={250}
                            height={200}
                            alt="album Dependente"
                            className={styles.capaDependente}
                            />
                            </a>
                        </section>
                        <div className={styles.chamadaCanalYouTube}>
                            <p>Muito mais em nosso canal do </p>
                            <a href="https://www.youtube.com/@ailtonsantosevaltercanalof5218" target="_blank" rel="noopener noreferrer">
                                <Image
                            src="/buttonYouTube.png"
                            width={280}
                            height={70}
                            alt="link para o canal do youtube"
                            className={styles.iconeCanalYouTube}
                            />
                            </a>
                        </div>
                </section>
            </div>
            
        </section>
    );
}

