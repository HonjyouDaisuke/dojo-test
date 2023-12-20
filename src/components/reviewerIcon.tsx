interface Props {
    reviewerName: string[]
}

const setReviewers = (reviewerName: string[]) => {
    const reviewerList = [];
    for (let i = 0; i < reviewerName.length; i++) {
        reviewerList.push(
            <span key={i} className="inline-flex items-center m-2 px-3 py-1 bg-green-200 hover:bg-green-300 rounded-full text-sm font-semibold text-green-600">
                <span className="ml-1">
                    {reviewerName[i]}
                </span>
            </span>
        )
    }
    return reviewerList;
}

export default function ReviewerIcon({ reviewerName }: Props) {
    return (
        <div>
            {setReviewers(reviewerName)}
        </div>
    );
};