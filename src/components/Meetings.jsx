import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SketchPicker } from "react-color";
import enUS from 'date-fns/locale/en-US';

export function CreateMeeting({ onAddMeeting }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [color, setColor] = useState("#000000");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleAddMeeting = () => {
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(date);

    const newMeeting = {
      id: Math.floor(Math.random() * 10000) + 1,
      title,
      date: formattedDate,
      color,
    };

    onAddMeeting(newMeeting);
    setTitle("");
    setDate(new Date());
    setColor("#000000");

    // Guardar la reunión en localStorage
    const meetings = JSON.parse(localStorage.getItem("meetings")) || [];
    localStorage.setItem("meetings", JSON.stringify([...meetings, newMeeting]));
  };

  const handleColorChange = (color) => {
    setColor(color.hex);
  };

  return (
    <div className="p-4 border-solid border-gray-200 border-2 rounded-xl mb-6">
      <h2 className="text-lg font-semibold mb-4">Create Meeting</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Meeting Title"
        maxLength={30} // Añadir maxLength para limitar a 30 caracteres
        className="border border-gray-300 rounded-md p-2 mb-2 w-full"
      />
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="Hour"
        locale={enUS}
        dateFormat="MMMM d, yyyy h:mm aa" // Formato de fecha y hora
        className="border border-gray-300 rounded-md p-2 mb-2 w-full"
      />

      <div className="mb-2">
        <button
          onClick={() => setShowColorPicker(!showColorPicker)}
          className="px-3 py-1 bg-customPurple text-white rounded-md"
        >
          {showColorPicker ? "Save colour" : "Change colour"}
        </button>
        {showColorPicker && (
          <SketchPicker color={color} onChange={handleColorChange} />
        )}
      </div>

      <button
        onClick={handleAddMeeting}
        className="bg-customPurple text-white px-4 py-2 rounded-md"
      >
        Add Meeting
      </button>
    </div>
  );
}

export function ShowMeetings({ onDeleteMeeting }) {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    // Cargar reuniones desde localStorage cuando el componente se monte
    const storedMeetings = JSON.parse(localStorage.getItem("meetings")) || [];
    setMeetings(storedMeetings);
  }, []);

  const handleDeleteMeeting = (id) => {
    // Eliminar la reunión del estado y de localStorage
    const updatedMeetings = meetings.filter((meeting) => meeting.id !== id);
    setMeetings(updatedMeetings);
    localStorage.setItem("meetings", JSON.stringify(updatedMeetings));
  };

  return (
    <div className="p-4 border-solid border-gray-200 border-2 rounded-xl h-fit">
      <h2 className="text-lg font-semibold mb-4">Meetings</h2>
      <ul>
        {meetings.map((meeting) => (
          <li
            key={meeting.id}
            className="flex justify-between items-center mb-2 p-3 rounded-lg bg-gray-100 w-full"
          >
            <div
              className="w-3 h-3 m-2 rounded-xl"
              style={{ backgroundColor: meeting.color }}
            ></div>
            <div className="">
              {meeting.title}
              <br />
              {meeting.date}
            </div>
            <button
              onClick={() => handleDeleteMeeting(meeting.id)}
              className="text-white bg-red-600 font-semibold p-2 ml-3 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
