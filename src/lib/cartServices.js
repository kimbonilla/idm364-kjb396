import { writable } from 'svelte/store';

export const bag = writable([]);
export const latestOrder = writable([]);

export function addToBag(product) {
    bag.update(items => {
    const existing = items.find(item => item.id === product.id);
    if (existing) {
        return items.map(item =>
        item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
    }
    return [...items, { ...product, quantity: 1 }];
    });
}

export function removeFromBag(productId) {
    bag.update(items => {
    const existing = items.find(item => item.id === productId);
    if (existing && existing.quantity > 1) {
        return items.map(item =>
        item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
    }
    return items.filter(item => item.id !== productId);
    });
}

export function deleteFromBag(productId) {
    bag.update(items => items.filter(item => item.id !== productId));
}

export function clearBag() {
    bag.set([]);
}
