
interface Props {
    statusID: number
}

function selectIcon(statusID: number) {
    switch (statusID) {
        case 0:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zM6 20V4h7v5h5v11z"></path></svg>
            );
            break;
        case 1:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m23 19l-3-3v2h-4v2h4v2zm-9.2 3H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h8l6 6v5.1c-.3-.1-.7-.1-1-.1s-.7 0-1 .1V9h-5V4H6v16h7.1c.1.7.4 1.4.7 2M8 12h8v1.8c-.1.1-.2.1-.3.2H8zm0 4h5v2H8z"></path></svg>
            );
            break;
        case 2:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 14h3.05l5-5q.225-.225.338-.513t.112-.562q0-.275-.125-.537T14.05 6.9l-.9-.95q-.225-.225-.5-.337t-.575-.113q-.275 0-.562.113T11 5.95l-5 5zm7-6.075L12.075 7zM7.5 12.5v-.95l2.525-2.525l.5.45l.45.5L8.45 12.5zm3.025-3.025l.45.5l-.95-.95zm.65 4.525H18v-2h-4.825zM2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6zm3.15-6H20V4H4v13.125zM4 16V4z"></path></svg>
            );
            break;
        case 3:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8"></path></svg>
            );
            break;
        default:
            return null;
    }
}
export default function StatusIcon({ statusID }: Props) {
    let statusString: string = '';
    switch (statusID) {
        case 0:
            statusString = "未提出";
            break;
        case 1:
            statusString = "提出済み";
            break;
        case 2:
            statusString = "レビュー中";
            break;
        case 3:
            statusString = "完了";
            break;
        default:
            statusString = "？？";
            break;
    }

    return (
        <div>
            <span className="inline-flex m-2 px-3 py-1 rounded-full text-sm border">
                {selectIcon(statusID)}
                <span className="ml-1">
                    {statusString}
                </span>
            </span>
        </div >
    );
};