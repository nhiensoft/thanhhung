import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HistorySection from "@/components/sections/HistorySection";
import MobileHeader from "@/components/mobile/MobileHeader";
import MobileHeroSection from "@/components/mobile/MobileHeroSection";
import MobileHistorySection from "@/components/mobile/MobileHistorySection";
import { useIsMobile } from "@/hooks/use-mobile";
import HeritageSection from "@/components/sections/HeritageSection";
import VillagesSection from "@/components/sections/VillagesSection";
import CuisineSection from "@/components/sections/CuisineSection";
import EducationTransitionSection from "@/components/sections/EducationTransitionSection";
import HOUSection from "@/components/sections/HOUSection";
import MobileHOUSection from "@/components/mobile/MobileHOUSection";
import ChatBot from "@/components/ChatBot";
import FloatingConsultButton from "@/components/FloatingConsultButton";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [hasSeenHistory, setHasSeenHistory] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  // Track when history section comes into view
  const { elementRef: historyRef, isVisible: isHistoryVisible } = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: '0px'
  });

  // Handle consultation button click
  const handleConsultClick = () => {
    // Disable scroll during animation
    document.body.style.overflow = 'hidden';
    
    const houElement = document.getElementById('hou');
    const consultButton = document.querySelector('[data-consult-trigger]') as HTMLButtonElement;
    
    if (houElement) {
      // Check if form is already open
      const isFormOpen = document.querySelector('[role="dialog"]') !== null;
      
      // Scroll immediately
      houElement.scrollIntoView({ behavior: "smooth" });
      
      // Open form if not already open
      if (!isFormOpen && consultButton) {
        consultButton.click();
      }
      
      // Re-enable scroll after animation
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 500);
    } else {
      // Fallback: re-enable scroll if elements not found
      document.body.style.overflow = '';
    }
  };

  const handleSearch = (query: string) => {
    if (query.trim()) {
      toast({
        title: "Tìm kiếm",
        description: `Đang tìm kiếm: "${query}"`,
      });
      // Here you would implement actual search functionality
    }
  };

  // Show buttons when history section is visible for the first time
  useEffect(() => {
    if (isHistoryVisible && !hasSeenHistory) {
      setHasSeenHistory(true);
      setButtonsVisible(true);
    }
  }, [isHistoryVisible, hasSeenHistory]);

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['history', 'heritage', 'villages', 'cuisine', 'hou'];
      const scrollPosition = window.scrollY + 200; // Offset for better detection
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      
      // If we're at the top, set active to "home"
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    
    // Scroll to section if not home
    if (section !== "home") {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Handle chat state change
  const handleChatStateChange = (isOpen: boolean) => {
    setIsChatOpen(isOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      {isMobile ? (
        <>
          <MobileHeader />
          
          <MobileHeroSection />
          
          <main>
            <div id="history" ref={historyRef}>
              <MobileHistorySection />
            </div>
            
            <div id="heritage">
              <HeritageSection />
            </div>
            
            <div id="villages">
              <VillagesSection />
            </div>
            
            <div id="cuisine">
              <CuisineSection />
            </div>
            
            <div id="hou">
              <EducationTransitionSection />
              <MobileHOUSection />
            </div>
          </main>
        </>
      ) : (
        <>
          <Header 
            onSearch={handleSearch}
            onSectionChange={handleSectionChange}
            activeSection={activeSection}
          />
          
          <HeroSection />
          
          <main>
            <div id="history" ref={historyRef}>
              <HistorySection />
            </div>
            
            <div id="heritage">
              <HeritageSection />
            </div>
            
            <div id="villages">
              <VillagesSection />
            </div>
            
            <div id="cuisine">
              <CuisineSection />
            </div>
            
            <div id="hou">
              <EducationTransitionSection />
              <HOUSection />
            </div>
          </main>
        </>
      )}
      
      <ChatBot isVisible={buttonsVisible} onChatStateChange={handleChatStateChange} />
      <FloatingConsultButton onConsultClick={handleConsultClick} isVisible={buttonsVisible} isChatOpen={isChatOpen} />
    </div>
  );
};

export default Index;