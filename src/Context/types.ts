import Card from "../Entities/Card"

export type Reducer<
  State = any, Action = ReducerAction
> = (state: State, action: Action) => State

export interface ReducerAction<T = any> {
  type: string;
  payload: T
}

export interface UserState {
  name: null | string;
  points: number;
  difficulty: null | string;
  cards: Card[]
}

export const ACTION_TYPES = {
  UPDATE_DIFFICULTY: '@set/DIFFICULTY',
  UPDATE_NAME: '@set/NAME',
  ADD_POINTS: '@add/POINTS',
  RESET_POINTS: '@set/POINTS',
  OPEN_CARD: '@open/CARD',
  CLOSE_CARD: '@close/CARD',
  UPDATE_CARD: '@update/CARD',
  SET_CARD: '@set/CARD',
}

export function dispatch(): ReducerAction {
  return {
    payload: {},
    type: ''
  }
}