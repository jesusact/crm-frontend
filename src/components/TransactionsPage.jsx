import { SideMenu } from "./SideMenu"
import { Transactions } from "./Transactions"
import '../styles/transactionsPage.css'
export function TransactionsPage(){
    return (
        <div className="grid-container-transactions">
        <SideMenu />
        <div className="mt-24">
            <h1 className="text-2xl font-semibold">Transactions Page</h1>
        <Transactions />
        </div>
        </div>
    )
}