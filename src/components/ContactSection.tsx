
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <section id="contact" className="section py-24 bg-gradient-to-b from-background to-secondary/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-block mb-2 px-4 py-1 bg-primary/10 text-primary font-medium rounded-full">
              Contato
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Vamos Conversar</h2>
          </div>
          <p className="text-muted-foreground max-w-lg mt-4 md:mt-0">
            Estou disponível para novos projetos, oportunidades de trabalho ou simplesmente
            para trocar ideias sobre desenvolvimento web.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="h-2 bg-gradient-to-r from-primary to-blue-700"></div>
              <CardContent className="p-6 space-y-8">
                <h3 className="text-xl font-semibold">Informações de Contato</h3>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:seuemail@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                      seuemail@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Telefone</p>
                    <a href="tel:+5500000000000" className="text-muted-foreground hover:text-primary transition-colors">
                      +55 (00) 00000-0000
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Localização</p>
                    <p className="text-muted-foreground">
                      São Paulo, SP - Brasil
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="font-medium mb-4">Redes Sociais</p>
                  <div className="flex gap-3">
                    <a 
                      href="#" 
                      className="bg-foreground/5 hover:bg-primary/10 hover:text-primary p-3 rounded-lg transition-colors"
                      aria-label="Github"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="#" 
                      className="bg-foreground/5 hover:bg-primary/10 hover:text-primary p-3 rounded-lg transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="#" 
                      className="bg-foreground/5 hover:bg-primary/10 hover:text-primary p-3 rounded-lg transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="h-2 bg-gradient-to-r from-primary to-blue-700"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Envie uma Mensagem</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium">
                        Nome
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className="border-border/60 focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className="border-border/60 focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium">
                      Assunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Assunto da mensagem"
                      className="border-border/60 focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Escreva sua mensagem aqui..."
                      rows={5}
                      className="border-border/60 focus:border-primary resize-none"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="btn-primary w-full flex items-center gap-2 group">
                    <Send size={16} />
                    Enviar Mensagem
                    <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
