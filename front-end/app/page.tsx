import Image from "next/image";
import ImageUploadForm from "../components/ImageUploadForm";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full  items-center justify-between font-mono  lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <p className="text-xl">Comic Crafter</p>
        </div>
      </div>

      <div className="relative flex place-items-center ">
        <ImageUploadForm />
      </div>

      <div></div>
    </main>
  );
}
