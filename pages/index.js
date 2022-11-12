import Button from "../components/Button";
import Card from "../components/Card";

function Home() {
  const image =
    "https://www.teknikalraman.com/wp-content/uploads/2022/07/Gambar-anime-wanita-keren-11.webp?ezimgfmt=rs:272x380/rscb1/ngcb1/notWebP";

  return (
    <Card>
      <div className="flex justify-end px-4 pt-4">
        <p className="text-gray-500">work with me ?</p>
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="mb-3 w-24 h-24 rounded-full shadow-lg"
          src={image}
          alt="anime"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Raka Abdi Rmp
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Front End Dev
        </span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <Button />
        </div>
      </div>
    </Card>
  );
}

export default Home;
