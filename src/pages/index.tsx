import { Search } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AppBar,
  Button,
  Card,
  CircularProgress,
  LinearProgress,
  Paper,
  Popover,
  Rating,
  Stepper,
  Typography,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as React from "react";
import Image from "next/image";
import DateSelector from "@/components/DateSelector";

export default function HomePage() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "hours-popover" : undefined;

  return (
    <div>
      <AppBar position="static" className="flex  flex-row p-4 items-center">
        <div className="flex flex-1">
          <Typography variant="h6">Shopping Cinema</Typography>
        </div>
        <div className="flex items-center ">
          <Search className="w-6 h-6 text-white" />
          <Button onClick={handleClick} color="secondary" className="gap-1">
            <Typography
              variant="body1"
              sx={{ textTransform: "none", fontSize: 14 }}
            >
              Aberto hoje <span className="font-bold">10</span>h às{" "}
              <span className="font-bold">22</span>h
            </Typography>

            <ExpandMoreIcon />
          </Button>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            sx={{
              "& .MuiPopover-paper": {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
            }}
          >
            <div className="flex flex-col rounded-xl p-6 bg-gray-500 space-y-8">
              <div className="flex flex-col items-center  ">
                <Typography className="text-white font-bold text-sm mb-2">
                  LOJAS E LAZER:
                </Typography>
                <Typography className="text-white text-xs mb-1">
                  Segunda a Sábado: 10h às 22h
                </Typography>
                <Typography className="text-white text-xs">
                  Domingo e Feriados: 13h às 21h
                </Typography>
              </div>
              <Divider />
              <div className="flex flex-col items-center">
                <Typography className="text-white font-bold text-sm mb-2">
                  ALIMENTAÇÃO:
                </Typography>
                <Typography className="text-white text-xs mb-1">
                  Segunda a Sábado: 10h às 22h
                </Typography>
                <Typography className="text-white text-xs">
                  Domingo e Feriados: 11h às 22h
                </Typography>
              </div>
              <Divider />

              <div className="flex flex-col items-center">
                <Typography className="text-white font-bold text-sm mb-2">
                  BAIXO PEDREIRA:
                </Typography>
                <Typography className="text-white text-xs mb-1">
                  Todos os dias, de 12h às 23h
                </Typography>
              </div>
            </div>
          </Popover>
        </div>
      </AppBar>
      {/* component 1  /\ */}
      <div className=" space-y-4">
        <div className="relative w-full h-[420px] ">
          <Image
            src="https://www.shoppingnovaiguacu.com.br/sites/nova-iguacu/files/styles/banner_interna_1920_x_420/public/shopping-media/Banner%20Interna/Cinema.png"
            layout="fill"
            objectFit="cover"
            alt="Banner do Cinema no Shopping Nova Iguaçu"
            priority
          />
          <div className="absolute bottom-0 w-full  bg-opacity-80 text-center mb-10">
            <Typography variant="body1" className="text-white font-medium">
              São 7 salas pra você curtir um cineminha 🍿 Aproveite a única sala
              VIP Kinoplex da Baixada!
            </Typography>
          </div>
        </div>
        {/* component 2 /\ */}

        <DateSelector />
        <Card className="p-4">
          <Typography>oi</Typography>
        </Card>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Detalhes do accordion</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Conteúdo do accordion</Typography>
          </AccordionDetails>
        </Accordion>

        <Paper className="p-4">
          <Typography>Teste Paper</Typography>
        </Paper>

        <Stepper alternativeLabel></Stepper>

        <CircularProgress />
        <LinearProgress />
        <Rating />
      </div>
    </div>
  );
}
