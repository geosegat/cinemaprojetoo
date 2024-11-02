import React, { useState } from "react";
import { Button, Tooltip, Typography, Box } from "@mui/material";

const rows = ["A", "B", "C", "D", "E"];
const seatsPerRow = 10;

export default function SeatSelection() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [occupiedSeats] = useState<string[]>(["B3", "C5", "D2"]);

  const handleSeatClick = (seat: string) => {
    if (!occupiedSeats.includes(seat)) {
      setSelectedSeats((prev) =>
        prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
      );
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h6">Selecione seus assentos</Typography>
      <Box
        display="grid"
        gridTemplateColumns={`repeat(${seatsPerRow}, 40px)`}
        gap={1}
      >
        {rows.map((row) =>
          Array.from({ length: seatsPerRow }, (_, index) => {
            const seat = `${row}${index + 1}`;
            const isOccupied = occupiedSeats.includes(seat);
            const isSelected = selectedSeats.includes(seat);
            return (
              <Tooltip key={seat} title={`Assento ${seat}`}>
                <Button
                  onClick={() => handleSeatClick(seat)}
                  variant="contained"
                  sx={{
                    backgroundColor: isOccupied
                      ? "gray"
                      : isSelected
                      ? "blue"
                      : "lightgray",
                    cursor: isOccupied ? "not-allowed" : "pointer",
                    color: "white",
                    width: "40px",
                    height: "40px",
                    "&:hover": {
                      backgroundColor: isOccupied ? "gray" : "darkblue",
                    },
                  }}
                  disabled={isOccupied}
                >
                  {seat}
                </Button>
              </Tooltip>
            );
          })
        )}
      </Box>
    </Box>
  );
}
