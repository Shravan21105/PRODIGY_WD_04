export const getImageUrl = (path) => {
    return new URL(`./assets/${path}`, import.meta.url).href; // Ensure the path is correct
};
