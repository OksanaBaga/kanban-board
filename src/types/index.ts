export interface IColumn {
  id: string;
  title: string;
  tasks: number[];
}

export interface ILabel {
  id: string;
  title: string;
  color: string;
}

export interface ITask {
  id: number;
  title: string;
  description: string;
  assignee: any[];
  labels: ILabel[];
}
