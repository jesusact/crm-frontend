import { TotalEmployees } from "./TotalEmployees"
import { TotalFreelancers } from "./TotalFreelancers"
import { Transactions } from "./Transactions"
export function Dasboard(){
    return (
        <>
        <h2 className="mt-10 font-semibold text-2xl text-left mb-5">Dashboard</h2>
        <div className="flex">
        <TotalEmployees employees={555}/>
        <TotalFreelancers freelancers={234}/>
        </div>
        <Transactions/>
        </>
    )
}