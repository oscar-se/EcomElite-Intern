import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import UseSateHook from './hooks/useSate/useSateHook';
// import GiftUseSate from './hooks/useSate/gift-useSate';
// import RadioUseState from './hooks/useSate/radio-useState';
// import CheckboxUseState from './hooks/useSate/checkbox-useState';
// import UseEffectHook from './hooks/useEffect/useEffectHook';
// import ChatApp from './hooks/useEffect/useEffect-chat-app';
// import UseLayoutEffect from './hooks/useLayoutEffect/useLayoutEffecr';
// import UseRef from './hooks/useRef/useRefHook';
// import UseCallback  from './hooks/useCallback/useCallbackHook';
// import UseMemoHook  from './hooks/useMemo/useMemoHook';
// import UseReducer  from './hooks/useReducer/userReducerHook';
import ToDoReducer from './hooks/useReducer/todo';



import reportWebVitals from './reportWebVitals';

//Feck chat 
// tự phát một even 'lesson' mỗi 2s với id tăng dần
function emit(id) {
  setInterval(() => {
    const event = new CustomEvent('lesson', {
      detail: {id: id, name: `Lesson ${id}` }
    });
    window.dispatchEvent(event);
  }, 2000);
}

emit(1);
emit(2);
emit(3);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UseSateHook />
    <GiftUseSate />
    <RadioUseState />
    <CheckboxUseState /> */}
    {/* <UseEffectHook /> */}
    {/* <ChatApp /> */}
    {/* <UseLayoutEffect /> */}
    {/* <UseRef /> */}
    {/* <UseCallback /> */}
    {/* <UseMemoHook /> */}
    {/* <UseReducer /> */}
    <ToDoReducer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
