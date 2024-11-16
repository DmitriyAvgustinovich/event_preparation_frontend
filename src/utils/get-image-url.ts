export const getImageUrl = (imageFileName?: string) => {
  return `${import.meta.env.VITE_BASE_URL}${imageFileName}`;
};
