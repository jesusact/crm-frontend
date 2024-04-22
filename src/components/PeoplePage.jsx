import { SideMenu } from "./SideMenu";
import { TotalEmployees } from "./TotalEmployees";
import { TotalFreelancers } from "./TotalFreelancers";
export function PeoplePage() {
    let employees=0;
    let freelancers=0;
  
    const people = [
    { name: "María Pérez Góndola", rol: "Freelancer", nif: "12345678W" },
    {
      name: "Pepa Lopez García",
      rol: "Employee",
      nif: "12345678W",
    },
    {
      name: "Lorena Cuevas Perita",
      rol: "Freelancer",
      nif: "12345678W",
    },
    {
      name: "Juana Gil Parpa",
      rol: "Freelancer",
      nif: "12345678W",
    },
    {
      name: "Pedro Baños Podere",
      rol: "Employee",
      nif: "12345678W",
    },
    {
      name: "José Nogales Góndola",
      rol: "Employee",
      nif: "12345678W",
    },
    {
      name: "Pepito De Palotes",
      rol: "Freelancer",
      nif: "12345678W",
    },
    {
      name: "Lucía Bellido Cúrcuma",
      rol: "Freelancer",
      nif: "12345678W",
    },
  ];

  people.forEach(person => {
    if (person.rol === "Employee") {
      employees++;
    } else if (person.rol === "Freelancer") {
      freelancers++;
    }
  });

  return (
    <div>
      {/* <SideMenu /> */}
      <h1>Página de personas</h1>
      <table>
        <thead>
          <tr>
            <th>Nif</th>
            <th>Name</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.nif} className="pb-4 justify-center">
              <td>
                <div className="text-customPurple text-center bg-purple-100 rounded-lg mr-4 p-1">
                  {person.nif}
                </div>{" "}
              </td>
              <td className="font-light">{person.name}</td>
              <td className="font-light">{person.rol}</td>
            </tr>
          ))}{" "}
        </tbody>
      </table>
    </div>
  );
}
