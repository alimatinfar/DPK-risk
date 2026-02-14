type DefaultButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

export default function DefaultButton({ children, variant = "primary", onClick }: DefaultButtonProps) {
  const base = "px-4 py-2 rounded-lg font-semibold transition";
  const styles = {
    primary: "bg-primary hover:bg-primary/90",
    secondary: "bg-secondary hover:bg-secondary/90",
  };

  return (
    <button className={`${base} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}
