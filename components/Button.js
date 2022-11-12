export default () => {
  const github = "https://github.com/grizz12";
  const whatsapp = "https://wa.me/62895416187586";

  return (
    <div>
      <a
        href={github}
        className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>{" "}
      <a
        href={whatsapp}
        className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
        target="_blank"
        rel="noreferrer"
      >
        Message
      </a>
    </div>
  );
};
