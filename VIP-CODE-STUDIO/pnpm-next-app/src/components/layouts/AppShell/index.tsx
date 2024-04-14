import Navbar from "../Navbar";

type AppShellProps = {
  children: React.ReactNode;
};
export default function AppShell(props: AppShellProps) {
  const { children } = props;
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
