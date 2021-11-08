import { useState, useEffect } from "react"

export default function useOnScreen(ref, options = {}) {
    const [isOnScreen, setOnScreen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setOnScreen(entry.isIntersecting);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            observer.unobserve(ref.current);
        }
    }, [isOnScreen, ref, options]);


    return isOnScreen;
}