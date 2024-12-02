import TimelineData from "@/data/TimelineData";

export const fetchData = async (): Promise<any[]> => {
  try {
    return Promise.resolve(TimelineData);
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
