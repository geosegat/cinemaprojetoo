import * as React from "react";

export default function HomePage() {
  const [showAlert, setShowAlert] = React.useState(false);

  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 1000);
  };

  return (
    <div className="text-center mt-12">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Cinema Projeto!</h1>

      {showAlert && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">Sucesso!</strong>
          <span className="block sm:inline"> Teste</span>
        </div>
      )}

      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Clique Aqui
      </button>
    </div>
  );
}
