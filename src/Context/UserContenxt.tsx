import { createContext, useReducer } from 'react';
import { ACTION_TYPES, Reducer, UserState, dispatch } from './types';

const DEFAULT_STATE: UserState = {
  name: null,
  points: 0,
  difficulty: null,
  cards: [],
};

export const UserContext = createContext<any>(DEFAULT_STATE);

const reducer: Reducer<UserState> = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_POINTS:
      return {
        ...state,
        points: state.points + action.payload.points,
      };
    case ACTION_TYPES.RESET_POINTS:
      return {
        ...state,
        points: 0,
      };

    case ACTION_TYPES.UPDATE_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload.difficulty,
      };
    case ACTION_TYPES.UPDATE_NAME:
      return {
        ...state,
        name: action.payload.name
      };

    case ACTION_TYPES.CLOSE_CARD:
      let cardsCopy = [...state.cards];
      
      cardsCopy = cardsCopy.map((card) => {
        card.setOpen(false);

        return card;
      });

      return {
        ...state,
        cards: [...cardsCopy]
      };
    case ACTION_TYPES.OPEN_CARD:
      const cardToOpen = action.payload.index;
      const cardsOpen = state.cards
        .map(card => (!(card.getWin()) && card.getOpen()))
        .reduce((prev, current) => current ? prev + 1 : prev, 0);

      if (cardsOpen >= 2) {
        const cards = state.cards.map((card, index) => {
          if (cardToOpen === index) {
            card.setOpen(true);

            return card;
          }

          card.setOpen(card.getWin());
          return card;
        });

        return {
          ...state,
          cards,
        };
      }

      const cards = state.cards.map(card => card.clone());

      cards[cardToOpen].setOpen(true);

      cards.forEach((card, index) => {
        if (
          index !== cardToOpen &&
          (
            JSON.stringify(card) === JSON.stringify(cards[cardToOpen])
          )
        ) {
          cards[cardToOpen].setWin(true);
          cards[index].setWin(true)
        }
      });

      return {
        ...state,
        cards: [...cards],
      };

    case ACTION_TYPES.SET_CARD:
      return {
        ...state,
        cards: action.payload.cards,
      };
    default:
      return {
        ...state
      };
  }
}

const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
}

export default Provider;
