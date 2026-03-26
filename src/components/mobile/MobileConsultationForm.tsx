import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";

export const MobileConsultationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    notes: ""
  });
  
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    contact: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10,11}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const errors = {
      fullName: "",
      contact: ""
    };

    // Validate fullName
    if (!formData.fullName.trim()) {
      errors.fullName = "Vui lòng nhập họ và tên";
    }

    // Validate contact (email or phone)
    const hasEmail = formData.email.trim();
    const hasPhone = formData.phone.trim();
    
    if (!hasEmail && !hasPhone) {
      errors.contact = "Vui lòng nhập ít nhất email hoặc số điện thoại";
    } else {
      if (hasEmail && !validateEmail(formData.email)) {
        errors.contact = "Định dạng email không hợp lệ";
      }
      if (hasPhone && !validatePhone(formData.phone)) {
        errors.contact = "Số điện thoại không hợp lệ (10-11 số)";
      }
    }

    setFormErrors(errors);

    if (!errors.fullName && !errors.contact) {
      // Simulate form submission
      setTimeout(() => {
        alert("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ với bạn sớm nhất.");
        
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          notes: ""
        });
        setFormErrors({
          fullName: "",
          contact: ""
        });
        setIsSubmitting(false);
      }, 1000);
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in px-2">
      <h3 className="text-2xl md:text-3xl font-playfair font-bold text-center text-foreground mb-8">
        Đăng Ký Tư Vấn Miễn Phí
      </h3>
      
      <div className="max-w-lg mx-auto">
        <Card className="bg-white/95 backdrop-blur-sm border-heritage-cream shadow-peaceful">
          <CardContent className="p-6">
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-foreground font-inter font-semibold text-sm">
                  Họ và tên <span className="text-vietnam-red">*</span>
                </Label>
                <Input 
                  id="fullName" 
                  value={formData.fullName} 
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} 
                  placeholder="Nhập họ và tên của bạn" 
                  className="border-muted/30 focus:border-mountain-blue focus:ring-mountain-blue/20 rounded-lg transition-all duration-300"
                  disabled={isSubmitting}
                />
                {formErrors.fullName && (
                  <p className="text-vietnam-red text-xs font-inter">{formErrors.fullName}</p>
                )}
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-inter font-semibold text-sm">
                    Email
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                    placeholder="example@email.com" 
                    className="border-muted/30 focus:border-mountain-blue focus:ring-mountain-blue/20 rounded-lg transition-all duration-300"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-inter font-semibold text-sm">
                    Số điện thoại
                  </Label>
                  <Input 
                    id="phone" 
                    value={formData.phone} 
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                    placeholder="0123456789" 
                    className="border-muted/30 focus:border-mountain-blue focus:ring-mountain-blue/20 rounded-lg transition-all duration-300"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              {formErrors.contact && (
                <p className="text-vietnam-red text-xs font-inter">{formErrors.contact}</p>
              )}
              
              <p className="text-muted-foreground text-xs font-inter">
                <span className="text-vietnam-red">*</span> Vui lòng nhập ít nhất email hoặc số điện thoại
              </p>

              {/* Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes" className="text-foreground font-inter font-semibold text-sm">
                  Ghi chú thêm (tùy chọn)
                </Label>
                <Textarea 
                  id="notes" 
                  value={formData.notes} 
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })} 
                  placeholder="Chia sẻ thêm về mong muốn, câu hỏi của bạn..." 
                  rows={3} 
                  className="border-muted/30 focus:border-mountain-blue focus:ring-mountain-blue/20 rounded-lg transition-all duration-300 resize-none"
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-vietnam-red to-vietnam-green hover:from-vietnam-red/90 hover:to-vietnam-green/90 text-white font-inter font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Đang gửi..."
                ) : (
                  <>
                    Gửi thông tin
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};