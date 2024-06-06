import styles from "@/styles/Home.module.css"
import VerVideoTrabalho from './VerVideoTrabalho';

const VideoPage = () => {
  const videoId = 'asVC4gYnMH8'; // Substitua pelo ID do vídeo desejado

  return (
    <div className={styles.vdTrabalho}>
      <h1>Assista nosso novo clipe de trabalho</h1>
      <VerVideoTrabalho videoId={videoId} />
    </div>
  );
};

export default VideoPage;


