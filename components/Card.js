export default (props) => {
  return (
    <main className="flex justify-center p-40">
      <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 item-center ">
        {props.children}
      </div>
    </main>
  );
};
