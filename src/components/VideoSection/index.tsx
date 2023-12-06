// import React from "react";
// import Container from "@/components/Container";
// import styles from "./VideoSection.module.css";

// function VideoSection() {
//   return (
//     <section>
//       <Container className={styles.videoContainer}>
//         <video className={styles.videoContent} controls>
//           <source src="video/good-city.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <track kind="captions" label="English" srcLang="en" />
//       </Container>
//     </section>
//   );
// }

// export default VideoSection;

// import React from "react";
// import Container from "@/components/Container";
// import styles from "./VideoSection.module.css";

// function VideoSection() {
//   return (
//     <section>
//       <Container className={styles.videoContainer}>
//         <video className={styles.videoContent} controls>
//           <source src="video/good-city.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//           {/* Empty track element for accessibility */}
//           <track kind="captions" label="English" srcLang="en" />
//         </video>
//       </Container>
//     </section>
//   );
// }

// export default VideoSection;

import React from "react";
import Container from "@/components/Container";
import styles from "./VideoSection.module.css";

const VideoSection = () => (
  <section>
    <Container className={styles.videoContainer}>
      <video className={styles.videoContent} controls>
        <source src="video/good-city.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        {/* Empty track element for accessibility */}
        <track kind="captions" label="English" srcLang="en" />
      </video>
    </Container>
  </section>
);

export default VideoSection;
