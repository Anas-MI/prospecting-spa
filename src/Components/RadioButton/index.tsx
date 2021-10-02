/* eslint-disable node/no-extraneous-import */
/* eslint-disable no-use-before-define */

import {Image} from '@chakra-ui/image';
import {Box, Flex} from '@chakra-ui/layout';
import {useContext, FC} from 'react';
import './styles/styles.css';
import {StateContext} from '../../Context';
type Props = {
  options: string[][];
  graphic: string;
  dimension: string[];
};

type TwoOptionsProps = {
  options: string[];
  graphic: string;
  dimension: string[];
};

const FIRST_INDEX = 0;
const SECOND_INDEX = 1;

const RadioButton: FC<Props> = ({options, graphic, dimension}) => {
  const valueFromContext = useContext(StateContext);
  return (
    <Box marginTop="32px">
      <Flex
        position="relative"
        alignItems="center"
        direction="column"
        justifyContent="space-between"
      >
        <Image
          src={graphic}
          style={{
            height: dimension[SECOND_INDEX],
            width: dimension[FIRST_INDEX],
          }}
        />
        <Flex className="RadioButtonsContainer">
          {options.map((option: string[], index: number) => {
            return (
              <Flex
                key={index}
                className={
                  valueFromContext?.answers[valueFromContext.section][
                    valueFromContext.counter
                  ] === option[FIRST_INDEX]
                    ? 'RadioButtonSelected'
                    : 'RadioButton'
                }
                onClick={(): void => {
                  if (valueFromContext !== null) {
                    const tempAnswers = valueFromContext.answers;
                    tempAnswers[valueFromContext.section][
                      valueFromContext.counter
                    ] = option[FIRST_INDEX];
                    valueFromContext.setAnswers([...tempAnswers]);
                  }
                }}
              >
                {option[FIRST_INDEX]}
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
};

export const RadioButtonWithTwoOptions: FC<TwoOptionsProps> = ({
  options,
  graphic,
  dimension,
}) => {
  const valueFromContext = useContext(StateContext);
  return (
    <Box marginTop="32px">
      <Flex
        position="relative"
        alignItems="center"
        direction="column"
        justifyContent="space-between"
      >
        <Image
          src={graphic}
          style={{
            height: dimension[SECOND_INDEX],
            width: dimension[FIRST_INDEX],
          }}
        />
        <Flex className="RadioButtonsContainer">
          {options.map((option: string, index: number) => {
            return (
              <Flex
                key={index}
                className={
                  valueFromContext?.answers[valueFromContext.section][
                    valueFromContext.counter
                  ] === option
                    ? 'RadioButtonSelected'
                    : 'RadioButton'
                }
                onClick={(): void => {
                  if (valueFromContext !== null) {
                    const tempAnswers = valueFromContext.answers;
                    tempAnswers[valueFromContext.section][
                      valueFromContext.counter
                    ] = option;
                    valueFromContext.setAnswers([...tempAnswers]);
                  }
                }}
              >
                {option}
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
};

export default RadioButton;
