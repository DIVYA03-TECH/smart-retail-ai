import {
  ShoppingCart,
  Users,
  Brain,
  TrendingUp,
} from "lucide-react";

import MetricCard from "./MetricCard";
import SalesChart from "./SalesChart";

export default function DashboardPreview() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-600 font-semibold">
            Dashboard Preview
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Intelligent Retail Analytics
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-500">
            Monitor AI predictions, customer insights, product trends,
            and business performance from one dashboard.
          </p>

        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-4">

          <MetricCard
            title="Products"
            value="18,450"
            change="+18%"
            color="bg-blue-600"
            icon={<ShoppingCart size={28} />}
          />

          <MetricCard
            title="Customers"
            value="7,210"
            change="+24%"
            color="bg-purple-600"
            icon={<Users size={28} />}
          />

          <MetricCard
            title="AI Predictions"
            value="98.4%"
            change="+2%"
            color="bg-green-600"
            icon={<Brain size={28} />}
          />

          <MetricCard
            title="Revenue"
            value="$248K"
            change="+31%"
            color="bg-orange-500"
            icon={<TrendingUp size={28} />}
          />

        </div>

        <div className="mt-12">
          <SalesChart />
        </div>

      </div>

    </section>
  );
}