import AwesomeDebouncePromise from "awesome-debounce-promise";
import { useState } from "react";
import { useAsync } from "react-async-hook";
import useConstant from "use-constant";

// Generic reusable hook
export const useDebouncedInput = (asyncFunction, defaultValue='') => {

    // Handle the input text state
    const [inputText, setInputText] = useState(defaultValue);

    // Debounce the original search async function
    const debouncedInputFunction = useConstant(() =>
      AwesomeDebouncePromise(asyncFunction, 1000)
    );
  
    // The async callback is run each time the text changes,
    // but as the async function is debounced, it does not
    // fire a new request on each keystroke
    const asyncResults = useAsync(
      async () => {
        if (inputText.length === 0) {
          return [];
        } else {
          return debouncedInputFunction(inputText);
        }
      },
      [debouncedInputFunction, inputText]
    );
  
    // Return everything needed for the hook consumer
    return {
      inputText,
      setInputText,
      asyncResults,
    };
  };