import { useState, useEffect } from "react";
import { Utensils, MapPin, Clock, Star, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
const CuisineSection = () => {
  const isMobile = useIsMobile();
  const [visibleCount, setVisibleCount] = useState(1);
  const specialtyDishes = [{
    name: "Cà phê trứng",
    description: "Sáng tạo độc đáo của Hà Nội, cà phê đen đắng kết hợp với lớp kem trứng béo ngậy",
    origin: "Hà Nội, những năm 1940",
    specialFeatures: ["Cà phê phin truyền thống", "Kem trứng đánh bông", "Vị đắng đặc trưng pha ngọt béo", "Uống nóng hoặc lạnh"],
    famousPlaces: ["Café Giảng", "Café Đinh", "Loading T Café"],
    icon: "☕",
    category: "Đồ uống",
    difficulty: "Trung bình",
    time: "30 phút"
  }, {
    name: "Bánh cuốn Thanh Trì",
    description: "Bánh cuốn mỏng như tơ, nhân thịt băm và mộc nhĩ, ăn kèm chả lụa và nước mắm pha",
    origin: "Thanh Trì, Hà Nội",
    specialFeatures: ["Bánh mỏng như màng", "Nhân thịt băm, mộc nhĩ", "Chả lụa thơm ngon", "Nước mắm pha đặc biệt"],
    famousPlaces: ["Bánh cuốn Thanh Trì gốc", "Bánh cuốn bà Hoành", "Làng Bánh cuốn Thanh Trì"],
    icon: "🥟",
    category: "Điểm tâm",
    difficulty: "Khó",
    time: "3-4 giờ"
  }, {
    name: "Phở Hà Nội",
    description: "Món ăn quốc hồn quốc túy của Việt Nam, với nước dùng trong veo từ xương bò ninh nhiều giờ",
    origin: "Phố cổ Hà Nội, đầu thế kỷ 20",
    specialFeatures: ["Nước dùng trong veo từ xương bò", "Bánh phở mềm, dai vừa phải", "Thịt bò tái hoặc chín", "Gia vị đặc trưng: hành lá, ngò gai"],
    famousPlaces: ["Phở Thìn Lò Đúc", "Phở Bát Đàn", "Phở Lý Quốc Sư"],
    icon: "🍜",
    category: "Món chính",
    difficulty: "Khó",
    time: "4-6 giờ nấu nước dùng"
  }, {
    name: "Bánh mì Việt Nam",
    description: "Tinh hoa ẩm thực kết hợp Đông Tây, bánh mì giòn với nhân đa dạng từ pate đến thịt nướng",
    origin: "Việt Nam, thời Pháp thuộc",
    specialFeatures: ["Bánh mì giòn ngoài mềm trong", "Pate gan tự làm", "Thịt nguội và rau thơm", "Nước sốt đặc biệt"],
    famousPlaces: ["Bánh mì Phượng", "Bánh mì Huynh Hoa", "Bánh mì Như Lan"],
    icon: "🥖",
    category: "Điểm tâm",
    difficulty: "Trung bình",
    time: "1-2 giờ"
  }, {
    name: "Cốm làng Vòng",
    description: "Đặc sản mùa thu Hà Nội, được làm từ lúa tám xanh non, có hương vị thanh mát đặc trưng",
    origin: "Làng Vòng, Từ Liêm, Hà Nội",
    specialFeatures: ["Lúa tám xanh chọn lọc", "Màu xanh tự nhiên", "Vị ngọt thanh, thơm dịu", "Chỉ có vào mùa thu"],
    famousPlaces: ["Làng Vòng truyền thống", "Cốm Vòng phố Hàng Than", "Các cửa hàng đặc sản"],
    icon: "🌾",
    category: "Đặc sản",
    difficulty: "Rất khó",
    time: "Quy trình phức tạp"
  }, {
    name: "Bún chả",
    description: "Đặc sản Hà Nội với thịt nướng thơm lừng, bún tươi và nước mắm chua ngọt đặc trưng",
    origin: "Hà Nội, thời Pháp thuộc",
    specialFeatures: ["Thịt ba rọi nướng than hoa", "Chả cá nướng giòn", "Nước mắm pha chua ngọt", "Bún tươi mềm, rau thơm"],
    famousPlaces: ["Bún chả Đắc Kim", "Bún chả Hương Liên", "Bún chả 34 Hàng Than"],
    icon: "🥢",
    category: "Món chính",
    difficulty: "Trung bình",
    time: "2-3 giờ"
  }, {
    name: "Bún bò Huế",
    description: "Đặc sản miền Trung với nước dùng đậm đà, cay nồng từ sả và tịt, có hương vị đặc trưng khó quên",
    origin: "Huế, cố đô Việt Nam",
    specialFeatures: ["Nước dùng từ xương heo, bò", "Gia vị sả, tịt đặc trưng", "Bún to, dai", "Thịt bò, chả cua, giò heo"],
    famousPlaces: ["Bún bò Huế Bà Tuyết", "Bún bò Huế Đông Ba", "Quán bún bò cổ Huế"],
    icon: "🍲",
    category: "Món chính",
    difficulty: "Khó",
    time: "4-5 giờ"
  }, {
    name: "Bánh xèo (Nam Bộ)",
    description: "Bánh xèo miền Nam với lớp vỏ giòn vàng nghệ, nhân tôm thịt và giá đỗ, ăn kèm rau sống",
    origin: "Miền Nam Việt Nam",
    specialFeatures: ["Bánh to, mỏng, giòn", "Màu vàng từ nghệ tươi", "Nhân tôm, thịt, giá đỗ", "Ăn cuốn với rau sống"],
    famousPlaces: ["Bánh xèo Mười Xiềm", "Bánh xèo 46A Đinh Công Tráng", "Bánh xèo Bà Dưỡng"],
    icon: "🥞",
    category: "Món chính",
    difficulty: "Trung bình",
    time: "2-3 giờ"
  }, {
    name: "Nem rán / Chả giò",
    description: "Món khai vị truyền thống với vỏ bánh tráng giòn, nhân thịt, tôm, mộc nhĩ thơm ngon",
    origin: "Miền Bắc và Nam Việt Nam",
    specialFeatures: ["Vỏ bánh tráng giòn rụm", "Nhân thịt, tôm, mộc nhĩ", "Chiên vàng đều", "Ăn kèm nước mắm chua ngọt"],
    famousPlaces: ["Nem rán Hàng Mành", "Chả giò Sài Gòn", "Nem Nướng Ninh Hòa"],
    icon: "🥟",
    category: "Khai vị",
    difficulty: "Trung bình",
    time: "2 giờ"
  }, {
    name: "Bánh chưng – Bánh tét",
    description: "Đặc sản Tết truyền thống, biểu tượng văn hóa với ý nghĩa sâu sắc về lòng hiếu thảo",
    origin: "Truyền thống dân tộc Việt",
    specialFeatures: ["Gạo nếp trắng", "Đậu xanh, thịt lợn", "Lá dong, lá chuối", "Ninh trong 12-14 giờ"],
    famousPlaces: ["Bánh chưng làng Tranh Khúc", "Bánh tét miền Tây", "Bánh chưng Cổ Loa"],
    icon: "🟩",
    category: "Đặc sản",
    difficulty: "Rất khó",
    time: "2-3 ngày"
  }, {
    name: "Gỏi cuốn (miền Nam)",
    description: "Món ăn nhẹ tươi mát với bánh tráng trong suốt cuốn tôm, thịt và rau thơm tươi xanh",
    origin: "Miền Nam Việt Nam",
    specialFeatures: ["Bánh tráng mỏng, trong", "Tôm, thịt luộc", "Rau thơm tươi xanh", "Tương đậu phộng đặc biệt"],
    famousPlaces: ["Gỏi cuốn Sài Gòn", "Gỏi cuốn Chợ Lớn", "Gỏi cuốn Nguyễn Thiện Thuật"],
    icon: "🌯",
    category: "Khai vị",
    difficulty: "Dễ",
    time: "30-45 phút"
  }, {
    name: "Cao lầu (Hội An)",
    description: "Đặc sản độc quyền Hội An với sợi mì dai, thịt heo quay và rau thơm, chỉ có tại phố cổ",
    origin: "Hội An, Quảng Nam",
    specialFeatures: ["Sợi mì cao lầu đặc biệt", "Nước từ giếng Ba Lễ", "Thịt heo quay giòn", "Rau sống, bánh tráng nướng"],
    famousPlaces: ["Cao lầu Thành", "Cao lầu Bà Bé", "Cao lầu Hội An cổ truyền"],
    icon: "🍜",
    category: "Đặc sản",
    difficulty: "Rất khó",
    time: "Bí quyết gia truyền"
  }];
  const getCategoryColor = (category: string) => {
    const colors = {
      "Món chính": "bg-vietnam-red/10 text-vietnam-red border-vietnam-red/20",
      "Đặc sản": "bg-vietnam-green/10 text-vietnam-green border-vietnam-green/20",
      "Điểm tâm": "bg-vietnam-gold/10 text-orange-700 border-vietnam-gold/20",
      "Đồ uống": "bg-blue-100 text-blue-700 border-blue-200",
      "Khai vị": "bg-purple-100 text-purple-700 border-purple-200"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700 border-gray-200";
  };
  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      "Dễ": "text-green-600",
      "Trung bình": "text-yellow-600",
      "Khó": "text-orange-600",
      "Rất khó": "text-red-600"
    };
    return colors[difficulty as keyof typeof colors] || "text-gray-600";
  };
  // Update visible count based on mobile state
  useEffect(() => {
    setVisibleCount(isMobile ? 1 : 3);
  }, [isMobile]);

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + (isMobile ? 1 : 3), specialtyDishes.length));
  };
  return <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">Ẩm thực Việt Nam</h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            Thưởng thức tinh hoa ẩm thực Việt Nam qua những món ăn đặc sản nổi tiếng
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {specialtyDishes.map((dish, index) => <Card key={index} className={`group bg-card border-heritage-cream shadow-peaceful hover:shadow-heritage transition-all duration-300 cursor-pointer ${index < visibleCount ? 'visible-item' : 'hidden-item'}`}>
              {(dish.name === "Phở Hà Nội" || dish.name === "Bún chả" || dish.name === "Cốm làng Vòng" || dish.name === "Bánh cuốn Thanh Trì" || dish.name === "Cà phê trứng" || dish.name === "Bánh mì Việt Nam" || dish.name === "Bún bò Huế" || dish.name === "Bánh xèo (Nam Bộ)" || dish.name === "Nem rán / Chả giò" || dish.name === "Bánh chưng – Bánh tét" || dish.name === "Gỏi cuốn (miền Nam)" || dish.name === "Cao lầu (Hội An)") && <div className="relative h-48 w-full mb-4 overflow-hidden rounded-t-lg">
                  <img src={dish.name === "Phở Hà Nội" ? "/lovable-uploads/2324b9d0-b512-4736-8da9-b4e9ff0c5e58.png" : dish.name === "Bún chả" ? "/lovable-uploads/6f0249c2-e995-4e56-932a-86e8855722e2.png" : dish.name === "Cốm làng Vòng" ? "/lovable-uploads/03944033-e9af-4695-a7de-0fc7fbe92588.png" : dish.name === "Bánh cuốn Thanh Trì" ? "/lovable-uploads/71240ab8-9e69-4417-ada1-605f9c4252b9.png" : dish.name === "Cà phê trứng" ? "/lovable-uploads/f85948ae-2604-4224-bf5d-7294ddf49cae.png" : dish.name === "Bánh mì Việt Nam" ? "/lovable-uploads/banh-mi-viet-nam-updated.jpg" : dish.name === "Bún bò Huế" ? "/lovable-uploads/bun-bo-hue.jpg" : dish.name === "Bánh xèo (Nam Bộ)" ? "/lovable-uploads/banh-xeo-nam-bo.jpg" : dish.name === "Nem rán / Chả giò" ? "/lovable-uploads/nem-ran-cha-gio.jpg" : dish.name === "Bánh chưng – Bánh tét" ? "/lovable-uploads/banh-chung-banh-tet.jpg" : dish.name === "Gỏi cuốn (miền Nam)" ? "/lovable-uploads/goi-cuon-mien-nam.jpg" : "/lovable-uploads/cao-lau-hoi-an.webp"} alt={dish.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>}
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  {!(dish.name === "Phở Hà Nội" || dish.name === "Bún chả" || dish.name === "Cốm làng Vòng" || dish.name === "Bánh cuốn Thanh Trì" || dish.name === "Cà phê trứng" || dish.name === "Bánh mì Việt Nam" || dish.name === "Bún bò Huế" || dish.name === "Bánh xèo (Nam Bộ)" || dish.name === "Nem rán / Chả giò" || dish.name === "Bánh chưng – Bánh tét" || dish.name === "Gỏi cuốn (miền Nam)" || dish.name === "Cao lầu (Hội An)") && <div className="text-4xl">{dish.icon}</div>}
                  <div className="flex flex-col items-end space-y-2">
                    <Badge variant="outline" className={`${getCategoryColor(dish.category)} font-inter text-xs`}>
                      {dish.category}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl font-playfair text-foreground group-hover:text-mountain-blue transition-colors duration-200">
                  {dish.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground font-inter italic">
                  {dish.origin}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {dish.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-sunrise-yellow" />
                    <span className="text-foreground/80 font-inter">{dish.time}</span>
                  </div>
                  
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-inter font-semibold text-foreground flex items-center space-x-1">
                    <Utensils className="h-4 w-4 text-mountain-blue" />
                    <span>Đặc điểm:</span>
                  </h4>
                  <ul className="space-y-1">
                    {dish.specialFeatures.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-forest-green rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-foreground/80 font-inter">{feature}</span>
                      </li>)}
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-inter font-semibold text-foreground flex items-center space-x-1">
                    <MapPin className="h-4 w-4 text-mountain-blue" />
                    <span>Địa điểm nổi tiếng:</span>
                  </h4>
                  <ul className="space-y-1">
                    {dish.famousPlaces.map((place, placeIndex) => <li key={placeIndex} className="flex items-start space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-sunrise-yellow rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-foreground/80 font-inter">{place}</span>
                      </li>)}
                  </ul>
                </div>
                
                <div className="pt-3 border-t border-heritage-cream">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground font-inter">Khám phá món ăn</span>
                    <Heart className="h-4 w-4 text-mountain-blue group-hover:scale-110 transition-transform duration-200" />
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="text-center mt-12">
          <div className="flex flex-col items-center space-y-4">
            
            
            {visibleCount < specialtyDishes.length && <Button onClick={handleShowMore} variant="outline" className="border-mountain-blue text-mountain-blue hover:bg-mountain-blue hover:text-primary-foreground transition-colors duration-300">
                Hiển thị thêm
              </Button>}
          </div>
        </div>
      </div>
    </section>;
};
export default CuisineSection;