import { useState, useEffect } from "react";

interface windowSize {
  width?: number;
  height?: number;
}

export function useWindowSize(): windowSize {
  const isClient: boolean = typeof window === "object";

  function getSize(): windowSize {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState<windowSize>(getSize);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
