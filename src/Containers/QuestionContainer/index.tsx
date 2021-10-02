/* eslint-disable no-use-before-define */
/* eslint-disable node/no-extraneous-import */
import React, {useContext, FC, Suspense} from 'react';
import './styles/styles.css';
import {Flex, Text} from '@chakra-ui/layout';

const QuestionType = React.lazy(async () => import('./QuestionType'));

import {StateContext} from '../../Context';
import arrowIcon from '../../assets/arrow.svg';
import {CircularProgress, CircularProgressLabel} from '@chakra-ui/progress';
import {Image} from '@chakra-ui/image';
import {Spinner} from '@chakra-ui/spinner';
import {isUndefined} from 'lodash';
type Props = {
  data: {
    preface: string;
    body: string;
    context: {
      above: string;
      center: string;
      below: {
        body: string;
        icon: string;
      };
    };
    elements: {
      question_type: string;
      question_override: {
        preface: string;
        body: string;
      };
      context: {
        help_text: string;
        left: {
          icon: {
            above: string;
            center: string;
            below: string;
          };
          text: {
            above: string;
            center: string;
            below: string;
          };
          subtext: {
            above: string;
            center: string;
            below: string;
          };
          value: string;
        };
        right: {
          icon: {
            above: string;
            center: string;
            below: string;
          };
          text: {
            above: string;
            center: string;
            below: string;
          };
          subtext: {
            above: string;
            center: string;
            below: string;
          };
          value: string;
        };
        slider?: {
          default: string;
          min: string;
          max: string;
          step: string;
          ticks: boolean;
        };
        input: {
          body: string;
          placeholder: string;
          values: string[];
        };
        radio: string[];
        multicard: string[][];
        dragdrop: string[][];
      };
    }[];

    icon?: string;
    icon1?: string;
    icon2?: string;
    dimensions?: string[];
  };
  progressData: {
    counter: number;
    total: number;
    heading: string;
  };
  handleNext: () => void;
  handlePrev: () => void;
};

const percentageConstant = 100;

const QuestionContainer: FC<Props> = ({
  data,
  handleNext,
  handlePrev,
  progressData,
}) => {
  const valueFromContext = useContext(StateContext);
  const disabled = isUndefined(
    valueFromContext?.answers[valueFromContext.section][
      valueFromContext.counter
    ]
  )
    ? true
    : false;
  console.log(
    valueFromContext?.answers[valueFromContext.section][
      valueFromContext.counter
    ]
  );
  return (
    <Flex className="MainContainer">
      <Flex alignItems="center" justifyContent="center" marginBottom="32px">
        <Flex alignItems="center" justifyContent="center" marginRight="10px">
          <CircularProgress
            value={Math.round(
              (progressData.counter / progressData.total) * percentageConstant
            )}
            color="#775ef0"
          >
            <CircularProgressLabel>
              <b>
                {Math.round(
                  (progressData.counter / progressData.total) *
                    percentageConstant
                )}
                %
              </b>
            </CircularProgressLabel>
          </CircularProgress>
        </Flex>
        <Flex direction="column">
          <Text className="PercentageHeading">{progressData.heading}</Text>
          <Text fontSize="sm" className="Percentage">
            Question {progressData.counter}/{progressData.total}
          </Text>
        </Flex>
      </Flex>
      <div
        style={{
          width: '100%',
          maxWidth: '1000px',
          borderBottom: '2px solid rgba(202, 201, 209, 0.44)',
        }}
      ></div>
      <Flex className="HeadingContainer">
        {data.preface !== '' && (
          <Text className="HeadingQuestionDescription">{data.preface}</Text>
        )}

        <Text className="HeadingQuestion">{data.body}</Text>
      </Flex>
      <Suspense fallback={<Spinner />}>
        <QuestionType
          questionDetails={data.elements}
          graphic={data.icon}
          dimension={data.dimensions || ['', '']}
          graphic1={data.icon1}
          graphic2={data.icon2}
        />
      </Suspense>
      <Flex alignItems="center" justifyContent="center" userSelect="none">
        <Flex className="PreviousButton" onClick={handlePrev}>
          <Image width="40%" src={arrowIcon} className="LeftArrow" />
        </Flex>
        <Flex
          className={disabled ? 'NextButtonDisabled' : 'NextButton'}
          onClick={(): void => {
            if (!disabled) {
              handleNext();
            }
          }}
        >
          <Image width="40%" src={arrowIcon} className="RightArrow" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default QuestionContainer;
