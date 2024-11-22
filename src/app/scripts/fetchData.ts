export const fetchData = async (): Promise<any[]> => {
  try {
    const response = await fetch("/data/timeline.json");
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
