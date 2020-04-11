import styled from 'styled-components/native';
import {colors} from '~/styles/index';
export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Devider = styled.View`
  flex: 1;
  background-color: ${colors.lightBlue};
  height: 1px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 38px;
  font-weight: 800;
  color: ${colors.black};
  padding: 0px 20px;
`;

export const Spam = styled.Text`
  font-weight: 300;
  color: ${colors.blue};
`;

export const ContainerButtom = styled.View`
  margin: 30px 0px;
`;

export const AddList = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${colors.blue};
  padding: 10px;
  border-radius: 5px;
`;

export const ContainerFlatlist = styled.View`
  height: 275px;
  padding-left: 30px;
`;