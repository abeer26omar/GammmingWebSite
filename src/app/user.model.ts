export class User{
    constructor(
        public name: string,
        public email: string, 
        public id: string, 
        private _token: string, 
        private _tokenExpirationDate?: Date){}

        get token(){
            if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
                return null
            }
            return this._token;
        }
}
export interface usersArray{
    id?: string,
    name: string,
    email: string,
    password: string,
    photo?: string,
    completedLevels?: number,
    aboutUser?: string
}