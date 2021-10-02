/* eslint-disable radix */
/* eslint-disable node/no-extraneous-import */
/* eslint-disable no-use-before-define */
import {Image} from '@chakra-ui/image';
import {Box, Flex, Text} from '@chakra-ui/layout';
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/slider';
import {useContext, FC} from 'react';
import sliderImage from '../../assets/slider.svg';
import './styles/styles.css';
import annotationArrow from '../../assets/annotationArrow.svg';
import sliderNotation1 from '../../assets/sliderNotation1.svg';
import annotationArrowReverse from '../../assets/annotationArrowReverse.svg';
import {StateContext} from '../../Context';
import {isUndefined} from 'lodash';
type Props = {
  graphic: string;
  dimension: string[];
  slider?: {
    default: string;
    min: string;
    max: string;
    step: string;
    ticks: boolean;
  };
};
type TransitionProps = {
  graphic1: string;
  graphic2: string;
  dimension: string[];
  slider?: {
    default: string;
    min: string;
    max: string;
    step: string;
    ticks: boolean;
  };
  options: string[];
};
type NotationProps = {
  graphic: string;
  slider?: {
    default: string;
    min: string;
    max: string;
    step: string;
    ticks: boolean;
  };
  dimension: string[];
  options: string[];
};

const FIRST_INDEX = 0;
const SECOND_INDEX = 1;
const PERCENTAGE_CONSTANT = 100;
const PERCENTAGE_CONSTANT2 = 200;
const ENLARGING_CONSTANT = 10;

const RIGHT_BOX_RIGHT = 100;
const RIGHT_ARROW_RIGHT = 110;
const RIGHT_BOX_BOTTOM = 70;
const RIGHT_ARROW_BOTTOM = 63;

const LEFT_BOX_LEFT = 200;
const LEFT_ARROW_LEFT = 210;
const LEFT_BOX_BOTTOM = 170;
const LEFT_ARROW_BOTTOM = 165;

const MULTIPLICATION_CONSTANT_SMALL = 0.5;
const MULTIPLICATION_CONSTANT_EXTRA_SMALL = 0.5;
const MULTIPLICATION_CONSTANT_LARGE = 0.4;

// ValueFromContext?.answers[valueFromContext.counter]  || 50

const getStateValue: (
  state: string | string[],
  defaultValue: string
) => number = (state: string | string[], defaultValue: string) => {
  if (typeof state === 'string') {
    return parseInt(state);
  }
  return parseInt(defaultValue);
};

const checkUndefined: (value: string | undefined) => string = (
  value: string | undefined
) => {
  if (isUndefined(value)) {
    return '';
  }
  return value;
};

export const SliderComponent: FC<Props> = ({graphic, dimension, slider}) => {
  const valueFromContext = useContext(StateContext);
  let val = 0;
  if (valueFromContext !== null) {
    val = getStateValue(
      valueFromContext.answers[valueFromContext.section][
        valueFromContext.counter
      ],
      checkUndefined(slider?.default)
    );
  }
  return (
    <Box marginTop="200px" marginBottom="30px">
      <Flex
        position="relative"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <div>
          <div
            className="DarkAnnotation"
            style={{
              bottom: `${LEFT_BOX_BOTTOM - val}px`,
              left: `${LEFT_BOX_LEFT - val}px`,
            }}
          >
            You
          </div>

          <Image
            src={annotationArrow}
            className="AnnotationArrow"
            style={{
              bottom: `${LEFT_ARROW_BOTTOM - val}px`,
              left: `${LEFT_ARROW_LEFT - val}px`,
            }}
          />
        </div>

        <div>
          <div
            className="DarkAnnotation-side"
            style={{
              bottom: `${RIGHT_BOX_BOTTOM + val}px`,
              right: `${RIGHT_BOX_RIGHT + val}px`,
            }}
          >
            Others
          </div>

          <Image
            src={annotationArrowReverse}
            className="AnnotationArrow-side"
            style={{
              bottom: `${RIGHT_ARROW_BOTTOM + val}px`,
              right: `${RIGHT_ARROW_RIGHT + val}px`,
            }}
          />
        </div>
        <Image
          userSelect="none"
          zIndex="-10"
          bottom="0px"
          position="absolute"
          src={graphic}
          minWidth="30px"
          minHeight="30px"
          height={[
            `calc(${dimension[SECOND_INDEX]}*${
              ((PERCENTAGE_CONSTANT - val) *
                MULTIPLICATION_CONSTANT_EXTRA_SMALL) /
              PERCENTAGE_CONSTANT
            } )`,
            `calc(${dimension[SECOND_INDEX]}*${
              ((PERCENTAGE_CONSTANT - val) * MULTIPLICATION_CONSTANT_SMALL) /
              PERCENTAGE_CONSTANT
            } )`,
            `calc(${dimension[SECOND_INDEX]}*${
              ((PERCENTAGE_CONSTANT2 - val) * MULTIPLICATION_CONSTANT_LARGE) /
              PERCENTAGE_CONSTANT
            } )`,
          ]}
          width={[
            `calc(${dimension[FIRST_INDEX]}*${
              ((PERCENTAGE_CONSTANT - val) *
                MULTIPLICATION_CONSTANT_EXTRA_SMALL) /
              PERCENTAGE_CONSTANT
            } )`,
            `calc(${dimension[FIRST_INDEX]}*${
              ((PERCENTAGE_CONSTANT - val) * MULTIPLICATION_CONSTANT_SMALL) /
              PERCENTAGE_CONSTANT
            } )`,
            `calc(${dimension[FIRST_INDEX]}*${
              ((PERCENTAGE_CONSTANT2 - val) * MULTIPLICATION_CONSTANT_LARGE) /
              PERCENTAGE_CONSTANT
            } )`,
          ]}
        />
        <Image
          zIndex="-10"
          userSelect="none"
          bottom="0px"
          position="absolute"
          right="0"
          src={graphic}
          minWidth="30px"
          minHeight="30px"
          height={[
            `calc(${dimension[SECOND_INDEX]}*${
              (val * MULTIPLICATION_CONSTANT_EXTRA_SMALL) / PERCENTAGE_CONSTANT
            } )`,
            `calc(${dimension[SECOND_INDEX]}*${
              (val * MULTIPLICATION_CONSTANT_SMALL) / PERCENTAGE_CONSTANT
            } )`,
            `calc(${dimension[SECOND_INDEX]}*${
              ((val + PERCENTAGE_CONSTANT) * MULTIPLICATION_CONSTANT_LARGE) /
              PERCENTAGE_CONSTANT
            } )`,
          ]}
          width={[
            `calc(${dimension[FIRST_INDEX]}*${
              (val * MULTIPLICATION_CONSTANT_EXTRA_SMALL) / PERCENTAGE_CONSTANT
            } )`,
            `calc(${dimension[FIRST_INDEX]}*${
              (val * MULTIPLICATION_CONSTANT_SMALL) / PERCENTAGE_CONSTANT
            } )`,
            `calc(${dimension[FIRST_INDEX]}*${
              ((val + PERCENTAGE_CONSTANT) * MULTIPLICATION_CONSTANT_LARGE) /
              PERCENTAGE_CONSTANT
            } )`,
          ]}
        />
      </Flex>

      <Flex width={['300px', '400px', '600px']} alignItems="flex-end">
        <Slider
          aria-label="slider-ex-4"
          value={val}
          onChange={(newVal): void => {
            if (valueFromContext !== null) {
              const tempAnswers = valueFromContext.answers;
              tempAnswers[valueFromContext.section][valueFromContext.counter] =
                newVal.toString();
              valueFromContext.setAnswers([...tempAnswers]);
            }
          }}
        >
          <SliderTrack
            height="13px"
            borderRadius="100px"
            bgGradient="linear(to-l, #FA94FC,#86BDFE,#FA94FC)"
          >
            <SliderFilledTrack bg="transparent" />
          </SliderTrack>
          <SliderThumb
            background="transparent"
            boxSize={8}
            backgroundImage={sliderImage}
            backgroundSize="50px"
            backgroundRepeat="no-repeat"
            backgroundPosition="center center"
          >
            <Box color="tomato" />
          </SliderThumb>
        </Slider>
      </Flex>
    </Box>
  );
};

export const SliderComponentWithTransition: FC<TransitionProps> = ({
  graphic1,
  graphic2,
  dimension,
  slider,
  options,
}) => {
  const valueFromContext = useContext(StateContext);
  let val = parseInt(checkUndefined(slider?.default));
  if (valueFromContext !== null) {
    val = getStateValue(
      valueFromContext.answers[valueFromContext.section][
        valueFromContext.counter
      ],

      checkUndefined(slider?.default)
    );
  }
  return (
    <Box marginTop="200px" marginBottom="30px">
      <Flex
        position="relative"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Image
          bottom="10px"
          right="30%"
          position="absolute"
          src={graphic1}
          opacity={(PERCENTAGE_CONSTANT - val) / PERCENTAGE_CONSTANT}
          height={dimension[SECOND_INDEX]}
          width={dimension[FIRST_INDEX]}
        />
        <Image
          bottom="10px"
          right="30%"
          position="absolute"
          opacity={val / PERCENTAGE_CONSTANT}
          src={graphic2}
          height={dimension[SECOND_INDEX]}
          width={dimension[FIRST_INDEX]}
        />
      </Flex>

      <Flex width="600px" alignItems="flex-end">
        <Slider
          aria-label="slider-ex-4"
          value={val}
          onChange={(newVal): void => {
            if (valueFromContext !== null) {
              const tempAnswers = valueFromContext.answers;
              tempAnswers[valueFromContext.section][valueFromContext.counter] =
                newVal.toString();
              valueFromContext.setAnswers([...tempAnswers]);
            }
          }}
        >
          <Image
            top="3px"
            width="95%"
            left="2.5%"
            src={sliderNotation1}
            position="absolute"
          />
          <SliderTrack height="13px" borderRadius="100px" bg="#CEC3FF">
            <SliderFilledTrack bg="transparent" />
          </SliderTrack>
          <SliderThumb
            background="transparent"
            boxSize={8}
            backgroundImage={sliderImage}
            backgroundSize="50px"
            backgroundRepeat="no-repeat"
            backgroundPosition="center center"
          >
            <Box color="tomato" />
          </SliderThumb>
        </Slider>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between">
        <Text className="NotationText">{options[FIRST_INDEX]}</Text>
        <Text className="NotationText">{options[SECOND_INDEX]}</Text>
      </Flex>
    </Box>
  );
};

export const SliderComponentWithNotation: FC<NotationProps> = ({
  graphic,
  dimension,
  slider,
  options,
}) => {
  const valueFromContext = useContext(StateContext);
  let val = 0;
  if (valueFromContext !== null) {
    val = getStateValue(
      valueFromContext.answers[valueFromContext.section][
        valueFromContext.counter
      ],

      checkUndefined(slider?.default)
    );
  }
  return (
    <Box marginTop="10px" marginBottom="30px">
      <Flex
        position="relative"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Image
          margin="0 auto 27px auto"
          src={graphic}
          height={dimension[SECOND_INDEX]}
          width={dimension[FIRST_INDEX]}
        />
      </Flex>

      <Flex width="600px" alignItems="flex-end">
        <Slider
          aria-label="slider-ex-4"
          step={parseInt(checkUndefined(slider?.step)) * ENLARGING_CONSTANT}
          min={0}
          max={parseInt(checkUndefined(slider?.max)) * ENLARGING_CONSTANT}
          value={val}
          onChange={(newVal): void => {
            if (valueFromContext !== null) {
              const tempAnswers = valueFromContext.answers;
              tempAnswers[valueFromContext.section][valueFromContext.counter] =
                newVal.toString();
              valueFromContext.setAnswers([...tempAnswers]);
            }
          }}
        >
          <Image
            top="3px"
            width="95%"
            left="2.5%"
            src={sliderNotation1}
            position="absolute"
          />
          <SliderTrack height="13px" borderRadius="100px" bg="#CEC3FF">
            <SliderFilledTrack bg="transparent" />
          </SliderTrack>
          <SliderThumb
            background="transparent"
            boxSize={8}
            backgroundImage={sliderImage}
            backgroundSize="50px"
            backgroundRepeat="no-repeat"
            backgroundPosition="center center"
          >
            <Box color="tomato" />
          </SliderThumb>
        </Slider>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between">
        <Text className="NotationText">{options[FIRST_INDEX]}</Text>
        <Text className="NotationText">{options[SECOND_INDEX]}</Text>
      </Flex>
    </Box>
  );
};
