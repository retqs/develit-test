export type Id = string | number;

export type IInput = React.ChangeEvent<HTMLInputElement>;
export type IHandleChange = (e: IInput) => void;

export interface IuseFetchResult {
  isLoading: boolean;
  error: string | null;
  data: any;
}
