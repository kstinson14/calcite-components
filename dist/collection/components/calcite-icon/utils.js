import { getAssetPath } from "@stencil/core";
/**
 * Icon data cache.
 * Exported for testing purposes.
 * @private
 */
export const iconCache = {};
/**
 * Icon request cache.
 * Exported for testing purposes.
 * @private
 */
export const requestCache = {};
export const scaleToPx = {
    s: 16,
    m: 24,
    l: 32
};
export async function fetchIcon({ icon, scale, filled }) {
    const size = scaleToPx[scale];
    const id = `${normalizeIconName(icon)}${size}${filled ? "F" : ""}`;
    return new Promise(resolve => {
        if (requestCache[id]) {
            return resolve(requestCache[id]);
        }
        fetch(getAssetPath(`./assets/${id}.json`))
            .then(resp => resp.json())
            .then(path => {
            iconCache[id] = path;
            resolve(path);
        })
            .catch(_ => {
            iconCache[id] = "";
            console.error(`"${id}" is not a valid calcite-ui-icon name`);
            resolve("");
        });
    });
}
/**
 * Normalize the icon name to match the path data module exports.
 * Exported for testing purposes.
 * @private
 */
export function normalizeIconName(name) {
    const numberLeadingName = !isNaN(Number(name.charAt(0)));
    const parts = name.split("-");
    if (parts.length === 1) {
        return numberLeadingName ? `i${name}` : name;
    }
    return parts
        .map((part, index) => {
        if (index === 0) {
            return numberLeadingName ? `i${part.toUpperCase()}` : part;
        }
        return part.charAt(0).toUpperCase() + part.slice(1);
    })
        .join("");
}
