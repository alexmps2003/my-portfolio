"use client";
import { useState } from "react";
import Magnetic from "./Magnetic";

export const ContactForm = () => {
  // --- THE BRAIN (Logic) ---
  // We use "state" to remember if we are currently sending or finished
  const [status, setStatus] = useState("");

  async function handleSubmit(formData: FormData) {
    setStatus("Sending..."); // Tell the UI to show "Sending..."

    // 1. Get the data from the form fields
    const name = formData.get("name");
    const message = formData.get("message");
    const email = "user@example.com"; // You can add an email input field to your UI to capture this

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
    <div className="w-full max-w-md mx-auto p-6 rounded-2xl border border-white/10 bg-zinc-900/50">
      {status === "Success" ? (
        <div className="text-center p-4 text-blue-400 font-bold">
          Thanks! I'll get back to you soon.
        </div>
      ) : (
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
            placeholder="Your Name"
            required
            className="p-3 rounded-lg bg-black border border-white/10 focus:border-blue-500 outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="p-3 rounded-lg bg-black border border-white/10 focus:border-blue-500 outline-none"
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

      <div className="flex justify-center items-center gap-6 pt-4 border-t border-white/5">
        <Magnetic>
          <a
            href="https://www.instagram.com/alex_sh4n___?igsh=MWQzMWs4bHZsYWdvMA%3D%3D&utm_source=qr"
            target="_blank"
            className="text-zinc-500 hover:text-white transition-colors p-2"
          >
            Instagram
          </a>
        </Magnetic>
        <Magnetic>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-zinc-500 hover:text-white transition-colors p-2"
          >
            LinkedIn
          </a>
        </Magnetic>
        <Magnetic>
          <a
            href="mailto:pasindushanu9@email.com"
            className="text-zinc-500 hover:text-white transition-colors p-2"
          >
            Email
          </a>
        </Magnetic>
      </div>
    </div>
  );
};
