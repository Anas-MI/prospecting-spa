/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable node/no-extraneous-import */
/* eslint-disable no-use-before-define */
import {Flex} from '@chakra-ui/layout';
import React, {useState} from 'react';
// Import {useDrop} from 'react-dnd';
import {LeftCard, RightCard} from './cards';
import './styles/styles.css';
import {ChangeDataContext} from '../../Context';
import {isUndefined} from 'lodash';
type Props = {
  data?: string[][];
};

const FIRST_INDEX = 0;

const LeftDataRearrange: (data: string[][] | undefined) => {
  value: string;
  id: string;
  active: boolean;
  source: string;
}[] = (data: string[][] | undefined) => {
  if (isUndefined(data)) {
    return [{value: '0', id: '-1', active: false, source: 'none'}];
  }
  const returnData = data.map((singleData: string[], index: number) => {
    return {
      value: singleData[FIRST_INDEX],
      id: `column-0-${index}`,
      active: true,
      source: 'left-box',
    };
  });
  return returnData;
};

const RightDataRearrange: (data: string[][] | undefined) => {
  value: string;
  id: string;
  active: boolean;
  source: string;
}[] = (data: string[][] | undefined) => {
  if (isUndefined(data)) {
    return [{value: '0', id: '-1', active: false, source: 'none'}];
  }
  const returnData = data.map(() => {
    return {value: '', id: '-1', active: false, source: 'right-box'};
  });
  return returnData;
};

// Const ItemTypes = {
//   CARD: 'card',
// };

const DragAndDrop: React.FC<Props> = ({data}) => {
  const [leftData, setLeftData] = useState(LeftDataRearrange(data));
  const [rightData, setRightData] = useState(RightDataRearrange(data));
  const DataChange: (
    item: {
      id: string;
      value: string;
      active: boolean;
      source: string;
    },
    index: number
  ) => void = (
    item: {id: string; value: string; active: boolean; source: string},
    index: number
  ) => {
    const source = item.source;
    if (source === 'left-box') {
      if (rightData[index].id === '-1') {
        const newRightData = rightData;
        newRightData[index] = {...item, source: 'right-box'};

        const newLeftData = leftData;
        const Index = newLeftData.findIndex(
          (element: {
            id: string;
            value: string;
            active: boolean;
            source?: string;
          }) => element.id === item.id
        );
        newLeftData[Index] = {...item, active: false};

        setLeftData([...newLeftData]);
        setRightData([...newRightData]);
      }
    } else {
      const newRightData = rightData;
      const Index = newRightData.findIndex(
        (element: {
          id: string;
          value: string;
          active: boolean;
          source?: string;
        }) => element.id === item.id
      );
      if (newRightData[index].id === '-1') {
        newRightData[Index] = {
          value: '',
          id: '-1',
          active: false,
          source: 'right-box',
        };
      } else {
        newRightData[Index] = newRightData[index];
      }
      newRightData[index] = item;

      setRightData([...newRightData]);
    }
  };
  const TextChange: (
    item: {
      id: string;
      value: string;
      active: boolean;
      source: string;
    },
    value: string
  ) => void = (
    item: {id: string; value: string; active: boolean; source: string},
    value: string
  ) => {
    const newLeftData = leftData;
    const Index = newLeftData.findIndex(
      (element: {id: string; value: string; active: boolean; source: string}) =>
        element.id === item.id
    );
    newLeftData[Index] = {...item, value: value};

    setLeftData([...newLeftData]);
  };

  return (
    <ChangeDataContext.Provider value={{DataChange, TextChange}}>
      <Flex
        alignItems="center"
        justifyContent="center"
        width="100%"
        marginBottom="24px"
      >
        <Flex>
          <Flex className="LeftContainer">
            {leftData.map(
              (singleLeft: {active: boolean; value: string; id: string}) => {
                return <LeftCard data={singleLeft} key={singleLeft.id} />;
              }
            )}
          </Flex>
        </Flex>
        <Flex>
          <Flex className="RightContainer">
            {rightData.map(
              (
                singleRight: {active: boolean; value: string; id: string},
                index: number
              ) => {
                return (
                  <RightCard data={singleRight} numbering={index} key={index} />
                );
              }
            )}
          </Flex>
        </Flex>
      </Flex>
    </ChangeDataContext.Provider>
  );
};

export default DragAndDrop;
