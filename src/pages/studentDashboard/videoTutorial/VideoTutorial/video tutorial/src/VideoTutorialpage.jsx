import styles from "./VideoTutorial.module.css";

export default function VideoTutorialPage() {
  return (
    <div className={styles.pageBackground}>
      <Navbar />

      <div className={styles.contentArea}>
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        <main className={styles.main}>
          <div className={styles.videoArea}>
            <div className={styles.content}>
              <div className={styles.videoWrapper}>
                <iframe
                  src="https://player.vimeo.com/video/148751763"
                  title="Scratch Overview"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className={styles.cardFooter}>© LevelUp Works 2020</div>
    </div>
  );
}
