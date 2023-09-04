import { ICredential } from '@esri/arcgis-rest-request/dist/esm/ArcGISIdentityManager';

export const AGOL_HOST = 'https://www.arcgis.com';

export type DefaultOptions = {
    ArcGISOnlineHost?: string;
    groupId?: string;
    myFavGroupId?: string;
    credential?: ICredential;
    token?: string;
};

export let defaultOptions: DefaultOptions = {
    ArcGISOnlineHost: AGOL_HOST,
    groupId: '',
    myFavGroupId: '',
    credential: null,
    token: '',
};

export const setDefaultOptions = (options: DefaultOptions) => {
    defaultOptions = {
        ...defaultOptions,
        ...options,
    };
};
