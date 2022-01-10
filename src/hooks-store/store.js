import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
let globalState = {}; //gobla state outside of fucntions avaialible to all coponents
let listeners = []; //array of functions that change when state changes
let actions = {};

//STORE SETUP
export const useStore = (shouldListen = true) => {
  // store changes
  const setState = useState(globalState)[1]; //dont put in dependancy if destructure
  //can forward payload to action function
  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload); // get the right action with action identifier then CALL it by passsing global state
    globalState = { ...globalState, ...newState }; // merge the new state with old
    for (const listener of listeners) {
      //go through every listener function and update with th enew state
      listener(globalState);
    }
  };

  //when unmount remove listener
  //   useEffect(() => {
  //     // only listen if pass shouldListen, that way when only useStore for dispatch dont rerender the comp
  //     if (shouldListen) listeners.push(setState); //listen to all functions that need state change
  //     return () => {
  //       if (shouldListen) listeners = listeners.filter((li) => li !== setState);
  //     };
  //   }, [setState, shouldListen]);
  //   return [globalState, dispatch];
  // };

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

//set and change actions when have your own state
export const initStore = (userActions, initialState) => {
  if (initialState) {
    //if initialState not null, merge the custom state to initial state
    globalState = { ...globalState, ...initialState };
    actions = { ...actions, ...userActions };
  }
};

//when useStore, component get access to global state and can listen to its changes
//Add dispatch actions
