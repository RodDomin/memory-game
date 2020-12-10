import Card from "../Entities/Card";
import { ACTION_TYPES } from "./types";

export function setDifficulty(difficulty: string) {
  return {
    type: ACTION_TYPES.UPDATE_DIFFICULTY,
    payload: { difficulty }
  };
}

export function setName(name: string) {
  return {
    type: ACTION_TYPES.UPDATE_NAME,
    payload: { name }
  };
}

export function addPoints(points: number) {
  return {
    type: ACTION_TYPES.ADD_POINTS,
    payload: { points }
  };
}

export function resetPoints() {
  return {
    type: ACTION_TYPES.RESET_POINTS,
  };
}

export function setCards(cards: Card[]) {
  return {
    type: ACTION_TYPES.SET_CARD,
    payload: { cards }
  };
}

export function updateCard(index: number, card: Card) {
  return {
    type: ACTION_TYPES.UPDATE_CARD,
    payload: { index, card }
  };
}

export function openCard(index: number) {
  return {
    type: ACTION_TYPES.OPEN_CARD,
    payload: { index }
  };
}

export function closeCards() {
  return {
    type: ACTION_TYPES.CLOSE_CARD,
  };
}
