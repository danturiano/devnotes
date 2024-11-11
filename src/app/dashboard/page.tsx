import AddNote from "./_components/AddNote";
import Breadcrumbs from "./_components/Breadcrumbs";
import RecentlyViewed from "./_components/RecentlyViewed";

export default function page() {
  return (
    <div className="space-y-4">
      <Breadcrumbs />
      <AddNote />
      <RecentlyViewed />
    </div>
  );
}
