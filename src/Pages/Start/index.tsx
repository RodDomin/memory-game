import { createRef, FormEvent, useCallback, useContext, useEffect, useState, memo } from "react";
import { History } from 'history';
import { UserContext } from "../../Context/UserContenxt";
import { setDifficulty, setName } from "../../Context/actions";
import Button from "../../Components/Button";
import { Background } from './styles';

interface Props {
  history: History
};

export default memo(function Start({ history }: Props) {
  const [disabled, setDisabled] = useState(true);
  const [state, dispatch] = useContext(UserContext);
  const inputRef = createRef<HTMLInputElement>();

  useEffect(() => {
    (inputRef.current as HTMLInputElement).value = state.name;
  }, [inputRef]);

  const formSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, [inputRef]);

  useEffect(() => {
    setDisabled(!(state.name && state.difficulty));
  }, [state]);

  const changeName = useCallback(() => {
    const name = inputRef.current?.value || '';

    dispatch(setName(name));
  }, [inputRef]);

  const changeDifficulty = useCallback((e: any) => {
    const { value } = e.target;

    dispatch(setDifficulty(value));
  }, []);

  const startGame = useCallback(() => {
    history.push('/game');
  }, [history]);

  return (
    <Background>
    <div className="card p-3" style={{ width: 350 }}>
      <h1>Pagina Inicial</h1>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <input className="d-block mb-2 form-control" name="name" placeholder="Seu nome" ref={inputRef}  />
          <Button onClick={changeName} text="Este é o meu nome!" />
        </div>
        <div>
          <h3>
            Selecione a dificuldade
          </h3>
          <div className="d-flex flex-column">
            <div>
              <input
                onChange={changeDifficulty}
                checked={state.difficulty === "easy"}
                id="easy"
                type="radio"
                name="difficulty"
                value="easy"
              />
              <label className="pl-2"  htmlFor="easy">Fácil</label>
            </div>
            <div>
              <input
                onChange={changeDifficulty}
                checked={state.difficulty === "medium"}
                id="medium"
                type="radio"
                name="difficulty"
                value="medium"
              />
              <label className="pl-2"  htmlFor="medium">Medio</label>
            </div>
            <div>
              <input
                onChange={changeDifficulty}
                checked={state.difficulty === "hard"}
                id="hard"
                type="radio"
                name="difficulty"
                value="hard"
              />
              <label className="pl-2"  htmlFor="hard">Dificil</label>
            </div>
          </div>
        </div>
        <Button disabled={disabled} text="Começar o jogo" onClick={startGame}  />
      </form>
    </div>
    </Background>
  );
});

