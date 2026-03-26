import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Star } from "lucide-react";
import { HeritageSite } from "@/data/vietnamHeritage";
import { cn } from "@/lib/utils";

interface HeritageFloatingCardProps {
  site: HeritageSite;
  index: number;
  onClick?: () => void;
}

export const HeritageFloatingCard = ({ site, index, onClick }: HeritageFloatingCardProps) => {
  const getCategoryColor = (category: string): string => {
    const colors = {
      "Thiên nhiên UNESCO": "bg-forest-green text-mist-white",
      "Văn hóa UNESCO": "bg-sunrise-orange text-mist-white", 
      "Di tích lịch sử": "bg-mountain-blue text-mist-white",
      "Kiến trúc tôn giáo": "bg-mountain-purple text-mist-white",
      "Danh lam thắng cảnh": "bg-sunrise-yellow text-foreground",
      "Kiến trúc hiện đại": "bg-tranquil-gray text-mist-white",
      "Di tích kiến trúc": "bg-accent text-accent-foreground"
    };
    return colors[category as keyof typeof colors] || "bg-secondary text-secondary-foreground";
  };

  return (
    <Card 
      className={cn(
        "relative group cursor-pointer overflow-hidden transition-all duration-500",
        "w-full max-w-sm h-[400px] rounded-xl shadow-heritage hover:shadow-temple",
        "bg-gradient-card border-border/20 hover:border-primary/40",
        "hover:scale-105 flex flex-col"
      )}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-peaceful opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardContent className="p-0 h-full flex flex-col">
        {/* Image Section */}
        <div className="relative h-44 w-full overflow-hidden rounded-t-xl">
          <img
            src={site.image}
            alt={site.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* UNESCO Badge */}
          {site.isUNESCO && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-sunrise-orange text-mist-white shadow-lg text-xs">
                <Star className="w-3 h-3 mr-1" />
                UNESCO
              </Badge>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <Badge className={`${getCategoryColor(site.category)} text-xs`}>
              {site.category}
            </Badge>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 flex flex-col">
          <div className="flex-1 flex flex-col">
            <h3 className="text-lg font-playfair font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {site.name}
            </h3>
            
            <p className="text-muted-foreground text-sm mb-3 line-clamp-3 leading-relaxed">
              {site.description}
            </p>
            
            {/* Footer Info */}
            <div className="space-y-2 mb-3">
              <div className="flex items-center text-xs text-muted-foreground">
                <MapPin className="w-3 h-3 mr-1 text-primary flex-shrink-0" />
                <span className="truncate">{site.location}</span>
              </div>
              
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="w-3 h-3 mr-1 text-primary flex-shrink-0" />
                <span className="truncate">{site.period}</span>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-1 mt-2">
                {site.highlights.slice(0, 2).map((highlight, idx) => (
                  <Badge 
                    key={idx} 
                    variant="outline" 
                    className="text-xs px-2 py-0.5 border-primary/20 text-muted-foreground"
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};