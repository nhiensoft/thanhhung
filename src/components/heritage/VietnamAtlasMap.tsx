import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Region = "all" | "north" | "central" | "south";

interface VietnamAtlasMapProps {
  selectedRegion: Region;
  onSelectRegion: (region: Region) => void;
  counts: Record<Region, number>;
}

const regionMeta: Record<Exclude<Region, "all">, { label: string; tone: string }> = {
  north: { label: "Bắc Bộ", tone: "bg-blue-100 border-blue-300 text-blue-800" },
  central: { label: "Trung Bộ", tone: "bg-amber-100 border-amber-300 text-amber-800" },
  south: { label: "Nam Bộ", tone: "bg-emerald-100 border-emerald-300 text-emerald-800" },
};

const mapPinClass = "absolute w-3 h-3 rounded-full border-2 border-white shadow-md bg-primary";

const AtlasPoint = ({ top, left }: { top: string; left: string }) => (
  <div
    className={cn(mapPinClass, "animate-pulse")}
    style={{ top, left }}
  >
    <span className="absolute -inset-1 rounded-full border border-primary/30 animate-ping" />
  </div>
);

export const VietnamAtlasMap = ({ selectedRegion, onSelectRegion, counts }: VietnamAtlasMapProps) => {
  return (
    <div className="rounded-3xl border border-border/60 bg-card/90 shadow-card p-4 md:p-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-[42%] lg:w-[38%]">
          <div className="relative h-[360px] md:h-[420px] rounded-2xl bg-gradient-to-b from-sky-50 via-blue-50 to-cyan-50 border border-border/50 overflow-hidden">
            {/* Vietnam abstract silhouette */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 180 420"
                className="h-[94%] w-auto"
                aria-label="Bản đồ Việt Nam cách điệu"
              >
                <path
                  d="M108 16c-18 8-33 24-38 42-7 24 4 48 10 71 6 22 8 41-4 61-10 16-30 26-38 43-8 16-5 35 4 50 12 19 32 29 42 48 8 14 5 32 9 47 6 24 30 43 55 44 23 1 45-12 56-32 11-20 11-45 2-66-8-17-23-31-26-49-2-13 2-27 8-39 8-15 21-27 27-44 7-21-2-47-20-61-16-13-38-17-53-30-13-12-16-32-13-49 3-19 13-36 14-55 1-14-4-29-15-38-10-8-24-9-36-3z"
                  className={cn(
                    "transition-colors duration-300",
                    selectedRegion === "all" ? "fill-primary/85" : "fill-primary/50"
                  )}
                />

                {/* north region overlay */}
                <path
                  d="M97 24c-12 6-22 16-27 29-7 18-3 38 2 57 5 17 9 35 2 51-7 15-21 25-31 37l47 26 39-26c8-12 13-27 12-42-2-22-15-41-24-61-7-17-9-38-1-55 3-7 8-12 12-16-10-8-23-8-31 0z"
                  className={cn(
                    "cursor-pointer transition-all duration-300",
                    selectedRegion === "north" ? "fill-blue-500/90" : "fill-blue-300/55 hover:fill-blue-400/75"
                  )}
                  onClick={() => onSelectRegion("north")}
                />

                {/* central region overlay */}
                <path
                  d="M88 198l-22 18c-12 10-22 22-24 37-2 14 4 29 14 38l34 28 45-31c4-12 4-24 0-36-4-11-12-21-15-33-4-17 3-35 11-50l-43 29z"
                  className={cn(
                    "cursor-pointer transition-all duration-300",
                    selectedRegion === "central" ? "fill-amber-500/90" : "fill-amber-300/55 hover:fill-amber-400/75"
                  )}
                  onClick={() => onSelectRegion("central")}
                />

                {/* south region overlay */}
                <path
                  d="M90 319l-30-25c2 16 12 31 22 43 8 10 18 18 24 30 6 13 5 29 9 43 5 18 20 33 39 36 17 3 35-4 46-17 11-13 15-32 12-49-2-12-8-23-15-33-9-11-20-20-28-32-7-10-10-23-11-36l-68 40z"
                  className={cn(
                    "cursor-pointer transition-all duration-300",
                    selectedRegion === "south" ? "fill-emerald-500/90" : "fill-emerald-300/55 hover:fill-emerald-400/75"
                  )}
                  onClick={() => onSelectRegion("south")}
                />
              </svg>
            </div>

            {/* simple pin effects */}
            {selectedRegion === "all" && (
              <>
                <AtlasPoint top="18%" left="54%" />
                <AtlasPoint top="42%" left="46%" />
                <AtlasPoint top="72%" left="58%" />
              </>
            )}
            {selectedRegion === "north" && <AtlasPoint top="24%" left="54%" />}
            {selectedRegion === "central" && <AtlasPoint top="48%" left="47%" />}
            {selectedRegion === "south" && <AtlasPoint top="76%" left="59%" />}

            <div className="absolute bottom-3 left-3 right-3 text-center text-xs text-muted-foreground bg-white/80 backdrop-blur rounded-lg px-3 py-2">
              Chạm vào vùng trên bản đồ để lọc di sản
            </div>
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="mb-4">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-2">
              Atlas Di Sản Việt Nam
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Từ núi non Bắc Bộ, dải đất Trung Bộ đến miền sông nước Nam Bộ —
              chọn vùng để khám phá các điểm di sản nổi bật.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <Button
              variant={selectedRegion === "all" ? "default" : "outline"}
              className="justify-between"
              onClick={() => onSelectRegion("all")}
            >
              <span>Toàn quốc</span>
              <span className="text-xs opacity-80">{counts.all}</span>
            </Button>

            {(Object.keys(regionMeta) as Array<Exclude<Region, "all">>).map((region) => (
              <button
                key={region}
                onClick={() => onSelectRegion(region)}
                className={cn(
                  "rounded-xl border px-3 py-2 text-left transition-all duration-200",
                  regionMeta[region].tone,
                  selectedRegion === region ? "ring-2 ring-primary/40 shadow-md" : "opacity-85 hover:opacity-100"
                )}
              >
                <div className="text-sm font-semibold">{regionMeta[region].label}</div>
                <div className="text-xs mt-1">{counts[region]} di sản</div>
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-border/60 bg-secondary/40 p-4">
            <p className="text-sm text-foreground/90 leading-relaxed">
              <span className="font-semibold">Tip:</span> Dùng kết hợp bộ lọc danh mục và ô tìm kiếm để nhanh chóng tìm đúng di sản theo chủ đề.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VietnamAtlasMap;
