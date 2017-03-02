import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

const Button = inject('AppStyle')(
  observer(
    styled.button`
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;
      background: ${({ AppStyle: { background } }) => background};
  `,
  ),
);

export default Button;
