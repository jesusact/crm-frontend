import ReactPaginate from 'react-paginate';
import { useState } from 'react';

export function TransactionsView() {
    const initialTransaction= [{
        bill: "#67846",
        freelancer: "Elsa Campano",
        job: "Web Development",
        total: 2344,
        status: "Paid",
      },
      {
        bill: "#35782",
        freelancer: "John Smith",
        job: "Logo Design",
        total: 1200,
        status: "Paid",
      },
      {
        bill: "#98234",
        freelancer: "Anna Johnson",
        job: "Content Writing",
        total: 1800,
        status: "Pending",
      },
      {
        bill: "#12457",
        freelancer: "Carlos Martinez",
        job: "SEO Optimization",
        total: 1500,
        status: "Paid",
      },
      {
        bill: "#87645",
        freelancer: "Emily Jones",
        job: "Graphic Design",
        total: 2200,
        status: "Pending",
      },
      {
        bill: "#23987",
        freelancer: "David Brown",
        job: "Mobile App Development",
        total: 3000,
        status: "Paid",
      },
      {
        bill: "#65321",
        freelancer: "Sarah Miller",
        job: "Copywriting",
        total: 800,
        status: "Paid",
      },
      {
        bill: "#54678",
        freelancer: "Michael Taylor",
        job: "Social Media Management",
        total: 1700,
        status: "Paid",
      },
      {
        bill: "#78234",
        freelancer: "Jessica White",
        job: "Illustration",
        total: 900,
        status: "Pending",
      },
      {
        bill: "#93256",
        freelancer: "Matthew Clark",
        job: "Video Editing",
        total: 2500,
        status: "Paid",
      },
      {
        bill: "#12493",
        freelancer: "Samantha Wilson",
        job: "Photography",
        total: 2000,
        status: "Paid",
      },
      {
        bill: "#87432",
        freelancer: "Robert Harris",
        job: "E-commerce Development",
        total: 3500,
        status: "Paid",
      },
      {
        bill: "#54321",
        freelancer: "Michelle Lee",
        job: "UI/UX Design",
        total: 2800,
        status: "Paid",
      },
      {
        bill: "#98765",
        freelancer: "William Adams",
        job: "Content Marketing",
        total: 1600,
        status: "Pending",
      },
      {
        bill: "#45678",
        freelancer: "Olivia King",
        job: "Brand Strategy",
        total: 1900,
        status: "Paid",
      },
      {
        bill: "#98654",
        freelancer: "Daniel Turner",
        job: "Frontend Development",
        total: 2700,
        status: "Paid",
      },
      {
        bill: "#62345",
        freelancer: "Sophia Evans",
        job: "SEO Analysis",
        total: 1300,
        status: "Pending",
      },
      {
        bill: "#78342",
        freelancer: "Emma Thompson",
        job: "Animation",
        total: 1500,
        status: "Paid",
      },
      {
        bill: "#23980",
        freelancer: "James Garcia",
        job: "Email Marketing",
        total: 1100,
        status: "Pending",
      },
      {
        bill: "#32789",
        freelancer: "Isabella Martin",
        job: "Print Design",
        total: 1400,
        status: "Paid",
      },
      {
        bill: "#90876",
        freelancer: "Noah Adams",
        job: "Backend Development",
        total: 3200,
        status: "Paid",
      },
      {
        bill: "#56789",
        freelancer: "Ava Thompson",
        job: "Social Media Marketing",
        total: 2100,
        status: "Pending",
      },
      {
        bill: "#34219",
        freelancer: "Liam Brown",
        job: "Digital Illustration",
        total: 1800,
        status: "Paid",
      },
      {
        bill: "#89432",
        freelancer: "Charlotte Walker",
        job: "Blog Writing",
        total: 900,
        status: "Paid",
      },
      {
        bill: "#76543",
        freelancer: "Ethan Hill",
        job: "Web Design",
        total: 2600,
        status: "Paid",
      },
      {
        bill: "#23904",
        freelancer: "Amelia Roberts",
        job: "SEO Consultation",
        total: 1900,
        status: "Pending",
      },
      {
        bill: "#12398",
        freelancer: "Mia Turner",
        job: "Content Editing",
        total: 1500,
        status: "Paid",
      },
      {
        bill: "#87654",
        freelancer: "Benjamin Nelson",
        job: "App Design",
        total: 3000,
        status: "Pending",
      },
      {
        bill: "#76589",
        freelancer: "Grace Foster",
        job: "Video Production",
        total: 2400,
        status: "Paid",
      },
      {
        bill: "#34578",
        freelancer: "Lucas Gray",
        job: "Social Media Advertising",
        total: 1700,
        status: "Paid",
      },
      {
        bill: "#90876",
        freelancer: "Chloe Rogers",
        job: "Graphic Illustration",
        total: 1800,
        status: "Pending",
      },
      {
        bill: "#45678",
        freelancer: "Alexander Scott",
        job: "Web Development",
        total: 3500,
        status: "Paid",
      },
      {
        bill: "#67345",
        freelancer: "Zoe King",
        job: "Logo Design",
        total: 1200,
        status: "Pending",
      },
      {
        bill: "#87654",
        freelancer: "Aiden Nelson",
        job: "Content Creation",
        total: 1900,
        status: "Paid",
      },
      {
        bill: "#23456",
        freelancer: "Ella Turner",
        job: "Digital Marketing",
        total: 2200,
        status: "Pending",
      },
      {
        bill: "#87932",
        freelancer: "Natalie Young",
        job: "UI Design",
        total: 2800,
        status: "Paid",
      },
      {
        bill: "#54321",
        freelancer: "Christopher Lee",
        job: "SEO Optimization",
        total: 1600,
        status: "Pending",
      },
      {
        bill: "#23498",
        freelancer: "Hannah Harris",
        job: "Content Writing",
        total: 1300,
        status: "Paid",
      },
      {
        bill: "#87345",
        freelancer: "Tyler Smith",
        job: "Video Editing",
        total: 2500,
        status: "Pending",
      },
      {
        bill: "#12345",
        freelancer: "Leah Martinez",
        job: "Photography",
        total: 2000,
        status: "Paid",
      },
      {
        bill: "#87654",
        freelancer: "Jackson Garcia",
        job: "E-commerce Development",
        total: 3500,
        status: "Paid",
      },
      {
        bill: "#56789",
        freelancer: "Penelope Brown",
        job: "UI/UX Design",
        total: 2800,
        status: "Pending",
      },
      {
        bill: "#23456",
        freelancer: "Gabriel Adams",
        job: "Content Marketing",
        total: 1600,
        status: "Paid",
      },
      {
        bill: "#78932",
        freelancer: "Scarlett King",
        job: "Brand Strategy",
        total: 1900,
        status: "Pending",
      },
      {
        bill: "#39482",
        freelancer: "Madison Turner",
        job: "Frontend Development",
        total: 2700,
        status: "Paid",
      }];
      

  const [transactions, setTransactions] = useState(initialTransaction);
  const [currentPage, setCurrentPage] = useState(0);

  const transactionsPerPage = 10;

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * transactionsPerPage;
  const currentTransactions = transactions.slice(offset, offset + transactionsPerPage);
  const pageCount = Math.ceil(transactions.length / transactionsPerPage);

  return (
    <div className="p-4 mt-5 border-solid border-gray-200 border-2 rounded-xl">
      <h2 className="text-lg mb-7 font-bold text-left">Transactions</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="font-bold">Bills</th>
            <th className="font-bold">Freelancer</th>
            <th className="font-bold">Job</th>
            <th className="font-bold">Total</th>
            <th className="font-bold">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentTransactions.map((transaction) => (
            <tr key={transaction.bill} className="pb-4">
              <td><div className="text-customPurple text-center bg-purple-100 rounded-lg mr-4 p-1 font-semibold">{transaction.bill}</div></td>
              <td>{transaction.freelancer}</td>
              <td>{transaction.job}</td>
              <td>{`€${transaction.total}`}</td>
              <td>
                <div className={"font-medium rounded text-center p-1 " + (transaction.status === "Paid" ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100")}>
                  {transaction.status}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination flex'}
          activeClassName={'active'}
          previousClassName={'px-2 py-1 border border-gray-300 rounded mr-2'}
          nextClassName={'px-2 py-1 border border-gray-300 rounded ml-2'}
          pageClassName={'px-2 py-1 border border-gray-300 rounded'}
          breakClassName={'px-2 py-1 border border-gray-300 rounded'}
          previousLinkClassName={'text-customPurple'}
          nextLinkClassName={'text-customPurple'}
          pageLinkClassName={'text-customPurple'}
          breakLinkClassName={'text-customPurple'}
        />
      </div>
    </div>
  );
}
