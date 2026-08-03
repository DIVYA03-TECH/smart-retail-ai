import { Smile } from "lucide-react";

const badgeColor = (sentiment) => {
  switch (sentiment) {
    case "Positive":
      return "bg-green-100 text-green-700";

    case "Negative":
      return "bg-red-100 text-red-700";

    default:
      return "bg-blue-100 text-blue-700";
  }
};

export default function RecentSentiments({
  sentiments,
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl">

      {/* Header */}

      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-xl bg-green-100 p-3">

          <Smile className="text-green-600" />

        </div>

        <div>

          <h2 className="text-2xl font-bold">
            Recent Sentiment Analysis
          </h2>

          <p className="text-slate-500">
            Latest customer review predictions
          </p>

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="py-3 text-left">
                Review
              </th>

              <th className="py-3 text-left">
                Sentiment
              </th>

              <th className="py-3 text-left">
                Confidence
              </th>

              <th className="py-3 text-left">
                Time
              </th>

            </tr>

          </thead>

          <tbody>

            {sentiments.length === 0 ? (

              <tr>

                <td
                  colSpan="4"
                  className="py-8 text-center text-slate-500"
                >
                  No sentiment analysis yet.
                </td>

              </tr>

            ) : (

              sentiments.slice(0, 10).map((item, index) => (

                <tr
                  key={index}
                  className="border-b last:border-0"
                >

                  <td className="max-w-[250px] truncate py-4">

                    {item.review}

                  </td>

                  <td className="py-4">

                    <span
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${badgeColor(
                        item.sentiment
                      )}`}
                    >
                      {item.sentiment}
                    </span>

                  </td>

                  <td className="py-4">

                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">

                      {item.confidence}%

                    </span>

                  </td>

                  <td className="py-4 text-slate-500">

                    {item.time}

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}