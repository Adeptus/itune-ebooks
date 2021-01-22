import { Button, Stack, Tag } from '@chakra-ui/react';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decCount,
  incCount,
  incCountDelayed,
  selectCount,
} from './counterSlice';

// LEGACY
// export class Counter extends React.Component {
//   state = {
//     count: 0,
//   };
//   componentDidMount() {
//     console.log('did mount');
//   }
//   render() {
//     return (
//       <Stack direction="row">
//         <Tag>{this.state.count}</Tag>
//         <Button
//           colorScheme="red"
//           onClick={() =>
//             this.setState({
//               count: this.state.count - 1,
//             })
//           }
//         >
//           -1
//         </Button>
//         <Button
//           colorScheme="green"
//           onClick={() =>
//             this.setState({
//               count: this.state.count + 1,
//             })
//           }
//         >
//           +1
//         </Button>
//       </Stack>
//     );
//   }
// }

// HOOKS
// export function Counter() {
//   const [count, setCount] = React.useState(0);
//   return (
//     <Stack direction="row">
//       <Tag>{count}</Tag>
//       <Button colorScheme="red" onClick={() => setCount(count - 1)}>
//         -1
//       </Button>
//       <Button colorScheme="green" onClick={() => setCount(count + 1)}>
//         +1
//       </Button>
//     </Stack>
//   );
// }

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <Stack direction="row">
      <Tag>{count}</Tag>
      <Button colorScheme="red" onClick={() => dispatch(decCount(1))}>
        -1
      </Button>
      <Button colorScheme="green" onClick={() => dispatch(incCount(1))}>
        +1
      </Button>
      <Button colorScheme="blue" onClick={() => dispatch(incCountDelayed(1))}>
        +1 (after 1s)
      </Button>
    </Stack>
  );
}
