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
