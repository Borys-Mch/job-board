import JobsRow from "./JobRow";

export default function Jobs() {
    return (
        <div className="bg-slate-200 py-4">
            <div className="container">
                <h2 className="font-bold mb-4">Recent jobs</h2>
                <div className="flex flex-col gap-4">
                    <JobsRow />
                    <JobsRow />
                    <JobsRow />
                    <JobsRow />
                    <JobsRow />
                    <JobsRow />
                </div>
            </div>
        </div>
    )
}