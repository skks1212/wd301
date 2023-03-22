export default function TaskCard(props) {
    return (
        <div className="border border-gray-200 bg-white p-4 rounded-lg">
            <h3 className="text-xl font-bold">{props.title}</h3>
            {props.completedAtDate ?
                <p><b>Completed on :</b> {props.completedAtDate}</p> :
                <p><b>Due on :</b> {props.dueDate}</p>
            }
            <p><b>Assignee :</b> {props.assigneeName}</p>
        </div>
    )
}