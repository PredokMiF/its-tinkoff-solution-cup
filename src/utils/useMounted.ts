import { useEffect, useRef } from 'react'

export function useMounted() {
    const mountedRef = useRef(true)

    useEffect(() => () => {
        mountedRef.current = false
    }, [])

    return mountedRef
}
