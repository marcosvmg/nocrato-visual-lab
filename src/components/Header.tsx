import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container py-4">
        <img 
          src={logo} 
          alt="Nocrato Marketing" 
          className="h-8 invert dark:invert-0" 
        />
      </div>
    </header>
  );
};
