import '../../App.css';
import * as React from "react";
import Waveform from "./Waveform";
import Form from 'react-bootstrap/Form';
import { AppContext } from '../AppContext';
import { useLongPress } from 'use-long-press';
import { ActionTypes } from '../reducer';


const voiceLists = [
{
  id: 1,
  role: "user",
  url:"https://cdn.pixabay.com/download/audio/2023/07/07/audio_903eda64a3.mp3"
},
{
  id: 2,
  role: "assistant",
  url:"https://cdn.pixabay.com/download/audio/2022/04/01/audio_4172caf766.mp3"
},
{
  id: 3,
  role: "user",
  url:"https://cdn.pixabay.com/download/audio/2022/01/06/audio_d216d318f5.mp3"
},
{
  id: 4,
  role: "assistant",
  url:"https://cdn.pixabay.com/download/audio/2022/04/01/audio_4172caf766.mp3"
},
{
  id: 5,
  role: "user",
  url:"https://cdn.pixabay.com/download/audio/2022/03/12/audio_4933306e99.mp3"
}
];


const VoiceListsRender = ({ items, sharing, isLongPressing }) => {

  return(
    <div  {...isLongPressing()} className={sharing ? "d-flex justify-content-between align-items-center mx-2 mb-2" : items.role === 'assistant' ? 'd-flex justify-content-start align-items-center mx-2 mb-2' : 'd-flex justify-content-end align-items-center mx-2 mb-2'}>
      <span className={sharing ? "d-block" : "d-none"}>
        <Form.Check style={{borderColor: 'red'}} aria-label="option 1" />
      </span>
      <div className={items.role === 'assistant' ? 'p-2 round-2 assistant-wav-style w-75' : 'p-2 round-2 user-wav-style w-75'}>
        <Waveform url={items.url} />
      </div>
    </div>
  )
}


const Main = () => {

  const {state, dispatch } = React.useContext(AppContext);

  const [isSharing, setSharing ] = React.useState(null)

  const bind = useLongPress(() => {
    dispatch({ type: ActionTypes.SHARE });
  });

  React.useEffect(()=>{
    setSharing(state.sharing)
    return () => setSharing(null);
  }, [state])

  return(
    <div className="main">
      { voiceLists.map((voice) => <VoiceListsRender items={voice} sharing={isSharing} isLongPressing={bind} key={voice.id.toString()} />) }
    </div>
  );
}


export default Main
