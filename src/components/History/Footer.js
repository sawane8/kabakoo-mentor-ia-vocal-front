import '../../App.css';
import * as React from 'react';
import { AppContext } from '../AppContext';
import { ActionTypes } from '../reducer';

const Footer = () => {

  const { state, dispatch } = React.useContext(AppContext);
  const { sharing } = state

  const onPress = () => {
      dispatch({ type: ActionTypes.SHARE });
  }

  return(
    <div className={sharing ? "position-fixed d-block w-100 m-0 p-0 bottom-0" : "d-none"}>
      <div
        className="footer"
        style={{ cursor: 'pointer' }}
        onClick={onPress}>
        <p className="p-3 m-0">Annuler</p>
      </div>
    </div>
  )
}

export default Footer
