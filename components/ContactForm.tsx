"use client";
import { useState } from "react";
import Magnetic from "./Magnetic";
import { motion, AnimatePresence } from "framer-motion";

export const ContactForm = () => {
  // --- THE BRAIN (Logic) ---
  // We use "state" to remember if we are currently sending or finished
  const [status, setStatus] = useState<string | null>(null);
  const [senderName, setSenderName] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setStatus("Sending..."); // Tell the UI to show "Sending..."

    // 1. Get the data from the form fields
    const name = formData.get("name");
    const email = formData.get("email"); // Get the real email from the input
    const message = formData.get("message");

    // Store name for personalized success message
    setSenderName(typeof name === "string" ? name : null);

    // 2. Call your actual API route
    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    // 3. Check if the server actually sent it
    if (response.ok) {
      setStatus("Success");
    } else {
      setStatus("Error"); // Optional: handle errors if the API fails
    }
  }

  // --- UI ---
  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/50 shadow-sm dark:shadow-none transition-colors duration-500">
      <AnimatePresence>
        {status === "Success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            {/* Animated Checkmark */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(37,99,235,0.5)]"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Message Received!
            </h3>
            <p className="text-zinc-400">
              {`Thanks${
                senderName ? ` ${senderName}` : ""
              }, I'll get back to you shortly.`}
            </p>

            <button
              onClick={() => {
                setStatus(null);
                setSenderName(null);
              }}
              className="mt-6 text-sm text-zinc-500 hover:text-white underline underline-offset-4"
            >
              Send another message
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {status !== "Success" && (
        <form
          onSubmit={async (e) => {
            e.preventDefault(); // Prevents page reload
            const formData = new FormData(e.currentTarget);
            await handleSubmit(formData);
          }}
          className="flex flex-col gap-4"
        >
          <input
            name="name"
            type="text"
            placeholder="Name"
            required
            className="p-3 rounded-lg bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-white/10 focus:border-blue-500 outline-none text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 transition-colors"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-white/10 focus:border-blue-500 outline-none text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 transition-colors"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="p-3 rounded-lg bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-white/10 focus:border-blue-500 outline-none text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 transition-colors"
          />
          <button
            type="submit"
            disabled={status === "Sending..."}
            className="bg-blue-600 py-3 rounded-lg font-bold hover:bg-blue-500 disabled:opacity-50 transition-all"
          >
            {status === "Sending..." ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}

      <div className="flex justify-center items-center gap-6 pt-4 border-t border-zinc-200 dark:border-white/5">
        <Magnetic>
          <a
            href="https://www.instagram.com/alex_sh4n___?igsh=MWQzMWs4bHZsYWdvMA%3D%3D&utm_source=qr"
            target="_blank"
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors p-2"
          >
            Instagram
          </a>
        </Magnetic>
        <Magnetic>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors p-2"
          >
            LinkedIn
          </a>
        </Magnetic>
        <Magnetic>
          <a
            href="mailto:alexsh4ndev9@email.com"
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors p-2"
          >
            Email
          </a>
        </Magnetic>
      </div>
    </div>
  );
};
