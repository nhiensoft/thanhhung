import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

interface ChatBotProps {
  isVisible?: boolean;
  onChatStateChange?: (isOpen: boolean) => void;
}

const ChatBot = ({ isVisible = true, onChatStateChange }: ChatBotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [websiteContent, setWebsiteContent] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Tin nhắn chào mặc định
  const welcomeMessage: Message = {
    role: 'assistant',
    content: 'Xin chào 👋! 🌸 Cảm ơn bạn đã ghé thăm Website của bọn mình. Bạn có cần mình giúp gì không? 💓',
    timestamp: new Date()
  };

  // Load nội dung website từ file txt
  useEffect(() => {
    const loadWebsiteContent = async () => {
      try {
        const response = await fetch('/noi-dung-website.txt');
        if (response.ok) {
          const content = await response.text();
          setWebsiteContent(content);
        }
      } catch (error) {
        // Silently handle error, continue without website content
      }
    };

    loadWebsiteContent();
  }, []);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Mở chat và hiển thị tin nhắn chào
  const openChat = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setTimeout(() => {
        setMessages([welcomeMessage]);
      }, 300);
    }
  };

  // Đóng chat
  const closeChat = () => {
    setIsOpen(false);
  };

  // Thông báo thay đổi trạng thái chat
  useEffect(() => {
    onChatStateChange?.(isOpen);
  }, [isOpen, onChatStateChange]);

  // Tạo chuỗi lịch sử chat
  const getChatHistory = () => {
    return messages.map(msg => `${msg.role === 'user' ? 'Người dùng' : 'AI'}: ${msg.content}`).join('\n');
  };

  // Gọi API Gemini
  // Danh sách API keys để fallback khi lỗi
  const apiKeys = useMemo(() => [
    'AIzaSyDeZthxJH9EU5Bu4ghV0uoZ4LlVXGcpwCk',
    'AIzaSyAPACd1KiVz9Cq0AKPO4i1v58x8DpBX8AY',
    'AIzaSyB0jErFcMlLy-Z0Sno5D7OE_IdF57ypYZI',
    'AIzaSyDffZ2oIWsWgDNkCbvaJ1x1Db764k9qomM',
  ], []);

  const callGeminiAPI = async (userMessage: string) => {
    const systemPrompt = "Bạn là một trợ lý ảo AI cực kỳ thân thiện, dễ gần, thông minh, luôn trả lời ngắn gọn dễ hiểu, nhưng cũng có chiều sâu nếu người dùng cần như muốn hiểu thông tin chi tiết, ... Bạn giúp đỡ người dùng truy cập website về mọi thắc mắc như giới thiệu, hướng dẫn, tư vấn thông tin, hoặc trò chuyện vui vẻ. Hãy dùng phong cách nói nhẹ nhàng, dễ thương và gần gũi với người trẻ, nhưng vẫn đảm bảo chuyên nghiệp. Đặc biệt, chỉ chào người dùng một lần, đừng lặp lại thông tin đã trả lời hoặc lặp lại một cách tương tự. Khi người dùng hỏi những câu không liên quan đến nội dung Website, hãy trả lời một cách khéo léo và nhẹ nhàng dẫn dắt họ quay trở lại các chủ đề mà Website đang cung cấp. (Ví dụ: \"Câu hỏi này thú vị quá, nhưng để mình hỗ trợ bạn tốt nhất về [???] thì...\", hoặc \"Ngoài lề một chút là..., nhưng bạn có muốn tìm hiểu thêm về [Thông tin web] không?\". Nếu không chắc câu trả lời, hãy nói 'Mình cần kiểm tra thêm chút nha!'.";

    const chatHistory = getChatHistory();
    const finalPrompt = `${systemPrompt}\n\nNội dung Trong Website:\n${websiteContent}\n\nCả cuộc trò chuyện hiện tại:\n${chatHistory}\n\nHiện tại người dùng vừa trò chuyện: ${userMessage}`;

    const contents = [{ parts: [{ text: finalPrompt }] }];

    for (let i = 0; i < apiKeys.length; i++) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite-preview:generateContent?key=${apiKeys[i]}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents })
          }
        );

        if (!response.ok) {
          console.warn(`API key ${i + 1} lỗi (${response.status}), thử key tiếp theo...`);
          continue;
        }

        const data = await response.json();
        const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (botResponse) return botResponse;

        console.warn(`API key ${i + 1} không trả về nội dung, thử key tiếp theo...`);
      } catch (error) {
        console.warn(`API key ${i + 1} exception, thử key tiếp theo...`);
      }
    }

    return 'Oops! Tất cả kết nối đều gặp sự cố. Bạn thử lại sau nhé! 🙏';
  };

  // Gửi tin nhắn
  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Hiển thị "Đang soạn..."
    const typingMessage: Message = {
      role: 'assistant',
      content: 'Đang soạn...',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, typingMessage]);

    try {
      const response = await callGeminiAPI(inputValue);
      
      // Xóa tin nhắn "Đang soạn..." và thêm phản hồi thật
      setMessages(prev => {
        const newMessages = prev.slice(0, -1); // Xóa tin nhắn "Đang soạn..."
        return [...newMessages, {
          role: 'assistant',
          content: response,
          timestamp: new Date()
        }];
      });
    } catch (error) {
      setMessages(prev => {
        const newMessages = prev.slice(0, -1);
        return [...newMessages, {
          role: 'assistant',
          content: 'Xin lỗi, có lỗi xảy ra. Bạn thử lại sau nhé! 😊',
          timestamp: new Date()
        }];
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Xử lý Enter
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Focus input khi mở chat
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  return (
    <>
      {/* Nút Chat */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      }`}>
        <button
          onClick={openChat}
          className={`group relative w-16 h-16 
            bg-gradient-to-r from-mountain-blue to-mountain-purple 
            text-primary-foreground rounded-full shadow-lg hover:shadow-xl 
            flex items-center justify-center
            transition-all duration-300 ease-out
            hover:scale-110 hover:rotate-2
            ${isOpen ? 'scale-0' : 'scale-100'}
          `}
          style={{
            animation: 'gentle-pulse 3s ease-in-out infinite, gentle-shake 4s ease-in-out infinite'
          }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sunrise-yellow to-sunset-orange opacity-30 animate-ping" />
          
          {/* Main icon */}
          <MessageCircle 
            size={24} 
            className="relative z-10 transition-transform duration-300 group-hover:scale-110" 
          />
          
          {/* Ripple effect on hover */}
          <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-110 transition-transform duration-500 ease-out" />
        </button>
      </div>

      {/* Khung Chat */}
      <div
        className={`fixed bottom-6 right-6 w-96 h-[500px] bg-card rounded-2xl shadow-2xl z-50 flex flex-col transition-all duration-300 ease-out transform ${
          isOpen 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-full opacity-0 scale-95 pointer-events-none'
        } sm:w-80 sm:h-[450px] max-sm:w-[calc(100vw-2rem)] max-sm:h-[calc(100vh-3rem)] max-sm:bottom-3 max-sm:right-3 max-sm:left-3`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-mountain-blue to-mountain-purple text-primary-foreground p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <MessageCircle size={16} />
            </div>
            <div>
              <h3 className="font-semibold text-sm">AI Assistant</h3>
              <p className="text-xs opacity-80">Luôn sẵn sàng giúp đỡ</p>
            </div>
          </div>
          <button
            onClick={closeChat}
            className="w-8 h-8 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-mountain-blue to-mountain-purple text-primary-foreground rounded-br-md'
                    : 'bg-card border border-border text-card-foreground rounded-bl-md shadow-sm'
                }`}
              >
                {message.content === 'Đang soạn...' ? (
                  <div className="flex items-center gap-1">
                    <span>Đang soạn</span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                ) : (
                  <div 
                    className="whitespace-pre-wrap leading-normal [&>*]:m-0 [&>p]:leading-normal [&>ul]:pl-4 [&>ol]:pl-4 [&>li]:leading-normal [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(marked.parseInline(message.content) as string)
                    }}
                  />
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border bg-card rounded-b-2xl">
          <div className="flex items-center gap-2 bg-gray-100 rounded-full p-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Nhập tin nhắn..."
              className="flex-1 bg-transparent outline-none px-3 py-1 text-sm placeholder-gray-500"
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={!inputValue.trim() || isLoading}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                inputValue.trim() && !isLoading
                  ? 'bg-gradient-to-r from-mountain-blue to-mountain-purple text-primary-foreground hover:shadow-md'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay cho mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 sm:hidden"
          onClick={closeChat}
        />
      )}
    </>
  );
};

export default ChatBot;
