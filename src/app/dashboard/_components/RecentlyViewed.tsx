import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Clock, FileText } from "lucide-react";

export default function RecentlyViewed() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <div className="text-muted-foreground flex gap-2 ml-1 items-center mb-2">
        <Clock size={18} />
        <h1>Recent notes</h1>
      </div>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/4">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-video  justify-center p-6">
                  <div className="text-sm text-primary font-medium mb-2">
                    React Hooks
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    Understanding useEffect and its cleanup function.
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Updated 2h ago</span>
                    <div className="flex items-center space-x-2">
                      <FileText className="w-3 h-3" />
                      <span>2 pages</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
