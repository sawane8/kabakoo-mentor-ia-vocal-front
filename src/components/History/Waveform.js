import * as React from "react";
import '../../App.css';
import WaveSurfer from "wavesurfer.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const formWaveSurferOptions = ref => ({
  container: ref,
  waveColor: "#eee",
  progressColor: "#B89FBF",
  height: 50,
  cursorWidth: 0,
  barWidth: 3,
  barRadius: 3,
  responsive: true,
  dragToSeek: true,
  fillParent: true,
  normalize: true, // If true, normalize by the maximum peak instead of 1.0.
  partialRender: true // Use the PeakCache to improve rendering speed of large waveforms.
});

export default function Waveform({ url }) {
  const waveformRef =  React.useRef(null);
  const wavesurfer = React.useRef(null);
  const [playing, setPlay] = React.useState(false);

  React.useEffect(() => {
    setPlay(false);
    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);
    wavesurfer.current.load(url);
    wavesurfer.current.on('audioprocess', function() {
    if (wavesurfer.current.isPlaying()) {
      let totalTime = wavesurfer.current.getDuration()
          let currentTime = wavesurfer.current.getCurrentTime()
          let remainingTime = totalTime - currentTime;
          console.log(Math.round(remainingTime * 1000))
    }})
    return () => wavesurfer.current.destroy();
  }, [url]);

  const handlePlayPause = () => {
    setPlay(!playing);
    wavesurfer.current.playPause();
  };

  return (
    <div className="d-flex align-items-center justify-content-between p-0 row m-0 w-100">
      <div className="col-2 p-0">
        <button className="d-flex justify-content-center align-items-center" onClick={handlePlayPause}>
          {!playing ? <i className="bi bi-play-fill"></i> : <i className="bi bi-pause-fill"></i>}
        </button>
      </div>
        <div className="col-9 p-0" id="waveform" ref={waveformRef} style={{textAlign:'center'}} />
    </div>
  );
}
