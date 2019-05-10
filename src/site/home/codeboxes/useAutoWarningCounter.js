import { useState, useEffect } from 'react';

/* Hook that returns a state with two properties:
 *   count: Integer that regularly increments 
 *   warning: Boolean that indicates the counter is going to increment soon
 * warning will be false for <duration> ms. Then, it will be true for 
 * <warning_duration> ms. Then, count will increment, and warning will reset to
 * true.
 */
const useAutoWarningCounter = ({ warning_duration, duration }) => {
  const [ state, setState ] = useState({
    count: 0,
    warning: false,
  });

  useEffect(() => {
    if(!state.warning) {

      // Wait, then set the warning
      setTimeout(() => {
        setState({
          count: state.count,
          warning: true
        })
      }, duration);

    } else {
      // Wait, then increment
      setTimeout(() => {
        setState({
          count: state.count + 1,
          warning: false,
        });
      }, warning_duration);
    }
  });

  return state;
};

export default useAutoWarningCounter;
