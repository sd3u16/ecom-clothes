import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 90px;
  padding-right: 2rem;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
  padding: 0 2rem;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
  margin-right: 55px;
`;
