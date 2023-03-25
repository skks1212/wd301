import React from "react";
import { TaskItem } from "./types";

export default class Task extends React.Component<TaskItem> {
    render() {
        return (
            <div className="TaskItem shadow-md border border-slate-100">
                <h2 className="text-base font-bold my-1">{this.props.title}</h2>
                <p className="text-sm text-slate-500">{this.props.dueDate.toLocaleDateString()}</p>
                <p className="text-sm text-slate-500">
                    Description: {this.props.description}
                </p>
            </div>
        )
    }
}
