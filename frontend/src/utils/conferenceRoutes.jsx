const API_BASE_URL = "https://reservations.vigilentmoe.com/reservations";

const TIMEOUT_DURATION = 5000; // 5 seconds

export const getAllConferenceRooms = async () => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_DURATION);

  try {
    const response = await fetch(`${API_BASE_URL}/rooms`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (response.status === 404) {
      throw new Error("No conference rooms found");
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Request timed out");
    }
    console.error("Error fetching conference rooms:", error);
    throw error;
  } finally {
    clearTimeout(timeout);
  }
};
