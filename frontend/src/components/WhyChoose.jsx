// import {
//   ShieldCheck,
//   Brain,
//   Zap,
//   BarChart3,
//   Cloud,
//   Cpu,
// } from "lucide-react";

// import WhyCard from "./WhyCard";

// const benefits = [
//   {
//     title: "AI Powered",
//     description:
//       "Advanced Machine Learning models provide intelligent retail insights.",
//     icon: <Brain size={30} />,
//     color: "bg-blue-600",
//   },
//   {
//     title: "High Accuracy",
//     description:
//       "Product classification and customer recognition with excellent accuracy.",
//     icon: <ShieldCheck size={30} />,
//     color: "bg-green-600",
//   },
//   {
//     title: "Lightning Fast",
//     description:
//       "Real-time predictions with optimized AI inference.",
//     icon: <Zap size={30} />,
//     color: "bg-orange-500",
//   },
//   {
//     title: "Advanced Analytics",
//     description:
//       "Monitor KPIs, trends and customer behavior through AI dashboards.",
//     icon: <BarChart3 size={30} />,
//     color: "bg-purple-600",
//   },
//   {
//     title: "Cloud Ready",
//     description:
//       "Deploy securely with scalable cloud infrastructure.",
//     icon: <Cloud size={30} />,
//     color: "bg-cyan-600",
//   },
//   {
//     title: "Smart Automation",
//     description:
//       "Automate retail operations using intelligent AI workflows.",
//     icon: <Cpu size={30} />,
//     color: "bg-pink-600",
//   },
// ];

// export default function WhyChoose() {
//   return (
//     <section className="bg-white py-24">
//       <div className="mx-auto max-w-7xl px-6">

//         <div className="text-center">
          

//           <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
//             Why Choose Us
//           </span>

//           <h2 className="mt-6 text-5xl font-bold text-slate-900">
//             Why Smart Retail AI?
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-500">
//             Our platform combines Computer Vision, NLP,
//             Recommendation Systems and Deep Learning into one
//             intelligent retail ecosystem.
//           </p>

//         </div>

//         <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

//           {benefits.map((item) => (
//             <WhyCard
//               key={item.title}
//               {...item}
//             />
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }