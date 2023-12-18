

interface Props {
    statusID: number
    statusString: string
}
export default function StatusIcon({ statusID, statusString }: Props) {
    return (
        <div>
            <p>{statusString}</p>
            <p>{statusID}</p>
        </div>
    );
};