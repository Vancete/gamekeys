import Image from "next/image";
import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <div className="header-main">
        <Image
          src="/gamekeys-logo.svg"
          alt="gamekeys-logo"
          width={200}
          height={42}
        />
        <form>
          <input type="text" placeholder="Buscar" className="search"></input>
        </form>
      </div>
      <div className="header-actions">
        <label>prueba</label>
        <label>Lista de deseos</label>
      </div>
    </header>
  );
};
