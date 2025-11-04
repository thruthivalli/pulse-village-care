import { useState, useRef, useEffect } from "react";
import { Mic, MicOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface VoiceInputProps {
  onTranscript: (text: string) => void;
  placeholder?: string;
}

const VoiceInput = ({ onTranscript, placeholder = "Speak or type..." }: VoiceInputProps) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const { toast } = useToast();
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;
      
      recognitionRef.current.onresult = (event: any) => {
        const current = event.resultIndex;
        const transcriptText = event.results[current][0].transcript;
        setTranscript(transcriptText);
        
        if (event.results[current].isFinal) {
          onTranscript(transcriptText);
          setTranscript("");
        }
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);

        let errorMessage = "Could not access microphone. Please type instead.";

        if (event.error === 'network') {
          errorMessage = "Network error: Please check your internet connection and try again.";
        } else if (event.error === 'no-speech') {
          errorMessage = "No speech detected. Please try again.";
        } else if (event.error === 'audio-capture') {
          errorMessage = "Could not access microphone. Please check permissions.";
        } else if (event.error === 'not-allowed') {
          errorMessage = "Microphone access denied. Please enable microphone permissions in your browser.";
        }

        toast({
          title: "Voice input error",
          description: errorMessage,
          variant: "destructive",
        });
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [onTranscript, toast]);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      toast({
        title: "Voice input not supported",
        description: "Please type your message instead.",
        variant: "destructive",
      });
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
      toast({
        title: "Listening...",
        description: "Speak clearly into your microphone",
      });
    }
  };

  return (
    <div className="flex items-center gap-2 w-full">
      <div className="flex-1 relative">
        <input
          type="text"
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && transcript.trim()) {
              onTranscript(transcript);
              setTranscript("");
            }
          }}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {isListening && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Loader2 className="w-5 h-5 text-primary animate-spin" />
          </div>
        )}
      </div>
      <Button
        onClick={toggleListening}
        variant={isListening ? "destructive" : "default"}
        size="lg"
        className="h-12 w-12"
      >
        {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
      </Button>
    </div>
  );
};

export default VoiceInput;
