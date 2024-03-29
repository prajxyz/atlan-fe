import React from "react";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

const History = ({ history, setHistory, setQuery }) => {
  const handleClearHistory = () => {
    if (history.length < 1) {
      toast.error("No history to delete");
      return;
    }

    const userConfirmation = window.confirm(
      "Do you want to delete your history?"
    );
    if (userConfirmation) {
      setHistory([]);
      toast.success("History cleared successfully");
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-100  dark:bg-zinc-900  w-[300px]  2xl:w-[400px] py-4 rounded-lg h-[300px] 2xl:h-[400px]">
      <h2 className="flex items-center justify-around font-semibold text-zinc-600 dark:text-zinc-300 w-full">
        History
        <Trash2 size={18} strokeWidth={2} onClick={handleClearHistory} />
      </h2>

      {/* map queries  */}
      {history.length < 1 ? (
        <p className="my-20 text-sm text-zinc-600 dark:text-zinc-300">
          No History
        </p>
      ) : (
        <ul className="flex flex-col gap-4 my-6 cursor-pointer px-4 overflow-y-scroll">
          {history?.map((item) => (
            <li
              key={item}
              onClick={() => setQuery(item)}
              className="bg-gray-200 dark:bg-zinc-700 text-gray-700 dark:text-gray-200 text-sm 2xl:text-base px-8 2xl:px-16 py-2 2xl:py-3 rounded-md"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
