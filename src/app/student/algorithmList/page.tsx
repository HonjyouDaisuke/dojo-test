import Header from "@/components/header";
import ProblemTable from "@/components/problemsTable";

export default function ProblemList() {
    return (
        <div>
            <Header />
            <div className='flex justify-center px-4 py-4'>
                <ProblemTable />
            </div>
        </div>
    )
}
