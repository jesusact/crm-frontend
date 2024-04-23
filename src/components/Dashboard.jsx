import { TotalEmployees } from "./TotalEmployees"
import { TotalFreelancers } from "./TotalFreelancers"
import { TransactionsView } from "./TransactionsView"
export function Dasboard(){
    return (
        <>
        <h2 className="mt-10 font-semibold text-2xl text-left mb-4">Dashboard</h2>
        <div className="flex">
        <TotalEmployees employees={555}/>
        <TotalFreelancers freelancers={234}/>
        </div>
        <TransactionsView/>
        </>
    )
}