import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import React from "react";

const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <LanguageProvider>
                <Routes>
                  {/* Redirecionar da raiz para /pt-BR */}
                  <Route path="/" element={<Navigate to="/pt-BR" replace />} />

                  {/* Rotas com prefixo de idioma */}
                  <Route path="/:lang" element={<Index />} />
                  <Route path="/:lang?/project/:id" element={<ProjectDetail />} />

                  {/* Página 404 */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </LanguageProvider>
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
