import { div } from "framer-motion/client";
import Catalog from "./catalog_components/Catalog";
import LoginForm from "./catalog_components/LoginForm";

export default function Home() {
  return (
      <div className="max-w-7xl mx-auto lg:py-20 lg:px-4 md:px-6 px-4 py-10">
        <Catalog />
      </div>
  );
}
