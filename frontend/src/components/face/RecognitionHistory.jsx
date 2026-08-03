import { History } from "lucide-react";

export default function RecognitionHistory({ history }) {
  if (!history || history.length === 0) {
    return (
      <div className="rounded-3xl bg-white p-8 shadow-xl">
        <div className="flex items-center gap-3">
          <History className="text-blue-600" />
          <h2 className="text-2xl font-bold">
            Recognition History
          </h2>
        </div>

        <div className="mt-8 text-center text-slate-500">
          No recognition history yet.
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <div className="mb-6 flex items-center gap-3">
        <History className="text-blue-600" />
        <h2 className="text-2xl font-bold">
          Recognition History
        </h2>
      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="border-b">

            <tr>

              <th className="py-3 text-left">Time</th>
              <th className="py-3 text-left">Name</th>
              <th className="py-3 text-left">Status</th>
              <th className="py-3 text-left">Confidence</th>

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
                  {item.name}
                </td>

                <td className="py-4">
                  {item.recognized ? "Recognized" : "Unknown"}
                </td>

                <td className="py-4">
                  {item.confidence ?? "--"}%
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}