import { redirect } from "next/navigation";
import Catalog from "../catalog_components/Catalog";

export default async function page() {
  return (
    <div className="max-w-7xl mx-auto lg:py-20 lg:px-4 md:px-6 px-4 py-10">
      <Catalog />
    </div>
  );
}
