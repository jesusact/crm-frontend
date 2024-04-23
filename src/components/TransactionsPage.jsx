import { SideMenu } from "./SideMenu"
import { Transactions } from "./Transactions"
import '../styles/transactionsPage.css'
export function TransactionsPage(){
    return (
        <div className="flex">
        <SideMenu />
        <div className="m-auto">
            <h1 className="text-2xl font-semibold mt-10">Transactions Page</h1>
        <Transactions />
        </div>
        </div>
    )
}