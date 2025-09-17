import SidebarLayout from "../components/SidebarLayout";


export default function PostsPage() {
  return (
    <SidebarLayout>
      <h1 className="text-2xl font-bold">Posts</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">Manage your posts here.</p>
    </SidebarLayout>
  );
}
