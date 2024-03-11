import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export interface ScreenNavigationProps {
  navigation: StackNavigationProp<ParamListBase, string, undefined>;
  route: any;
}
