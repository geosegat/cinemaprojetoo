import React, { useState } from "react";
import { Button, Tooltip, Typography, Box } from "@mui/material";

interface SeatSelectionProps {
  tickets: number;
  movieId?: number;
  onClick: (ticketIds: number[]) => void;
}

export default function SeatSelection({
  onClick,
  tickets,
  movieId,
}: SeatSelectionProps) {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const seats = Array.from({ length: tickets }, (_, index) => index + 1);

  const handleSeatClick = (seats: number) => {
    setSelectedSeats((prev) =>
      prev.includes(seats) ? prev.filter((s) => s !== seats) : [...prev, seats]
    );
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Typography color="black" variant="h5" gutterBottom>
        Selecione seus assentos
      </Typography>
      <Box display="grid" gridTemplateColumns={`repeat(5, 40px)`} gap={4}>
        {seats.map((seat) => {
          return (
            <Tooltip
              sx={{ backgroundColor: "red" }}
              key={seat}
              title={`Assento ${seat}`}
            >
              <Button
                onClick={() => handleSeatClick(seat)}
                variant="contained"
                sx={{
                  backgroundColor: selectedSeats.includes(seat)
                    ? "red"
                    : "lightgray",
                  color: "white",
                  width: "50px",
                  height: "50px",
                  ":hover": {
                    backgroundColor: selectedSeats.includes(seat)
                      ? "red"
                      : "gray",
                  },
                }}
              >
                {seat}
              </Button>
            </Tooltip>
          );
        })}
      </Box>
      <Box justifyItems={"center"}>
        <Typography color="black" variant="h5">
          Assentos Selecionados:
        </Typography>
        {selectedSeats.length > 0 ? (
          <Typography color="red" fontWeight={"bold"}>
            {selectedSeats.join(", ")}
          </Typography>
        ) : (
          <Typography color="black" fontWeight={"bold"}>
            Nenhum assento selecionado
          </Typography>
        )}

        <Button
          variant="contained"
          onClick={() => onClick(selectedSeats)}
          sx={{ marginTop: 2 }}
        >
          Comprar
        </Button>
      </Box>
      {movieId}
    </Box>
  );
}
