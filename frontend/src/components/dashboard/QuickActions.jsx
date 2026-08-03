import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Camera,
  Brain,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Product Classification",
    description: "Identify products using AI",
    icon: <ShoppingCart size={28} />,
    color: "from-sky-100 to-blue-200",
    iconBg: "bg-sky-200",
    iconColor: "text-blue-700",
    link: "/product",
  },
  {
    title: "Face Recognition",
    description: "Recognize returning customers",
    icon: <Camera size={28} />,
    color: "from-violet-100 to-fuchsia-200",
    iconBg: "bg-violet-200",
    iconColor: "text-violet-700",
    link: "/face",
  },
  {
    title: "Sentiment Analysis",
    description: "Analyze customer reviews",
    icon: <Brain size={28} />,
    color: "from-emerald-100 to-teal-200",
    iconBg: "bg-emerald-200",
    iconColor: "text-emerald-700",
    link: "/sentiment",
  },
  {
    title: "Retail Chatbot",
    description: "AI shopping assistant",
    icon: <MessageCircle size={28} />,
    color: "from-orange-100 to-rose-200",
    iconBg: "bg-orange-200",
    iconColor: "text-orange-700",
    link: "/chatbot",
  },
];

export default function QuickActions() {
  return (
    <div>

      <h2 className="mb-6 text-3xl font-bold text-slate-900">
        Quick Actions
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {actions.map((action) => (

          <Link
            key={action.title}
            to={action.link}
            className={`group rounded-3xl bg-gradient-to-r ${action.color} p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
          >

            <div
              className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${action.iconBg} shadow-sm`}
            >

              <div className={action.iconColor}>
                {action.icon}
              </div>

            </div>

            <h3 className="text-xl font-bold text-slate-900">
              {action.title}
            </h3>

            <p className="mt-2 text-slate-600">
              {action.description}
            </p>

            <div className="mt-6 flex items-center gap-2 font-semibold text-blue-700 transition group-hover:text-blue-800">

              Open

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}