export interface Board {
    id?: string;
    title: string;
    priority: number;
    tasks: Task[];
}

export interface Task {
    id?: string,
    description: string;
    label: 'purple' | 'blue' | 'green' | 'yellow' | 'red' | 'grey';
}