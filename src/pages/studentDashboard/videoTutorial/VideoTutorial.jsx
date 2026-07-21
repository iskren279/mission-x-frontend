import styles from "./VideoTutorial.module.css";

export default function VideoTutorial() {
  return (
    <main className={styles.main}>
      <div className={styles.videoArea}>
        <div className={styles.videoWrapper}>
          {/* 
            The YouTube embed URL allows the video
            to be displayed inside the React page.
            The iframe keeps the video separate from
            the application code.
          */}
          <iframe
            src="https://www.youtube.com/embed/RDqgtWuhEgU"
            title="Scratch Tutorial"
            frameBorder="0"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture
            "
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </main>
  );
}
