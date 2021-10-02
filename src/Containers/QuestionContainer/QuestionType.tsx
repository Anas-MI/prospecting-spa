/* eslint-disable complexity */
import {isUndefined} from 'lodash';
import {FC} from 'react';
import DatePicker from '../../Components/DatePicker';
import DragAndDrop from '../../Components/DragAndDrop';
import RadioButton, {
  RadioButtonWithTwoOptions,
} from '../../Components/RadioButton';
import {
  SliderComponent,
  SliderComponentWithNotation,
  SliderComponentWithTransition,
} from '../../Components/Slider';

const FIRST_INDEX = 0;

type Props = {
  questionDetails: {
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
  graphic?: string;

  graphic1?: string;
  graphic2?: string;
  dimension: string[];
};

const graphicCheck: (graphic: string | undefined) => string = (
  graphic: string | undefined
) => {
  if (isUndefined(graphic)) {
    return '';
  }
  return graphic;
};

const QuestionType: FC<Props> = ({
  questionDetails,
  graphic,
  dimension,
  graphic2,
  graphic1,
}) => {
  if (questionDetails[FIRST_INDEX]?.question_type === 'small-multicard') {
    return (
      <RadioButton
        graphic={graphicCheck(graphic)}
        options={questionDetails[FIRST_INDEX]?.context.multicard}
        dimension={dimension}
      />
    );
  } else if (questionDetails[FIRST_INDEX]?.question_type === 'slider') {
    return (
      <SliderComponent
        graphic={graphicCheck(graphic)}
        slider={questionDetails[FIRST_INDEX]?.context.slider}
        dimension={dimension}
      />
    );
  } else if (
    questionDetails[FIRST_INDEX]?.question_type === 'slider-with-transition'
  ) {
    return (
      <SliderComponentWithTransition
        graphic1={graphicCheck(graphic1)}
        graphic2={graphicCheck(graphic2)}
        options={[
          questionDetails[FIRST_INDEX]?.context.left.text.below,
          questionDetails[FIRST_INDEX]?.context.right.text.below,
        ]}
        dimension={dimension}
        slider={questionDetails[FIRST_INDEX]?.context.slider}
      />
    );
  } else if (questionDetails[FIRST_INDEX]?.question_type === 'card') {
    return (
      <RadioButtonWithTwoOptions
        options={[
          questionDetails[FIRST_INDEX]?.context.left.text.center,
          questionDetails[FIRST_INDEX]?.context.right.text.center,
        ]}
        dimension={dimension}
        graphic={graphicCheck(graphic)}
      />
    );
  } else if (
    questionDetails[FIRST_INDEX]?.question_type === 'slider-with-notation'
  ) {
    return (
      <SliderComponentWithNotation
        graphic={graphicCheck(graphic)}
        options={[
          questionDetails[FIRST_INDEX]?.context.left.text.below,
          questionDetails[FIRST_INDEX]?.context.right.text.below,
        ]}
        dimension={dimension}
        slider={questionDetails[FIRST_INDEX]?.context.slider}
      />
    );
  } else if (questionDetails[FIRST_INDEX]?.question_type === 'dragdrop') {
    return (
      <DragAndDrop data={questionDetails[FIRST_INDEX]?.context.dragdrop} />
    );
  } else if (questionDetails[FIRST_INDEX]?.question_type === 'date-picker') {
    return <DatePicker />;
  }
  return <div>I am QuestionType</div>;
};

export default QuestionType;
