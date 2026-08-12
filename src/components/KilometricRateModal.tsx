
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Car } from "lucide-react";
import { siteConfig } from "@/config/site";

interface KilometricRateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const KilometricRateModal = ({ isOpen, onClose, onConfirm }: KilometricRateModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="rounded-3xl sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="icon-chip h-16 w-16 rounded-2xl shadow-[0_12px_28px_-10px_hsl(216_91%_47%/0.7)]">
              <Car className="h-8 w-8" />
            </div>
          </div>
          <DialogTitle className="font-display text-2xl font-bold text-rp-deep">
            Frais de déplacement
          </DialogTitle>
          <DialogDescription className="text-rp-deep/60">
            Un petit forfait kilométrique s'ajoute selon la distance.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="flex items-start gap-2 rounded-xl bg-rp-foam p-3.5 text-sm text-rp-deep/80">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-rp-blue" />
            <span>
              <span className="font-semibold">Départ :</span> {siteConfig.contact.address}
            </span>
          </div>

          <div className="space-y-1">
            {[
              ["0 – 5 km", "0,65 € / km"],
              ["5 – 15 km", "0,90 € / km"],
              ["15 – 20+ km", "1,20 € / km"],
            ].map(([range, rate]) => (
              <div key={range} className="flex items-center justify-between border-b border-rp-foam py-2.5 last:border-0">
                <span className="font-medium text-rp-deep/70">{range}</span>
                <span className="font-semibold tabular-nums text-rp-deep">{rate}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <Button variant="outline" onClick={onClose} className="flex-1 rounded-full">
            Annuler
          </Button>
          <Button onClick={onConfirm} className="btn-primary flex-1">
            Valider et continuer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default KilometricRateModal;
