import { useRef, useState, type FormEvent } from "react";

const fieldClass =
  "mt-2 block w-full rounded-2xl border border-[#14231c]/15 bg-white px-4 py-3 text-sm text-[#14231c] outline-none transition-colors placeholder:text-[#14231c]/35 focus:border-[#14231c]";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    setError("");

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    formData.append("access_key", "e14a900c-6bf9-4a87-9ba3-a8b2641f2d71");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully");
      formRef.current.reset();
    } else {
      setError(data.message);
      setResult("");
    }
  };

  return (
    <div id="contact-form" className="w-full max-w-xl rounded-[1.8rem] bg-white p-6 text-[#14231c] shadow-xl shadow-[#14231c]/10 md:p-8">
      <h2 className="text-2xl font-semibold tracking-tight">Send a note</h2>
      <p className="mt-2 text-sm leading-6 text-[#14231c]/60">For a quick response, send a message.</p>
      <form ref={formRef} onSubmit={onSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#14231c]/50">Name</label>
            <input id="name" name="name" type="text" required className={fieldClass} />
          </div>
          <div>
            <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#14231c]/50">Email</label>
            <input id="email" name="email" type="email" required className={fieldClass} />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#14231c]/50">Message</label>
          <textarea id="message" name="message" required rows={4} className={fieldClass} />
        </div>
        <button
          type="submit"
          className="rounded-full bg-[#14231c] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#294637]"
        >
          Submit form
        </button>
      </form>
      {result && <p className="mt-4 text-sm text-[#294637]">{result}</p>}
      {error && <p className="mt-4 text-sm text-red-700">{error}</p>}
    </div>
  );
}
