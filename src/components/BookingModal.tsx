import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Mail, Phone, User } from "lucide-react";

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
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    try {
      // Préparer les données pour l'appel API via Make
      const bookingData = {
        ...data,
        service: selectedService || "Service non spécifié",
        timestamp: new Date().toISOString(),
      };

      // TODO: Remplacer par l'URL du webhook Make
      console.log("Données de réservation:", bookingData);
      
      // Simulation d'un appel API
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Demande envoyée !",
        description: "Nous vous contacterons très bientôt pour confirmer votre rendez-vous.",
      });

      reset();
      onClose();
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900">
            Demande de rendez-vous
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Remplissez le formulaire et nous vous contacterons rapidement
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          {selectedService && (
            <div className="bg-primary/10 p-3 rounded-lg">
              <p className="text-sm font-medium text-gray-700">
                Service sélectionné : <span className="text-primary">{selectedService}</span>
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

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Annuler
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi..." : "Envoyer la demande"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
