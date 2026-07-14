import styles from "./VideoTutorial.module.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function VideoTutorial() {
  return (
    <div className={styles.app}>
      <Sidebar />

      <div className={styles.pageContent}>
        <Navbar />

        <main className={styles.main}>
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.videoWrapper}>
                <iframe
                  src="https://player.vimeo.com/video/148751763"
                  title="Scratch Overview"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className={styles.cardFooter}>© LevelUp Works 2020</div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
