import {
  ScanFace,
  UserCheck,
  UserX,
} from "lucide-react";

export default function RecentFaces({ faces }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl">

      {/* Header */}

      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-xl bg-purple-100 p-3">

          <ScanFace className="text-purple-600" />

        </div>

        <div>

          <h2 className="text-2xl font-bold">
            Recent Face Recognition
          </h2>

          <p className="text-slate-500">
            Latest recognized customers
          </p>

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="py-3 text-left">
                Name
              </th>

              <th className="py-3 text-left">
                Status
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

            {faces.length === 0 ? (

              <tr>

                <td
                  colSpan="4"
                  className="py-8 text-center text-slate-500"
                >
                  No face recognition history.
                </td>

              </tr>

            ) : (

              faces.slice(0, 10).map((item, index) => (

                <tr
                  key={index}
                  className="border-b last:border-0 hover:bg-slate-50"
                >

                  <td className="py-4 font-semibold">

                    {item.name}

                  </td>

                  <td className="py-4">

                    {item.recognized ? (

                      <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">

                        <UserCheck size={16} />

                        Recognized

                      </span>

                    ) : (

                      <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">

                        <UserX size={16} />

                        Unknown

                      </span>

                    )}

                  </td>

                  <td className="py-4">

                    <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">

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