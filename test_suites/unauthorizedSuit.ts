import {unAuthorizedApi} from '../Apis/unauthorizedApi';

export const unAuthorizedSuit = {
    unAuthorized: (apiDetails: any) =>{
        test('UNAUTHORIZED API', async()=>{
            const data = await unAuthorizedApi(apiDetails,"gameReward")
            expect(data).toBe("Unauthorized");
        });
    }
}
