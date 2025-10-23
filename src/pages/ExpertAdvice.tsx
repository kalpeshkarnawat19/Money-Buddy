import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Clock, Sparkles } from "lucide-react";
import Typewriter from "typewriter-effect";

export default function ExpertAdvice() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
          Expert Advice
        </h1>
        <p className="text-muted-foreground">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Get personalized financial guidance")
                .pauseFor(2000)
                .start();
            }}
            options={{
              cursor: "",  // remove blinking cursor
              loop: true,
              deleteSpeed:100,
              delay: 100,   // adjust typing speed
            }}
          />
          </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="shadow-hover bg-gradient-card">
          <CardContent className="py-16 text-center">
            <div className="bg-gradient-primary p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <MessageSquare className="w-12 h-12 text-primary-foreground" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4">
              
               <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Coming Soon..!")
                .pauseFor(2000)
                .start();
            }}
            options={{
              cursor: "|",  // remove blinking cursor
              loop: false,
              autoStart:true,
              deleteSpeed: 0,
              delay: 100,   // adjust typing speed
            }}
          />
              </h2>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              We're building an AI-powered expert advice system to provide personalized financial guidance tailored to your unique situation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
              <div className="bg-secondary/50 rounded-lg p-6">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">AI-Powered Insights</h3>
                <p className="text-sm text-muted-foreground">
                  Get instant answers to your finance questions
                </p>
              </div>

              <div className="bg-secondary/50 rounded-lg p-6">
                <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">24/7 Availability</h3>
                <p className="text-sm text-muted-foreground">
                  Financial guidance whenever you need it
                </p>
              </div>
            </div>

            <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-sm text-muted-foreground">
                💡 <span className="font-medium">Pro tip:</span> While this feature is in development, 
                check out our Finance 101 section for essential financial knowledge!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
