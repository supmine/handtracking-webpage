import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Webcam from "react-webcam";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { Hands, HAND_CONNECTIONS } from "@mediapipe/hands";
import Link from "next/link";
import { Camera } from "@mediapipe/camera_utils";
function Test() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const webcamRef = useRef<Webcam>(null);
  var camera = null;

  const videoConstraints = {
    facingMode: "user",
  };

  function detect(results) {
    // console.log("Running");
    // const video = webcamRef.current.video;
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    // Set canvas width
    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext("2d");
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    );
    if (results.multiHandLandmarks) {
      for (const landmarks of results.multiHandLandmarks) {
        drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
          color: "#00FF00",
          lineWidth: 5,
        });
        drawLandmarks(canvasCtx, landmarks, {
          color: "#FF0000",
          lineWidth: 2,
        });
      }
    }
    canvasCtx.restore();
  }

  useEffect(() => {
    const hands = new Hands({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
      },
    });
    hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    hands.onResults(detect);

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      camera = new Camera(webcamRef.current.video, {
        onFrame: async () => {
          try {
            await hands.send({ image: webcamRef.current.video });
          } catch (error) {
            camera.stop();
          }
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  }, []);
  const handleClick = (e) => {
    camera.stop();
    console.log("Free pizza!");
    console.log(e);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Hand-Tracking - Computer Vision</title>
        <link rel="icon" href="/CODEL.ico" />
        <meta name="keywords" content="computer vision project" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="flex justify-center">
          {
            <Webcam
              audio={false}
              ref={webcamRef}
              videoConstraints={videoConstraints}
            />
          }
          {<canvas ref={canvasRef} />}
        </div>
        <div className="flex">
          <Link href={"/"}>
            <button onClick={handleClick}>Back</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Test;
