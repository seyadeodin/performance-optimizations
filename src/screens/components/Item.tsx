import React, { memo } from 'react';

import { 
  Text
} from 'react-native';

interface Props {
  data: {
    name: string;
    likes: number;
    id: number;
  }
}

function ItemComponent({ data }: Props){
  return(
    <Text>
      {data.name} - Likes: {data.likes}

    </Text>
  )
}

export const Item = memo(ItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
})