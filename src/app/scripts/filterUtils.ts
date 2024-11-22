export const filterByCategory = (
  data: any[],
  selectedCategories: string[],
): any[] => {
  if (selectedCategories.length === 0) return data;
  return data.filter((item) => selectedCategories.includes(item.category));
};

export const toggleCategory = (
  category: string,
  selectedCategories: string[],
): string[] => {
  if (selectedCategories.includes(category)) {
    return selectedCategories.filter((c) => c !== category);
  }
  return [...selectedCategories, category];
};
