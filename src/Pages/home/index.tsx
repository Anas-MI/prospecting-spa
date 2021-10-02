/* eslint-disable no-use-before-define */
import React, {useState, FC, Suspense} from 'react';
import {Spinner} from '@chakra-ui/react';

// Import {useSelector, useDispatch} from 'react-redux';
// Import {FetchData} from '../../Redux/actions/data';
// Import {RootState} from '../../Redux/reducers';

import {StateContext} from '../../Context';
import {QuestionData} from '../../Data';
import './styles/styles.css';

const INCREMENT_DECREMENT = 1;
const STARTING = 0;

const QuestionContainer = React.lazy(
  async () => import('../../Containers/QuestionContainer')
);

const Home: FC = () => {
  // Const fetchedData = useSelector((state: RootState) => state.fetchData);
  // Const dispatch = useDispatch();
  const [section, setSection] = useState(STARTING);
  const [counter, setCounter] = useState(STARTING);
  const [answers, setAnswers] = useState<(string | string[])[][]>(
    QuestionData.questions.map(() => {
      return [''];
    })
  );
  // UseEffect(() => {
  //   Dispatch(FetchData());
  // }, []);
  const decreaseCounter: () => void = () => {
    if (counter === STARTING) {
      if (section > STARTING) {
        setCounter(
          QuestionData.questions[section - INCREMENT_DECREMENT].length -
            INCREMENT_DECREMENT
        );
        setSection(section - INCREMENT_DECREMENT);
      }
    } else {
      setCounter(counter - INCREMENT_DECREMENT);
    }
  };

  const increaseCounter: () => void = () => {
    if (
      counter <
      QuestionData.questions[section].length - INCREMENT_DECREMENT
    ) {
      setCounter(counter + INCREMENT_DECREMENT);
    } else {
      setCounter(STARTING);
      setSection(section + INCREMENT_DECREMENT);
    }
  };
  return (
    <StateContext.Provider value={{answers, setAnswers, counter, section}}>
      <Suspense fallback={<Spinner />}>
        <QuestionContainer
          progressData={{
            counter: counter,
            total: QuestionData.questions[section].length,
            heading: QuestionData.sections[section],
          }}
          data={QuestionData.questions[section][counter]}
          handleNext={increaseCounter}
          handlePrev={decreaseCounter}
        />
      </Suspense>
    </StateContext.Provider>
  );
};

export default Home;
