import {
  History,
  Smile,
  Meh,
  Frown,
} from "lucide-react";

export default function SentimentHistory({ history }) {
  const getBadge = (sentiment) => {
    const value = sentiment.toLowerCase();

    if (value.includes("positive")) {
      return {
        color: "bg-green-100 text-green-700",
        icon: <Smile size={16} />,
      };
    }

    if (value.includes("negative")) {
      return {
        color: "bg-red-100 text-red-700",
        icon: <Frown size={16} />,
      };
    }

    return {
      color: "bg-yellow-100 text-yellow-700",
      icon: <Meh size={16} />,
    };
  };

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <div className="mb-8 flex items-center gap-3">

        <History className="text-blue-600" />

        <h2 className="text-3xl font-bold">
          Analysis History
        </h2>

      </div>

      {history.length === 0 ? (

        <div className="flex h-56 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300">

          <History
            size={60}
            className="text-slate-400"
          />

          <h3 className="mt-5 text-xl font-semibold">
            No Reviews Analyzed
          </h3>

          <p className="mt-2 text-slate-500">
            Analyze a review to see its history.
          </p>

        </div>

      ) : (

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="py-4 text-left">
                  Time
                </th>

                <th className="py-4 text-left">
                  Review
                </th>

                <th className="py-4 text-left">
                  Sentiment
                </th>

                <th className="py-4 text-left">
                  Confidence
                </th>

              </tr>

            </thead>

            <tbody>

              {history.map((item) => {

                const badge = getBadge(
                  item.sentiment
                );

                return (

                  <tr
                    key={item.id}
                    className="border-b transition hover:bg-slate-50"
                  >

                    <td className="py-5">
                      {item.time}
                    </td>

                    <td className="max-w-md py-5">

                      <p className="line-clamp-2">

                        {item.review}

                      </p>

                    </td>

                    <td className="py-5">

                      <span
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold ${badge.color}`}
                      >

                        {badge.icon}

                        {item.sentiment}

                      </span>

                    </td>

                    <td className="py-5 font-semibold">

                      {item.confidence}%

                    </td>

                  </tr>

                );

              })}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}