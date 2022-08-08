import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

/* Types for navigators. Used when creating navigators. */
export type RootStackParamList = {
  Home: undefined;
  WordView: undefined;
};

export type RootTabParamList = {
  Glossary: undefined;
  Misc: undefined;
  Bookmark: undefined;
};

export type MiscStackParamList = {
  Setting: undefined;
  About: undefined;
};

/* Screen props. Prop type for screen components. */
export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  BottomTabScreenProps<RootTabParamList, Screen>;

export type MiscStackScreenProps<Screen extends keyof MiscStackParamList> =
  NativeStackScreenProps<MiscStackParamList, Screen>;

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;

export interface LoadingStatus {
  loading: boolean;
  success: boolean;
  errored: boolean;
}
