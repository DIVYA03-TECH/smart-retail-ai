import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import SummaryCards from "../components/dashboard/SummaryCards";
import QuickActions from "../components/dashboard/QuickActions";
import RecentProducts from "../components/dashboard/RecentProducts";
import RecentFaces from "../components/dashboard/RecentFaces";
import RecentSentiments from "../components/dashboard/RecentSentiments";
import RecentChats from "../components/dashboard/RecentChats";
import DashboardCharts from "../components/dashboard/DashboardCharts";

import { clearDashboard } from "../services/dashboardApi";

export default function Dashboard() {

  const [dashboard, setDashboard] = useState({
    products: [],
    faces: [],
    sentiments: [],
    chats: [],
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {

      const res = await axios.get(
        "https://smart-retail-ai-3-82jz.onrender.com/dashboard"
      );

      setDashboard(res.data);

    } catch (err) {

      console.error(err);

    }
  };

  const handleClear = async () => {

    try {

      await clearDashboard();

      setDashboard({
        products: [],
        faces: [],
        sentiments: [],
        chats: [],
      });

      toast.success("Dashboard cleared successfully.");

    } catch (err) {

      console.error(err);

      toast.error("Unable to clear dashboard.");

    }

  };

  return (

    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12">

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

              AI Analytics Dashboard

            </span>

            <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-slate-900">

               Dashboard

            </h1>

            <p className="mt-4 max-w-2xl text-lg text-slate-600">

              Monitor product classifications, face recognition,
              customer sentiment, chatbot interactions and AI-powered
              retail insights in one place.

            </p>

          </div>

          <button
            onClick={handleClear}
            className="rounded-2xl bg-rose-500 px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-rose-600"
          >
            🗑 Clear Dashboard
          </button>

        </div>

        {/* Summary */}

        <SummaryCards dashboard={dashboard} />

        {/* Quick Actions */}

        <div className="mt-12">

          <QuickActions />

        </div>

        {/* Charts */}

        <div className="mt-12">

          <DashboardCharts dashboard={dashboard} />

        </div>

        {/* Recent Activity */}

        <div className="mt-12">

          <h2 className="mb-6 text-3xl font-bold text-slate-900">

            Recent AI Activity

          </h2>

          <div className="grid gap-8 lg:grid-cols-2">

            <RecentProducts
              products={dashboard.products}
            />

            <RecentFaces
              faces={dashboard.faces}
            />

            <RecentSentiments
              sentiments={dashboard.sentiments}
            />

            <RecentChats
              chats={dashboard.chats}
            />

          </div>

        </div>

      </div>

    </section>

  );

}