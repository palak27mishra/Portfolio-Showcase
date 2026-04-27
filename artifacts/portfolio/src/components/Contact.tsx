import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSendContactMessage } from "@workspace/api-client-react";
import { toast } from "sonner";
import { PERSONAL_INFO } from "../utils/constants";
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight, Send } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required").max(120),
  email: z.string().email("Invalid email").max(200),
  subject: z.string().min(2, "Subject required").max(160),
  message: z.string().min(10, "Min 10 characters").max(4000),
});
type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const mutation = useSendContactMessage();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await mutation.mutateAsync({ data });
      toast.success("Message sent! I'll be in touch soon.");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please email me directly.");
    }
  };

  return (
    <section id="contact" className="relative px-4 md:px-8 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="label text-primary mb-3 block">07 / Contact</span>
          <h2 className="font-display font-bold tracking-tight leading-[0.92] text-6xl md:text-8xl lg:text-9xl">
            Let's make <br />
            <span className="text-gradient">something.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg mt-6 leading-relaxed">
            Have a project in mind, an opportunity, or just want to say hi? I read everything and reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-4 md:gap-5">
          {/* Direct contact bento */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-5 flex flex-col gap-4 md:gap-5"
          >
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="bento-card bento-card-lift p-6 group relative overflow-hidden"
              data-cursor="hover"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/30 blur-2xl opacity-50 group-hover:opacity-90 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 grid place-items-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
                </div>
                <p className="label text-muted-foreground mb-1">Email me</p>
                <p className="font-display text-lg md:text-xl font-semibold break-all">{PERSONAL_INFO.email}</p>
              </div>
            </a>

            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, "")}`}
                className="bento-card bento-card-lift p-5 group"
                data-cursor="hover"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/15 grid place-items-center text-accent mb-4">
                  <Phone className="w-4 h-4" />
                </div>
                <p className="label text-muted-foreground mb-1">Call</p>
                <p className="font-display text-base font-semibold">{PERSONAL_INFO.phone}</p>
              </a>

              <div className="bento-card p-5">
                <div className="w-10 h-10 rounded-xl bg-highlight/15 grid place-items-center text-highlight mb-4">
                  <MapPin className="w-4 h-4" />
                </div>
                <p className="label text-muted-foreground mb-1">Based in</p>
                <p className="font-display text-base font-semibold">Dehradun, IN</p>
              </div>
            </div>

            <div className="bento-card p-6 flex items-center gap-3 flex-wrap">
              <p className="label text-muted-foreground mr-auto">Find me</p>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-surface-2 border border-border text-sm hover:bg-foreground hover:text-background transition-colors"
                data-cursor="hover"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-surface-2 border border-border text-sm hover:bg-foreground hover:text-background transition-colors"
                data-cursor="hover"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-12 md:col-span-7 bento-card p-6 md:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <p className="label text-muted-foreground">Send a note</p>
              <span className="inline-flex items-center gap-2 text-xs text-primary mono">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> live · usually responds within 24h
              </span>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="label text-muted-foreground">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Jane Doe"
                            className="bg-surface-2 border-border focus-visible:ring-primary focus-visible:ring-offset-0 rounded-xl h-11"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="label text-muted-foreground">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="jane@example.com"
                            className="bg-surface-2 border-border focus-visible:ring-primary focus-visible:ring-offset-0 rounded-xl h-11"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="label text-muted-foreground">Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="A quick hello / project / opportunity"
                          className="bg-surface-2 border-border focus-visible:ring-primary focus-visible:ring-offset-0 rounded-xl h-11"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="label text-muted-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me a bit about what you're working on…"
                          className="bg-surface-2 border-border focus-visible:ring-primary focus-visible:ring-offset-0 rounded-xl min-h-[140px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  data-cursor="hover"
                >
                  {mutation.isPending ? (
                    "Sending…"
                  ) : (
                    <>
                      Send message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
