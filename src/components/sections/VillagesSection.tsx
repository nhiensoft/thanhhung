import { useState, useEffect } from "react";
import { Hammer, MapPin, Star, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { assetUrl } from "@/assets/imageMap";
const VillagesSection = () => {
  const isMobile = useIsMobile();
  const [visibleCount, setVisibleCount] = useState(1);
  const traditionalVillages = [{
    name: "Làng tranh Đông Hồ",
    product: "Tranh dân gian",
    location: "Bắc Ninh (gần Hà Nội)",
    specialty: "Tranh dân gian truyền thống",
    history: "300 năm lịch sử",
    features: ["Tranh Tết", "Màu sắc tự nhiên", "Ý nghĩa văn hóa"],
    icon: "🎨",
    category: "Hội họa"
  }, {
    name: "Làng nón Chuông",
    product: "Nón lá truyền thống",
    location: "Thanh Oai, Hà Nội",
    specialty: "Nón lá thủ công cao cấp",
    history: "300 năm truyền thống",
    features: ["Nón lá thơm", "Kỹ thuật đan tinh xảo", "Chống nắng mưa"],
    icon: "👒",
    category: "Thủ công mỹ nghệ"
  }, {
    name: "Làng mây tre Phú Vinh",
    product: "Đồ mây tre đan",
    location: "Chương Mỹ, Hà Nội",
    specialty: "Sản phẩm từ mây tre tự nhiên",
    history: "500 năm phát triển",
    features: ["Giỏ đựng", "Nội thất mây tre", "Thân thiện môi trường"],
    icon: "🧺",
    category: "Mây tre"
  }, {
    name: "Làng gỗ mỹ nghệ Kim Bồng",
    product: "Đồ gỗ mỹ nghệ",
    location: "Hội An, Quảng Nam",
    specialty: "Tượng gỗ và nội thất cao cấp",
    history: "500 năm phát triển",
    features: ["Tượng Phật gỗ", "Nội thất cổ điển", "Khắc chạm tinh xảo"],
    icon: "🪵",
    category: "Gỗ mỹ nghệ"
  }, {
    name: "Làng lụa Vạn Phúc",
    product: "Lụa tơ tằm",
    location: "Hà Đông, Hà Nội",
    specialty: "Lụa tơ tằm truyền thống Việt Nam",
    history: "1200 năm truyền thống",
    features: ["Lụa thổ cẩm", "Khăn lụa cao cấp", "Áo dài truyền thống"],
    icon: "🧵",
    category: "Dệt may"
  }, {
    name: "Làng hương Quang Phú Cầu",
    product: "Hương thờ cúng",
    location: "Ứng Hòa, Hà Nội",
    specialty: "Hương trầm và đồ thờ cúng",
    history: "100 năm phát triển",
    features: ["Hương trầm", "Nhang thơm", "Sản phẩm thờ cúng"],
    icon: "🕯️",
    category: "Tôn giáo"
  }, {
    name: "Làng đúc đồng Ngũ Xã",
    product: "Đồ đồng thủ công",
    location: "Thường Tín, Hà Nội",
    specialty: "Đồ đồng và đồ thờ cúng",
    history: "600 năm truyền thống",
    features: ["Chuông đồng", "Đỉnh thờ", "Nghệ thuật khắc chạm"],
    icon: "🔔",
    category: "Kim loại"
  }, {
    name: "Làng chiếu Cẩm Nê",
    product: "Chiếu cói cao cấp",
    location: "Đà Nẵng",
    specialty: "Chiếu cói mịn truyền thống",
    history: "200 năm lịch sử",
    features: ["Chiếu cói mịn", "Họa tiết truyền thống", "Mát lạnh tự nhiên"],
    icon: "🏺",
    category: "Mây tre"
  }, {
    name: "Làng bánh phu thê",
    product: "Bánh cưới truyền thống",
    location: "Diễn Châu, Nam Định",
    specialty: "Bánh cưới và bánh lễ",
    history: "300 năm truyền thống",
    features: ["Bánh phu thê", "Bánh in", "Hương vị truyền thống"],
    icon: "🥮",
    category: "Thực phẩm"
  }, {
    name: "Làng bạc Định Công",
    product: "Đồ bạc thủ công",
    location: "Hoàng Mai, Hà Nội",
    specialty: "Trang sức và đồ thờ bằng bạc",
    history: "400 năm phát triển",
    features: ["Trang sức bạc", "Đồ thờ cúng", "Khắc chạm tinh xảo"],
    icon: "💍",
    category: "Kim hoàn"
  }, {
    name: "Làng nghề dát vàng Kiêu Kỵ",
    product: "Sản phẩm dát vàng",
    location: "Gia Lâm, Hà Nội",
    specialty: "Nghệ thuật dát vàng thủ công",
    history: "400 năm truyền thống",
    features: ["Dát vàng truyền thống", "Tượng Phật dát vàng", "Nghệ thuật trang trí"],
    icon: "✨",
    category: "Thủ công mỹ nghệ"
  }, {
    name: "Làng thêu Quất Động",
    product: "Thêu tay truyền thống",
    location: "Thường Tín, Hà Nội",
    specialty: "Thêu tay cao cấp và nghệ thuật",
    history: "200 năm lịch sử",
    features: ["Tranh thêu", "Quần áo thêu", "Kỹ thuật tinh xảo"],
    icon: "🪡",
    category: "Thêu ren"
  }, {
    name: "Làng giấy dó Yên Thái",
    product: "Giấy dó truyền thống",
    location: "Gia Lâm, Hà Nội",
    specialty: "Giấy dó thủ công từ cây dó",
    history: "400 năm lịch sử",
    features: ["Giấy thờ", "Giấy mỹ thuật", "Thân thiện môi trường"],
    icon: "📄",
    category: "Giấy"
  }, {
    name: "Làng gốm Bát Tràng",
    product: "Gốm sứ cao cấp",
    location: "Gia Lâm, Hà Nội",
    specialty: "Sản phẩm gốm sứ truyền thống và hiện đại",
    history: "700 năm lịch sử",
    features: ["Gốm men hỏa biến", "Sứ xanh Bát Tràng", "Nghệ thuật trang trí"],
    icon: "🏺",
    category: "Thủ công mỹ nghệ"
  }, {
    name: "Làng múa rối nước Đào Thục",
    product: "Múa rối nước truyền thống",
    location: "Đông Anh, Hà Nội",
    specialty: "Nghệ thuật múa rối nước cổ truyền",
    history: "800 năm lịch sử",
    features: ["Rối nước truyền thống", "Nghệ thuật biểu diễn", "Di sản văn hóa"],
    icon: "🎭",
    category: "Nghệ thuật biểu diễn"
  }, {
    name: "Làng làm giấy dó Đông Cao",
    product: "Giấy dó thủ công",
    location: "Cao Bằng",
    specialty: "Giấy dó từ vỏ cây dó cao",
    history: "500 năm truyền thống",
    features: ["Giấy dó truyền thống", "Kỹ thuật gia truyền", "Nguyên liệu tự nhiên"],
    icon: "📜",
    category: "Giấy"
  }];
  const getCategoryColor = (category: string) => {
    const colors = {
      "Thủ công mỹ nghệ": "bg-vietnam-red/12 text-vietnam-red border-vietnam-red/30",
      "Dệt may": "bg-vietnam-green/12 text-vietnam-green border-vietnam-green/30",
      "Kim hoàn": "bg-vietnam-gold/15 text-amber-700 border-vietnam-gold/30",
      "Hội họa": "bg-mountain-purple/15 text-mountain-purple border-mountain-purple/30",
      "Kim loại": "bg-tranquil-gray/15 text-slate-700 border-tranquil-gray/30",
      "Mây tre": "bg-forest-green/15 text-forest-green border-forest-green/30",
      "Thêu ren": "bg-bright-pink/15 text-rose-700 border-bright-pink/35",
      "Thực phẩm": "bg-sunrise-orange/15 text-sunrise-orange border-sunrise-orange/30",
      "Tôn giáo": "bg-mountain-blue/15 text-mountain-blue border-mountain-blue/30",
      "Giấy": "bg-mountain-blue/12 text-mountain-blue border-mountain-blue/25",
      "Gỗ mỹ nghệ": "bg-vietnam-gold/15 text-amber-700 border-vietnam-gold/30",
      "Nghệ thuật biểu diễn": "bg-bright-purple/15 text-violet-700 border-bright-purple/30"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700 border-gray-200";
  };
  const villagesWithImages = ["Làng gốm Bát Tràng", "Làng lụa Vạn Phúc", "Làng bạc Định Công", "Làng tranh Đông Hồ", "Làng đúc đồng Ngũ Xã", "Làng mây tre Phú Vinh", "Làng thêu Quất Động", "Làng bánh phu thê", "Làng hương Quang Phú Cầu", "Làng giấy dó Yên Thái", "Làng nón Chuông", "Làng chiếu Cẩm Nê", "Làng gỗ mỹ nghệ Kim Bồng", "Làng làm giấy dó Đông Cao", "Làng múa rối nước Đào Thục", "Làng nghề dát vàng Kiêu Kỵ"];
  const getVillageImage = (villageName: string) => {
    const imageMap: {
      [key: string]: string;
    } = {
      "Làng gốm Bát Tràng": assetUrl("lovable-121f9ed5-ea83-4363-ae20-c8124715732b.png"),
      "Làng lụa Vạn Phúc": assetUrl("lovable-a5dca47a-235e-4a1a-ad4b-e974f8352fdd.png"),
      "Làng bạc Định Công": assetUrl("lovable-20168891-8544-4347-9a6c-ff8940f10729.png"),
      "Làng tranh Đông Hồ": assetUrl("lovable-4c76118c-dff8-42ad-a4c9-7682ec730f56.png"),
      "Làng đúc đồng Ngũ Xã": assetUrl("lovable-ac7884f4-c03f-4b4a-8613-dbd8acc4ebaf.png"),
      "Làng mây tre Phú Vinh": assetUrl("lovable-b75c35e3-0453-4d94-8618-f2ebc5d406ef.png"),
      "Làng thêu Quất Động": assetUrl("lovable-8714bfd3-f920-4676-b050-9fd94ddfe7a2.png"),
      "Làng bánh phu thê": assetUrl("lovable-c2bbb0f7-3776-4316-8fc1-59d5b2a67f8b.png"),
      "Làng hương Quang Phú Cầu": assetUrl("lovable-692e39ba-e962-46d0-a9d2-cbb777d007ab.png"),
      "Làng nón Chuông": assetUrl("lovable-lang-non-chuong.jpg"),
      "Làng chiếu Cẩm Nê": assetUrl("lovable-lang-chieu-cam-ne.jpg"),
      "Làng gỗ mỹ nghệ Kim Bồng": assetUrl("lovable-lang-go-my-nghe-kim-bong.jpg"),
      "Làng làm giấy dó Đông Cao": assetUrl("lovable-lang-giay-do-dong-cao.jpg"),
      "Làng múa rối nước Đào Thục": assetUrl("lovable-lang-roi-nuoc-dao-thuc.jpg"),
      "Làng nghề dát vàng Kiêu Kỵ": assetUrl("lovable-lang-dat-vang-kieu-ky.jpg")
    };
    return imageMap[villageName] || assetUrl("lovable-6d510070-0553-4549-80ca-8ad63127642a.png");
  };
  const hasImage = (villageName: string) => villagesWithImages.includes(villageName);
  // Update visible count based on mobile state
  useEffect(() => {
    setVisibleCount(isMobile ? 1 : 4);
  }, [isMobile]);

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + (isMobile ? 1 : 4), traditionalVillages.length));
  };
  return <section className="py-16 bg-gradient-to-b from-heritage-cream/40 via-background to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Làng nghề Truyền thống Việt Nam
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            Khám phá những làng nghề lâu đời, nơi lưu giữ tinh hoa nghề thủ công truyền thống của đất nước
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {traditionalVillages.map((village, index) => <Card key={index} className={`group bg-card/95 border-border/60 shadow-card hover:shadow-heritage transition-all duration-300 cursor-pointer overflow-hidden rounded-2xl ${index < visibleCount ? 'visible-item' : 'hidden-item'}`}>
              {hasImage(village.name) && <div className="relative h-48 w-full overflow-hidden">
                  <img src={getVillageImage(village.name)} alt={village.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>}
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  {!hasImage(village.name) && <div className="text-3xl">{village.icon}</div>}
                  <Badge variant="outline" className={`${getCategoryColor(village.category)} font-inter text-xs ${hasImage(village.name) ? 'ml-auto' : ''}`}>
                    {village.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-playfair text-foreground group-hover:text-primary transition-colors duration-200 leading-tight">
                  {village.name}
                </CardTitle>
                <div className="text-vietnam-green font-inter font-medium text-sm">
                  {village.product}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80 font-inter">{village.location}</span>
                </div>
                
                <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                  {village.specialty}
                </p>
                
                <div className="flex items-center space-x-2 text-sm">
                  <Users className="h-4 w-4 text-vietnam-gold" />
                  <span className="text-foreground/80 font-inter font-medium">{village.history}</span>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-inter font-semibold text-foreground flex items-center space-x-1">
                    <Star className="h-4 w-4 text-vietnam-gold" />
                    <span>Sản phẩm nổi bật:</span>
                  </h4>
                  <ul className="space-y-1">
                    {village.features.slice(0, 3).map((feature, featureIndex) => <li key={featureIndex} className="flex items-start space-x-2 text-xs">
                        <div className="w-1 h-1 bg-vietnam-green rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-foreground/70 font-inter">{feature}</span>
                      </li>)}
                  </ul>
                </div>
                
                <div className="pt-2 border-t border-border/70">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground font-inter">Tham quan làng nghề</span>
                    <Hammer className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-200" />
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="text-center mt-12">
          <div className="flex flex-col items-center space-y-4">
            
            
            {visibleCount < traditionalVillages.length && <Button onClick={handleShowMore} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                Hiển thị thêm
              </Button>}
          </div>
        </div>
      </div>
    </section>;
};
export default VillagesSection;