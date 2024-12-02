import { Typography } from "@mui/material";
import React from "react";

interface LabelWithDescriptionProps {
  label: string;
  description: string | undefined;
  className?: string;
}

export default function LabelWithDescription({
  label,
  description,
  className,
}: LabelWithDescriptionProps) {
  return (
    <div className={`w-[138px] ${className}`}>
      <Typography color="black" fontWeight={"bold"} fontSize={14}>
        {label}
      </Typography>
      <Typography fontSize={14}>{description}</Typography>
    </div>
  );
}
