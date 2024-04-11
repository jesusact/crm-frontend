export function TotalFreelancers({ freelancers }) {
  return (
    <div className="card border-solid border-gray-200 border-2 rounded-xl text-left p-4 w-1/2 font-semibold">
      <h2 className="text-lg mb-7">Total freelancers</h2>
      <p className="text-3xl">{freelancers}</p>
    </div>
  );
}
