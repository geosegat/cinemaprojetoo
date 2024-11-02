import { FiberManualRecord } from "@mui/icons-material";
import { Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const urlImg = [
  {
    imagem1: "https://i.imgur.com/6338zAv.jpeg",
  },
];

export default function MovieSessionInfo() {
  return (
    <Paper className=" flex bg-gray-100   py-12 justify-center">
      <div className=" flex gap-4 w-[1200px]  p-1">
        <Image alt="hehe" src={urlImg[0].imagem1} width={500} height={500} />
        <div>
          <Typography className="text-3xl">Tô De Graça - O Filme</Typography>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex gap-1">
              <FiberManualRecord className="w-3 h-3 text-orange-500" />
              <Typography className="text-xs">Cómedia</Typography>
            </div>

            <Typography className="text-xs bg-green-500 p-1 text-white font-semibold">
              12 anos
            </Typography>
            <Typography className="text-xs"> 94 min</Typography>
          </div>
          <Typography className="text-xs">
            Em Tô de Graça - O Filme, depois de ganhar uma indenização
            inesperada decide torrar o dinheiro levando toda a família para um
            feriadão em Búzios-RJ, Graça mostrará várias confusões causadas pela
            família, agora distante da comunidade onde se passaram as seis
            temporadas do humorístico.
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
