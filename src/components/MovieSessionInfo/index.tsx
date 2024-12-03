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
  roomSession?: string;
  sessions?: {
    id: number;
    room_name: string;
    session_time: string;
  }[];
}

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
  roomSession,
  sessions = [],
}: MovieSessionInfoProps) {
  const formatSessionTime = (timeString: string) => {
    const date = new Date(timeString);
    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const sessionTimes = sessions.map((session) => ({
    label: formatSessionTime(session.session_time),
    value: formatSessionTime(session.session_time),
  }));

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
                <Typography fontSize={14}>{duration} min</Typography>
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
                  label={roomSession}
                  description={audioFormat}
                  className="flex gap-2"
                />
                {sessionTimes.length > 0 && (
                  <ItemSelector
                    height="50px"
                    width="50px"
                    label="Horários"
                    items={sessionTimes}
                    initialValue={sessionTimes[0].value}
                    onClick={onPressBuyTicket}
                  />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </Paper>
  );
}
