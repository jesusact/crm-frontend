import { SideMenu } from "./SideMenu";
import { Dasboard } from "./Dashboard";
import { SearchInput } from "./SearchInput";
import { Overview } from "./Overview";
import '../styles/dashboardPage.css';
import { ShowMeetings } from "./Meetings";
import { useState } from "react";


export function DashboardPage() {
  const [meetings, setMeetings] = useState([]);

  const handleAddMeeting = (newMeeting) => {
    setMeetings([...meetings, newMeeting]);
  };

  const handleDeleteMeeting = (id) => {
    const updatedMeetings = meetings.filter((meeting) => meeting.id !== id);
    setMeetings(updatedMeetings);
  };
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
        <div className="m-5 h-1/4 overflow-scroll"><ShowMeetings meetings={meetings} onAddMeeting={handleAddMeeting} onDeleteMeeting={handleDeleteMeeting} /></div>

      </div>
    </div>
  );
}
