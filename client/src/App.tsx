import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { FormProvider } from "./contexts/FormContext";
import Home from "./pages/Home";
import Worksheet1 from "./pages/Worksheet1";
import Worksheet2 from "./pages/Worksheet2";
import Worksheet3 from "./pages/Worksheet3";
import Worksheet4 from "./pages/Worksheet4";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/worksheet/1"} component={Worksheet1} />
      <Route path={"/worksheet/2"} component={Worksheet2} />
      <Route path={"/worksheet/3"} component={Worksheet3} />
      <Route path={"/worksheet/4"} component={Worksheet4} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <FormProvider>
        <ThemeProvider
          defaultTheme="light"
          // switchable
        >
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </FormProvider>
    </ErrorBoundary>
  );
}

export default App;