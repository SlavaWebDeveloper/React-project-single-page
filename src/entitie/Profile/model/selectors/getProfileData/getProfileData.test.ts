import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entitie/Currency';
import { Country } from 'entitie/Country';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return error', () => {
        const data = {
            first: 'Вячеслав',
            lastname: '123',
            username: 'admin',
            age: 24,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Moscow',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
