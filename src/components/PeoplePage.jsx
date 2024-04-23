import { SideMenu } from "./SideMenu";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { TotalEmployees } from "./TotalEmployees";
import { TotalFreelancers } from "./TotalFreelancers";
export function PeoplePage() {
  let employees = 0;
  let freelancers = 0;
  let volunteers = 0;

  const initialPeople = [
    {
      name: "María Pérez Góndola",
      age: 34,
      rol: "Freelancer",
      nif: "12345678W",
      address: "Harlem Street, 24",
    },
    {
      name: "Pepa Lopez García",
      age: 23,
      rol: "Employee",
      nif: "12345678W",
      address: "Harlem Street, 24",
    },
    {
      name: "Lorena Cuevas Perita",
      age: 30,
      rol: "Freelancer",
      nif: "12345678W",
      address: "Harlem Street, 24",
    },
    {
      name: "Juana Gil Parpa",
      age: 22,
      rol: "Volunteer",
      nif: "12345678W",
      address: "Magic Street, 87",
    },
    {
      name: "Pedro Baños Podere",
      age: 27,
      rol: "Employee",
      nif: "12345678W",
      address: "Magic Street, 87",
    },
    {
      name: "José Nogales Góndola",
      age: 43,
      rol: "Employee",
      nif: "12345678W",
      address: "Magic Street, 87",
    },
    {
      name: "Pepito De Palotes",
      age: 52,
      rol: "Volunteer",
      nif: "12345678W",
      address: "Harlem Street, 24",
    },
    {
      name: "Lucía Bellido Cúrcuma",
      age: 29,
      rol: "Freelancer",
      nif: "12345678W",
      address: "Harlem Street, 24",
    },
  ];

  const [people, setPeople] = useState(initialPeople);
  const [editIndex, setEditIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const [newPerson, setNewPerson] = useState({
    name: "",
    age: "",
    rol: "",
    nif: "",
    address: "",
  });

  const peoplePerPage = 10;

  const handleEdit = (index) => {
    setEditIndex(index + currentPage * peoplePerPage);
  };

  const handleSave = () => {
    setEditIndex(null); // Finaliza el modo de edición
    // Aquí puedes actualizar el array de objetos si es necesario
  };

  const handleDelete = (index) => {
    const updatedPeople = [...people];
    updatedPeople.splice(index + currentPage * peoplePerPage, 1);
    setPeople(updatedPeople);
  };

  const handleInputChange = (e, key, index) => {
    const updatedPeople = [...people];
    updatedPeople[index + currentPage * peoplePerPage][key] = e.target.value;
    setPeople(updatedPeople);
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleAddPerson = () => {
    setPeople([...people, newPerson]);
    setNewPerson({
      name: "",
      age: "",
      rol: "",
      nif: "",
      address: "",
    });
  };

  const offset = currentPage * peoplePerPage;
  const currentPeople = people.slice(offset, offset + peoplePerPage);
  const pageCount = Math.ceil(people.length / peoplePerPage);

  return (
    <div className="flex">
      <SideMenu />

      <div className="flex-column m-auto w-fit">
        <h1 className="font-semibold text-2xl mt-10 mb-5">People&apos;s page</h1>

        <div className="p-4 border-solid border-gray-200 border-2 rounded-xl h-fit">
          <table className="m-auto">
            <thead>
              <tr>
                <th>
                  <div className="mr-16 ml-16">Nif</div>
                </th>
                <th>
                  <div className="mr-16 ml-16">Name</div>
                </th>
                <th>
                  <div className="mr-16 ml-16">Age</div>
                </th>
                <th>
                  <div className="mr-16 ml-16">Address</div>
                </th>
                <th>
                  <div className="mr-16 ml-16">Rol</div>
                </th>
                <th>
                  <div className="mr-16 ml-16">Actions</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentPeople.map((person, index) => (
                <tr key={person.nif} className="pb-4 justify-center">
                  <td>
                    <div className="text-customPurple text-center bg-purple-100 rounded-lg mr-4 p-1">
                      {editIndex === index + currentPage * peoplePerPage ? (
                        <input
                          className="border rounded p-1"
                          value={person.nif}
                          onChange={(e) =>
                            handleInputChange(e, "nif", index)
                          }
                        />
                      ) : (
                        person.nif
                      )}
                    </div>{" "}
                  </td>
                  <td className="font-medium text-center">
                    {editIndex === index + currentPage * peoplePerPage ? (
                      <input
                        className="border rounded p-1"
                        value={person.name}
                        onChange={(e) =>
                          handleInputChange(e, "name", index)
                        }
                      />
                    ) : (
                      person.name
                    )}
                  </td>
                  <td className="font-medium text-center">
                    {editIndex === index + currentPage * peoplePerPage ? (
                      <input
                        className="border rounded p-1"
                        value={person.age}
                        onChange={(e) =>
                          handleInputChange(e, "age", index)
                        }
                      />
                    ) : (
                      person.age
                    )}
                  </td>
                  <td className="font-medium text-center">
                    {editIndex === index + currentPage * peoplePerPage ? (
                      <input
                        className="border rounded p-1"
                        value={person.address}
                        onChange={(e) =>
                          handleInputChange(e, "address", index)
                        }
                      />
                    ) : (
                      person.address
                    )}
                  </td>
                  <td className="font-medium text-center">
                    <div
                      className={
                        "font-medium rounded text-center p-1 m-2 " +
                        (person.rol === "Volunteer"
                          ? "text-green-700 bg-green-100"
                          : person.rol === "Employee"
                          ? "text-purple-700 bg-purple-100"
                          : person.rol === "Freelancer"
                          ? "text-yellow-700 bg-yellow-100"
                          : "text-red-700 bg-red-100")
                      }
                    >
                      {editIndex === index + currentPage * peoplePerPage ? (
                        <input
                          className="border rounded p-1"
                          value={person.rol}
                          onChange={(e) =>
                            handleInputChange(e, "rol", index)
                          }
                        />
                      ) : (
                        person.rol
                      )}
                    </div>
                  </td>
                  <td className="text-center">
                    {editIndex === index + currentPage * peoplePerPage ? (
                      <button
                        className="px-2 py-1 border border-gray-300 rounded bg-blue-500 text-white"
                        onClick={handleSave}
                      >
                        Save
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(index)}
                          className="mr-2 px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center mt-4">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination flex"}
              activeClassName={"active"}
              previousClassName={"px-2 py-1 border border-gray-300 rounded mr-2"}
              nextClassName={"px-2 py-1 border border-gray-300 rounded ml-2"}
              pageClassName={"px-2 py-1 border border-gray-300 rounded"}
              breakClassName={"px-2 py-1 border border-gray-300 rounded"}
              previousLinkClassName={"text-customPurple"}
              nextLinkClassName={"text-customPurple"}
              pageLinkClassName={"text-customPurple"}
              breakLinkClassName={"text-customPurple"}
            />
          </div>
        </div>
        
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Add New Person</h3>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Name"
              className="border rounded p-1 w-full sm:w-auto"
              value={newPerson.name}
              onChange={(e) => setNewPerson({ ...newPerson, name: e.target.value })}
            />
            <input
              type="number"
              placeholder="Age"
              className="border rounded p-1 w-full sm:w-auto"
              value={newPerson.age}
              onChange={(e) => setNewPerson({ ...newPerson, age: e.target.value })}
            />
            <input
              type="text"
              placeholder="Address"
              className="border rounded p-1 w-full sm:w-auto"
              value={newPerson.address}
              onChange={(e) => setNewPerson({ ...newPerson, address: e.target.value })}
            />
            <input
              type="text"
              placeholder="Nif"
              className="border rounded p-1 w-full sm:w-auto"
              value={newPerson.nif}
              onChange={(e) => setNewPerson({ ...newPerson, nif: e.target.value })}
            />
            <select
              value={newPerson.rol}
              onChange={(e) => setNewPerson({ ...newPerson, rol: e.target.value })}
              className="border rounded p-1 w-full sm:w-auto"
            >
              <option value="">Select Rol</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Employee">Employee</option>
              <option value="Freelancer">Freelancer</option>
              <option value="Other">Other</option>

            </select>
            <button onClick={handleAddPerson} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}
