import { SideMenu } from "./SideMenu";
import { Dasboard } from "./Dashboard";
import { SearchInput } from "./SearchInput";
import { Overview } from "./Overview";
import { Meetings } from "./Meetings";
import '../styles/dashboardPage.css';

export function DashboardPage() {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <SideMenu />
      </div>

      <div className="grid-item">
        <SearchInput />
        <Dasboard />
      </div>

      <div className="grid-item">
        <Overview />
        <Meetings />
      </div>
    </div>
  );
}
