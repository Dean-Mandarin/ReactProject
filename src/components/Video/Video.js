import React from 'react';

//styles
import './style.css';
import './media.css';

const Video = () => {
  return (
    <section className="video anim-items">
      {/*Video from YouTube*/}
      <div className="video">
        <iframe width="80%" height="500px" src="https://www.youtube.com/embed/Ynr4o0eOjdg"
                title="YouTube video player"
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                    picture-in-picture" allowFullScreen></iframe>
      </div>

    </section>
  );
};

export default Video;