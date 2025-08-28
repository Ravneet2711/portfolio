import {
  Github,
  Linkedin,
  LocateIcon,
  Mail,
  MailIcon,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";
import { useToast } from "../hooks/useToast";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

const ContactSection = () => {
  const formRef = useRef();

  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_twcaqdd",
        "template_x0bbrf4",
        formRef.current,
        "KULrNuZwCX1IL7PiF"
      )
      .then(
        () => {
          setTimeout(() => {
            setLoading(false);
            toast({
              title: "Message Sent!",
              description: "I'll get back to you soon ✉️",
              variant: "default",
            });
            setForm({ name: "", email: "", message: "" }); // Reset form
          }, 1500); // Reset
        },
        (error) => {
          setLoading(false);
          toast({
            title: "Uh oh!",
            description: "Something went wrong. Please try again.",
            variant: "destructive",
          });
          console.error("EmailJS Error:", error);
        }
      );
  };
  const isFormValid = form.name && form.email && form.message;
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 nqx-w-2xl mx-auto">
          Whether you have a question, an opportunity, or just want to say hi -
          I'm always open to connecting. Feel free to reach out and let's build
          something amazing together!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center text-left">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:rravneet424@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    rravneet424@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 999******
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>

              <div className="flex space-x-4 items-center justify-center">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ravneet-kaur-bagga-5a396136a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>

                {/* Email */}
                <a
                  href="mailto:rravneet424@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaEnvelope className="h-6 w-6" />
                </a>

                <a
                  href="https://t.me/your_username" // Replace with your actual Telegram username
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  title="Telegram"
                >
                  <FaTelegramPlane className="h-6 w-6" />
                </a>

                <a
                  href="https://wa.me/919999273780" // Replace with your number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  title="WhatsApp"
                >
                  <FaWhatsapp className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text 2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-left"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary "
                  placeholder="What's your name?"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-left"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary "
                  placeholder="Where can I email you?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-left"
                >
                  Message
                </label>
                <textarea
                  type="message"
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <button
                type="submit"
                disabled={!isFormValid || loading}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",

                  (!isFormValid || loading) &&
                    "opacity-80 cursor-not-allowed pointer-events-none"
                )}
              >
                {loading ? "Sending..." : "Send Message"} <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
