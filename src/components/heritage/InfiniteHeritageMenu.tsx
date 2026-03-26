import { useState, useEffect, useMemo, useRef } from "react";
import { HeritageFloatingCard } from "./HeritageFloatingCard";
import VietnamAtlasMap from "./VietnamAtlasMap";
import { vietnamHeritageSites, HeritageSite } from "@/data/vietnamHeritage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MapPin, Globe, Mountain, Building, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const REGIONS = [
  {
    id: "all",
    name: "Toàn quốc",
    icon: Globe,
  },
  {
    id: "north",
    name: "Bắc Bộ",
    icon: Mountain,
  },
  {
    id: "central",
    name: "Trung Bộ",
    icon: MapPin,
  },
  {
    id: "south",
    name: "Nam Bộ",
    icon: Building,
  },
] as const;

const CATEGORIES = [
  "Tất cả",
  "Thiên nhiên UNESCO",
  "Văn hóa UNESCO",
  "Di tích lịch sử",
  "Kiến trúc tôn giáo",
  "Danh lam thắng cảnh",
  "Kiến trúc hiện đại",
];

export const InfiniteHeritageMenu = () => {
  const isMobile = useIsMobile();
  const ITEMS_PER_BATCH = isMobile ? 2 : 6;
  const INITIAL_DISPLAY_COUNT = isMobile ? 4 : 9;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<"all" | "north" | "central" | "south">("all");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const shouldShowSite = (site: HeritageSite) => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      if (
        !site.name.toLowerCase().includes(query) &&
        !site.description.toLowerCase().includes(query) &&
        !site.location.toLowerCase().includes(query) &&
        !site.province.toLowerCase().includes(query)
      ) {
        return false;
      }
    }

    if (selectedRegion !== "all" && site.region !== selectedRegion) {
      return false;
    }

    if (selectedCategory !== "Tất cả" && site.category !== selectedCategory) {
      return false;
    }

    return true;
  };

  const visibleSites = useMemo(() => vietnamHeritageSites.filter(shouldShowSite), [searchQuery, selectedRegion, selectedCategory]);
  const hasMore = displayCount < visibleSites.length;

  const regionCounts = useMemo(
    () => ({
      all: vietnamHeritageSites.length,
      north: vietnamHeritageSites.filter((s) => s.region === "north").length,
      central: vietnamHeritageSites.filter((s) => s.region === "central").length,
      south: vietnamHeritageSites.filter((s) => s.region === "south").length,
    }),
    []
  );

  const loadMore = () => {
    if (!hasMore) return;
    setDisplayCount((prev) => prev + ITEMS_PER_BATCH);
  };

  useEffect(() => {
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  }, [searchQuery, selectedRegion, selectedCategory, INITIAL_DISPLAY_COUNT]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsRegionDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedRegionData = REGIONS.find((r) => r.id === selectedRegion) || REGIONS[0];
  const otherRegions = REGIONS.filter((r) => r.id !== selectedRegion);

  return (
    <section className="py-20 bg-gradient-peaceful min-h-screen">
      <div className="fixed -z-50 opacity-0 pointer-events-none overflow-hidden">
        {vietnamHeritageSites.map((site) => (
          <img key={`preload-${site.id}`} src={site.image} alt={site.name} loading="eager" decoding="async" className="hidden" />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">Atlas Di Sản Việt Nam</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trải nghiệm bản đồ tương tác để khám phá vẻ đẹp di sản văn hóa và thiên nhiên theo từng vùng đất.
          </p>
        </div>

        <div className="mb-10">
          <VietnamAtlasMap selectedRegion={selectedRegion} onSelectRegion={setSelectedRegion} counts={regionCounts} />
        </div>

        <div className="mb-12 space-y-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Tìm kiếm di tích, danh lam..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card/80 backdrop-blur-sm border-border/40 focus:border-primary/60"
            />
          </div>

          <div className="flex justify-center px-4">
            {isMobile ? (
              <div className="relative" ref={dropdownRef}>
                <div className="flex gap-1 p-1 bg-card/60 backdrop-blur-sm rounded-lg border border-border/40">
                  <Button
                    variant={selectedRegion === selectedRegionData.id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => (selectedRegionData.id === "all" ? {} : setSelectedRegion(selectedRegionData.id))}
                    className={cn(
                      "transition-all duration-300 text-xs px-2 py-1 h-auto min-h-0",
                      selectedRegion === selectedRegionData.id ? "bg-primary text-primary-foreground shadow-lg" : "hover:bg-primary/10"
                    )}
                  >
                    <selectedRegionData.icon className="w-3 h-3 mr-1" />
                    {selectedRegionData.name}
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
                    className="text-xs px-1 py-1 h-auto min-h-0 hover:bg-primary/10"
                  >
                    <ChevronRight className={cn("w-3 h-3 transition-transform duration-200", isRegionDropdownOpen && "rotate-90")} />
                  </Button>
                </div>

                {isRegionDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 z-50 bg-card border border-border rounded-lg shadow-lg min-w-[120px] backdrop-blur-sm">
                    <div className="py-1">
                      {otherRegions.map((region) => (
                        <Button
                          key={region.id}
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setSelectedRegion(region.id);
                            setIsRegionDropdownOpen(false);
                          }}
                          className={cn(
                            "w-full justify-start text-xs px-3 py-2 h-auto min-h-0 rounded-none hover:bg-primary/10",
                            selectedRegion === region.id && "bg-primary/5 text-primary"
                          )}
                        >
                          <region.icon className="w-3 h-3 mr-2" />
                          {region.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-2 p-4 bg-card/60 backdrop-blur-sm rounded-xl border border-border/40">
                {REGIONS.map((region) => {
                  const Icon = region.icon;
                  return (
                    <Button
                      key={region.id}
                      variant={selectedRegion === region.id ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedRegion(region.id)}
                      className={cn(
                        "transition-all duration-300 text-sm px-4 py-2 h-auto min-h-0",
                        selectedRegion === region.id
                          ? "bg-primary text-primary-foreground shadow-lg scale-105 border border-primary/70"
                          : "hover:bg-primary/10 hover:text-foreground hover:shadow-sm hover:scale-105 text-foreground border border-transparent"
                      )}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {region.name}
                    </Button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {CATEGORIES.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={cn(
                  "cursor-pointer transition-all duration-300 hover:scale-105 px-3 py-1.5",
                  selectedCategory === category ? "bg-primary text-primary-foreground shadow-lg" : "hover:bg-primary/10 border-border/40"
                )}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-muted-foreground">
            Hiển thị <span className="font-semibold text-primary">{Math.min(displayCount, visibleSites.length)}</span> trên{" "}
            <span className="font-semibold text-primary">{visibleSites.length}</span> di tích
          </p>
        </div>

        <div className="relative min-h-[600px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-full h-full">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className={cn("absolute w-2 h-2 bg-primary/20 rounded-full", i % 2 === 0 ? "animate-drift" : "animate-drift-reverse")}
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 2}s`,
                    animationDuration: `${20 + i * 5}s`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
              {vietnamHeritageSites.map((site, index) => {
                const isVisible = shouldShowSite(site);
                const visibleIndex = visibleSites.findIndex((s) => s.id === site.id);
                const shouldDisplay = isVisible && visibleIndex < displayCount;

                return (
                  <div
                    key={site.id}
                    className={cn("transition-all duration-300", shouldDisplay ? "block animate-fade-in" : "hidden")}
                    style={{ animationDelay: shouldDisplay ? `${(visibleIndex >= 0 ? visibleIndex % 8 : 0) * 0.1}s` : undefined }}
                  >
                    <HeritageFloatingCard site={site} index={index} />
                  </div>
                );
              })}
            </div>

            {visibleSites.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">Không tìm thấy nội dung phù hợp với mong muốn của bạn trên website</p>
              </div>
            )}
          </div>

          {hasMore && visibleSites.length > 0 && (
            <div className="text-center mt-12">
              <Button
                onClick={loadMore}
                variant="outline"
                size="lg"
                className="bg-card/80 backdrop-blur-sm border-border/40 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
              >
                <Filter className="w-4 h-4 mr-2" />
                Xem thêm di tích
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
