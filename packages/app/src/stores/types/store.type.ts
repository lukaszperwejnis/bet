import { MessageStoreType } from '@stores/types/message.types';
import { AuthStoreType } from '@stores/types/auth.type';
import { PasswordStoreType } from '@stores/types/password.types';

export type StoreType = {
  messages: MessageStoreType;
  auth: AuthStoreType;
  password: PasswordStoreType;
};
