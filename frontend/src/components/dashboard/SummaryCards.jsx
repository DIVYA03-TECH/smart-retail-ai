import {
  ShoppingBag,
  Users,
  Smile,
  MessageSquare,
} from "lucide-react";

export default function SummaryCards({ dashboard }) {
  const cards = [
    {
      title: "Products Classified",
      value: dashboard.products.length,
      color: "from-sky-100 to-blue-200",
      icon: <ShoppingBag size={30} />,
      iconBg: "bg-sky-200",
      iconColor: "text-blue-700",
    },
    {
      title: "Faces Recognized",
      value: dashboard.faces.filter(
        (face) => face.recognized
      ).length,
      color: "from-violet-100 to-fuchsia-200",
      icon: <Users size={30} />,
      iconBg: "bg-violet-200",
      iconColor: "text-violet-700",
    },
    {
      title: "Reviews Analyzed",
      value: dashboard.sentiments.length,
      color: "from-emerald-100 to-teal-200",
      icon: <Smile size={30} />,
      iconBg: "bg-emerald-200",
      iconColor: "text-emerald-700",
    },
    {
      title: "Chat Sessions",
      value: dashboard.chats.length,
      color: "from-orange-100 to-rose-200",
      icon: <MessageSquare size={30} />,
      iconBg: "bg-orange-200",
      iconColor: "text-orange-700",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => (

        <div
          key={card.title}
          className={`rounded-3xl bg-gradient-to-r ${card.color} p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-600 font-medium">
                {card.title}
              </p>

              <h2 className="mt-3 text-5xl font-bold text-slate-900">
                {card.value}
              </h2>

            </div>

            <div
              className={`rounded-2xl ${card.iconBg} p-4 shadow-sm`}
            >

              <div className={card.iconColor}>

                {card.icon}

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}