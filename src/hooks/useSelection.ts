import { useEffect, useState } from "react"

type SelectableItem = {
    id: string
}

export const useSelection = <T extends SelectableItem>(allItems: T[]) => {
    const [selectionModeEnabled, setSelectionModeEnabled] = useState<boolean>(false)
    const [selectedItems, setSelectedItems] = useState<T[]>([])

    useEffect(() => {
        setSelectedItems(prevSelectedItems => {
            const filteredSelectedItems = prevSelectedItems.filter(selectedItem =>
                allItems.some(item => item.id === selectedItem.id)
            )
            
            const hasChanged = JSON.stringify(filteredSelectedItems) !== JSON.stringify(prevSelectedItems)
    
            if (hasChanged) {
                return filteredSelectedItems
            } else {
                return prevSelectedItems
            }
        })
    }, [allItems])
    
    const clearSelection = () => {
        setSelectedItems([])
        setSelectionModeEnabled(false)
    }

    const toggleSelection = (item: T) => {
        setSelectedItems(prevSelectedItems => {
            const itemIndex = prevSelectedItems.findIndex(selectedItem => selectedItem.id === item.id)
            if (itemIndex !== -1) {
                const updatedItems = [...prevSelectedItems]
                updatedItems.splice(itemIndex, 1)
                return updatedItems
            } else {
                return [...prevSelectedItems, item]
            }
        })
    }

    const selected = (item: T) => {
        return selectedItems.some(selectedItem => selectedItem.id === item.id)
    }

    const select = (newItems: T | T[]) => {
        setSelectedItems(prevSelectedItems => {
            const itemsToAdd = Array.isArray(newItems) ? newItems : [newItems]
            const uniqueNewItems = itemsToAdd.filter(newItem => !selected(newItem))
            return [...prevSelectedItems, ...uniqueNewItems]
        })
    }

    return {
        selectionModeEnabled,
        selectedItems,
        setSelectionModeEnabled,
        clearSelection,
        toggleSelection,
        select,
        selected,
    }
}
