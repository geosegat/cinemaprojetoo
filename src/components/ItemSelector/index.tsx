import React, { useState, useEffect } from "react";
import { ToggleButton, Typography, Tooltip, Box } from "@mui/material";

interface Item {
  label?: string;
  value: string;
}

interface ItemSelectorProps {
  items: Item[];
  initialValue: string;
  tooltipText?: (item: Item) => string;
  label: string;
  width: string;
  height: string;
  onClick?: (selectedItem: Item) => void;
}

export default function ItemSelector({
  items,
  initialValue,
  tooltipText = (item) => `Selecionar ${item.label || item.value}`,
  height,
  width,
  label,
  onClick,
}: ItemSelectorProps) {
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const handleChange = (newValue: string, item: Item) => {
    if (newValue !== selectedValue) {
      setSelectedValue(newValue);
      if (onClick) {
        onClick(item);
      }
    }
  };

  useEffect(() => {
    setSelectedValue(initialValue);
  }, [initialValue]);

  return (
    <Box display="flex" gap={4}>
      {items.map((item) => (
        <Tooltip key={item.value} title={tooltipText(item)}>
          <ToggleButton
            value={item.value}
            selected={item.value === selectedValue}
            onClick={() => handleChange(item.value, item)}
            sx={{
              flexDirection: "column",
              width: width,
              height: height,
              borderRadius: "12px",
              border: "2px solid",
              borderColor: "#801c1c",
              color: "black",
              "&:hover": {
                borderColor: "#801c1c",
                backgroundColor: "transparent",
              },
              "&.Mui-selected": {
                backgroundColor: "#801c1c",
                borderColor: "#801c1c",
                color: "white",
                "&:hover": {
                  backgroundColor: "#801c1c",
                  borderColor: "#801c1c",
                },
              },
            }}
          >
            <Typography className="font-bold text-sm mb-0.5 normal-case">
              {item.label || item.value}
            </Typography>
          </ToggleButton>
        </Tooltip>
      ))}
    </Box>
  );
}
