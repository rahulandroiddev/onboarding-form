import React, { useEffect, useRef, useState } from 'react';
import SimplePeer from 'simple-peer';

const Room = ({ match }) => {
  const [peers, setPeers] = useState([]);
  const userVideo = useRef();
  const peersRef = useRef([]);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      userVideo.current.srcObject = stream;

      // Example: Create a peer connection for demonstration
      const peer = new SimplePeer({
        initiator: true,
        trickle: false,
        stream: stream,
      });

      peer.on('signal', (data) => {
        // Send signal data to the server or other peers
      });

      peer.on('stream', (peerStream) => {
        const videoElement = document.createElement('video');
        videoElement.srcObject = peerStream;
        videoElement.play();
        document.body.appendChild(videoElement);
      });

      peersRef.current.push(peer);
      setPeers([...peersRef.current]);
    });
  }, []);

  return (
    <div>
      <h1>{match.params.roomId}</h1>
      <video ref={userVideo} autoPlay playsInline />
      {/* Render other peers' video streams */}
    </div>
  );
};

export default Room;