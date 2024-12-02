import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

export const getMovies = async () => {
  const response = await axios.get(`${API_BASE_URL}/movies`);
  return response.data;
};

export const getMovieById = async (id: number) => {
  const response = await axios.get(`${API_BASE_URL}/movies/${id}`);
  return response.data;
};

export const getSession = async () => {
  const response = await axios.get(`${API_BASE_URL}/sessions`);
  return response.data;
};

export const getSessionById = async (id: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/sessions/${id}`);
    console.log("aaa", response.data.tickets);
    return response.data;
  } catch (error) {
    console.log("deu erro", error);
  }
};

export const startBuyTicketProcess = async () => {
  const response = await axios.post(`${API_BASE_URL}/queue/`);
  return response.data;
};

export const checkQueueState = async (ticket: number) => {
  const response = await axios.get(`${API_BASE_URL}/queue/position`, {
    params: { ticketNumber: ticket },
  });
  return response.data.personAhead;
};

export const buyMovieTicket = async (userId: number, ticketId: number) => {
  const response = await axios.post(
    `${API_BASE_URL}/sales/${userId}/${ticketId}`
  );
  return response.data;
};
