import {
  buyMovieTicket,
  checkQueueState,
  startBuyTicketProcess,
} from "@/pages/api/movies";
import { useCallback, useEffect, useState } from "react";

export function useQueue() {
  const [ticketState, setTicketState] = useState(-1);
  const [processStarted, setProcessStarted] = useState(false);
  const [position, setPosition] = useState(-1);

  const startQueue = useCallback(async () => {
    try {
      const { ticketNumber, position } = await startBuyTicketProcess();
      setProcessStarted(true);
      setTicketState(ticketNumber);
      setPosition(position);
    } catch (error) {
      console.error("deu erro aqui:", error);
    }
  }, []);

  const checkState = useCallback(() => {
    if (ticketState === -1) {
      return 0;
    }
    return checkQueueState(ticketState);
  }, [ticketState]);

  const buyTicket = useCallback(async () => {
    await buyMovieTicket(2, 171);
    setProcessStarted(false);
    setTicketState(-1);
    setPosition(-1);
  }, []);

  useEffect(() => {
    if (!processStarted) {
      return;
    }
    const timeOut = setInterval(async () => {
      const queuePosition = await checkState();
      setPosition(queuePosition);
    }, 2000);
    return () => clearInterval(timeOut);
  }, [checkState, processStarted]);

  return {
    startQueue,
    checkState,
    buyTicket,
    ticketState,
    processStarted,
    position,
  };
}
