import { Package } from "lucide-react";

export default function RecentProducts({ products }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl">

      {/* Header */}

      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-xl bg-blue-100 p-3">

          <Package className="text-blue-600" />

        </div>

        <div>

          <h2 className="text-2xl font-bold">
            Recent Product Classifications
          </h2>

          <p className="text-slate-500">
            Latest AI product predictions
          </p>

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="py-3 text-left">
                Product
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

            {products.length === 0 ? (

              <tr>

                <td
                  colSpan="3"
                  className="py-8 text-center text-slate-500"
                >
                  No products classified yet.
                </td>

              </tr>

            ) : (

              products.slice(0, 10).map((item, index) => (

                <tr
                  key={index}
                  className="border-b last:border-0"
                >

                  <td className="py-4 font-medium">

                    {item.product}

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