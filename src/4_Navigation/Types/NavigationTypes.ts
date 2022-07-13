
import type { StackScreenProps } from '@react-navigation/stack';

import { EntriesRouteParams } from '../../7_Modules/Entries';
import { HomeRouteParams } from '../../7_Modules//Home';

export type RootStackParamList = HomeRouteParams & EntriesRouteParams;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}
