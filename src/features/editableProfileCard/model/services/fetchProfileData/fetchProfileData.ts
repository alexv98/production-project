import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { Profile } from '@/entities/Profile';

export const fetchProfileData = createAsyncThunk<
  Profile,
  string | undefined,
  ThunkConfig<string>
  >(
    'profile/fetchProfileData',
    async (profileId, { extra, rejectWithValue }) => {
      try {
        const response = await extra.api.get<Profile>(`/profile/${profileId}`);
        if (!response.data) {
          throw new Error();
        }
        return response.data;
      } catch (e) {
        return rejectWithValue('error');
      }
    },
  );
