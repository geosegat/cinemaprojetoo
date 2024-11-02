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
}

export default function ItemSelector({
  items,
  initialValue,
  tooltipText = (item) => `Selecionar ${item.label || item.value}`,
  label,
  height,
  width,
}: ItemSelectorProps) {
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const handleChange = (newValue: string) => {
    if (newValue !== selectedValue) {
      setSelectedValue(newValue);
    }
  };

  useEffect(() => {
    setSelectedValue(initialValue);
  }, [initialValue]);

  return (
    <Box>
      <Box display="flex" gap={4}>
        {items.map((item) => (
          <Tooltip key={item.value} title={tooltipText(item)}>
            <ToggleButton
              value={item.value}
              selected={item.value === selectedValue}
              onClick={() => handleChange(item.value)}
              sx={{
                flexDirection: "column",
                width: width,
                height: height,
                borderRadius: "12px",
                border: "2px solid",
                borderColor: "#e4e4e5",
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
    </Box>
  );
}
