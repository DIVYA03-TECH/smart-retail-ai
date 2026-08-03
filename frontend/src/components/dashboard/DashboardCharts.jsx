import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const COLORS = [
  "#22c55e",
  "#3b82f6",
  "#ef4444",
];

export default function DashboardCharts({ dashboard }) {

  // ----------------------------
  // Sentiment Data
  // ----------------------------

  const sentimentCounts = {
    Positive: 0,
    Neutral: 0,
    Negative: 0,
  };

  dashboard.sentiments.forEach((item) => {

    const label = item.sentiment.toLowerCase();

    if (label === "positive" || label === "label_2") {
      sentimentCounts.Positive++;
    }
    else if (label === "neutral" || label === "label_1") {
      sentimentCounts.Neutral++;
    }
    else if (label === "negative" || label === "label_0") {
      sentimentCounts.Negative++;
    }

  });

  const sentimentData = [
    {
      name: "Positive",
      value: sentimentCounts.Positive,
    },
    {
      name: "Neutral",
      value: sentimentCounts.Neutral,
    },
    {
      name: "Negative",
      value: sentimentCounts.Negative,
    },
  ];

  // ----------------------------
  // Product Data
  // ----------------------------

  const productCounts = {};

  dashboard.products.forEach((item) => {

    if (!item.product) return;

    productCounts[item.product] =
      (productCounts[item.product] || 0) + 1;

  });

  const productData = Object.keys(productCounts).map((key) => ({
    name: key,
    value: productCounts[key],
  }));

  return (
    <div className="grid gap-8 lg:grid-cols-2">

      {/* Product Chart */}

      <div className="rounded-3xl bg-white p-6 shadow-xl">

        <h2 className="mb-6 text-2xl font-bold">
          Product Classification
        </h2>

        <ResponsiveContainer
          width="100%"
          height={320}
        >

          <BarChart data={productData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis allowDecimals={false} />

            <Tooltip />

            <Bar
              dataKey="value"
              radius={[10, 10, 0, 0]}
              fill="#2563eb"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* Sentiment Chart */}

      <div className="rounded-3xl bg-white p-6 shadow-xl">

        <h2 className="mb-6 text-2xl font-bold">
          Sentiment Distribution
        </h2>

        <ResponsiveContainer
          width="100%"
          height={320}
        >

          <PieChart>

            <Pie
              data={sentimentData}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
              label
            >

              {sentimentData.map((entry, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index]}
                />

              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}