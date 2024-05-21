import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";

const pages = [
  { name: "Inicio", path: "/inicio" },
  { name: "Nosotros", path: "/nosotros" },
  { name: "Actividades", path: "/actividades" },
  { name: "Publicaciones", path: "/publicaciones" },
  { name: "Servicios", path: "/servicios" },
];

const NavItem = ({ name, path }: { name: string; path: string }) => {
  return (
    <Link
      className={`rounded-md p-2  hover:bg-gray-700 hover:text-white transition ${
        useCheckUrl(path) && "bg-gray-900 text-white"
      }`}
      to={path}
    >
      {name}
    </Link>
  );
};

const useCheckUrl = (path: string) => {
  const { pathname } = useLocation();
  return pathname === path;
};

export default function Nav() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 640px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 640px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));
  }, []);
  const navigate = useNavigate();
  return (
    <>
      {!isMobile ? (
        <nav className="bg-gray-800 text-gray-300 flex gap-5 justify-center p-3 ">
          {pages.map((page) => (
            <NavItem key={page.path} name={page.name} path={page.path} />
          ))}
        </nav>
      ) : (
        <div className="bg-gray-800 text-white p-1 ">
          <Dropdown
            // backdrop="opaque"
            classNames={{
              content: "p-1 bg-gray-800 text-white rounded-md",
            }}
          >
            <DropdownTrigger>
              <Button
                variant="flat"
                isIconOnly
                startContent={<HiMenu></HiMenu>}
                className="bg-gray-800 text-white"
              ></Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dropdown menu with icons">
              {pages.map((page) => (
                <DropdownItem
                  className={`rounded-md ${""}`}
                  key={page.path}
                  onClick={() => navigate(page.path)}
                >
                  {page.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      )}
    </>
  );
}
