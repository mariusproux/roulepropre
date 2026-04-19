
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Car } from "lucide-react";

interface KilometricRateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const KilometricRateModal = ({ isOpen, onClose, onConfirm }: KilometricRateModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-rp-blue/20 p-3 rounded-full">
              <Car className="h-8 w-8 text-rp-accent" />
            </div>
          </div>
          <DialogTitle className="text-xl font-semibold text-gray-900">
            Barème Kilométrique
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Tarification selon la distance de déplacement
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-700 bg-rp-blue/10 p-3 rounded-lg">
            <MapPin className="h-4 w-4 text-rp-accent flex-shrink-0" />
            <span className="font-medium">Point de départ :</span>
            <span>36 Avenue de Nantes, 44140 Aigrefeuille-sur-Maine</span>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="font-medium text-gray-700">0 - 5 km</span>
              <span className="font-semibold text-gray-700">0,65 € / km</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="font-medium text-gray-700">5 - 15 km</span>
              <span className="font-semibold text-gray-700">0,90 € / km</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-medium text-gray-700">15 - 20+ km</span>
              <span className="font-semibold text-gray-700">1,20 € / km</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3 pt-4">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1"
          >
            Annuler
          </Button>
          <Button
            onClick={onConfirm}
            className="flex-1 bg-rp-accent hover:bg-rp-sky text-white"
          >
            Valider et continuer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default KilometricRateModal;
