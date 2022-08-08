import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { Word } from './data/sampleData';

interface WordContextType {
  chosenWordId: Word['_id'] | undefined;
  setChosenWordId: Dispatch<SetStateAction<Word['_id'] | undefined>>;
}

const WordContext = createContext<WordContextType>({} as WordContextType);
export const useWordContext = () => useContext(WordContext);

const WordContextProvider = ({ children }: { children: JSX.Element }) => {
  const [chosenWordId, setChosenWordId] = useState<Word['_id'] | undefined>(
    undefined
  );

  return (
    <WordContext.Provider
      value={{ chosenWordId: chosenWordId, setChosenWordId }}
    >
      {children}
    </WordContext.Provider>
  );
};

export default WordContextProvider;
