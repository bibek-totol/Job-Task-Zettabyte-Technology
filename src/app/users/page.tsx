import SidebarLayout from "../components/SidebarLayout";

export default function UsersPage() {
  return (
    <SidebarLayout>
      <h1 className="text-2xl font-bold">Users</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">Manage users here.</p>
    </SidebarLayout>
  );
}
