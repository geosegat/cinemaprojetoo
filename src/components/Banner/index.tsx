import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";

export default function Banner() {
  return (
    <div className="relative w-full h-[420px]">
      <Image
        src="https://www.shoppingnovaiguacu.com.br/sites/nova-iguacu/files/styles/banner_interna_1920_x_420/public/shopping-media/Banner%20Interna/Cinema.png"
        layout="fill"
        objectFit="cover"
        alt="Banner do Cinema no Shopping Nova Iguaçu"
        priority
      />

      <div className="absolute bottom-0 w-full bg-opacity-80 text-center mb-10 space-y-5">
        <Typography variant="body1" className="text-white font-medium">
          São 7 salas pra você curtir um cineminha 🍿 Aproveite a única sala VIP
          Kinoplex da Baixada!
        </Typography>
      </div>
    </div>
  );
}
