/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-magic-numbers */
/* eslint-disable no-use-before-define */
/* eslint-disable node/no-extraneous-import */
import {Input} from '@chakra-ui/input';
import {Flex, Text} from '@chakra-ui/layout';
import React, {useContext, useState} from 'react';
import {useDrag, useDrop} from 'react-dnd';
import {ChangeDataContext} from '../../Context';

interface LeftCardProps {
  data: {value: string; id: string; active: boolean; source?: string};
}

interface RightCardProps {
  data: {value: string; id: string; active: boolean; source?: string};
  numbering: number;
}

const ItemTypes = {
  CARD: 'card',
};

const numberAdjuster = (number: number) => {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
};

export const LeftCard: React.FC<LeftCardProps> = ({data}) => {
  const ContextData = useContext(ChangeDataContext);
  const [openTextBox, setOpenTextBox] = useState(false);
  const [textData, setTextData] = useState('');
  const [{isDragging}, drag] = useDrag({
    type: ItemTypes.CARD,
    item: data,
    collect: (monitor) => ({
      isDragging: Boolean(monitor.isDragging()),
    }),
  });
  return (
    <Flex
      ref={data.active && !openTextBox ? drag : null}
      opacity={isDragging ? '0.5' : '1'}
      className={data.active ? 'LeftElement' : 'LeftElementDisabled'}
      onClick={() => {
        if (data.active) {
          setOpenTextBox(true);
        }
      }}
    >
      {openTextBox ? (
        <Input
          autoFocus
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              ContextData.TextChange(data, textData);

              setOpenTextBox(false);
            }
          }}
          onChange={(e) => {
            setTextData(e.target.value);
          }}
          variant="unstyled"
          placeholder={data.value}
          value={textData}
          className="LeftElementText"
        />
      ) : (
        <Text
          className={
            data.active ? 'LeftElementText' : 'LeftElementTextDisabled'
          }
        >
          {data.value}
        </Text>
      )}
    </Flex>
  );
};

export const RightCard: React.FC<RightCardProps> = ({data, numbering}) => {
  const ContextData = useContext(ChangeDataContext);

  const [{isDragging}, drag] = useDrag({
    type: ItemTypes.CARD,
    item: data,
    collect: (monitor) => ({
      isDragging: Boolean(monitor.isDragging()),
    }),
  });

  const [{isOver}, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item) => {
      ContextData.DataChange(item, numbering);
    },
    collect: (monitor) => ({
      isOver: Boolean(monitor.isOver()),
    }),
  });
  return (
    <Flex
      ref={drop}
      alignItems="center"
      justifyContent="center"
      marginRight="20px"
    >
      <Text className="NumberText">{numberAdjuster(numbering + 1)}</Text>
      <Flex
        ref={data.active ? drag : null}
        color={isDragging ? 'black' : 'red'}
        bg={isOver ? '#5d23e9' : 'transparent'}
        className={data.active ? 'RightElement' : 'RightElementDisabled'}
      >
        {data.value}
      </Flex>
    </Flex>
  );
};
