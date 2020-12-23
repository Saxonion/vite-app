
import type { GlobConfig } from '/@/types/config';

const {
  VITE_APP_TITLE,
  VITE_APP_URL,
  VITE_UPLOAD_URL,
} = import.meta.env;

export const globalData: Readonly<GlobConfig> = {
    title: VITE_APP_TITLE,
    apiUrl: VITE_APP_URL,
    uploadUrl: VITE_UPLOAD_URL,
};