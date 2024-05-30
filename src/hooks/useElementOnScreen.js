import { useRef, useState, useEffect, useCallback } from 'react'

export const useElementOnScreen = options => {
    const containerRef = useRef(null)
    const setRef = useCallback(node => {
        if (containerRef.current) {
            // Make sure to cleanup anu events/references added to the last instance
        }

        if (node) {
            // Check if a node is actually passed. Otherwise node would be null.
            // You can now do what you need to, addEventListeners, measure, etc.
        }

        // Save a reference to the node
        containerRef.current = node
    }, [])

    const [isVisible, setIsVisible] = useState(false)

    const callbackFunction = entries => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)
        if (containerRef.current) observer.observe(containerRef.current)

        return () => {
            if (containerRef.current) observer.observe(containerRef.current)
        }
    }, [containerRef, options])

    return [containerRef, isVisible]
}
