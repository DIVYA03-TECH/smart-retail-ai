import {
  Smile,
  Meh,
  Frown,
  Gauge,
} from "lucide-react";

export default function SentimentStats({ history }) {
  const positive = history.filter((item) =>
    item.sentiment.toLowerCase().includes("positive")
  ).length;

  const neutral = history.filter((item) =>
    item.sentiment.toLowerCase().includes("neutral")
  ).length;

  const negative = history.filter((item) =>
    item.sentiment.toLowerCase().includes("negative")
  ).length;

  const total = history.length;

  const averageConfidence =
    total > 0
      ? (
          history.reduce(
            (sum, item) => sum + item.confidence,
            0
          ) / total
        ).toFixed(2)
      : 0;

  const stats = [
    {
      title: "Positive Reviews",
      value: positive,
      icon: Smile,
      bg: "bg-green-50",
      color: "text-green-600",
    },
    {
      title: "Neutral Reviews",
      value: neutral,
      icon: Meh,
      bg: "bg-yellow-50",
      color: "text-yellow-600",
    },
    {
      title: "Negative Reviews",
      value: negative,
      icon: Frown,
      bg: "bg-red-50",
      color: "text-red-600",
    },
    {
      title: "Average Confidence",
      value: `${averageConfidence}%`,
      icon: Gauge,
      bg: "bg-blue-50",
      color: "text-blue-600",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className={`rounded-3xl p-6 shadow-lg ${stat.bg}`}
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  {stat.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold">
                  {stat.value}
                </h2>

              </div>

              <div
                className={`rounded-2xl bg-white p-4 ${stat.color}`}
              >
                <Icon size={34} />
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}