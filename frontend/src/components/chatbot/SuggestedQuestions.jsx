import {
  ShoppingCart,
  Laptop,
  Truck,
  CreditCard,
  RotateCcw,
  Gift,
} from "lucide-react";

export default function SuggestedQuestions({
  onQuestionClick,
}) {
  const questions = [
    {
      icon: ShoppingCart,
      text: "Recommend the best smartphone under ₹30,000",
    },
    {
      icon: Laptop,
      text: "Suggest a laptop for programming",
    },
    {
      icon: Truck,
      text: "How long does delivery usually take?",
    },
    {
      icon: CreditCard,
      text: "What payment methods are accepted?",
    },
    {
      icon: RotateCcw,
      text: "Explain your return policy.",
    },
    {
      icon: Gift,
      text: "Suggest a gift for a college student.",
    },
  ];

  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl">

      <h2 className="mb-6 text-2xl font-bold">
        Suggested Questions
      </h2>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

        {questions.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.text}
              onClick={() => onQuestionClick(item.text)}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 text-left transition-all hover:border-blue-500 hover:bg-blue-50 hover:shadow-md"
            >
              <div className="rounded-xl bg-blue-100 p-3">
                <Icon
                  className="text-blue-600"
                  size={22}
                />
              </div>

              <span className="font-medium text-slate-700">
                {item.text}
              </span>
            </button>
          );
        })}
      </div>

    </div>
  );
}