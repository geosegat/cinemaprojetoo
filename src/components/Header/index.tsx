import React from "react";
import { AppBar, Button, Typography, Popover, Divider } from "@mui/material";
import { Search } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHome = () => {
    router.push("/");
  };

  const open = Boolean(anchorEl);
  const id = open ? "hours-popover" : undefined;

  return (
    <AppBar className="flex flex-row items-center justify-between px-10 py-5  ">
      <Typography onClick={handleHome} variant="h6" className="cursor-pointer">
        Shopping Cinema
      </Typography>
      <div className="flex items-center">
        <Search className="w-6 h-6 text-white" />
        <Button onClick={handleClick} color="secondary" className="gap-1">
          <Typography className="normal-case text-sm">
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
          <div className="flex flex-col rounded-lg py-4 px-8 bg-gray-600">
            <div className="flex flex-col  space-y-6">
              <div className="flex flex-col items-center ">
                <Typography className="text-white font-semibold text-sm mb-2">
                  LOJAS E LAZER:
                </Typography>
                <Typography className="text-white text-sm mb-1">
                  Segunda a Sábado: 10h às 22h
                </Typography>
                <Typography className="text-white text-sm">
                  Domingo e Feriados: 13h às 21h
                </Typography>
              </div>
              <Divider />
              <div className="flex flex-col items-center">
                <Typography className="text-white font-semibold text-sm mb-2">
                  ALIMENTAÇÃO:
                </Typography>
                <Typography className="text-white text-sm mb-1">
                  Segunda a Sábado: 10h às 22h
                </Typography>
                <Typography className="text-white text-sm">
                  Domingo e Feriados: 11h às 22h
                </Typography>
              </div>
              <Divider />

              <div className="flex flex-col items-center">
                <Typography className="text-white font-semibold text-sm mb-2">
                  BAIXO PEDREIRA:
                </Typography>
                <Typography className="text-white text-sm mb-1">
                  Todos os dias, de 12h às 23h
                </Typography>
              </div>
            </div>
          </div>
        </Popover>
      </div>
    </AppBar>
  );
}
