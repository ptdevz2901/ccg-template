import React, { useState } from "react";
import "./index.css";

export default function VideoModal({ modal, setModal }) {
    const [videoLoading, setVideoLoading] = useState(true);


    const spinner = () => {
        setVideoLoading(!videoLoading);
    };

    return (
        <div className="App">
            {modal ? (
                <section className="modal__bg">
                    <div className="modal__align" onClick={() => {
                        setModal(false)
                    }}>
                        <div className="modal__content" modal={modal}>
                            <div onClick={setModal}>
                                Close
                            </div>
                            <div className="modal__video-align">
                                {videoLoading ? (
                                    <div className="modal__spinner">
                                        Loading...
                                    </div>
                                ) : null}
                                <iframe
                                    className="modal__video-style"
                                    onLoad={spinner}
                                    loading="lazy"
                                    width="800"
                                    height="500"
                                    src="https://www.youtube.com/embed/4UZrsTqkcW4"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
        </div>
    );
}
