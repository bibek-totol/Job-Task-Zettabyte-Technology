import SidebarLayout from "./components/SidebarLayout";


export default function HomePage() {
  return (
    <SidebarLayout>
      <h1 className="text-2xl font-bold">Dashboard Home</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Welcome to your dashboard.
      </p>
    </SidebarLayout>
  );
}
