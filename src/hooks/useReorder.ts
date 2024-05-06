import { useState } from "react"

type Item = {
    id: string | number;
}

export function useReorder<T extends Item>(currentOrder: T[]) {
    const [reordered, reorder] = useState<T[]>(currentOrder)

    const reset = () => {
        reorder(currentOrder)
    }

    const isReordered = currentOrder.some((item, index) => item.id !== reordered[index].id)

    return {
        reordered,
        reorder,
        reset,
        isReordered,
    }
}