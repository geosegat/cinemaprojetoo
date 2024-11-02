import * as React from "react";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import MovieSessionInfo from "@/components/MovieSessionInfo";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import ItemSelector from "@/components/ItemSelector";

export default function HomePage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  const dates = [
    { label: "Hoje", value: "31/10" },
    { label: "Sex", value: "01/11" },
    { label: "Sab", value: "02/11" },
    { label: "Dom", value: "03/11" },
    { label: "Seg", value: "04/11" },
    { label: "Ter", value: "05/11" },
    { label: "Qua", value: "06/11" },
  ];

  return (
    <div>
      <Header />
      <Banner />
      <div className="flex items-center justify-center py-14">
        <ItemSelector
          items={dates}
          initialValue="31/10"
          label="Selecione a Data"
          width="90px"
          height="90px"
        />
      </div>

      <MovieSessionInfo />

      <Button onClick={handleClick}>oii</Button>
    </div>
  );
}
