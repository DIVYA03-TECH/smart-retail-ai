import { MessageCircle } from "lucide-react";

export default function RecentChats({ chats }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl">

      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-xl bg-orange-100 p-3">
          <MessageCircle className="text-orange-600" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Recent Chatbot Conversations
          </h2>

          <p className="text-slate-500">
            Latest customer interactions
          </p>
        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="py-3 text-left">
                Question
              </th>

              <th className="py-3 text-left">
                AI Response
              </th>

              <th className="py-3 text-left">
                Time
              </th>

            </tr>

          </thead>

          <tbody>

            {chats.length === 0 ? (

              <tr>

                <td
                  colSpan="3"
                  className="py-8 text-center text-slate-500"
                >
                  No chatbot conversations yet.
                </td>

              </tr>

            ) : (

              chats.slice(0, 10).map((chat, index) => (

                <tr
                  key={index}
                  className="border-b last:border-0 hover:bg-slate-50"
                >

                  <td className="max-w-[220px] truncate py-4 font-medium">
                    {chat.question}
                  </td>

                  <td className="max-w-[320px] truncate py-4 text-slate-600">
                    {chat.answer}
                  </td>

                  <td className="py-4 text-slate-500">
                    {chat.time}
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