import { Button } from "./button"
import Link from 'next/link';

function MobileMenu() {
  return (
    <div className="absolute top-0 right-0 w-64 bg-white shadow-lg">
      {[
        { name: "Blog", href: "/blog" },
        { name: "Casos de Estudio", href: "#casos-de-estudio" },
        { name: "Cómo Funciona", href: "#cómo-funciona" },
        { name: "Servicios", href: "#servicios" },
        { name: "FAQ", href: "#faq" }
      ].map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-gray-600 hover:text-pink-600 py-2 text-lg font-medium transition duration-150 ease-in-out"
        >
          {item.name}
        </Link>
      ))}
      <Button>Close</Button>
    </div>
  );
}

export default MobileMenu;

