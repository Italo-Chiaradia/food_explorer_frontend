import styled from "styled-components";
import { NumericFormat } from "react-number-format";
const StyledNumericFormat = styled(NumericFormat)`
  padding-inline: 1.4rem;
  width: 100%;
  height: 4.8rem;
  border: .1rem solid transparent;
  border-radius: .8rem;
  display: flex;
  align-items: center;
  gap: .8rem;
  background-color: ${({theme}) => theme.COLORS.DARK.DARK800};
  cursor: pointer;
  &:focus-within {
    border: .1rem solid ${({theme}) => theme.COLORS.LIGHT.LIGHT100};
  }
  color: ${({theme}) => theme.COLORS.LIGHT.LIGHT300};

  &::placeholder {
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT500};
  }
`;

export function InputNumber({value, onChange, maxConsecutiveZeros=2}) {
  const validateValue = (inputObj) => {
    const { value } = inputObj;
    const regex = /^(0|[1-9]\d*|0{1}(\.\d{0,2})?)$/;
    return !regex.test(value);
  };
  return (
    <StyledNumericFormat
      value={value}
      onChange={onChange}
      thousandSeparator="."
      decimalSeparator=","
      prefix="R$ "
      decimalScale={2}
      fixedDecimalScale
      allowNegative={false}
      isAllowed={validateValue}
      placeholder="R$ 00,00"
    />
  )
}