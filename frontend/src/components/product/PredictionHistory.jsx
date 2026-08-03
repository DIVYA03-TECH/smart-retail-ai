import { Clock3 } from "lucide-react";

export default function PredictionHistory({ history }) {
  if (history.length === 0) return null;

  return (
    <div className="mt-8 rounded-3xl bg-white p-8 shadow-xl">

      <div className="mb-6 flex items-center gap-3">

        <Clock3 className="text-blue-600" />

        <h2 className="text-2xl font-bold">
          Prediction History
        </h2>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="py-3 text-left">
                Time
              </th>

              <th className="py-3 text-left">
                Product
              </th>

              <th className="py-3 text-left">
                Confidence
              </th>

              <th className="py-3 text-left">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {history.map((item) => (

              <tr
                key={item.id}
                className="border-b hover:bg-slate-50"
              >

                <td className="py-4">
                  {item.time}
                </td>

                <td className="py-4 font-semibold">
                  {item.predicted_class}
                </td>

                <td className="py-4">
                  {item.confidence}%
                </td>

                <td className="py-4">

                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">

                    {item.status}

                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}