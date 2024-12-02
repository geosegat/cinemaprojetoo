import { FiberManualRecord } from "@mui/icons-material";
import { Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import LabelWithDescription from "../LabelWithDescription";
import ItemSelector from "../ItemSelector";

interface MovieSessionInfoProps {
  tittle?: string;
  description?: string;
  duration?: number;
  genre?: string;
  rating?: string;
  tittleOriginal?: string;
  director?: string;
  distributor?: string;
  castMovie?: string;
  countryOfOrigin?: string;
  imageUrl?: string;
  audioFormat?: string;
  onPressBuyTicket?: () => void;
  hideDetails?: boolean;
}

// const moviesTimes = [{ value: "21:00" }];

export default function MovieSessionInfo({
  tittle,
  description,
  duration,
  genre,
  rating,
  tittleOriginal,
  director,
  distributor,
  castMovie,
  countryOfOrigin,
  imageUrl = "",
  audioFormat,
  onPressBuyTicket,
  hideDetails = false,
}: MovieSessionInfoProps) {
  return (
    <Paper className="flex bg-gray-200 py-12 justify-center">
      <div className="container flex gap-8">
        <Image alt="hehe" src={imageUrl} width={500} height={500} />
        <div>
          <Typography className="text-3xl">{tittle}</Typography>
          {!hideDetails && (
            <>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1 items-center">
                  <FiberManualRecord className="w-3 h-3 text-orange-500" />
                  <Typography fontSize={12}>{genre}</Typography>
                </div>
                <Typography
                  bgcolor={"limegreen"}
                  color="white"
                  fontSize={12}
                  fontWeight={"bold"}
                  padding={0.6}
                >
                  {rating}
                </Typography>
                <Typography fontSize={14}>{duration}</Typography>
              </div>
              <div className="space-y-8">
                <Typography style={{ width: "750px" }} fontSize={18}>
                  {description}
                </Typography>
                <div className="flex gap-2">
                  <div>
                    <Typography>Nome Original</Typography>
                    <Typography>{tittleOriginal}</Typography>
                  </div>
                  <div>
                    <Typography>Dirigido por</Typography>
                    <Typography>{director}</Typography>
                  </div>
                  <div>
                    <Typography>Distribuidor</Typography>
                    <Typography>{distributor}</Typography>
                  </div>
                  <div>
                    <Typography>Elenco</Typography>
                    <Typography>{castMovie}</Typography>
                  </div>
                  <div>
                    <Typography>Pais de Origem</Typography>
                    <Typography>{countryOfOrigin}</Typography>
                  </div>
                </div>
                <LabelWithDescription
                  label="Sala 6"
                  description={audioFormat}
                  className="flex gap-2"
                />
                <ItemSelector
                  height="50px"
                  width="50px"
                  label="oi"
                  items={[{ value: "21:00" }]}
                  initialValue="21:20"
                  onClick={onPressBuyTicket}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </Paper>
  );
}
