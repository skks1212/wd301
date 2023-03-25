import React from "react";
import { TaskItem } from "./types";
interface TaskFormProps {
    addTask: (task: TaskItem) => void;
}

interface TaskFormState {
    title: string;
    dueDate: string;
    description: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
    constructor(props: TaskFormProps) {
        super(props);
    }
    addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const newTask = {
            title: this.state.title,
            dueDate: new Date(this.state.dueDate),
            description: this.state.description,
        }
        this.props.addTask(newTask);
        this.setState({ title: "" });
    };
    titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        this.setState({ title: event.target.value });
    };
    inputRef = React.createRef<HTMLInputElement>();
    render() {
        return (
            <form onSubmit={this.addTask} className="flex items-center gap-2 mb-4">
                <input
                    id="todoTitle"
                    placeholder="Title"
                    type="text"
                    value={this.state?.title}
                    onChange={this.titleChanged}
                    className="border border-slate-200 rounded-xl p-2 px-2"
                    required
                />
                <input
                    id="todoDueDate"
                    placeholder="Due date"
                    type="date"
                    value={this.state?.dueDate}
                    onChange={(event) => this.setState({ dueDate: event.target.value })}
                    className="border border-slate-200 rounded-xl p-2 px-2"
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    id="todoDescription"
                    value={this.state?.description}
                    onChange={(event) => this.setState({ description: event.target.value })}
                    className="border border-slate-200 rounded-xl p-2 px-2"
                    required
                />
                <button type="submit" className="bg-slate-500 text-white rounded-xl p-2 px-4">
                    Add item
                </button>
            </form>
        )
    }
}
export default TaskForm;