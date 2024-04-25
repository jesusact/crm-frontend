import { CreateMeeting, ShowMeetings } from "./Meetings"
import { SideMenu } from "./SideMenu"
import { useState } from "react";
export function MeetingsPage (){
    const [meetings, setMeetings] = useState([]);

  const handleAddMeeting = (newMeeting) => {
    setMeetings([...meetings, newMeeting]);
  };

  const handleDeleteMeeting = (id) => {
    const updatedMeetings = meetings.filter((meeting) => meeting.id !== id);
    setMeetings(updatedMeetings);
  };

  return (
    <div className="flex">
    <SideMenu />
    <div className="container mr-auto ml-auto w-1/2 mt-10">
      <CreateMeeting onAddMeeting={handleAddMeeting} />
      <ShowMeetings meetings={meetings} onDeleteMeeting={handleDeleteMeeting} />
    </div>
    </div>
  );
}