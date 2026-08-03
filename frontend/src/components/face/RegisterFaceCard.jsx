import { UserPlus, User, Save, ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { registerFace } from "../../services/faceApi";

export default function RegisterFaceCard({
  personName,
  setPersonName,
  capturedImages,
  setCapturedImages,
  preview,
  setPreview,
  loading,
  setLoading,
}) {

  const handleRegister = async () => {

    if (!capturedImages || capturedImages.length < 5) {

      toast.error("Please capture 5 images first.");

      return;
    }

    if (!personName.trim()) {

      toast.error("Please enter a name.");

      return;
    }

    try {

      setLoading(true);

      const result = await registerFace(
        personName,
        capturedImages
      );

      toast.success(result.message);

      setPersonName("");

      setCapturedImages([]);

      setPreview(null);

    } catch (err) {

      console.error(err);

      if (err.response?.data?.message) {

        toast.error(err.response.data.message);

      } else {

        toast.error("Registration failed.");

      }

    } finally {

      setLoading(false);

    }

  };

  return (

    <motion.div
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      className="rounded-3xl bg-white p-8 shadow-xl"
    >

      <div className="mb-6 flex items-center gap-3">

        <UserPlus className="text-blue-600" />

        <h2 className="text-3xl font-bold">

          Register Face

        </h2>

      </div>

      {preview ? (

        <img
          src={preview}
          alt="Captured Face"
          className="h-56 w-full rounded-2xl border object-cover"
        />

      ) : (

        <div className="flex h-56 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50">

          <ImageIcon
            size={60}
            className="text-slate-400"
          />

          <p className="mt-4 text-slate-500">

            Capture 5 images first

          </p>

        </div>

      )}

      <div className="mt-8">

        <label className="mb-2 block text-sm font-medium text-slate-600">

          Person Name

        </label>

        <div className="relative">

          <User
            className="absolute left-4 top-3 text-slate-400"
            size={20}
          />

          <input
            type="text"
            value={personName}
            placeholder="Enter person's name"
            onChange={(e) => setPersonName(e.target.value)}
            className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none focus:border-blue-600"
          />

        </div>

      </div>

      <button
        onClick={handleRegister}
        disabled={loading}
        className="mt-8 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 font-semibold text-white hover:scale-[1.02] disabled:opacity-50"
      >

        <Save className="mr-2 inline" />

        {loading ? "Registering..." : "Register Face"}

      </button>

    </motion.div>

  );

}