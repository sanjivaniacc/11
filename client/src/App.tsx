import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Company from "@/pages/company";
import Team from "@/pages/team";
import Events from "@/pages/events";
import Corporate from "@/pages/corporate";
import Career from "@/pages/career";
import Policy from "@/pages/policy";
import Clubs from "@/pages/clubs";
import Dining from "@/pages/dining";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

function Router() {
  return (
    <div className="min-h-screen gradient-shift">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/company" component={Company} />
        <Route path="/team" component={Team} />
        <Route path="/events" component={Events} />
        <Route path="/corporate" component={Corporate} />
        <Route path="/career" component={Career} />
        <Route path="/policy" component={Policy} />
        <Route path="/clubs" component={Clubs} />
        <Route path="/dining" component={Dining} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
