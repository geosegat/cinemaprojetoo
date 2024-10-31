import React, { useState } from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Tooltip,
} from "@mui/material";

export default function DateSelector() {
  const [selectedDate, setSelectedDate] = useState("31/10");

  const handleDateChange = (
    _: React.MouseEvent<HTMLElement>,
    newDate: string | null
  ) => {
    if (newDate !== null) {
      setSelectedDate(newDate);
    }
  };

  const dates = [
    { label: "Hoje", date: "31/10" },
    { label: "Sex", date: "01/11" },
    { label: "Sáb", date: "02/11" },
    { label: "Dom", date: "03/11" },
  ];

  return (
    <ToggleButtonGroup
      value={selectedDate}
      exclusive
      onChange={handleDateChange}
      sx={{
        gap: 2,
      }}
    >
      {dates.map((item) => (
        <Tooltip
          key={item.date}
          title={`Ver todas as seções do dia ${item.date}, ${item.label}`}
        >
          <ToggleButton
            value={item.date}
            sx={{
              flexDirection: "column",
              width: "80px",
              height: "80px",
              borderRadius: "12px",
              backgroundColor:
                item.date === selectedDate ? "#801c1c" : "transparent",

              borderColor: item.date === selectedDate ? "#801c1c" : "gray",
              color: item.date === selectedDate ? "white" : "white",
              "&:hover": {
                borderColor: "#801c1c",
              },
              "&:not(:hover)": {
                borderColor: item.date === selectedDate ? "#801c1c" : "gray",
              },
            }}
          >
            <Typography variant="body2" fontWeight="bold">
              {item.label}
            </Typography>
            <Typography variant="caption">{item.date}</Typography>
          </ToggleButton>
        </Tooltip>
      ))}
    </ToggleButtonGroup>
  );
}
