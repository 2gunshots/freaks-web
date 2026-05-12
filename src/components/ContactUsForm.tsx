"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Textarea from "./Textarea";
import Button from "./Button";

const EMAILJS_SERVICE_ID = "service_18df6u4";
const EMAILJS_TEMPLATE_ID = "template_oh2397z";
const EMAILJS_PUBLIC_KEY = "S1aLUvo_6oaBjwkSb";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

type Status = "idle" | "loading" | "success" | "error";

export default function ContactUsForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [emailTouched, setEmailTouched] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [status, setStatus] = useState<Status>("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;

        if (name === "email") {
            if (emailTouched) {
                setEmailError(
                    value && !EMAIL_REGEX.test(value)
                        ? "Please enter a valid email address."
                        : "",
                );
            }
        }

        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!EMAIL_REGEX.test(formData.email)) {
            setEmailError("Please enter a valid email address.");
            return;
        }

        setStatus("loading");

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                EMAILJS_PUBLIC_KEY,
            );

            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (err) {
            console.error("EmailJS error:", err);
            setStatus("error");
        }
    };

    return (
        <section className="bg-gray-200 text-background px-6 lg:px-24 py-16 lg:py-24 font-inter">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">
                {/* Left: heading */}
                <div className="lg:col-span-2 flex flex-col justify-between gap-8">
                    <div>
                        <p className="text-xs uppercase tracking-widest text-foreground mb-4">
                            Support
                        </p>
                        <h2 className="font-libre-baskerville text-3xl lg:text-4xl font-medium leading-tight text-foreground">
                            {/* Having trouble?
                            Get in touch */}
                            Got a question?
                            <br className="hidden lg:block" /> Reach out
                            anytime.
                        </h2>
                    </div>
                    <p className="font-sans text-sm text-gray-700 leading-relaxed max-w-xs">
                        Have an issue, question, or something not working as
                        expected? Let us know and we'll help you sort it out.
                    </p>
                </div>

                {/* Right: form */}
                <form
                    onSubmit={handleSubmit}
                    className="lg:col-span-3 flex flex-col gap-10"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        <Field label="Name">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                                className="field-input"
                            />
                        </Field>
                        <Field label="Email" error={emailError}>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={() => {
                                    setEmailTouched(true);
                                    setEmailError(
                                        !EMAIL_REGEX.test(formData.email)
                                            ? "Please enter a valid email address."
                                            : "",
                                    );
                                }}
                                placeholder="your@email.com"
                                required
                                className={`field-input ${emailError ? "border-red-600" : ""}`}
                            />
                        </Field>
                    </div>

                    <Field label="Subject">
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="What's this about?"
                            required
                            className="field-input"
                        />
                    </Field>

                    <Field label="Message">
                        <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message here..."
                            required
                            className="field-input resize-none"
                        />
                    </Field>

                    <div className="flex items-center justify-between pt-2">
                        {/* Status feedback */}
                        {status === "success" && (
                            <p className="text-xs text-green-600">
                                Message sent! We'll get back to you shortly.
                            </p>
                        )}
                        {status === "error" && (
                            <p className="text-xs text-red-600">
                                Something went wrong. Please try again.
                            </p>
                        )}
                        {status === "idle" || status === "loading" ? (
                            <p className="text-xs text-gray-600">
                                We usually reply within 24 hours.
                            </p>
                        ) : null}

                        <Button
                            text={
                                status === "loading"
                                    ? "Sending..."
                                    : "Send Message"
                            }
                            type="submit"
                            className="hover:opacity-70 active:opacity-40 transition duration-300 disabled:opacity-40"
                            secondaryBackground="bg-accent"
                            disabled={status === "loading" || !!emailError}
                        />
                    </div>
                </form>
            </div>
        </section>
    );
}

function Field({
    label,
    error,
    children,
}: {
    label: string;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-2 group">
            <label className="text-xs uppercase tracking-widest text-foreground">
                {label}
            </label>
            {children}
            {error && <p className="text-xs text-red-600 mt-0.5">{error}</p>}
        </div>
    );
}
