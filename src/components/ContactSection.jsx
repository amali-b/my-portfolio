import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
  Send,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // set is submitting as true when function start
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message Sent:",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // set is submitting as false when function start
      setIsSubmitting(false);
    }, 1500); //set time for end 1500s
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ready to collaborate on your next project? Feel free to reach out.
          Open to full-time opportunities and freelance projects in software
          development, web development, and database design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail size={25} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:amalibhuvisara@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    amalibhuvisara@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone size={25} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Mobile</h4>
                  <a
                    href="tel:+94713966274"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +94 71 396 6274
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin size={25} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Kelaniya, Sri Lanka
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect with Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="in/amali-abeysekara" target="_blank">
                  <Linkedin />
                </a>
                <a href="#" target="_blank">
                  <Instagram />
                </a>
                <a href="#" target="_blank">
                  <Facebook />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit} //when submit call the function
          >
            <h3 className="text-2xl font-semibold mb-6"> Send A Message</h3>

            <form className="space-y-6">
              {/* Name Section */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  )}
                  placeholder="Amali Abeysekera..."
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="txtemail"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="txtemail"
                  className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="abc@gmail.com"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="3"
                  className="w-full px-4 py-3 bg-background rounded-md border border-input focus:outline-hidden resize-none focus:ring-2 focus:ring-primary"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting} //if isSubmitting true button is disabled
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {/* if (submitting){return "Sending"}
                else{return "Send Message"} */}
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
