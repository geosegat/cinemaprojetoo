import * as React from "react";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import MovieSessionInfo from "@/components/MovieSessionInfo";
import { getMovies, getSession, getSessionById } from "../pages/api/movies";
import SeatSelection from "@/components/SeatSelection";
import ItemSelector from "@/components/ItemSelector";
import { Box, Modal, Typography } from "@mui/material";
import { useQueue } from "@/hooks/useQueue";

interface Movie {
  id: number;
  title: string;
  description: string;
  duration: number;
  genre: string;
  rating: string;
  tittleoriginal: string | null;
  director: string;
  distributor: string;
  castmovie: string;
  country_of_origin: string;
  image_url: string;
  audio_format: string;
}

interface Session {
  id: number;
  movie_id: number;
  room_name: string;
  session_time: string;
}

export default function HomePage() {
  const dates = [
    { label: "Hoje", value: "31/10" },
    { label: "Sex", value: "01/11" },
    { label: "Sab", value: "02/11" },
    { label: "Dom", value: "03/11" },
    { label: "Seg", value: "04/11" },
    { label: "Ter", value: "05/11" },
    { label: "Qua", value: "06/11" },
  ];

  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [sessions, setSessions] = React.useState<Session[]>([]);
  const [tickets, setTickets] = React.useState(0);
  const [selectedMovieId, setSelectedMovieId] = React.useState<number | null>(
    null
  );
  const { position, startQueue, processStarted, buyTicket } = useQueue();

  const formatSessionTime = (timeString: string) => {
    const date = new Date(timeString);
    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleBuyTicket = (movieId: number) => {
    setSelectedMovieId(movieId);
  };

  const buyTickets = async () => {
    await buyTicket();
    setSelectedMovieId(null);
  };

  React.useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getMovies();
        setMovies(moviesData);
      } catch (err) {
        console.error("Erro ao buscar filmes:", err);
      }
    };

    fetchMovies();
  }, []);

  React.useEffect(() => {
    const fetchTickets = async (id: number) => {
      try {
        const sessionData = await getSessionById(id);
        setTickets(sessionData.tickets.length);
      } catch (e) {
        console.error("Erro ao buscar tickets", e);
      }
    };
    fetchTickets(20);
  }, []);

  React.useEffect(() => {
    const fetchSessions = async () => {
      try {
        const sessionsData = await getSession();
        setSessions(sessionsData);
      } catch (err) {
        console.error("Erro ao buscar sessões:", err);
      }
    };

    fetchSessions();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Header />
      <Banner />
      <div className="flex flex-col items-center gap-8 py-14">
        <ItemSelector
          items={dates}
          initialValue="31/10"
          label="Selecione a Data"
          width="90px"
          height="90px"
        />
        {movies.map((movie) =>
          selectedMovieId === movie.id ? (
            <div key={movie.id} className="flex w-full gap-8 ">
              <div className="w-1/3 ">
                <MovieSessionInfo hideDetails imageUrl={movie.image_url} />
              </div>

              <div className="w-2/3">
                <SeatSelection tickets={tickets} onClick={buyTickets} />
              </div>
            </div>
          ) : (
            <MovieSessionInfo
              key={movie.id}
              tittle={movie.title}
              description={movie.description}
              duration={movie.duration}
              genre={movie.genre}
              rating={movie.rating}
              tittleOriginal={movie.tittleoriginal || "Não informado"}
              director={movie.director}
              distributor={movie.distributor}
              castMovie={movie.castmovie || "Não informado"}
              countryOfOrigin={movie.country_of_origin}
              imageUrl={movie.image_url}
              audioFormat={movie.audio_format}
              sessions={sessions.filter(
                (session) => session.movie_id === movie.id
              )}
              roomSession={
                sessions.find((session) => session.movie_id === movie.id)
                  ? sessions.find((session) => session.movie_id === movie.id)!
                      .room_name
                  : "Sala não encontrada"
              }
              onPressBuyTicket={() => {
                startQueue();
                handleBuyTicket(movie.id);
              }}
            />
          )
        )}
      </div>

      <Modal open={processStarted && position !== 0}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "gray",
            border: "1px solid #687C83",
            borderRadius: 1.5,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography color="white">
            Você está na fila, sua posição na fila: {position}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
