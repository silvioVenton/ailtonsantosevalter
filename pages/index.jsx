import Overlay from "@/component/overlay";
import HeadDupla from "@/component/headDupla";
import styles from '@/styles/Home.module.css';



export default function Video() {
  return (
    <div>
      <video className={styles.video} autoPlay muted loop>
        <source src="/justo.mp4" type="video/mp4" />
      </video>
      <Overlay />
      <main className={styles.principal}>
        <HeadDupla />
        
      </main>
    </div>
  );
}

