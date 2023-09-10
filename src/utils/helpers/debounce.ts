/**
 *
 * @param callback Function to call after delay
 * @param delay Delay in milliseconds
 * @returns debounce function that can be called to postpone execution by specified delay
 */
export const getDebounce = (callback: () => void, delay: number) => {
  let timeout: NodeJS.Timeout;

  return function debounce() {
    const handler = () => {
      clearTimeout(timeout);
      callback();
    };

    clearTimeout(timeout);
    timeout = setTimeout(handler, delay);
  };
};

// Ended up not using because of potential issues with the specified requirements
