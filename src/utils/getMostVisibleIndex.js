export const getMostVisibleIndex = (container, itemSelector) => {
  if (!container) return null;

  const containerRect = container.getBoundingClientRect();
  const items = container.querySelectorAll(itemSelector);

  let maxVisibleArea = 0;
  let mostVisibleIndex = null;

  items.forEach((item, index) => {
    const itemRect = item.getBoundingClientRect();
    const visibleWidth =
      Math.min(itemRect.right, containerRect.right) -
      Math.max(itemRect.left, containerRect.left);

    if (visibleWidth > 0) {
      const visibleArea = visibleWidth / itemRect.width;
      if (visibleArea > maxVisibleArea) {
        maxVisibleArea = visibleArea;
        mostVisibleIndex = index;
      }
    }
  });

  return mostVisibleIndex;
};
