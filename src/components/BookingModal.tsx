import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar, Mail, Phone, User, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(100, "Le nom est trop long"),
  email: z.string().trim().email("Email invalide").max(255, "L'email est trop long"),
  phone: z.string().trim().min(10, "Numéro de téléphone invalide").max(20, "Numéro de téléphone trop long"),
  message: z.string().trim().max(1000, "Le message est trop long").optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

const BookingModal = ({ isOpen, onClose, selectedService }: BookingModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const serviceName = selectedService || "Service non spécifié";

  // Réinitialise le formulaire et ferme la modale après un envoi
  const finish = () => {
    reset();
    onClose();
  };

  // Construit le texte de la demande à partir des champs du formulaire
  const buildMessage = (data: BookingFormData) => {
    const lines = [
      "Bonjour, je souhaite prendre rendez-vous.",
      "",
      `Service : ${serviceName}`,
      `Nom : ${data.name}`,
      `Email : ${data.email}`,
      `Téléphone : ${data.phone}`,
    ];
    if (data.message?.trim()) {
      lines.push(`Message : ${data.message.trim()}`);
    }
    return lines.join("\n");
  };

  // Ouvre WhatsApp avec le message pré-rempli
  const sendViaWhatsApp = (data: BookingFormData) => {
    const text = encodeURIComponent(buildMessage(data));
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
    finish();
  };

  // Ouvre le client mail avec sujet et corps pré-remplis
  const sendViaEmail = (data: BookingFormData) => {
    const subject = encodeURIComponent(`Demande de rendez-vous - ${serviceName}`);
    const body = encodeURIComponent(buildMessage(data));
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    finish();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="rounded-3xl sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-bold text-rp-deep">
            Demande de rendez-vous
          </DialogTitle>
          <DialogDescription className="text-rp-deep/60">
            Remplissez le formulaire, puis envoyez votre demande par WhatsApp ou email.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4 py-4">
          {selectedService && (
            <div className="rounded-xl bg-rp-foam p-3.5">
              <p className="text-sm font-medium text-rp-deep/70">
                Prestation : <span className="font-semibold text-rp-blue">{selectedService}</span>
              </p>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Nom complet *
            </Label>
            <Input
              id="name"
              placeholder="Jean Dupont"
              {...register("name")}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="jean.dupont@example.com"
              {...register("email")}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Téléphone *
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="06 12 34 56 78"
              {...register("phone")}
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Message (optionnel)
            </Label>
            <Textarea
              id="message"
              placeholder="Date et heure souhaitées, informations complémentaires..."
              {...register("message")}
              className={errors.message ? "border-destructive" : ""}
              rows={4}
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

          <div className="space-y-3 pt-4">
            <p className="text-sm text-gray-600 text-center">
              Choisissez votre moyen d'envoi :
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                type="button"
                onClick={handleSubmit(sendViaWhatsApp)}
                className="flex-1 bg-[#25D366] hover:bg-[#1da851] text-white"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
              <Button
                type="button"
                onClick={handleSubmit(sendViaEmail)}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                <Mail className="h-4 w-4" />
                Email
              </Button>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="w-full"
            >
              Annuler
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
